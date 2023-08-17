import React from "react";
import "./MainLayouts.css";
import arrival1 from '../assets/Rectangle325.png'
import arrival2 from '../assets/Rectangle2.png'
import arrival3 from '../assets/Rectangle3.png'
import arrival4 from '../assets/Rectangle4.png'
import divider from '../assets/Devider.svg'
import group12 from '../assets/Indicator.svg'


function JustForYou() {
  return (
    <div>
      <div className="products">
        <h4>Just for you</h4>
        <img alt="divider" src={divider}></img>
        <div className='collectedArrivals'>
          <div className='collectedArrivalsContainer'>
            <div className='collectedArrivalsImg'>
              <img alt="arrival2" src={arrival2}></img>
            </div>
            <div>
              <p className='arrivalText'>Harris Tweed Three button Jacket</p>
              <p className='categorylistAmount'>$120</p>
            </div>
          </div>
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

        <img alt="group12" src={group12}></img>
      </div>
    </div>
  );
}

export default JustForYou;
