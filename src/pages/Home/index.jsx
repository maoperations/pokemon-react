import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Home = () => {
  const router = useHistory()

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Home
