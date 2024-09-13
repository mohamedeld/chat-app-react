import { useEffect, useState } from "react";

const Chat = ({socket}) => {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [messages, setMessages] = useState([]);
  const sendMessage = () => {
    const newMessage= {
      id: socket?.id,
      text: message,
      sender,
      timestamp: new Date().getTime(),
    }
    if (message !== "") {
      setMessages((prev) => [
        ...prev,
        newMessage,
      ]);
      socket.emit('message',newMessage)
      setMessage("");
    }
  };
  useEffect(() => {
    setSender(localStorage.getItem("username"));
  }, []);
  return (
    <div className="p-4">
      <div className="grid grid-cols-1">
        <div className="mt-10 overflow-y-auto max-h-[70vh]">
          {messages?.length > 0 &&
            messages?.map((item) => {
              return (
                <div
                  className="flex justify-start mb-4 items-center"
                  key={item?.id}
                >
                  {item?.sender}
                  <div className="ml-2 py-3 bg-gray-400 rounded-br-3xl rounded-tr-3xl px-3 text-white flex items-center gap-4">
                    {item?.text}
                    <div className="self-end text-sm mt-2">{new Date(item?.timestamp).toLocaleTimeString()}</div>
                  </div>
                 
                </div>
              );
            })}
        </div>
        <div className="mt-10 grid grid-cols-2 p-3 absolute bottom-0 left-0 right-0">
          <textarea
            name=""
            id="new-message"
            className="border-2 border-black resize-none rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            onClick={sendMessage}
            className="oultine-none border-none bg-purple-400 text-white py-2 px-8 rounded-lg max-w-28 justify-self-end"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
