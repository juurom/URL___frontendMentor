import React from 'react'
import icon1 from './images/icon-brand-recognition.svg'
import icon2 from './images/icon-detailed-records.svg';
import icon3 from './images/icon-fully-customizable.svg';


function Advanced() {
  const title1 ="Brand Recognition";
  const explain1 =" Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.";

  const title2="Detailed Records";
  const explain2="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.";

  const title3="Fully Customizable";
  const explain3="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.";

  return (
    <>
    <div className="bg-mybggray p-4 h-fit">
      <h1 className="mt-32 text-3xl font-bold">Advanced Statistics</h1>
      <p className="mt-5 font-thin text-gray-500">Track how your links are performing across the web with our advanced statistics dashboard.</p>

      <div className="md:relative md:flex">
        <div className="md:absolute md:left-1/4 md:top-1/2 md:block md:h-2 md:w-1/2 md:bg-mymint hidden"></div>
        
      <div className=""><IconExplain icon={icon1} title={title1} explain={explain1}/></div>
      <div className="md:mt-16"><IconExplain icon={icon2} title={title2} explain={explain2}/></div>
      <div className="md:mt-32"><IconExplain icon={icon3} title={title3} explain={explain3}/></div>
      </div>
    </div>

    <div className="relative py-12 px-5 bg-myviolet bg-violetpattern bg-cover">
      <h1 className="text-4xl font-bold text-white">Boost your links today</h1>
      <button className="mt-5 p-3 w-48 rounded-full text-white bg-mymint text-xl font-bold">Get Started</button>
    </div>
    </>
  )
}

function IconExplain(props){
  return(
  <div className="relative mt-20">
    <div className="absolute top-[-42px] inset-x-0 h-fit w-fit p-5 m-auto rounded-full bg-myviolet"><img src={props.icon}></img></div>
    <div className="m-5 p-5 rounded-xl bg-white">
      <h2 className="font-bold text-2xl mt-14">{props.title}</h2>
      <p className="mt-5 p-5 text-gray-500">{props.explain}</p>
    </div>
  </div>
  )
}

export default Advanced