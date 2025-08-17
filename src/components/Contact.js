import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(
      'service_q9jj0sf',      
      'template_jv7f9zr',    
      form.current,
      'fhRZ3oB7MBzXjXrMA'         
    )
    .then((result) => {
      setStatus({ 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      form.current.reset();
    }, (error) => {
      setStatus({ 
        success: false, 
        message: 'Failed to send message. Please email me directly at your@email.com' 
      });
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="from_name" 
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            name="from_email" 
            placeholder="Your Email" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required
            rows="5"
            
          ></textarea>
          <button 
            type="submit" 
            disabled={isSending}
            className={isSending ? 'sending' : ''}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <div className={`status ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
