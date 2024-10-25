import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SearchPage = () => {

  //const [title, setTitle ] = useState('')
  const [id, setId ] = useState([])


  async function handleSubmit(e) {
    e.preventDefault()
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const response = await data.json()
    console.log(response)

    
  }


  return (
    <div className='flex flex-col gap-2' >
      <h1>This is Search</h1>
      
      <form onSubmit={handleSubmit} >
        <input
          type='text' 
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button 
          type='submit'
          >Search</button>
      </form>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default SearchPage