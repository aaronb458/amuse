import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { DetailsSection } from '@/components/sections/details';
import { WhySection } from '@/components/sections/why';
import { BookingSection } from '@/components/sections/booking';
import { PrepareSection } from '@/components/sections/prepare';
import { FAQSection } from '@/components/sections/faq';
import { FooterSection } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <DetailsSection />
      <WhySection />
      <PrepareSection />
      <BookingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
