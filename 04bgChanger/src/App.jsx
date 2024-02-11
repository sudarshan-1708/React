
import { useState } from 'react'
import './App.css'

function App() {
  const [Color, SetColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:  Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => SetColor("red")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => SetColor("green")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => SetColor("blue")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => SetColor("orange")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => SetColor("lime")} className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg" style={{backgroundColor: "lime"}}>Lime</button>
        </div>
      </div>
    </div>
  )
}

export default App
