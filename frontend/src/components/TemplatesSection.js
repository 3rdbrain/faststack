import React from 'react';
import styles from './TemplatesSection.module.css';
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
    title: 'Global App',
    description: 'Build applications with global reach',
    stack: ['Next.js', 'FastAPI', 'MongoDB'],
    icon: Globe,
  },
];

const TemplatesSection = () => {
  return (
    <section id="templates" className={styles.templatesSection}>
      <div className="container mx-auto px-4 py-16">
        <h2 className={`${styles.header} font-bold`}>Templates</h2>
        <p className={styles.description}>
          Explore the ready-to-use templates available on GitHub. Clone, customize, and deploy your projects with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.title} className={`${styles.templateItem} p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="mb-4">
                <template.icon className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
              </div>
              <h3 className={`${styles.templateTitle} text-2xl font-bold mb-2`}>{template.title}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <ul className={styles.stackList}>
                {template.stack.map((tech, index) => (
                  <li key={tech} className={styles.stackItem}>
                    {tech}{index < template.stack.length - 1 && ', '}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;