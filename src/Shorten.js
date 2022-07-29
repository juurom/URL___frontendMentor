import React, {useState} from 'react'
import bgimg from './images/bg-shorten-mobile.svg';



function Shorten() {
  const [url, setUrl] = useState("");
  const [urlList, setList] = useState([]);
  
  function urlshort(url, e){
    e.preventDefault();

    document.getElementById("urlinput").value="";

    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((response)=>response.json())
    .then(data=>{
      console.log("shortening...")
  
      console.log(data.result.short_link);
      const tmplist=(url, data.result.short_link).split(',');
      setList(urlList.concat(tmplist));
      console.log(urlList);
    })
    .catch(error=>{
      console.log(error);
    })
  
  }

  const urlComponent = urlList.map((u, i)=>{
      <Urlshow long={u[0]} short={u[1]}/>
    }
    )

  return (
    <div className="relative h-60 bg-mybggray">

      <div className ="absolute h-20 w-screen left-0 inset-x-0 bg-white"></div>
      <div className="relative h-36 m-10 mt-20 rounded-xl bg-myviolet bg-violetpattern">
        <form onSubmit={(e)=>{urlshort(url,e);}}>
        <input type="text" id="urlinput" onChange={(e)=>setUrl(e.target.value)} placeholder="Shorten a link here..." className="absolute m-5 p-3 h-10 rounded-xl inset-x-0"></input>
        <button className="absolute bottom-0 m-5 h-10 rounded-xl inset-x-0 bg-mymint text-white font-bold">Shorten it!</button>
        </form>
      </div>
      <div className="h-1 w-screen bg-red-500"></div>
      {typeof urlList}
      {urlComponent}


     <div className="h-1 w-screen bg-red-500"></div>

    </div>
  )
}


function Urlshow(props){
  return(
    <div>
      <div>${props.long}</div>
      <div>${props.short}</div>
      <button></button>
    </div>
  )
}

export default Shorten