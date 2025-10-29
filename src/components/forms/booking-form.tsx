'use client';

import { useState } from 'react';

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="group">
            <label
              htmlFor="name"
              className="block text-xs tracking-widest uppercase text-gold mb-2 font-light"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-black focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-light"
              placeholder="Jane Doe"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-xs tracking-widest uppercase text-gold mb-2 font-light"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-black focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-light"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div className="group">
            <label
              htmlFor="phone"
              className="block text-xs tracking-widest uppercase text-gold mb-2 font-light"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-black focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-light"
              placeholder="+1 (242) 555-0100"
            />
          </div>

          {/* Date Field */}
          <div className="group">
            <label
              htmlFor="date"
              className="block text-xs tracking-widest uppercase text-gold mb-2 font-light"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-black focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 font-light"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-12 py-4 bg-black text-white hover:bg-gold hover:text-black font-light tracking-widest uppercase text-sm transition-all duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Reserve Your Experience'}
          </button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-center font-light">
            Thank you! We'll be in touch soon to confirm your reservation.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-center font-light">
            Something went wrong. Please try again or call us at 242-815-8687.
          </div>
        )}
      </form>
    </div>
  );
}
