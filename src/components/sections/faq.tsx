'use client';

import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What exactly is Amuse-Bouche?',
      a: 'Amuse-Bouche (pronounced ah-myooz boosh) comes from the French phrase meaning "to amuse the mouth." It refers to a small, exquisite bite designed to awaken the palate — a chef\'s creative preview of what\'s to come. Our experience captures that same spirit — an indulgent, multi-stop culinary journey designed to surprise, delight, and satisfy.',
    },
    {
      q: 'How long is the tour?',
      a: 'Each private tour lasts approximately 3½ hours from start to finish, including travel time between restaurants.',
    },
    {
      q: 'How many restaurants will we visit?',
      a: "You'll visit four of Nassau's top restaurants, each hand-selected for its exceptional cuisine, ambiance, and service.",
    },
    {
      q: "What's included in the experience?",
      a: 'Your Amuse-Bouche tour includes: Three signature dishes at each restaurant, Paired drinks (where applicable), Private transportation with front-door pickup and drop-off, Reserved VIP tables at every stop, and A professional host to guide you throughout the experience.',
    },
    {
      q: 'How many people can join?',
      a: 'Tours are private and limited to 12 guests maximum, ensuring an intimate and personalized experience.',
    },
    {
      q: 'Can dietary restrictions be accommodated?',
      a: "Yes — please let us know about any allergies or restrictions when booking. We'll coordinate with each restaurant in advance to ensure your comfort and enjoyment.",
    },
    {
      q: 'How should we dress?',
      a: 'Dress is elevated casual or island chic. Comfortable elegance is encouraged — many guests choose to dress stylishly for photos and fine dining.',
    },
    {
      q: 'Is transportation included?',
      a: 'Yes. All transportation is included, with front-door pickup and drop-off provided for your group.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Questions?</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Frequently Asked Questions</h2>
          <p className="text-white/60 font-light text-lg">
            Everything you need to know about your Amuse-Bouche experience.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 hover:border-gold/50 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="font-light text-lg pr-4">{faq.q}</h3>
                <span className="text-gold text-xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-white/10 bg-white/5">
                  <p className="text-white/70 font-light leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
