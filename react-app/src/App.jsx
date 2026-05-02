import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './components/User'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Hello World </h1>
       <User name="John Doe" age={30} />
         <Counter/>
    </>
  
 
   
  )
}

export default App
