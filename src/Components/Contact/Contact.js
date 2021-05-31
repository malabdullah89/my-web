import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
           <h3 className='phone-number'> 
           <span className="w-icon"><FaWhatsapp /></span><a className="call-link" href="tel: +96562224131">+965 62224131</a>
           <span className="e-icon"><FaEnvelope /></span> <a className="email-title">hello@mohmdev.com</a>  </h3>
        </div>
    )
}

export default Contact;