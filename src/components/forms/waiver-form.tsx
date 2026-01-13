'use client';

import { useState } from 'react';

type GuestSignature = {
  name: string;
  signature: string;
  date: string;
};

const MAX_GUESTS = 20;

export function WaiverForm() {
  // Main contact info
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tourDate, setTourDate] = useState('');

  // Guest signatures
  const [guests, setGuests] = useState<GuestSignature[]>([
    { name: '', signature: '', date: new Date().toISOString().split('T')[0] },
  ]);

  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const addGuest = () => {
    if (guests.length < MAX_GUESTS) {
      setGuests([
        ...guests,
        { name: '', signature: '', date: new Date().toISOString().split('T')[0] },
      ]);
    }
  };

  const removeGuest = (index: number) => {
    if (guests.length > 1) {
      setGuests(guests.filter((_, i) => i !== index));
    }
  };

  const updateGuest = (index: number, field: keyof GuestSignature, value: string) => {
    const updated = [...guests];
    updated[index] = { ...updated[index], [field]: value };
    setGuests(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!contactName.trim()) {
      setError('Please provide the main contact name.');
      return;
    }

    if (!email.trim()) {
      setError('Please provide an email address.');
      return;
    }

    if (!tourDate) {
      setError('Please select your tour date.');
      return;
    }

    const hasEmptyGuests = guests.some((g) => !g.name.trim() || !g.signature.trim());
    if (hasEmptyGuests) {
      setError('Please fill in name and signature for all guests.');
      return;
    }

    if (!agreed) {
      setError('Please confirm that you agree to the terms.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waiver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactName,
          email,
          phone,
          tourDate,
          guests,
          guestCount: guests.length,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit waiver');
      }

      setSubmitted(true);
    } catch {
      setError(
        'There was an error submitting your waiver. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-black text-white p-8 md:p-12 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-2xl font-light mb-4">Waiver Submitted Successfully</h3>
        <p className="text-white/70 font-light mb-2">
          Thank you for signing the waiver. A confirmation has been sent to your email.
        </p>
        <p className="text-gold font-light">We look forward to seeing you on the tour!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Main Contact Information */}
      <div className="mb-10 p-6 bg-gray-50 border border-gray-200">
        <h3 className="text-lg font-semibold text-black mb-4">Main Contact Information</h3>
        <p className="text-gray-500 text-sm mb-4">
          Please provide the primary contact details for your group.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Full Name *</label>
            <input
              type="text"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none"
                placeholder="+1 (242) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Tour Date *</label>
            <input
              type="date"
              value={tourDate}
              onChange={(e) => setTourDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Guest Signatures */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-black">Guest Signatures</h3>
          {guests.length < MAX_GUESTS && (
            <button
              type="button"
              onClick={addGuest}
              className="text-gold hover:text-black text-sm font-light underline"
            >
              + Add Another Guest
            </button>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-6">
          Each guest must provide their name, signature (type your full name), and date. Maximum{' '}
          {MAX_GUESTS} guests per form.
        </p>

        <div className="space-y-6">
          {guests.map((guest, index) => (
            <div key={index} className="p-4 border border-gray-200 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold text-sm font-semibold uppercase tracking-wide">
                  Guest {index + 1}
                </span>
                {guests.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeGuest(index)}
                    className="text-gray-400 hover:text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={guest.name}
                    onChange={(e) => updateGuest(index, 'name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none"
                    placeholder="Full legal name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Signature *</label>
                  <input
                    type="text"
                    value={guest.signature}
                    onChange={(e) => updateGuest(index, 'signature', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none italic"
                    placeholder="Type full name as signature"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Date</label>
                  <input
                    type="date"
                    value={guest.date}
                    onChange={(e) => updateGuest(index, 'date', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agreement Checkbox */}
      <div className="mb-8">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 border-gray-300 text-gold focus:ring-gold"
          />
          <span className="text-gray-600 font-light text-sm leading-relaxed">
            I acknowledge that I have read, understood, and agree to the Liability Waiver & Release
            Agreement, the Terms & Conditions, and all policies. I am signing this waiver on behalf
            of myself and/or all guests listed above (if signing for minors or group members).
          </span>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-black text-white font-light tracking-widest uppercase text-sm hover:bg-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Sign & Submit Waiver'}
      </button>

      <p className="text-center text-gray-500 text-xs mt-4">
        By submitting this form, you are electronically signing this waiver agreement.
      </p>
    </form>
  );
}
