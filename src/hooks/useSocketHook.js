import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';

const useSocketHook = (queryConn) => {
  const [socket,setSocket] = useState(null);
  console.log(queryConn)
  useEffect(()=>{
    setSocket(io('/',{query:{queryConn}}))
  },[])
  return socket;
}

export default useSocketHook