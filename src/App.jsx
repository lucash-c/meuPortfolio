import { useState, useEffect } from 'react';

import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import SocialNetworks from './components/SocialNetworks.jsx';
import './styles/components/app.sass';
import gif from './img/giphy.gif';

function App() {
  const [nome, setNome] = useState("")

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
      <SocialNetworks />
      </nav>
      <div className="ajuste">        
        <div className="inicio">
          <div>
            <span className='apresentacao'>Olá, eu sou </span> <br />
            <span className="meu-nome"
            >
              {nome}
            </span>
            <br />
            <span className='apresentacao'> Desenvolvedor Full Stack</span>
          </div>
          <img src={gif} alt="gif" />
        </div>
      </div>
      <Sidebar />
      <MainContent />
    </div>
  )

}

export default App
