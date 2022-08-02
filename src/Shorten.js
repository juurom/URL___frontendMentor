import React, {useState} from 'react'
import bgimg from './images/bg-shorten-mobile.svg';



function Shorten() {
  const [url, setUrl] = useState("");
  const [urlList, setList] = useState([]);
  
  function urlshort(url, e){
    e.preventDefault();
    if (url===""){//show err
      document.getElementById("errorMessage").innerText="Please add a link";
    }


    else{
      document.getElementById("urlinput").value="";
      document.getElementById("errorMessage").innerText="";

      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response)=>response.json())
      .then(data=>{
        //console.log("shortening...")
    
        //console.log(data.result.short_link);
        const tmplist=[{"long": url, "short": data.result.short_link}]; //2차원으로 만들고싶은데 ㅠ
        setList(urlList.concat(tmplist));
        setUrl("");
        //console.log("URLlist: ", urlList);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  
  }



  return (
    <div className="relative h-max bg-mybggray">

      <div className ="absolute h-20 w-screen left-0 inset-x-0 bg-white"></div>
      <div className="md:mx-40 md:h-24 relative h-40 mx-10 mt-20 rounded-xl bg-myviolet bg-violetpattern">
        <form className="md:w-full md:flex" onSubmit={(e)=>{urlshort(url,e);}}>
        <input type="text" id="urlinput" onChange={(e)=>setUrl(e.target.value)} placeholder="Shorten a link here..." className="md:relative md:flex-grow absolute m-5 p-3 h-10 rounded-xl inset-x-0"></input>
        <div id="errorMessage" className="absolute left-6 top-16 text-sm italic text-red-400"></div>
        <button className="md:relative md:w-48 absolute bottom-0 m-5 h-10 rounded-xl inset-x-0 bg-mymint text-white font-bold">Shorten it!</button>
        </form>
      </div>
      {urlList.map((u)=> //map할때 js 쓰고싶으면 {} 아니면 괄호없이
        <Urlshow long={u.long} short={u.short}/>
      )}

    </div>
  )
}


function Urlshow(props){
  return(
    <div className="px-10 py-5 bg-mybggray">
      <div className="md:mx-56 p-5 bg-white rounded-xl">
        <div className="whitespace-pre-line break-all">{props.long}</div>
        <hr className="m-2"/>
        <div className="text-mymint font-bold">{props.short}</div>
        <button className="mt-2 p-2 w-full bg-mymint rounded-xl text-white font-bold">Copy</button>
      </div>
    </div>
  )
}

export default Shorten