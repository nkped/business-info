import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SearchPage = () => {

  const [title, setTitle ] = useState('')
  const [id, setId ] = useState('')


  async function handleId(e) {
    e.preventDefault()
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const response = await data.json()
    console.log(response)    
  }

  async function handleTitle(e) {
    e.preventDefault()
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=2`)
    const response = await data.json()
    console.log(response)    
  }


  return (
    <div className='flex flex-col gap-2' >
      <h1>This is Search</h1>
      
      <form className='flex flex-col gap-2' onSubmit={handleId} >
        <label htmlFor='id'>Enter id:  
          <input
            id='id'
            type='text' 
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button 
          type='submit'
          >Search</button>
      </form>
      <form className='flex flex-col gap-2' onSubmit={handleTitle} >
        <label htmlFor='title'>Enter title: 
          <input
            id='title'
            type='text' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button 
          type='submit'
          >Search</button>
      </form>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default SearchPage