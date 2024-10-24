import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const HomePage = () => {
  return (
    <div className="text-red-100">
      <h1>Home</h1>
        <Link to='search'>Go to Search</Link>
    </div>
  )
}

export default HomePage