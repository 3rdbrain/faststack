import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'; // Import Bars3Icon
import { useTheme } from './ThemeProvider'; // Import useTheme
import themeConfig from '../config/themeConfig';

const navigation = [
  { name: 'Features', href: 'features' },
  { name: 'Pricing', href: 'pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use useTheme hook

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-100 hover:text-indigo-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="flex items-center">
                  <img src="/logo.png" alt="SniffSocial Logo" className="h-8 w-auto sm:h-10" />
                  <span className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">SniffSocial</span>
                </a>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-auto">
              <div className="flex space-x-6"> {/* Added space-x-6 for more spacing */}
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ))}
                <Link href="/login" legacyBehavior>
                  <a className="btn btn-secondary btn-sm">Login</a>
                </Link>
                <Link href="/signup" legacyBehavior>
                  <a className="btn btn-primary btn-sm">Sign Up</a>
                </Link>
                <button
                  onClick={toggleTheme}
                  className="btn btn-primary btn-sm"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}