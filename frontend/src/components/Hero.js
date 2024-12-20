'use client';

import { ArrowRight } from 'lucide-react';
import { SiNextdotjs, SiTailwindcss, SiStripe, SiSupabase } from 'react-icons/si';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
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
              <a href="#waitlist" className="btn btn-primary btn-lg">
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
            <div className="flex flex-col items-center">
              <SiNextdotjs className="h-12 w-12 text-gray-800" />
              <span className="mt-2 text-sm text-foreground">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="h-12 w-12 text-green-500 text-2xl font-bold flex items-center">FastAPI</span>
              <span className="mt-2 text-sm text-foreground">FastAPI</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="h-12 w-12 text-blue-500" />
              <span className="mt-2 text-sm text-foreground">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiStripe className="h-12 w-12 text-indigo-600" />
              <span className="mt-2 text-sm text-foreground">Stripe</span>
            </div>
            <div className="flex flex-col items-center">
              <SiSupabase className="h-12 w-12 text-green-600" />
              <span className="mt-2 text-sm text-foreground">Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}