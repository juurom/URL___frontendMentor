import React from 'react'
import workingIllust from './images/illustration-working.svg'

function Title() {
  return (
    <div className="p-4">
      <img src={workingIllust} alt="working illust" width="100%" className="ml-12"></img>
      <h1 className="mt-5 text-4xl font-bold">More than just shorter links</h1>
      <p className="mt-5 font-thin text-gray-500">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <button className="mt-5 p-3 w-48 rounded-full text-white bg-mymint text-xl font-bold">Get Started</button>
    </div>
  )
}

export default Title