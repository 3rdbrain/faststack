'use client';

import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FastStack</span>
            </span>
          </Link>
        </div>
        <div className="flex gap-x-8">
          <a href="#features" className="text-lg font-semibold leading-6 text-foreground">
            Features
          </a>
          <a href="#templates" className="text-lg font-semibold leading-6 text-foreground">
            Templates
          </a>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <Button asChild variant="outline">
            <a href="#waitlist" className="text-lg font-semibold leading-6 text-foreground">
              Join Waitlist
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}