import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <h1 className='homeTile'>
      WELCOME TO ASSIGNMENT
      </h1>
        

        <Link className='hdiv'  to={"/api"}>Api</Link>
        <Link className='hdiv'  to={"/game"}>Game</Link>
    </div>
  )
}

export default Home