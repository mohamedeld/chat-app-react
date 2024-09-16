import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSocketHook from "../hooks/useSocketHook";

const Login = () => {
  const [email, setEmail] = useState("");
  const socket = useSocketHook();
  const handleLogin = () => {
    if (email !== "") {
      socket.emit("login", { email });
      localStorage.setItem("eamil", email);
    }
  };
  useEffect(() => {
    socket?.on("otpSent", () => {
      const otp = prompt("please enter otp that sent");
      socket.emit("otpVerification", { otp, email });
    });
    socket.on('otpSuccess',(data)=>{
      localStorage.setItem("token",data?.token)
    })
  }, [socket]);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[50%] bg-gray-100 p-8">
        <label htmlFor="name" className="block mb-2">
          Login
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          name="name"
          id="name"
          required
          className="w-full py-2 px-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="mt-6 border-none outline-none py-2 px-8 bg-green-500 text-white rounded cursor-pointer"
          onClick={handleLogin} // Trigger handleLogin on button click
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
