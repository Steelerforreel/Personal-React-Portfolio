import NavBar from './components/NavBar'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <>
    <header>
      <h1>Nick Reel</h1>
      <NavBar />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
