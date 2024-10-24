import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Page not found, Sorry..</h1>
      <Link to={'/'} >Go to homepage</Link>
    </div>
    
  )
}

export default NotFoundPage