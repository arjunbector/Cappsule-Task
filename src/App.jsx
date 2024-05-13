import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='p-10'>
      <Card/>
    </main>
  )
}

export default App
