import React from 'react'
import twitter from '../assets/Twitter.svg'
import instagram from '../assets/Instagram.svg'
import youtube from '../assets/YouTube.svg'
import divider from '../assets/Devider.svg'

function Footer() {
  return (
    <div>
        
        <div className='socialLinks'>
            <img alt="twitter" src={twitter}></img>
            <img alt="instagram" src={instagram}></img>
            <img alt="youtube" src={youtube}></img>
        </div>

        <img alt="divider" src={divider} style={{margin:'25px 0'}}></img>

            <div className='contact&support'>
                <p>support@openui.design</p>
                <p>+60 825 876</p>
                <p>08:00 - 22:00 - Everyday</p>
            </div>

        <img alt="divider" src={divider} style={{margin:'25px 0'}}></img>

        <div className='home' style={{display:'flex',justifyContent:'space-evenly',marginBottom: '10px',fontFamily: 'Tenor Sans',color:'var(--gray-scale-title-active, #000)'}}>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Blog</h3>
        </div>

        <div style={{background:'#f9f9f9',height: '60px',display: 'flex',alignItems: 'center',justifyContent: 'center',opacity: '0.5',}}>Copyright© OpenUI All Rights Reserved.</div>
    </div>
  )
}

export default Footer
