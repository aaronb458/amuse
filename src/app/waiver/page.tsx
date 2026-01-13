import { FooterSection } from '@/components/sections/footer';
import { WaiverForm } from '@/components/forms/waiver-form';

export const metadata = {
  title: 'Liability Waiver | Amuse-Bouche',
  description:
    'Liability waiver and release agreement for Amuse-Bouche Food Tours in Nassau, The Bahamas.',
};

export default function WaiverPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-black text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Legal</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Liability Waiver & Release Agreement
            </h1>
            <p className="text-white/60 font-light text-lg">Amuse-Bouche Food Tour</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-gray max-w-none mb-16">
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                This Liability Waiver & Release Agreement (&quot;Agreement&quot;) is between Life
                Like Locals T/A Amuse-Bouche (&quot;the Company&quot;) and the undersigned
                participant (&quot;Guest&quot;) for participation in the Amuse-Bouche Food Tour
                (&quot;Tour&quot;), including transportation, walking, dining, drinking, and all
                related activities.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 border-l-4 border-gold">
                  <h2 className="text-xl font-semibold text-black mb-4">
                    Voluntary Participation & Assumption of Risk
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    I understand that participating in the Tour is voluntary and involves inherent
                    risks, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>
                      <strong>Food & Beverage Risks:</strong> allergies, intolerances,
                      cross-contamination, illness, choking, alcohol-related impairment.
                    </li>
                    <li>
                      <strong>Physical & Environmental Risks:</strong> slips, trips, falls, uneven
                      surfaces, weather, steps/curbs, entering/exiting vehicles.
                    </li>
                    <li>
                      <strong>Transportation Risks:</strong> vehicle movement, road hazards,
                      accidents.
                    </li>
                  </ul>
                  <p className="text-gray-700 font-semibold mt-4">
                    I voluntarily assume all such risks, known or unknown.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">
                    Allergies, Medical Conditions & Dietary Restrictions
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    I understand the Company:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4 mb-4">
                    <li>Does not prepare the food served</li>
                    <li>Cannot guarantee allergen-free dishes or prevent cross-contamination</li>
                  </ul>
                  <p className="text-gray-600 font-light leading-relaxed">
                    I agree it is my responsibility to disclose all allergies, medical conditions,
                    and dietary restrictions before the Tour. I release the Company from liability
                    for any allergic reaction or medical incident related to undisclosed or
                    unavoidable risks.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Alcohol Consumption</h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    If I choose to consume alcohol, I confirm that:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>I am 18 years or older</li>
                    <li>I drink voluntarily and accept full responsibility for my actions</li>
                    <li>I will comply with all alcohol laws</li>
                    <li>
                      The Company may refuse service or end my participation if I appear intoxicated
                      or unsafe.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Transportation</h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    I understand the Tour involves travel in a company-operated vehicle. I agree to
                    follow all safety instructions, including wearing seatbelts when provided.
                  </p>
                </div>

                <div className="bg-black text-white p-6">
                  <h2 className="text-xl font-semibold mb-4">Release of Liability</h2>
                  <p className="font-light leading-relaxed mb-4">
                    In exchange for participation, I release and hold harmless the Company, its
                    owners, employees, contractors, drivers, affiliates, and partner restaurants
                    from all claims, damages, injuries, losses, or expenses arising from:
                  </p>
                  <ul className="list-disc list-inside font-light leading-relaxed space-y-2 ml-4">
                    <li>Food or alcohol consumption</li>
                    <li>Allergic reactions</li>
                    <li>Transportation incidents</li>
                    <li>Slips, falls, or injuries during the Tour</li>
                    <li>Loss or damage to personal property</li>
                  </ul>
                  <p className="font-light mt-4 text-gold">
                    This release applies to the fullest extent permitted by Bahamian law.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Indemnification</h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    I agree to indemnify the Company for any claims or expenses (including legal
                    fees) resulting from my actions, negligence, or violation of this Agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Photography Release</h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    I grant permission for the Company to use photos/videos of me from the Tour for
                    marketing purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Health Certification</h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    I certify that I am physically able to participate and will notify staff if I
                    feel unwell or unsafe.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">
                    Governing Law & Severability
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    This Agreement is governed by the laws of The Commonwealth of The Bahamas. If
                    any part is found invalid, the remaining sections remain in effect.
                  </p>
                </div>
              </div>
            </div>

            {/* Waiver Form */}
            <div className="border-t-2 border-gold pt-16">
              <h2 className="text-3xl font-light text-black mb-4 text-center">Sign the Waiver</h2>
              <p className="text-gray-600 font-light text-center mb-8 max-w-2xl mx-auto">
                By signing below, I acknowledge that I have read, understood, and agree to the terms
                of this Agreement.
              </p>
              <WaiverForm />
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
