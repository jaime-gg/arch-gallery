import React, { useState } from 'react';
import './style.css'


function Contact() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleInputChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    return (
        <section id="contact" className="container">
            <div className="section-title">
                <h2>Contact Me</h2>
            </div>

            <div className="contact" data-aos="fade-in">
                <form className="php-email-form">
                    <div className="col-md-8 form-row justify-content-center">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input onBlur={handleInputChange} defaultValue={name} type="text" name="name" className="form-control" id="name" />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="name">Your Email</label>
                            <input onBlur={handleInputChange} defaultValue={email} type="email" className="form-control" name="email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Message</label>
                            <textarea onBlur={handleInputChange} defaultValue={message} className="form-control" name="message" rows="8" ></textarea>
                        </div>

                        <div className="text-center"><button type="submit" onClick={handleFormSubmit}>Send Message</button></div>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Contact;