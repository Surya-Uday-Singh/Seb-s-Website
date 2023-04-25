import React from 'react'
import './Home.css';
function Home() {
  return (
    <div className='home-container'>
    
    <div className='heading-container'><h2 className='heading'>Welcome to Seb's</h2></div>
    <div className='row'>
    <div className='col'>
    <p>Welcome to Seb's, the premier café and restaurant located in the heart of the city. 
     Our menu features a range of delectable dishes that are sure to satisfy your taste buds. 
     Our chefs use only the freshest and finest ingredients to create dishes that are both healthy and delicious.
     From our signature breakfast items to our mouth-watering lunch and dinner options, we have something for everyone.</p>
    </div>
    <div className='col'>
    <div className='img1'  role='img'
    aria-label='A photo of our resteraunt'></div>
    </div>
    </div>
    <div  className='row'>
  
    <div className='col'>
    <div className='img2' role='img'
    aria-label='A photo of our resteraunt'></div>
    </div>
    <div className='col'>
    <p>At Seb's, we take pride in the quality and authenticity of our food. Our dishes are inspired by traditional recipes and are infused with modern twists to create a truly unique culinary experience. 
      Whether you're in the mood for a hearty meal or a light snack, our menu has something to offer.
      And with our warm and inviting atmosphere, you'll feel right at home from the moment you step through our doors.</p>
    
    </div>
    </div>
    <p className='endp'>Come visit us at Seb's and experience the best café and restaurant in town.</p>
    
    </div>
    
  )
}

export default Home
