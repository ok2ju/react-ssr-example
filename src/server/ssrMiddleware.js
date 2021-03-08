import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Switch } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { configureStore } from '../redux/store'
import routes from '../routes'

export default (req, res) => {
  const store = configureStore()
  // Match current url with available routes
  const branch = matchRoutes(routes, req.url) // req.originalUrl

  const promises = branch.map(({ route, match }) => {
    if (route.loadData) {
      return route.loadData(match)(store.dispatch)
    }

    return Promise.resolve(null)
  })

  // Waiting while all requests are finished and only then render a page with data.
  Promise.all(promises)
    .then(() => renderToString(
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </StaticRouter>
      </Provider>
    ))
    .then((html) => {
      res.status(200).render('index', {
        root: html,
        state: JSON.stringify(store.getState())
      })
    })
}
