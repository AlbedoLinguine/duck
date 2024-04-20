import { useRef, useState } from 'react'
import './App.css'
import { letschat } from './chatgpt';

function App() {
  // const [count, setCount] = useState(0)
  const [messages, setMessages] = useState<any[]>([]);
  const [key, setKey] = useState("");
  const [current, setCurrent] = useState("");

  function chat(message:string) {
    const msgs = [...messages];
    msgs.push({
      role:'user',
      content: message
    })
    setCurrent('')
    letschat(key, msgs).then(msgs => setMessages(msgs));
  }



  return (
    <>
      <div className="topcontainer">
        <h1>Duck!</h1>
        <img width="180" src="src\assets\duck.png"/>
      </div>
      <div className="bodycontainer">
        <div>
          {messages.map((m) => (<div style={{display: 'block'}}>
            {m.role}: {m.content}
          </div>))}
        </div>
        <input value={key} onChange={(e) => setKey(e.target.value)}></input>
        <input value={current} onChange={(e) => setCurrent(e.target.value)}></input>
        <button onClick={() => chat(current)}>Chat {":)"}</button>
      </div>
    </>
  )
}

export default App
