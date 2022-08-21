import { useState } from 'react'
import '../styles/contact.css'
import Footer from '../components/Footer'

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const { name, surname, email, subject, message } = contact;

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(message)
  }

  return (
    <>
      <div className="contact-container">
        <h1>Get In Touch</h1>
        <div className="contact-wrapper">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className='fullname'>
                <input type="text" name='name' value={name || ''} placeholder='Name' onChange={handleChange} required={true} />
                <input type="text" name='surname' value={surname || ''} placeholder='Surname' onChange={handleChange} required={true} />
              </div>
              <input className='email' type="email" name='email' value={email || ''} placeholder='Email' onChange={handleChange} required={true} />
              <input className='subject' type="subject" name='subject' value={subject || ''} placeholder='Subject' onChange={handleChange} required={true} />
              <textarea cols="30" rows="10" className='message' name='message' minLength='3' maxLength='200' value={message} onChange={handleChange} required={true} ></textarea>
              <button>Send Message</button>
            </form>
          </div>
          <div className='addresses'>
            <div className='address-1'>
              <h3>Pretoria</h3>
              <p>123 Mengolin Street, Guateng, South Africa</p>
            </div>
            <div className='address-2'>
              <h3>Bloemfontein</h3>
              <p>13 Lang Street, Free State, South Africa</p>
            </div>
            <div className='address-3'>
              <h3>Durban</h3>
              <p>12 Verkeer Street, KwaZulu-Natal, South Africa</p>
            </div>

          </div>
        </div>

      </div>
     

      {/* <Footer /> */}
    </>

  )
}

export default Contact