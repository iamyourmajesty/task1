import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Card from './Card'
import './Home.css'

const Home = () => {
  return (
    <div>
     <Header/>
     <SearchBar/>
     <div className='container'><Card/></div>
    </div>
  )
}

export default Home