import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
           <h3 className='phone-number'> <FaWhatsapp /> <a className="call-link" href="tel:+965 62224131">+965 62224131</a>  </h3>
        </div>
    )
}

export default Contact;