import React from 'react'
import "../frame/frame.css"
import blacksvc from '../../../public/Frame-images/blacksvc.svg'
import green from '../../../public/Frame-images/green.svg'
import white from '../../../public/Frame-images/white.svg'
import Oolong from '../../../public/Frame-images/Oolong.svg'
import PuErh from '../../../public/Frame-images/puErh.svg'



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
                        <img src={blacksvc} />
                        <p>Black</p>
                    </div>
                    <div className="frame__section-item">
                        <img src= {green} />
                        <p>Green</p>
                    </div>
                    <div className="frame__section-item">
                        <img src= {white} />
                        <p>White</p>
                    </div>
                    <div className="frame__section-item">
                        <img src= {Oolong} />
                        <p>Oolong</p>
                    </div>
                    <div className="frame__section-item">
                        <img src= {PuErh} />
                        <p>PuErh</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
