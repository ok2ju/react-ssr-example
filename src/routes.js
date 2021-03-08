import Layout from './client/components/Layout'
import HomePage from './client/pages/Home'
import NotFoundPage from './client/pages/NotFound'
import { fetchPosts } from './redux/actions'

export default [{
  component: Layout,
  routes: [{
    path: '/',
    exact: true, // !
    component: HomePage,
    loadData: fetchPosts // thunk action
  }, {
    path: '*',
    component: NotFoundPage
  }]
}]
