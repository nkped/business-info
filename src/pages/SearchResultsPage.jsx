import React from 'react'
import { Link } from 'react-router-dom'


const SearchResultsPage = () => {
    const results = [1,2,3,4]
  return (
    <div className="flex flex-col gap-2" >
        {results.map((result) => (
            <span key={result}>
        <Link to={`/searchresult/${result}`}>Result: {result}</Link></span>)
        )}
    </div>
  )
}

export default SearchResultsPage