import { useState } from 'react'
import './App.css'

import Index from './component/Index'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Index/>
      
      <section className="two"></section>
      <section className="three"></section>
      <section className="four"></section>
      <section className="five"></section>
    </>
  )
}

export default App
