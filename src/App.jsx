
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Chat from './components/Chat'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
