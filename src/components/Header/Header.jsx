import React, { useState } from 'react'
import "../Header/header.css"
import logo from '../../../public/Header-images/logo.svg'
import baskey from '../../../public/Header-images/baskey.svg'
import user from '../../../public/Header-images/user.svg'
import search from '../../../public/Header-images/search.svg'

function Header() {
  
    return (
    <>
          
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <ul className="menu__list">
                    <li>
                        <a href="#"><img src= {logo}/></a>
                    </li>
                </ul>
                <nav className="menu">
                    <ul className="menu__list">
                        <li>
                            <a href="#">Black</a>
                        </li>
                        <li>
                            <a href="#">Green</a>
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
                <div className="user-actions">
                    <div className="user__actions">
                    <ul className="user-actions">
                        <li className="user-actions__item">
                            <a href="#" className="user-actions__link">
                                 <img src= {baskey} className="user-actions__icon" />
                            </a>
                        </li>
                    </ul>
                    <ul className="user-actions">
                        <li className="user-actions__item">
                            <a href="#" className="user-actions__link">
                               <img src= {user} className=" user-actions__icon"/>
                            </a>
                        </li>
                    </ul>
                    </div>
                        <ul className="user-actions">
                            <li className="user-actions__item">
                                <a href="#" className="user-actions__link">
                                <img src= {search} class="user-actions__icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
    )  
}

export default Header