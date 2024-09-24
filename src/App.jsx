import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Invitation from './views/Invitation'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  

  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/invitation/:token" element={<Invitation />} />
          </Route>
        </Routes>
    </HashRouter>
  )
}

export default App
