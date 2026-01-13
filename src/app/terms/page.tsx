import Link from 'next/link';
import { FooterSection } from '@/components/sections/footer';

export const metadata = {
  title: 'Terms & Conditions | Amuse-Bouche',
  description: 'Terms and conditions for Amuse-Bouche Food Tours in Nassau, The Bahamas.',
};

export default function TermsPage() {
  return (
    <>
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-black text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Legal</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6">Terms & Conditions</h1>
            <p className="text-white/60 font-light text-lg">Amuse-Bouche Food Tour</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                By booking or participating in an Amuse-Bouche food tour, you (&quot;Guest&quot;)
                acknowledge that you have read, understood, and agree to the following Terms &
                Conditions.
              </p>

              <div className="bg-gray-50 p-6 mb-8 border-l-4 border-gold">
                <p className="text-gray-700 font-light leading-relaxed mb-4">
                  A confirmation will be emailed to you. This does not have to be printed but the
                  credit card used and matching identification should be presented upon arrival.
                </p>
                <p className="text-gray-700 font-light leading-relaxed mb-4">
                  Please arrive 15 minutes prior to your scheduled departure time. This ticket
                  expires 10 minutes after your scheduled departure time and is only valid for the
                  specified charter. Rebooking is subject to availability and additional fees will
                  apply (however, smiles from our crew are free).
                </p>
                <p className="text-gray-700 font-light leading-relaxed mb-4">
                  This booking is intended for the sole use of the purchaser and may not be
                  transferred or resold. Amuse-Bouche reserves the right to cancel tours without
                  notice or refuse to board any passenger for safety or other reasons. If there is
                  unsafe weather, maintenance issues, or an emergency arises, or unforeseen
                  circumstances we do have a right to cancel without notice with good cause.
                </p>
                <p className="text-gray-700 font-semibold leading-relaxed mb-4">
                  ***Tickets have no cash value and are non-refundable.
                </p>
                <p className="text-gray-700 font-light leading-relaxed uppercase">
                  Schedules are subject to change without notice. All children under 18 must be
                  accompanied by an adult on all charters.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">1.</span> Eligibility & Participation
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>
                      Tours are open to all over 10 years. Alcohol will only be served to persons 18
                      years and older.
                    </li>
                    <li>Valid photo ID may be required.</li>
                    <li>Participation is voluntary and at the Guest&apos;s own risk.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">2.</span> Reservations & Payment
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Advance reservations are required.</li>
                    <li>Full payment is required at booking unless otherwise stated.</li>
                    <li>Prices are per person and subject to change.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">3.</span> Cancellations, Refunds & No-Shows
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Cancellations made 1 month in advance will receive a full refund.</li>
                    <li>Cancellations made 2 weeks before will receive a 50% refund.</li>
                    <li>Cancellations made less than 2 weeks before will receive no refund.</li>
                    <li>Late cancellations and no-shows are non-refundable.</li>
                    <li>Tours operate rain or shine.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">4.</span> Food, Alcohol & Dietary Restrictions
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Tastings and beverage pairings are included unless stated otherwise.</li>
                    <li>Dietary restrictions must be disclosed at booking.</li>
                    <li>Amuse-Bouche cannot guarantee allergen-free environments.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">5.</span> Alcohol Consumption
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Alcohol is served only to guests of legal drinking age of 18 years old.</li>
                    <li>Amuse-Bouche may refuse service without refund.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">6.</span> Transportation
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Transportation is provided where stated.</li>
                    <li>Amuse-Bouche is not responsible for lost personal items.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">7.</span> Conduct & Behavior
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Guests must behave respectfully.</li>
                    <li>Unsafe behavior may result in removal without refund.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">8.</span> Liability & Assumption of Risk
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Guests assume all risks associated with participation.</li>
                    <li>A waiver of liability is required prior to participation.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">9.</span> Photography & Media
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Photos/videos may be taken for promotional use.</li>
                    <li>Guests may opt out in writing prior to the tour.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">10.</span> Changes & Modifications
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Restaurants, menus, and schedules may change without notice.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">11.</span> Intellectual Property
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>All branding and content are property of Amuse-Bouche.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">12.</span> Governing Law
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Governed by the laws of The Commonwealth of The Bahamas.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light text-black mb-4 flex items-center gap-3">
                    <span className="text-gold">13.</span> Acceptance of Terms
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4">
                    <li>Booking confirms acceptance of these Terms & Conditions.</li>
                  </ul>
                </div>
              </div>

              {/* Privacy Policy Section */}
              <div className="mt-16 pt-16 border-t border-gray-200">
                <h2 className="text-3xl font-light text-black mb-8">Privacy Policy</h2>

                <h3 className="text-xl font-light text-black mb-4">Online Privacy Statement</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  The following statement explains how the web sites operated by Amuse-Bouche may
                  collect and use your personal identifiable information. These Web sites include
                  www.amusebouchetours.com, www.mybahamastours.com; and others.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">The Basic Principle</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  We will never intentionally disclose your personally identifiable information to
                  any third party for their use without first receiving your express permission. We
                  will not send you an e-mail unless you have requested it or unless it&apos;s in
                  the course of a transaction you have initiated.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">Free To Use</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  You can access our Web sites free of charge. Sometimes we will ask you to submit
                  minimal personal identifiable information before accessing them.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">
                  When do we collect your personal identifiable information?
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  You must provide some personal identifiable information in order to use some
                  features of our Web sites. Some examples:
                </p>
                <ul className="list-disc list-inside text-gray-600 font-light leading-relaxed space-y-2 ml-4 mb-6">
                  <li>
                    Signing up for e-mail services such as, status alerts, newsletters, and e-mail
                    alerts
                  </li>
                  <li>Participating in online sweepstakes, contests, and games</li>
                  <li>Purchasing items such as event tickets</li>
                  <li>Participating in an online survey</li>
                </ul>

                <h4 className="text-lg font-semibold text-black mb-3">
                  What personal identifiable information do we collect?
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  The information we collect for services such as these will vary, but can include
                  your name, address, zip code, gender, user name, password, e-mail address and
                  phone number. We also collect credit card information for purchases. Wherever we
                  collect personal identifiable information, we will make an effort to provide a
                  link to our privacy statement.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">
                  Who else has access to your personal identifiable information?
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Third-party technology providers: In some cases, the service you sign up for is
                  provided by a third-party technology or content provider. When you use these
                  third-party services offered on our sites, personal identifiable information you
                  provide may be collected directly by these third parties solely in order to
                  deliver the services you have requested. These third-party partners may not use or
                  distribute our users&apos; information in any capacity outside of the service for
                  which we contracted and they must comply with our privacy policies. Some examples
                  of third-party technology partners: Google, which provides us with maps and
                  in-bound advertising.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">
                  How do we use site usage statistics?
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Amuse-Bouche collects some information automatically via server logs and cookies.
                  This information can include your IP address, browser type, domain names, access
                  times and referring URLs. We use this information to prepare for peak usage times
                  and ensure a fast-loading site, to help diagnose problems with our servers and to
                  understand which features of our sites are being used and when.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">
                  How do we use cookies and web beacons?
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  A cookie is a small file that stores information in your browser on your computer.
                  Amuse-Bouche places cookies in your browser that contain some of the information
                  you provide when you register with us, when you enter a coupon code or respond to
                  special advertising. We do not store highly sensitive personal information such as
                  your password, e-mail address or credit card number in cookies. Cookies enable us
                  to summarize overall usage patterns for our analysis. In addition, we use cookies
                  to provide personalized services such as showing special discounts available to
                  specific users. We also use cookies to provide a more useful online experience. A
                  web beacon is an invisible graphic on a web page that is programmed to collect
                  non-personally identifiable information about your use of a given site. Like
                  cookies, web beacons allow Amuse-Bouche and its technology providers to summarize
                  overall usage patterns for our analysis and provide personalized services. We do
                  not share or provide personally identifiable information we may collect, such as
                  names, e-mail addresses and phone numbers with our advertisers without your
                  express permission. You may opt-out of the cookies delivered by Amuse-Bouche by
                  changing the setting on your browser. Depending on your privacy settings, please
                  be aware that this may disable all cookies delivered to your browser, not just the
                  ones delivered by Amuse-Bouche. You may also not be able to use all features on
                  our website.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">
                  Disclosures required by law or for security and safety
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Regardless of your choices with respect to your information, Amuse-Bouche will
                  disclose personal identifiable information when it believes in good faith that
                  such disclosures are (a) required by law, including, for example, to comply with a
                  court order or subpoena, or (b) will help enforce our terms of use, protect your
                  safety or security and/or protect the safety and security of Amuse-Bouche, our Web
                  sites, our property, or our employees; or (c) to protect the safety or security of
                  third parties.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">
                  Notification of Policy Changes
                </h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  We retain the right, at our discretion, to change any of these policies in the
                  future. Our current procedures will be disclosed on this page. Except for
                  information that is subject to the Amuse-Bouche Privacy Policy, Amuse-Bouche will
                  not treat information you post or transmit to the Website as confidential or
                  proprietary. By sending information to Amuse-Bouche through the Website (by
                  transmitting, posting, or otherwise), you agree that Amuse-Bouche may use that
                  information in any way, for any purpose, including Amuse-Bouche&apos;s own
                  commercial purposes, subject only to the Amuse-Bouche Privacy Policy.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">Links</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Our Website contains links to other sites operated by unrelated third parties.
                  Please note that we are not responsible for the privacy practices of third party
                  websites. We encourage you to be aware of this when you leave our Website and to
                  read the privacy policies of every website that collects personally identifiable
                  information from you. The Privacy Policy applies only to this Website.
                </p>

                <h4 className="text-lg font-semibold text-black mb-3">Contact Us</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-2">
                  If you have questions or concerns about this Privacy Policy, you can contact us
                  at:
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Amuse-Bouche, SS-19731, Nassau, Bahamas
                  <br />
                  Call us at +1 (242) 815-8687 or send an email to amusebouchetours@gmail.com.
                </p>
              </div>

              {/* Back Link */}
              <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-black text-white font-light tracking-widest uppercase text-sm hover:bg-gold transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
