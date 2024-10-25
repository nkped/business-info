import React from 'react'
import { useParams } from 'react-router-dom'


const ResultPage = () => {
    const params = useParams()
    console.log(params)

  return (
    <div>ResultPage with resultId: {params.resultId}</div>
  )
}

export default ResultPage