import {  useState } from "react"
import {  useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [username,setUserName] = useState('')
  const handleLogin = ()=>{
    if(username !== ''){
      localStorage.setItem('username',username);
      navigate("/")
    }
  }
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[50%] bg-gray-100 p-8">
        <label htmlFor="name" className="block mb-2">Login</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          id="name"
          className="w-full py-2 px-4 rounded"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="mt-6 border-none outline-none py-2 px-8 bg-green-500 text-white rounded cursor-pointer"
          onClick={handleLogin} // Trigger handleLogin on button click
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login