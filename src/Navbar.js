import React, {useState} from 'react';
import logo from './images/logo.svg';

function Navbar(props) {
  const [open, setOpen] = useState(false)

  const showmenu= ()=>{
    console.log("showmenu");

    React.createElement(
    <ul id="menu" className="hidden group-hover:block">
    <li className="w-screen text-center">Features</li>
    <li>Pricing</li>
    <li>Resources</li>
    </ul>
    )

  }

  return (
    <>
    <div id="navBar" className="flex justify-between p-5 text-gray-500">
        <div><img src={logo}/> </div>
        <div htmlFor="dropdown" className="text-2xl" onClick={()=>{console.log("open"); setOpen(!open)}}>☰</div>
        {open && showmenu}
    </div>
    
    </>
  )
}



export default Navbar