import React from "react";
import people1 from '../assets/Rectangle7.png'
import people2 from '../assets/Rectangle8.png'
import people3 from '../assets/Rectangle9.png'
import people4 from '../assets/Rectangle10.png'
import InstagraWhite from '../assets/Instagram-White.svg'

function Followus() {
  return (
    <div>
      <div className="followUS">

        <div className="followicon">
          <h1>Follow Us</h1>
          <img src={InstagraWhite} alt="" />
        </div>

        <div className="followPersons">
            <div>
                <img alt="Peoples" src={people2}></img>
                <p>@mia</p>
            </div>
            <div>
                <img alt="Peoples" src={people3}></img>
                <p>@_jihyn</p>
            </div>
            <div>
                <img alt="Peoples" src={people4}></img>
                <p>@mia</p>
            </div>
            <div>
                <img alt="Peoples" src={people1}></img>
                <p>@_jihyn</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Followus;