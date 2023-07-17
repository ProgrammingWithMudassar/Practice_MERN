import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import { Home } from './Pages/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Well Mudassar G.
      <Button variant="contained" color="primary">
        click me
      </Button>
      <Home />
    </div>
  )
}

export default App
