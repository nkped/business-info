import React from 'react'
import { Link } from 'react-router-dom'


const ResultsPage = () => {
    const results = [1,2,3,4]
  return (
    <div className="flex flex-col gap-2" >
        {results.map((result) => (        
            <Link key={result} to={`/result/${result}`}>Result: {result}</Link>
            )
        )}
    </div>
  )
}

export default ResultsPage