import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContactForm } from "../actions/contactActions";
import { motion } from "framer-motion";

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contact.loading);
  const success = useSelector((state) => state.contact.success);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to clear form fields
  const clearFormFields = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    if (success) {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2500);
    }
  }, [success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    dispatch(sendContactForm(formData));
    clearFormFields(); // Clear form fields after submission
    setErrorMessage(""); // Clear error message if submission successful
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full">
      <span className="text-gray-400 text-xl lg:text-2xl xl:text-3xl uppercase">
        Contact{" "}
      </span>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-box"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="input-box"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          className="input-box"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        ></textarea>
        <button className="sub-btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
        {errorMessage && (
          <p className="text-sm text-gray-500">{errorMessage}</p>
        )}
        {showSuccessMessage && (
          <p className="text-green-500 text-base">Message sent successfully!</p>
        )}
      </form>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-gray-500 text-sm px-2 text-center"
      >
        Any other queries contact @{" "}
        <a className="text-white" href="mailto:your.email@example.com">
          email@example.com
        </a>
      </motion.span>
    </div>
  );
};

export default ContactForm;
