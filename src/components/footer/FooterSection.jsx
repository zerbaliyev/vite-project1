import React from 'react'
import "./footer.css"

export default function FooterSection() {
  return (
    <footer className="footer">
    <div className="footer__element">
       <nav className="footer__menu">
        <h2>Products</h2>
        <ul className="footer__link">
            <li>
                <a href="#">Black</a>
            </li>
            <li>
                <a href="#">Green</a>x  
            </li>
            <li>
                <a href="#">White</a>
            </li>
            <li>
                <a href="#">Oolong</a>
            </li>
            <li>
                <a href="#">Pu-erh</a>
            </li>
        </ul>
        </nav>


        <nav className="footer__menu">
        <h2>Company</h2>
        <ul className="footer__link">
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
            <li>
                <a href="#">Our Blog</a>
            </li>
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">Shipping & Delivery</a>
            </li>
            <li>
                <a href="#">Refund policy</a>
            </li>
            <li>
                <a href="#">Terms of Service    </a>
            </li>
        </ul>
        </nav>

        <div className="footer__element-text">
            <p className="footer__text">
                “Tea is a journey. It can take you to <br/>
                new places and open your mind to <br/>
                new experiences. Let every sip <br/>
                transport you to a world of wonder <br/>
                and possibility” <br/>
            </p>
            <p className="footer_text_">
                Dragomir Teodorescu, <br/>
                Tealuxe owner
            </p>
        </div>

       
        <div className="logo">
            <h2 className="logo__title">Stay In Touch</h2>

            <p className="logo__text">
                Please feel free to contact us via the email of <br/>
                phone. We would be happy to hear from you!
            </p>

            <div className="logo__icon">
            <a>
                {/* <img src="imgs/logo.svg" alt=""> */}
            </a>
            <div className="logo__items">
                <div className="short__part">
                {/* <img src="imgs/baskey1.png" alt=""> */}
                <p>+370 680 123456</p>
                </div>
                <div className="short__part">
                    {/* <img src="imgs/telephone.png" alt=""> */}
                    <p>info@tealuxe.com</p>
                </div>
                <div className="icon">
                    {/* <img src="imgs/Facebook.svg" alt="">
                    <img src="imgs/Youtube.svg" alt="">
                    <img src="imgs/Instagram.svg" alt="">
                    <img src="imgs/Twiter.svg" alt=""> */}
                </div>
            </div>
        </div>
    </div>
    </div>


    <div className="footer__items container">
        <div className="footer__item">
            <p>© Tealuxe, 2023</p>
        </div>

        <div className="footer__logo">
            {/* <img src="imgs/mastercard.svg" alt="">
            <img src="imgs/VisaCard.svg" alt="">
            <img src="imgs/GooglePlay.svg" alt="">
            <img src="imgs/Paypal.svg" alt=""> */}
        </div>
    </div>

</footer>

)
}
