import './App.css'
import Routing from "./routing"
import DesktopHeader from './Components/DesktopHeader/DesktopHeader'
import MobileHeader from './Components/MobileHeader/MobileHeader'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <DesktopHeader/>
    <MobileHeader/>
    <main id='main-content'>
      <Routing/>
    </main>
    <Footer/>
    </>
  )
}

export default App
