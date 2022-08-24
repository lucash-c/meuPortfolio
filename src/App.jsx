import { useState, useEffect } from 'react';

import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import SocialNetworks from './components/SocialNetworks.jsx';
import './styles/components/app.sass';
import gif from './img/giphy.gif';
import MenuMobile from './components/MenuMobile';

function App() {
  const [nome, setNome] = useState("");
  const typeWriter = (name) => {

    setTimeout(() => {
      setNome("");
      var novoNome = ""
      const meuNomeF = name.split('');
      meuNomeF.forEach((letra, index) => {

        setTimeout(() => {
          setNome(novoNome += letra);
        }, 150 * index)
      })
    }, 1500)
  }
  useEffect(() => {
    typeWriter("Lucas Campos.");
  }, [])

  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="mobile"><MenuMobile /></div>
        <SocialNetworks />
      </nav>
      <div className="ajuste">
        <div className="inicio">
          <div className="apresentacao">
            <span >Olá, eu sou </span> <br />
            <span className="meu-nome" > {nome}</span>
            <br />
            <span > Desenvolvedor Full Stack</span>
          </div>
          <img src={gif} alt="gif" />
        </div>
      </div>

      <div className="content">
        <div className='side'><Sidebar /></div>
        <MainContent />
      </div>
    </div>
  )
}

export default App
