'use client';

import React, { useState } from 'react';
import styles from './SignUpSection.module.css';

const SignUpSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in both sections.');
      return;
    }
    setError('');

    try {
      const response = await fetch('https://faststack-backend.onrender.com/api/newcustomers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setError('');
      } else {
        setError('There was a problem with the submission. Please try again.');
      }
    } catch (error) {
      setError('There was a problem with the submission. Please try again.');
    }
  };

  return (
    <section id="join-our-waitlist" className={styles.signupSection}>
      <h2 className="text-3xl font-bold text-center mb-4">Join Our Waitlist</h2>
      <p className="text-lg text-muted-foreground mb-6 text-center">
        Be the first to know when we launch. Sign up now to get early access and exclusive updates!
      </p>
      {submitted ? (
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-green-800">Thank you for joining the waitlist!</h3>
          <p className="text-lg text-green-700">We'll keep you updated with the latest news.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="form-control">
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered"
              placeholder="Email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Join Waitlist
          </button>
        </form>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </section>
  );
};

export default SignUpSection;