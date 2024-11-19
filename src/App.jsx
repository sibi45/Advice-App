import { useState } from 'react'

import './App.css'

function App() {
  const [advice, setAdvice] = useState("please click button to get Advice");
  const [count, setCount] = useState(0);
  
  
  async function getAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    const data= await res.json();
    setAdvice(data.slip.advice);
    setCount((e) => e+1);
  }


  return (
    <>
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <p>
          you have read <b>{count}</b> piece of advice</p>
      </div>
    </>
  )
}

export default App
