// import react and hook 'useState'
import React, { useState } from 'react'

// define component
function App() {
  // define state
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // define event listener functions, event = props
  const handleInputChange = (event) => {
    if (!submitted) {
      setName(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

 // events being returned after submission 
 return (
  // JSX inline styles
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{color: 'blue'}}>DevAccelerator</h1>
  {/* ternary expression for submission */}
      {submitted ? (
        <p>Welcome, {name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            <input type='text' value={name} onChange={handleInputChange} placeholder='Enter your name' required />
            <button type='submit'>Submit</button>
          </label>
        </form>
      )}
    </div>
  )
}

export default App
