import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/lucas-henrique-de-campos-9763a7142/" },
  { name: "github", icon: <FaGithub />, href:"https://github.com/lucash-c"},
  { name: "instagram", icon: <FaInstagram />, href: "https://www.instagram.com/lucash_campos/" },
]
const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.href} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks