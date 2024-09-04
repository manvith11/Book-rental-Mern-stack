import React, { useState } from 'react';
import './ContactusPage.css'
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar'
import axios from 'axios'
import Footer from '../../Components/Footer/Footer';


const ContactusPage = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            feedback: ''
        })
    
        const { name, email, feedback } = formData;
    
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try
            {
                await axios.post('http://localhost:3000/api/v1/contact/submitFeedback', formData);
                alert('Feedback Submitted Successfully')
    
                setFormData({
                    name: '',
                    email: '',
                    feedback: ''
                });
            } catch(error) {
                console.error("Error Submitting", error)
                alert(`Error Submitting feedback, ${error}`);
            }
        };

    return (<div>
        <Helmet>
                <title>Feedback Form</title>
            </Helmet>
            <Navbar/>
            <h1 className='contact-title'>CONTACT US</h1>
            <div>
                <form onSubmit={handleSubmit} className='form1'>
                    <input type="text" name="name" id="name" className='name'value={name} placeholder='Enter Name' onChange={handleChange} required/> <br />
                    <input type="email" name="email" id="email" className='email' placeholder='Enter Email' value={email} onChange={handleChange} required /><br />
                    <textarea placeholder='Enter Feedback' name='feedback' className='feedback'value={feedback} id='feedback' onChange={handleChange} required></textarea>
                    <input type="submit" className='submit' value="SUBMIT" name='submit' id='submit' />
                </form>
            </div>
    </div>);
}


export default ContactusPage;