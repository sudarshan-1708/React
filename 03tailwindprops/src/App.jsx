import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <h1 className='bg-green-400 p-4 text-black rounded-xl'>Tailwind test</h1>
     <Card username = 'Selina' age="23" btnText="click me"  />
     <Card username = 'Mia' age="42" btnText="visit me" />
     
    </>
  )
}

export default App
