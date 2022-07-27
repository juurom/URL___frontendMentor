import React from 'react'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'


function Footer() {
  return (
    <div className="flex justify-between px-28 py-3 h-12 bg-mydeepviolet">
      <a href="#"><img src={facebook}></img></a>
      <a href="#"><img src={twitter}></img></a>
      <a href="#"><img src={pinterest}></img></a>
      <a href="#"><img src={instagram}></img></a>

    </div>
  )
}

export default Footer