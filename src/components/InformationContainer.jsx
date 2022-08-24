import { AiFillEnvironment, AiOutlineWhatsApp } from 'react-icons/ai'
import { MdPhoneIphone, MdAlternateEmail } from 'react-icons/md'

import '../styles/components/informationcontainer.sass';

const informationContainer = () => {

const handleWhatsapp = ()=> {  
  window.open('https://wa.me/5519991414411','_blank')
}

const handlePin = () => {
  window.open('https://www.google.com/maps/place/Antonio+Zanaga+I,+Americana+-+SP/@-22.7003218,-47.300554,15z/data=!4m5!3m4!1s0x94c89a7f81cafc3d:0xa6e929c0403ee183!8m2!3d-22.7004578!4d-47.2936113','_blank')
}
  return (
    <section id="information">
      <div className="info-card">
        <div id="double-icons">
          <MdPhoneIphone id="phone-icon" />
          <AiOutlineWhatsApp onClick={() => {handleWhatsapp()}} id="whats-icon" />
        </div>
        <div>
          <h3>Celular / Whatsapp</h3>
          <p>(19)99141-4411</p>
        </div>

      </div>

      <div className="info-card">
        <MdAlternateEmail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p id="email">lucash_c@yahoo.com.br</p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment onClick={() => {handlePin()}} id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Americana - SP</p>
        </div>
      </div>
    </section>
  )
}

export default informationContainer