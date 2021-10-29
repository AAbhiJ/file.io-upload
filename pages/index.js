
import '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import instance from './../instance/axios';

import axios from "axios";


export default function Home() {

  const [fileName, setFileName] = useState("");
  const [lastState, setLastState] = useState("");
  
  function uploadFile(){
    if(lastState == fileName.name){
      alert("This file is already uploaded!");
      return;
    }

      // let headersList = {
      //   "Accept": "application/json",
      //   "Authorization": "Bearer FUN2THY.DJYA01C-X2H4WG5-NZRB0PR-SS86F2J" 
      // }

      // let reqOptions = {
      //   url: "https://file.io/",
      //   method: "GET",
      //   headers: headersList,
      // }

      // axios.request(reqOptions).then(function (response) {
      //   console.log(response.data);
      // })
            
    let headersList = {
      "Accept": "application/json",
      "Authorization": process.env.API_SECRET
     }
     

    let formdata = new FormData();
  formdata.append("expires", "14d");
  formdata.append("maxDownloads", "1");
  formdata.append("autoDelete", "true");
  formdata.append("file", fileName);

  fetch("https://file.io/", { 
    method: "POST",
    body: formdata,
    headers: headersList
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    let link = "<a href='"+ data.link+"'>"+data.name+"</a>"
    document.querySelector(".key").innerHTML = data.key;
    document.querySelector('.link').innerHTML = link;
    document.querySelector("input").value = "";
    document.querySelector("#result").style.visibility = "visible";
    
    alert("File Uploaded Successfully!");
  })
      setLastState(fileName.name);
    };


  return (
<>
    <div className="container">
      <label htmlFor="file">Upload file</label>
      <p></p>
      <span className="inputSpan">
        <input type="file" name="file" id="file" onChange={(e)=>setFileName(e.target.files[0])}/>  
        <button onClick={()=>uploadFile()}>Upload</button>
      </span>
    </div>
    <div className="container" id="result">
      <span>
      <b> key :</b> <span className="key"></span>
      </span>
      <span>
      <b> Link :</b> <span className="link"></span>
      </span>
    </div>
  </>  
  )
}
