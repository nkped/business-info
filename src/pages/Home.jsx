import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const Home = () => {
  return (
    <div>
      <h1>Home</h1>
        <Link to='search'>Go to Search</Link>
        <Outlet />
    </div>
  )
}

export default Home