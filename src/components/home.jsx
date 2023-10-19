import Auth from './auth'
import Welcome from './welcome'

const Home = () => {
  
  return (
    <>
      {localStorage.getItem('username') ? <Welcome/> : <Auth/>}
    </>
  )
}

export default Home;