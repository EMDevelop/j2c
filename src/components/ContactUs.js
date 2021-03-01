import React, { useState } from "react";
import './ContactUs.css'
import emailjs from 'emailjs-com';

function ContactUs () {


  const [status, setStatus] = useState("Submit");

  //setStatus("Sending...");

  function sendEmail(e) {
    setStatus("Sending...");
    e.preventDefault();

    emailjs.sendForm('service_xqey9j7', 'template_iaj6ueg', e.target, 'user_mDTAtWfAVpmZRWrpjPBaB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    alert('Thanks for getting in touch, our team will reach out to you');
    setStatus("Sent!");
  }




        return (
            <>
            
                    <div class = "shadow-lg" className="formContainer">
                        <h1>Contact Us</h1>
                                
                                <form onSubmit={sendEmail}>
                                    
                                <div className = 'formItem'>
                                        <input className='input' type="text" id="name" required placeholder="Your Name" name="name"/>
                                </div>
                                <div className = 'formItem'>
                                        <input className='input'  type="email" id="email" required placeholder="Your Email" name="email" />
                                </div>
                                <div className = 'formItem'>
                                        <textarea className ="textArea" id="message" required placeholder="Optional short message" name="message"/>
                                </div>

                                  <button className = 'submitButton' type="submit">{status}</button>

                                </form>

                    </div>
            </>
        )
 }

export default ContactUs
