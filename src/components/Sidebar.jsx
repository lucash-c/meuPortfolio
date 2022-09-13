import React, { useEffect, useState } from "react";

import Avatar from '../img/lucas.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer.jsx';

const urlToDownloadCV = "https://docs.google.com/document/d/1lh9lM80MAJALs54OL_T36o8QBhsTz7s1/edit?usp=sharing&ouid=111221245165240179954&rtpof=true&sd=true";
const urlToCertificates = "https://drive.google.com/drive/folders/1liVAm5Q25buuZLI1_u3lUlGoTbHn93FM?usp=sharing"
const Sidebar = () => {
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);


  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas" />
      <InformationContainer />
      <button className="btn" onClick={() => {
        window.open(urlToDownloadCV, '_blank');
      }}>Ver Curriculum</button>
      <br />
      <button className="btn" onClick={() => {
        window.open(urlToCertificates, '_blank');
      }}>Ver Certificados</button>

    </aside>
  )
}

export default Sidebar