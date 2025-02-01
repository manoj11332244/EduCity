import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  const [result, setResult] = useState("")

  const submitForm = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "038fd4fd-6617-4a1e-8833-b70215dff076");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact container'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />abc@gmail.com</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={submitForm}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='+1(234)-(123)-1234' required />
          <label>Write your messages here</label>
          <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
          <button className='btn dark-btn' type='submit'>submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact