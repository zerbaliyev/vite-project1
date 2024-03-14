import React from 'react'
import "../card/card.css"

export default function CardSection() {
  return (
    <>
    
    <div className="card">
        <h2 className="part__title">We Prioritise</h2>
        <div className="card__element container">
            <div>
            <h3 className="card__title">Single garden teas</h3>
            <p className="card__text">Complete transparency</p>
            {/* <img className="card__img" src="imgs/Vector(1).svg" alt=""> */}
            </div>

            <div>
            <h3 className="card__title">Complete transparency</h3>
            <p className="card__text">Best Drinking Experience</p>
            {/* <img className="card__img" src="imgs/Vector(2).png"alt=""> */}
            </div>

            <div>
            <h3 className="card__title">Customer support</h3>
            <p className="card__text">No bots, no automated replies</p>
            {/* <img className="card__img" src="imgs/Vector(3).svg" alt=""> */}
            </div>

            <div>
            <h3 className="card__title">Fast shipping</h3>
            <p className="card__text">Save, Convenient, Reliable</p>
            {/* <img className="card__img" src="imgs/Group.svg" alt=""> */}
            </div>
        </div>
    </div>
</>
  )
}
