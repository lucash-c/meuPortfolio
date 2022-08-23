import React, { useEffect, useState } from "react";

import Avatar from '../img/lucas.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer.jsx';

const urlToDownload = "https://docs.google.com/document/d/1lh9lM80MAJALs54OL_T36o8QBhsTz7s1/edit?usp=sharing&ouid=111221245165240179954&rtpof=true&sd=true";

const Sidebar = () => {
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);
  

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas" />
      <InformationContainer />
      <button  className="btn" onClick={() => {
        window.open(urlToDownload,'_blank');        
      }}>Ver Curriculum</button>

    </aside>
  )
}

export default Sidebar