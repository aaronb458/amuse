'use client';

import { useState } from 'react';
import Link from 'next/link';

type FAQCategory = {
  title: string;
  questions: { q: string; a: string | React.ReactNode }[];
};

export function FAQSection() {
  const [openIndices, setOpenIndices] = useState<{ [key: string]: number | null }>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}`;
    setOpenIndices((prev) => ({
      ...prev,
      [key]: prev[key] === questionIndex ? null : questionIndex,
    }));
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'General Questions',
      questions: [
        {
          q: 'What exactly is Amuse-Bouche?',
          a: 'Amuse-Bouche (pronounced ah-myooz boosh) comes from the French phrase meaning "to amuse the mouth." It refers to a small, exquisite bite designed to awaken the palate — a chef\'s creative preview of what\'s to come. Our experience captures that same spirit — an indulgent, multi-stop culinary journey designed to surprise, delight, and satisfy.',
        },
        {
          q: 'How long is the tour?',
          a: 'Each tour lasts approximately 5 hours from start to finish, including travel time between restaurants.',
        },
        {
          q: 'How many restaurants will we visit?',
          a: "You'll visit four of Nassau's top restaurants, each hand-selected for its exceptional cuisine, ambiance, and service.",
        },
        {
          q: 'What is included in the ticket price?',
          a: 'Transportation, all food tastings, selected beverage pairings, VIP table reservations, and a guided experience.',
        },
        {
          q: 'Are gratuities included in the price?',
          a: 'No, gratuities are not included unless stated otherwise. Please feel free to tip your escort in cash at the end of the tour.',
        },
        {
          q: 'How should we dress?',
          a: 'Dress is elevated casual or island chic. Comfortable elegance is encouraged — many guests choose to dress stylishly for photos and fine dining.',
        },
        {
          q: 'Is transportation included?',
          a: 'Yes. All transportation is included. We pick your group up at one designated location.',
        },
        {
          q: 'What about minimum and maximum guests?',
          a: 'This activity requires a minimum number of guests to operate. In the unlikely event that the minimum is not met, you will be notified of the cancellation and issued a full refund. The maximum is 36. If you have more, please feel free to reach out and we may be able to make a miracle happen. If the maximum guest capacity is not met, smaller groups may be paired with others.',
        },
      ],
    },
    {
      title: 'Booking & Reservations',
      questions: [
        {
          q: 'Do I need to book in advance?',
          a: 'Yes. Advanced booking is required due to limited seating.',
        },
        {
          q: 'How many people are on each tour?',
          a: 'Tours are intentionally intimate, with 6–10 guests, and a maximum of 12 per vehicle. We can accommodate larger groups.',
        },
        {
          q: 'Can I book a private tour?',
          a: 'Yes. Private tours are available for corporate groups, birthdays, celebrations, and special occasions.',
        },
      ],
    },
    {
      title: 'Food & Drink',
      questions: [
        {
          q: 'How much food is included?',
          a: 'Enough to be considered a full, satisfying meal — many guests leave comfortably full.',
        },
        {
          q: 'Are alcoholic beverages included?',
          a: 'Yes, curated alcoholic pairings are included. Non-alcoholic options are available upon request.',
        },
        {
          q: 'Can you accommodate dietary restrictions?',
          a: "We do our best to accommodate dietary needs when notified in advance, though options may be limited due to chef-selected menus. We will try our best to accommodate you but we cannot alter the chef's recipes. If you have a shellfish allergy, we can have a dish swapped out.",
        },
        {
          q: 'Is this suitable for vegetarians or vegans?',
          a: 'Limited vegetarian options may be available. This tour is not recommended for strict vegan diets.',
        },
      ],
    },
    {
      title: 'Policies',
      questions: [
        {
          q: 'What are your policies?',
          a: (
            <span>
              Please review our complete{' '}
              <Link href="/terms" className="text-gold hover:underline">
                Terms & Conditions
              </Link>
              ,{' '}
              <Link href="/waiver" className="text-gold hover:underline">
                Liability Waiver
              </Link>
              , and policies. By booking, you agree to these terms.
            </span>
          ),
        },
        {
          q: 'What is your cancellation policy?',
          a: 'Cancellations made 1 month in advance will receive a full refund. 2 weeks before: 50% refund. Less than 2 weeks: no refund. Cancellations must be made within the stated timeframe on your booking confirmation. Late cancellations and no-shows are non-refundable.',
        },
        {
          q: 'What happens if it rains?',
          a: 'Tours operate rain or shine. If a tour is canceled due to weather or unforeseen circumstances, this decision is made at our sole discretion; all prepaid tickets will be refunded or rescheduled.',
        },
        {
          q: 'Is there a waiver?',
          a: (
            <span>
              Yes. All guests are required to sign a{' '}
              <Link href="/waiver" className="text-gold hover:underline">
                liability waiver
              </Link>{' '}
              prior to participation. In order to book, you agree to the waiver, policies, and terms
              & conditions.
            </span>
          ),
        },
      ],
    },
    {
      title: 'Special Occasions & Corporate Groups',
      questions: [
        {
          q: 'Do you offer corporate or group bookings?',
          a: 'Yes. Amuse-Bouche is ideal for corporate outings, client entertainment, and team experiences.',
        },
        {
          q: 'Can the tour be customized?',
          a: 'Customization may be available for private bookings.',
        },
      ],
    },
    {
      title: 'Why Choose Amuse-Bouche?',
      questions: [
        {
          q: 'What makes Amuse-Bouche different?',
          a: 'Chef-curated dishes, premium restaurants, intimate group sizes, VIP seating, and a luxury-forward experience designed exclusively for our guests.',
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Questions?</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Frequently Asked Questions</h2>
          <p className="text-white/60 font-light text-lg">
            Everything you need to know about your Amuse-Bouche experience.
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-gold text-sm tracking-widest uppercase font-light mb-6 border-b border-gold/30 pb-3">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => (
                  <div
                    key={questionIndex}
                    className="border border-white/10 hover:border-gold/50 transition-colors duration-300"
                  >
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full p-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h4 className="font-light text-base pr-4">{faq.q}</h4>
                      <span className="text-gold text-xl flex-shrink-0">
                        {openIndices[`${categoryIndex}`] === questionIndex ? '−' : '+'}
                      </span>
                    </button>

                    {openIndices[`${categoryIndex}`] === questionIndex && (
                      <div className="px-5 pb-5 border-t border-white/10 bg-white/5">
                        <p className="text-white/70 font-light leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 p-8 border border-gold/30 bg-gold/5 text-center">
          <p className="text-white/80 font-light mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <p className="text-gold font-light">Call, Text, or WhatsApp: +1 (242) 815-8687</p>
        </div>
      </div>
    </section>
  );
}
