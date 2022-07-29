import React, { useState,useEffect, useCallback } from 'react'
import './quote.scss'
import { PHRASES } from '../data/Data'

const Quote = () => {
  const [click,setClick]=useState(false)

   var randomPhrases = Math.floor(Math.random() * PHRASES.length);

    for(let i = 0; i < PHRASES.length; i++){
        if(i==randomPhrases)
        var phrase=PHRASES[i].phrase ,author=PHRASES[i].author 
    }

  const handleChange=()=>{
     setClick(
       !click
     )
  }

  return (
    
    <div className='quote'>
          <div className="quote__container-content">
            {click ? <h2> <i className="fa-solid fa-quote-left"></i>{phrase}</h2> : <h2> <i className="fa-solid fa-quote-left"></i>{phrase}</h2>}
            {click ? <h3>{author}</h3> : <h3>{author}</h3>}
            <div className="quote__button-container">
              <div className="quote__button-left">
                  <div className="quote__button">
                        <a href="twitter.com/intent/tweet" target='_top'><i className="fa-brands fa-square-twitter"></i></a>
                  </div>
                  <div className="quote__button">
                        <a href="https://www.tumblr.com/" target='_blank'><i className="fa-brands fa-tumblr"></i></a>
                  </div> 
                </div>
               <div className="quote__button-right">
               <button onClick={handleChange}>Nueva Frase</button>
               </div>
            </div>
          </div>
          <h4>Por Elias Alonzo</h4>
    </div>
  )
}

export default Quote