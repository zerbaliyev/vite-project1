import React from 'react';
import  "../info/info.css"

export default function InfoSection() {
  return (
    <>
    <section className="info__section">
        <h2 className="info__title">What our Clients say</h2>

        <div className="info__element">
        <div>
            <p className="info__text">
                "As a tea enthusiast, I have tried teas from 
                all over the world, but this tea store truly 
                stands out. Their teasof the highest quality 
                and the variety impressive. This is definitely 
                a tea store that every tea lover should visit." 
            </p>
            <h3 className="short__title">Alice</h3>
        </div>
        <div>
            <p className="info__text">
                "This tea store is my go-to for all 
                my needs. Their selection is unbeatable 
                and the quality of the is exceptional."
            </p>
            <h3 className="short__title">Mad-Hatter</h3>
        </div>
        <div>
            <p className="info__text">
                "If you're a tea lover, you must visit this 
                tea store. The selection is vast and the 
                quality is outstanding. I guarantee you won't 
                be disappointed." 
            </p>
            <h3 className="short__title">Dormouse</h3>
        </div>


        <div>
            <p className="info__text">
                "I am not a big tea drinker, but this tea 
                store has converted me. I highly 
                recommend this tea store to anyone looking 
                for a high-quality tea 
                experience."
            </p>
            <h3 className="short__title">March Hare</h3>
        </div>
        </div>
    </section>
    </>
  )
}
