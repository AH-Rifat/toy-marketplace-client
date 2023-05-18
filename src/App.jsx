import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './componants/Footer'
import HeaderNav from './componants/HeaderNav'

function App() {

  return (
    <>

      <HeaderNav />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
