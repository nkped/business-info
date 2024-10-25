import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const ResultsPage = () => {
    const results = [1,2,3,4]
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {results.map((result) => (        
            <NavLink 
              key={result} 
              to={`/results/${result}`} 
              className={({isActive}) => isActive ? 'text-yellow-300' : ''}
             >Result: {result}</NavLink>
            )
        )}
        </div>
        <Outlet />
    </div>
  )
}

export default ResultsPage