import '../../App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logoMenu from '../assets/logo.svg'
import group from '../assets/Group.svg'
import search from '../assets/Search.svg'
import shopping from '../assets/shopping bag.svg'
import {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';


const data = [
  {
   image: require("../assets/carosel1.webp"),
   id: 1,
   caption:"Luxury fashion & Accessories"
  },
  {
    id: 2,
    image:require("../assets/carosel2.jpg"),
    caption:"Luxury fashion & Accessories"
  },
  {
     id: 3,
    image:require("../assets/carosel3.jpg"),
    caption:"Luxury fashion & Accessories"
   } 
]

function Header() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="headerIcon" style={{backgroundColor: "#E7EAEF",padding:'10px'}}>
        <div className="headerlogo1" style={{width:'100%',display:'grid',gridTemplateColumns:'5% 80% 15%'}}>
          <div>
            <img alt="logoMenu" src={logoMenu} style={{cursor:"pointer"}} />
          </div>
          <div>
            <img alt="group" src={group}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <img alt="search" src={search} style={{cursor:"pointer"}} />
            <img alt="shopping" src={shopping} style={{cursor:"pointer"}}/>
          </div>
        </div>
      </div>
      <div className="bannerSection">
        <div className="subBanner">
          <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item key={slide.id}>
              <img className="d-block" src={slide.image} alt="slider" style={{width:"100%",height:'640px',objectFit:"cover",objectPosition:"top"}}/>
              <Carousel.Caption>
                <h1>{slide.caption}</h1>
              </Carousel.Caption>
              <div className="banner" style={{width:"100%",position: 'absolute',bottom: "60px"}}>
                <button className="exploreNow">Explore Now</button>
              </div>
            </Carousel.Item>
              )
            })}
            
          </Carousel>

        </div>
      </div>
    </>
  );
}

export default Header
