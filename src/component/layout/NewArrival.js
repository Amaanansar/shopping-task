import React from 'react'
import divider from '../assets/Devider.svg'
import './MainLayouts.css'
import arrival1 from '../assets/Rectangle325.png'
import arrival2 from '../assets/Rectangle2.png'
import arrival3 from '../assets/Rectangle3.png'
import arrival4 from '../assets/Rectangle4.png'
import forwarArrow from '../assets/Forward Arrow.svg'

function NewArrival() {
  return (
    <div> 
        <div className='newArrivalHeading'>New Arrival</div>
        <img alt="divider" src={divider} />
        
        <div className='newArrivalOptions'>
          <span>All</span>
          <span>Apparel</span>
          <span>Dress</span>
          <span>Tshirt</span>
          <span>Bag</span>
        </div>


        <div className='collectedArrivals'>
          <div className='collectedArrivalsContainer'>
            <div className='collectedArrivalsImg'>
              <img alt="arrival1" src={arrival1}></img>
            </div>
            <div>
              <p className='arrivalText'>21WN reversible angora cardigan</p>
              <p className='categorylistAmount'>$120</p>
            </div>
          </div>
          <div className='collectedArrivalsContainer'>
            <div className='collectedArrivalsImg'>
              <img alt="arrival2" src={arrival2}></img>
            </div>
            <div>
              <p className='arrivalText'>21WN reversible angora cardigan</p>
              <p className='categorylistAmount'>$120</p>
            </div>
          </div>
          <div className='collectedArrivalsContainer'>
            <div className='collectedArrivalsImg'>
              <img alt="arrival3" src={arrival3}></img>
            </div>
            <div>
              <p className='arrivalText'>21WN reversible angora cardigan</p>
              <p className='categorylistAmount'>$120</p>
            </div>
          </div>
          <div className='collectedArrivalsContainer'>
            <div className='collectedArrivalsImg'>
              <img alt="arrival4" src={arrival4}></img>
            </div>
            <div>
              <p className='arrivalText'>Oblong bag</p>
              <p className='categorylistAmount'>$120</p>
            </div>
          </div>
        </div>

        <div className='exploreMore'>
          <p className='explore'>Explore More</p>
          <img alt="forwarArrow" src={forwarArrow} style={{width:"35px"}}></img>
        </div>

    </div>
  )
}

export default NewArrival
