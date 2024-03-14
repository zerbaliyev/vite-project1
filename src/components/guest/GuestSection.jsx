import React from 'react'
import "../guest/guest.css"

export default function GuestSection() {
  return (
    <>
        <section className="info">
        <div className="info__items container">
            <div className="info__item">
                <h2 className="info__item-title">Want to know more?</h2>
                <p className="info__item-text">
                    Join our mailing list and stay up-to-date with the latest news, <br/>
                    promotions, and exclusive offers from our tea store. Be the first <br/>
                    to know about new tea arrivals, seasonal blends, and special <br/>
                    discounts. Don't miss out on the tea-rrific perks - sign up today! <br/>
                </p>
            </div>

            <div className="info__item-input">
                {/* <img className="info__img" src="imgs/AgacSekil.png" alt=""> */}
                <input className="info__input" type="text" placeholder="name@email.com"/>
                <button className="info__btn">Join</button>
                <hr/>
        
                <div className="input__text">
                <input type="checkbox"/>
                <p>
                    We take your privacy seriously and are committed to protecting your personal information. By <br/>
                    subscribing to our mailing list you are consenting to receive periodic emails from us about our <br/>
                    products, promotions, and other tea-related information. <br/>
                </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
