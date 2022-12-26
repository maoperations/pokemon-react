import { useEffect } from 'react'
import { Fragment } from 'react'
import Routers from './routers'

const App = () => {
  useEffect(() => {
    if (location.pathname === '/') {
      location.replace('/gen-i')
    }
  }, [])

  return (
    <Fragment>
      <Routers />
    </Fragment>
  )
}

export default App
