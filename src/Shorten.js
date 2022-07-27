import React from 'react'
import bgimg from './images/bg-shorten-mobile.svg';

function Shorten() {
  return (
    <div className="relative h-60 bg-mybggray">

      <div className ="absolute h-20 w-screen left-0 inset-x-0 bg-white"></div>
      <div className="relative h-36 m-10 mt-20 rounded-xl bg-myviolet bg-violetpattern">
        <input type="text" placeholder="Shorten a link here..." className="absolute m-5 p-3 h-10 rounded-xl inset-x-0"></input>
        <button className="absolute bottom-0 m-5 h-10 rounded-xl inset-x-0 bg-mymint text-white font-bold">Shorten it!</button>
        
      </div>

    </div>
  )
}

export default Shorten