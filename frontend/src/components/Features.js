'use client';

import { Rocket, Shield, Database, Zap } from 'lucide-react';

const features = [
  {
    name: 'Production Ready',
    description: 'Authentication, database setup, and Docker configuration included.',
    icon: Rocket,
  },
  {
    name: 'Best Practices Built-in',
    description: 'Security, testing, and documentation configured out of the box.',
    icon: Shield,
  },
  {
    name: 'Instant Integration',
    description: 'Pre-built templates for popular frameworks and use cases.',
    icon: Zap,
  },
  {
    name: 'Database Ready',
    description: 'Choose Supabase or MongoDB with ORM setup and migrations.',
    icon: Database,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="features-section text-center">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="feature-item p-6 bg-white rounded-lg shadow-md">
              <feature.icon className="h-10 w-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}