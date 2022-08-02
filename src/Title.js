import React from 'react'
import workingIllust from './images/illustration-working.svg'

function Title() {
  return (
    <div className="md:flex md:w-screen md:p-0 p-4">
      <img src={workingIllust} alt="working illust" width="100%" className="md:grow md:object-cover md:w-1/2 md:order-last ml-12"></img>
      <div className="md:grow md:text-left md:m-20 md:mt-40">
      <h1 className="mt-5 text-4xl font-bold">More than just shorter links</h1>
      <p className="mt-5 font-thin text-gray-500">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <button className="mt-5 p-3 w-48 rounded-full text-white bg-mymint text-xl font-bold">Get Started</button>
      </div>
    </div>
  )
}

export default Title