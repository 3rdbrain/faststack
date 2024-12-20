'use client';

import { Blocks, Globe, ShoppingCart } from 'lucide-react';

const templates = [
  {
    title: 'SaaS Starter',
    description: 'Perfect for building subscription-based services',
    stack: ['Next.js', 'FastAPI', 'Stripe'],
    icon: Blocks,
  },
  {
    title: 'E-commerce API',
    description: 'Ready-to-use backend for online stores',
    stack: ['FastAPI', 'PostgreSQL', 'Redis'],
    icon: ShoppingCart,
  },
  {
    title: 'Full-Stack Web App',
    description: 'Complete web application setup',
    stack: ['Next.js', 'FastAPI', 'MongoDB', 'Supabase'],
    icon: Globe,
  },
];

export function TemplatesSection() {
  return (
    <section id="templates" className="templates-section text-center bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Templates</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore the ready-to-use templates available on GitHub. Clone, customize, and deploy your projects with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.title} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <template.icon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{template.title}</h3>
              </div>
              <div>
                <p className="text-lg text-gray-600 mb-4">{template.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Stack:</strong> {template.stack.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}