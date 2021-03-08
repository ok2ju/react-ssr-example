import React from 'react'
import { renderRoutes } from 'react-router-config'

const Layout = ({ route }) => (
  <main>
    {/* Child routes won't render without this. For detailed info refer to:
      https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config#renderroutesroutes-extraprops---switchprops-- */}
    {renderRoutes(route.routes)}
  </main>
)

export default Layout
