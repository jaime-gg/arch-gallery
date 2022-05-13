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
        </section>
    )
}

export default Contact;