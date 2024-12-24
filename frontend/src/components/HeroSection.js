import React from 'react';
import styles from './HeroSection.module.css';
import { ArrowRight } from 'lucide-react';
import { SiNextdotjs, SiTailwindcss, SiStripe, SiSupabase } from 'react-icons/si';

const HeroSection = () => {
  return (
    <div className={styles.background}>
      <div className="mx-auto max-w-7xl px-6 pt-10 sm:pt-16 lg:pt-20 lg:px-8 lg:pb-24">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between w-full">
          <div className="max-w-2xl lg:max-w-xl lg:pt-8 flex-1">
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Generate Production-Ready APIs in Hours not Days
            </h1>
            <p className="mt-4 text-xl leading-8 text-muted-foreground">
              Skip the boilerplate. Get a fully configured FastAPI project with authentication,
              database setup, and best practices - ready for production.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start gap-x-6">
              <a 
                href="#waitlist" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:ml-10 lg:mr-0 max-w-3xl flex-none sm:max-w-5xl lg:max-w-none flex-1">
            <div className="rounded-xl bg-card p-12 ring-1 ring-border">
              <pre className="text-lg text-card-foreground">
                <code>{`# Generate your API with a single command
npx create-fastapi-app my-api

✨ Your API is ready!
  🔐 Authentication & user management
  💳 Stripe subscription ready
  🗄️ Database & migrations configured
  💻 VS Code development tools
  📚 API documentation
  🚀 Docker deployment ready
  🔄 CI/CD workflows configured`}</code>
              </pre>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center w-full">
          <h2 className="text-3xl font-bold text-foreground">Based on cutting edge technologies</h2>
          <div className="mt-8 flex justify-center space-x-8">
            <TechIcon Icon={SiNextdotjs} name="Next.js" className="text-gray-800" />
            <div className="flex flex-col items-center">
              <span className="h-12 w-12 text-green-500 text-2xl font-bold flex items-center">FastAPI</span>
              <span className="mt-2 text-sm text-foreground">FastAPI</span>
            </div>
            <TechIcon Icon={SiTailwindcss} name="Tailwind CSS" className="text-blue-500" />
            <TechIcon Icon={SiStripe} name="Stripe" className="text-indigo-600" />
            <TechIcon Icon={SiSupabase} name="Supabase" className="text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for tech icons
const TechIcon = ({ Icon, name, className }) => (
  <div className="flex flex-col items-center">
    <Icon className={`h-12 w-12 ${className}`} />
    <span className="mt-2 text-sm text-foreground">{name}</span>
  </div>
);

export default HeroSection;