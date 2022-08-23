import "../styles/components/projectscontainer.sass"

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <ul>
      <h3>Barbearia - Java / Swing</h3>
        <li>
           Projeto criado em um curso de java feito através do youtube no canal "While True", consiste em um sistema para agendamentos de serviços de barbearia. Foi utilizado Java e banco de dados MySql.
        </li>
        <h3>Estacionamento de Shopping - Java / Swing</h3>
        <li>
           Projeto acadêmco de TCC 1, consiste em um sistema para administradores de estacionamentos de shopping monitorar vagas disponíveis, mostrando ao usuário no momento de sua entrada, em qual vaga ele deverá estacionar. Foi utilizado Java e MySql.
        </li>
        <h3>Estacionamento de Shopping 2 - Java / Spring Boot (back-end) e  Vue.Js / Quasar (front-end)</h3>
        <li>
          Projeto acadêmico de TCC 2, trata-se de uma melhoria utilizando a mesma ideia do TCC 1, porém como um app web, com um design mais bonito, utilizando tecnologias mais atuais como Spring Boot, Vue.js e Quasar.
        </li>
        <h3>Jogo das palavras - React</h3>
        <li>
          Projeto realizado em um curso de React do Matheus Battisti do canal do youtube "Hora de Codar". Trata-se de um jogo de advinhar as palavras, parecido com os de programas de tv. Foi utilizado React e CSS.
        </li>
        <h3>Miniblog - Firebase (back-end) / React (front-end) </h3>
        <li>
        Projeto realizado em um curso de React do Matheus Battisti do canal do youtube "Hora de Codar". Trata-se de um miniblog que foi criado com React, React Router, Hooks, Context, CSS, Firebase e Autenticação.
        </li>
        <h3>ReactGram - Node.js (back-end) / React (front-end)</h3>
        <li>
        Projeto realizado em um curso de React do Matheus Battisti do canal do youtube "Hora de Codar". Trata-se de uma mini-réplica do instagram, onde foi utilizado React, Redux, MongoDB, Mongoose, CSS, Autenticação, node.js e express.
        </li>
        <h3>Meu portfólio - React</h3>
        <li>
         Trata-se desta mesma pagina onde estás agora, foi utilizado React e Sass.
        </li>
      </ul>
     
      <button onClick={()=>(window.open('https://github.com/lucash-c?tab=repositories','_blank'))}  className="btn">Ver Projetos</button>
    </section>
  )
}

export default ProjectsContainer
