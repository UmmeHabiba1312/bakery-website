import React from 'react'
import './footer.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-about">
            <h3>About Us</h3>
            <p>Your one-stop bakery for fresh, artisanal breads and pastries, made with love and quality ingredients.</p>
        </div>
        <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <Link className='Link' href="/">Home</Link>
                <Link className='Link' href="/about">About</Link>
                <Link className='Link' href="contact">Contact</Link>
            </ul>
        </div>
        <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Address: 123 Bakery St, Karachi, Pakistan</p>
            <p>Phone: (0307) 250-2073</p>
            <p>Email: Ummehabiba1312@gmail.com</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Your Bakery. All Rights Reserved.</p>
    </div>
</footer>

  )
}

export default Footer