import React from 'react'
import './Card.css'

const imgURL = "https://housing-images.n7net.in/4f2250e8/77bfc7a6110d84d1bd695ec454e92103/v0/small/srinivasam-auto_nagar_1-visakhapatnam-srinivasa_infra.jpeg"

const Card = () => {
  return (
    <div className="card">
    <div id='section5'>Secton 5</div>
    <div id='d1'></div>
    <div id='d2'>2Bhk & 3Bhk Apartment Available</div>
    <div id='d3'>Want your new home in Hanspal?</div>
    <img id='image' src={imgURL} alt="property img" />
    <butoon id='d4'>Message us <span>NOW</span></butoon>
    <img id='mapicon' src='https://cdn.pixabay.com/photo/2012/04/26/19/04/pin-42871_960_720.png' alt='map icon' />
    <div id='address'>Near Surekha Vatika, Hanspal</div>
    <div id='sprice'>Price Starting 95 lakhs</div>
    <div className='box2'>
    <div className='b11'>
    <div>2Bhk/3Bhk</div>
    <div>Hanspal</div>
    <div>95 lacs</div>
    </div>
    <div className='b12'>
    <div id='addr'>Premium Property at Surekha Vatika, Hanspal</div>
    <button id='btn2'>Enquire Now</button>
    </div>
    </div>
  </div>
  )
}

export default Card