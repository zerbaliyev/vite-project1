import React from 'react'
import "../frame/frame.css"
import "../../../public/Frame-images"
import FrameImage from '../../../public/Frame-images/FrameImage'

export default function Frame() {
  return (
    <>
     <section className="frame__section">
            <h4 className="frame__text">
                "Tea is not just a drink, it's a way of life and a <br/> way to connect with our loved ones."
            </h4>
        <div>
            <h2 className="frame__title">Explore our Collections</h2>
            <div className="frame__section-items container">
                <div className="frame__section-item">
                    <img src= {FrameImage} alt=""/>
                    <p>Black</p>
                </div>
                <div className="frame__section-item">
                    <img src="imgs/green.svg" alt=""/>
                    <p>Green</p>
                </div>
                <div className="frame__section-item">
                    <img src="imgs/white.svg" alt=""/>
                    <p>White</p>
                </div>
                <div className="frame__section-item">
                    <img src="imgs/Oolong.svg" alt=""/>
                    <p>Oolong</p>
                </div>
                <div className="frame__section-item">
                    <img src="imgs/pu-erh.svg" alt=""/>
                    <p>Pu-erh</p>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
