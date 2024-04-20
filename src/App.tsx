import { useRef, useState } from 'react'
import './App.css'
import { letschat } from './chatgpt';

function App() {
  // const [count, setCount] = useState(0)
  const [messages, setMessages] = useState<any[]>([]);
  const [key, setKey] = useState("");
  const [current, setCurrent] = useState("");
  const [gpt4, setGPT4] = useState(false);

  function chat(message: string) {
    const msgs = [...messages];
    msgs.push({
      role: 'user',
      content: message
    })
    setCurrent('')
    letschat(key, msgs).then(msgs => setMessages(msgs));
  }



  return (
    <>
      <head>
        <meta httpEquiv="Content-Security-" content="default-src 'self'; script-src 'self' https://chat.openai.com https://cdn.openai.com; style-src 'self' https://chat.openai.com https://cdn.openai.com; img-src 'self' https://chat.openai.com https://cdn.openai.com; connect-src 'self' https://chat.openai.com https://cdn.openai.com; font-src 'self' https://chat.openai.com https://cdn.openai.com; frame-src 'self' https://chat.openai.com" />

      </head>
      <div className="topcontainer">

        <h1>Duck!</h1>
        <img width="180" src="src\assets\duck.png" />
      </div>
      <div className="bodycontainer">
        <div>
          {messages.map((m) => (<div style={{ display: 'block' }}>
            {m.role}: {m.content}
          </div>))}
        </div>
        <button onClick={useGPT4}><img width="30" src="src\assets\chatgpt logo.webp" /></button>
        
        {gpt4 && <><div className="inputcontainer">
          <p>API Key Here {"-->"}</p><input value={key} onChange={(e) => setKey(e.target.value)}></input>
        </div>
        <input value={current} onChange={(e) => setCurrent(e.target.value)}></input>
        <button onClick={() => chat(current)}>Chat {":)"}</button> </>}
      </div>
    </>
  
  )


  function useGPT4(){
    if (!gpt4) {setGPT4(true)}
      else {setGPT4(false)}
  }
}


export default App
