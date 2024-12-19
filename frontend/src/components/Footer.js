import { Code2, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://x.com/pravin_niceguy', // Replace with your Twitter URL
    icon: Twitter,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/3rdbrain', // Replace with your GitHub URL
    icon: Github,
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 py-6 mt-12">
      <div className="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex items-center space-x-4">
          <Code2 className="h-8 w-8 text-white" />
          <span className="text-lg font-bold text-white">FastStack</span>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <link.icon className="h-6 w-6" />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} FastStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}