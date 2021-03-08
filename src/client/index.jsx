import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { configureStore } from '../redux/store'
import routes from '../routes'

const state = window.__STATE__
delete window.__STATE__

const store = configureStore(state)

/*
  The process of utilizing the HTML rendered on the server for a component is called hydration.
  The ReactDOM.render() function does not perform hydration but replaces the entire HTML tree
  by rendering the component from the scratch.
*/
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
