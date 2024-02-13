// src/components/ContactForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendContactForm } from '../actions/contactActions';



const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contact.loading);
  const success = useSelector((state) => state.contact.success);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
  }; 

  return (
    <div className="flex flex-col gap-8 items-center justify-center  p-8 ">

 <span>Contact Us</span>

    <form className="form " onSubmit={handleSubmit}>
      <input className="input-box" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input  className="input-box" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <textarea  className="input-box" name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
      <button className="submit-btn" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Submit'}</button>
      {success && <p>Message sent successfully!</p>}
    </form>
    </div>
  );
};

export default ContactForm;
