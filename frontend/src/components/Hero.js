'use client';

import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-10 sm:pt-16 lg:pt-20 lg:px-8 lg:pb-24">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:justify-between w-full">
          <div className="max-w-2xl lg:max-w-xl lg:pt-8 flex-1">
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Generate Production-Ready APIs in Seconds
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
  • Authentication configured
  • Database migrations set up
  • API documentation enabled
  • Docker setup included`}</code>
              </pre>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center w-full">
          {/* Placeholder for third layout */}
        </div>
      </div>
    </div>
  );
}