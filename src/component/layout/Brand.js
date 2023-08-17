import React from 'react'
import divider from '../assets/Devider.svg'
import prada from '../assets/Prada.svg'
import burberry from '../assets/Burberry.svg'
import boss from '../assets/Boss.svg'
import cartier from '../assets/Catier.svg'
import gucci from '../assets/Gucci.svg'
import tiffany from '../assets/Tiffany & Co.svg'
import './MainLayouts.css'

function Brand() {
  return (
    <div>
        <div className='brandList'>
            <img alt="Devider" src={divider}></img>
            <div className='brandLogo'>
                <div>
                    <img alt="prada" src={prada}></img>
                </div>
                <div>
                    <img alt="burberry" src={burberry}></img>
                </div>
                <div>
                    <img alt="boss" src={boss}></img>
                </div>
                <div>
                    <img alt="cartier" src={cartier}></img>
                </div>
                <div>
                    <img alt="gucci" src={gucci}></img>
                </div>
                <div>
                    <img alt="tiffany" src={tiffany}></img>
                </div>
            </div>
            <img alt="divider" src={divider}></img>
        </div>
    </div>
  )
}

export default Brand
