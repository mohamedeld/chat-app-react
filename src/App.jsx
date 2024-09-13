
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Chat from './components/Chat'
import ProtectedRoute from './components/ProtectedRoute'
import { io } from 'socket.io-client'

function App() {
  const socket = io('/');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={
          <ProtectedRoute>
            <Chat socket={socket}/>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
