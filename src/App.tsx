import { useState } from 'react'
import './App.css'
import { letschat } from './components/chatgpt';

function App() {
  // const [count, setCount] = useState(0)
  const [messages, setMessages] = useState<any[]>([]);
  const [key, setKey] = useState("");
  const [current, setCurrent] = useState("");
  const [gpt4, setGPT4] = useState(false);
  const [button, useButton] = useState(false);
  const [speedtest, setSpeedtest] = useState(false);
  const [slots, setSlots] = useState(false);

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
      <div className="namecontainer">
        <h2>Made By: AlbedoLinguine</h2>
      </div>

      <div className="bodycontainer">
        <div>
          {messages.map((m) => (<div style={{ display: 'block' }}>
            {m.role}: {m.content}
          </div>))}
        </div>
        <div className="buttoncontainer">
        {button === false && <><button onClick={useGPT4}><img width="30" src="src\assets\chatgpt logo.webp" /></button>
        <button onClick={useSpeedtest}><img width="30" src="src\assets\speedguage.png"></img></button>
        <button onClick={useSlots}><img width="30" src="src\assets\gamble.png"></img></button></>  }
        {button === true && <><button onClick={setButtons} className="backbutton" ><img width="30" src="src\assets\back.svg" className="spin"></img></button></>}
        
        </div>

        {speedtest && <>
        <div className="inputcontainer">
          <div className="columncontainer">
          <h3 className="speedtestTitle">The Offical Duck Branded Speedtest</h3>
          </div>
        </div>
        </>}

        {gpt4 && <><div className="inputcontainer">
          <p>API Key Here {"-->"}</p><input value={key} onChange={(e) => setKey(e.target.value)}></input>
        </div>
        <input value={current} onChange={(e) => setCurrent(e.target.value)}></input>
        <button onClick={() => chat(current)}>Chat {":)"}</button> </>}

        {slots && <> <div className="inputcontainer">
          <h4>"Can't win without trying"</h4>
          
          </div> 
          </>}

      </div>
    </>
  
  )


  function useGPT4(){
    if (gpt4) {setGPT4(false)}
      else {setGPT4(true); useButton(true)}
    }
  
    function useSpeedtest(){
      if (speedtest) {setSpeedtest(false)}
      else {setSpeedtest(true); useButton(true)}
    }
    function useSlots(){
      if (speedtest) {setSlots(false)}
      else {setSlots(true); useButton(true)}
    }

  function setButtons(){
    if(button){useButton(false); // add new buttons here to make them disappear
       setSpeedtest(false);
       setGPT4(false);
       setSlots(false);
      }
      else{useButton(true)}
    }
  }
  
  



export default App
