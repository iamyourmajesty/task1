import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='box'>
    <input id='input1' type="text" name="location" placeholder='Bhubaneswar' />
    <input className='in1' id='input2' type="text" placeholder='Investment' name="investment" />
    <input className='in1' id='input3' type="text" name="pricerange" placeholder='95 lacs - 1 Cr' />
    <input className='in1' id='input4' type="text" name="bhk" placeholder='2BHK/2BHK'/>
    <button >Edit Search</button>
    </div>
  )
}

export default SearchBar