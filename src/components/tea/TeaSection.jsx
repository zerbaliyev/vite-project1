import React from 'react'
import "../tea/tea.css"
import read from '../../../public/Tea-images/read.svg'
import crusoe from '../../../public/Tea-images/crusoe.png'
import mental from '../../../public/Tea-images/mental.png'
import behavior from '../../../public/Tea-images/behavior.png'
import fromCay from '../../../public/Tea-images/fromCay.png'



export default function TeaSection() {
  return (
    <>
       <section className="tea__section">
        <div>
            <h2 className="tea__title">Our Tea Blog</h2>
            <div className= "container">
                <div className="tea">
                    <div className="tea__items">
                        <div className="tea-item-img"   >
                            <img src= {crusoe} alt=""/>
                        </div>
                        <div className="tea__item">
                            <p className="tea__item-title">Tea Time Travels: Funny Moments from Around the World</p>
                            <span className="tea__item-text">by Robinson Crusoe</span>
                            
                            <p className="read">
                                <a href="">
                                    <a href="#">Read</a>
                                    <img className="tea-img" src= {read}/>
                                </a>
                            </p>
                        </div>
                    </div>
        
        
                    <div className="tea__items">
                        <div className="tea-item-img">
                            <img src= {mental} alt=""/>
                        </div>
                        <div className="tea__item">
                            <p className="tea__item-title">The Role of Tea in Mental Health</p>
                            <span className="tea__item-text">by Joker</span>
                            
                            <p className="read">
                                <a href="">
                                    <a href="#">Read</a>
                                    <img className="tea-img" src= {read}/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
        
        
        
                <div className="tea">
                    <div className="tea__items">
                        <div className="tea-item-img">
                            <img src= {behavior} alt=""/>
                        </div>
                        <div className="tea__item">
                            <p className="tea__item-title">Tea-rific Tales: Hilarious Stories from Tea Lovers</p>
                            <span className="tea__item-text">by Casper the Friendly Ghost</span>
                            
                            <p className="read">
                                <a href="">
                                    <a href="#">Read</a>
                                    <img className="tea-img" src= {read}/>
                                </a>
                            </p>
                        </div>
                    </div>
        
                    <div className="tea__items">
                        <div className="tea-item-img">
                            <img src= {fromCay} alt=""/>
                        </div>
                        <div className="tea__item">
                            <p className="tea__item-title">Tea and Caffeine: Effects on the Brain and Behavior</p>
                            <span className="tea__item-text">by Author Authorius</span>
                            
                            <p className="read">
                                <a href="">
                                    <a href="#">Read</a>
                                    <img className="tea-img" src= {read}/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button className="tea-btn">View all</button>
            </div>
        </div>
    </section>
    </>
  )
}
