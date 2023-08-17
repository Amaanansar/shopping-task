import React from "react";
import "./MainLayouts.css";
import collection1 from "../assets/image 12.png";
import collection2 from "../assets/image 9.png";
import videoimg from '../assets/videoImg.png'
import play from '../assets/Group 11.svg'

function Collection() {
  return (
    <div>
      <div className="collections">
        <h1 className="collectionHeading">Collections</h1>

        <div className="collectionContent" style={{overflow:"hidden"}}>
          <div style={{height:'280px' ,margin: "0 10px"}}>
              <img alt="October" src={collection1}></img>
            <div className="classTenRelative">
              <p className="classTen">10</p>
              <p className="octoberCollection">October</p>
              <p className="octoberCollection2">Collection</p>
            </div>
          </div>
          <div style={{height:'338px',margin: "0 10px"}}>
            <img alt="Collection" src={collection2}></img>
            <div className="relative2">
                <p className="autumn">Autumn</p>
                <p className="collection">Collection</p>
            </div>
          </div>
          <div className='videos'>
            <div className='videoImg' style={{position:'relative'}}>
                <img alt="Video" src={videoimg}></img>
                <img style={{position:'absolute',right:'45%',top:'45%'}} src={play} alt="video play"></img>
            </div>
            <div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
