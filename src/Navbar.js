import React, {useState} from 'react';
import logo from './images/logo.svg';

function Navbar(props) {
  const [open, setOpen] = useState(false)


  function showMenu(){
    console.log("open"); setOpen(!open);
    if(open){
      document.getElementById("dropdown").className="block h-full animate-dropdown";
    }
    else{
      document.getElementById("dropdown").className="hidden h-0";
     
    }
  }

  return (

    <div id="wrapper" className="md:flex md:m-20">
    <div id="navBar" className="flex justify-between p-5 text-gray-500">
        <div className=""><img src={logo}/> </div>
        <div htmlFor="dropdown" className="md:hidden text-2xl" onClick={showMenu}>☰</div>

    </div>
    <div id="dropdown" className="md:flex md:flex-grow hidden">
      <ul id="menu" className="md:flex md:w-[calc(100%-400px)] md:bg-white md:text-gray-500 md:m-0 md:p-0 md:border-box absolute w-[calc(100%-40px)] m-5 box-border p-5 rounded-xl bg-myviolet font-bold text-white">
          <li className="m-5">Features</li>
          <li className="m-5">Pricing</li>
          <li className="m-5">Resources</li>
          <hr className="m-5 md:flex-grow md:w-full"/>
          <li className="m-5">Login</li>
          <button className="md:w-48 md:text-white md:mt-2 w-full mb-5 p-2.5 box-border bg-mymint rounded-full">Sign up</button>
      </ul>
    </div>
    </div>
  )
}



export default Navbar