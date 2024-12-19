'use client';

import { useState } from 'react';

export function SignUpSection() {
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
      const response = await fetch('http://127.0.0.1:8000/newcustomers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitted(true);
      console.log('Form submitted:', formData);
    } catch (error) {
      setError('There was a problem with the submission. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="waitlist" className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Join Our Waitlist</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Be the first to know when we launch. Sign up now to get early access and exclusive updates!
          </p>
          {submitted ? (
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-800">Thank you for joining the waitlist!</h3>
              <p className="text-lg text-green-700">We'll keep you updated with the latest news.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center bg-card p-4 rounded-lg shadow-md ring-1 ring-border">
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4"
                  placeholder="Name"
                  required
                />
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full sm:w-auto"
                  placeholder="Email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Join Waitlist
              </button>
            </form>
          )}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </section>
  );
}