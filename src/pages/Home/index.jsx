import { useHistory } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Card from '../../components/Card'

const Home = () => {
  const router = useHistory()

  return (
    <div>
      <Navbar />
      <Card />
    </div>
  )
}

export default Home
