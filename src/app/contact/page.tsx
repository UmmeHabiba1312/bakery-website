import React from 'react'
import './contact.css'
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
  return (
    <main className="contact-container">
        <h1 className="contact-title">Get In <span>Touch</span></h1>
        <p className="contact-description">We are here to help! Whether you have a question or just want to say hello, feel free to reach out to us.</p>

        <div className="contact-content">
            {/* <!-- Contact Information Section --> */}
            <div className="contact-info">
                <h2>Contact Info</h2>
                <div className="info-item">
                    <i className="icon"><FaPhoneVolume /></i>
                    <div className='infocont'>
                        <p className='maincont'>Phone:</p>
                        <p className='cont'>03072502073</p>
                    </div>
                </div>
                <div className="info-item">
                    <i className="icon"><MdEmail /></i>
                    <div className='infocont'>
                        <p className='maincont'>Email:</p>
                        <p  className='cont'>{'Ummehabiba1312@gmail.com'}</p>
                    </div>
                </div>
                <div className="info-item">
                    <i className="icon"><FaLocationDot /></i>
                    <div className='infocont'>
                        <p  className='maincont'>Address:</p>
                        <p className='cont'>123 Street, Karachi, Pakistan</p>
                    </div>
                </div>
            </div>

            {/* <!-- Contact Form Section --> */}
            <form className="contact-form">
                <div className="form-group">
                    <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    </main>
  )
}

export default Contact