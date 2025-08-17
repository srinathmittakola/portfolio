import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://github.com/srinathmittakola"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mittakola-srinath-b7a55a235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/7574077947"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <p>© 2025 Srinath Mittakola. All rights reserved.</p>

      </footer>
    </>
  )
}
