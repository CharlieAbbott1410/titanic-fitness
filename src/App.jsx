import './App.css'
import Routing from "./routing"
import DesktopHeader from './Components/DesktopHeader/DesktopHeader'

function App() {
  return (
    <>
    <DesktopHeader/>
    <main id='main-content'>
      <Routing/>
    </main>
    </>
  )
}

export default App
