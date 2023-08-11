import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Nav } from './Components/Nav/Nav'


function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/store/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
