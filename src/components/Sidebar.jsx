import React, { useEffect, useState } from "react";

import Avatar from '../img/lucas.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer.jsx';

const urlToDownload = "https://speed.hetzner.de/100MB.bin";

const Sidebar = () => {
  const [download, setDownload] = useState("");
  const [count, setCount] = useState(0);
  

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas" />
      <InformationContainer />
      <button  className="btn" onClick={() => {
        setDownload(urlToDownload);
        setCount((old) => old + 1);
        
      }}>Baixar Curriculum</button>

      {download && (
        <iframe
          src={download + "?c=" + count}
          style={{ display: "none" }}
        ></iframe>
      )}

    </aside>
  )
}

export default Sidebar