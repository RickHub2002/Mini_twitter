import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Cadastro from "./assets/pages/Cadastro"
import Login from './assets/pages/Login'
import LinhaDoTempo from './assets/pages/LinhaDoTempo'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Cadastro />} />
        <Route path="/timeline" element={<LinhaDoTempo />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
