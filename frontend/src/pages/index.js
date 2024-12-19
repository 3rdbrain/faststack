require('dotenv').config();

import { HeroSection } from '@/components/Hero';
import { FeaturesSection } from '@/components/Features';
import { TemplatesSection } from '@/components/Templates';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SignUpSection } from '@/components/SignUpSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <SignUpSection />
      <Footer />
    </main>
  );
}