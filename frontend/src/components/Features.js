import { useEffect } from 'react';
import { useTheme } from './ThemeProvider'; // Import useTheme

export default function Features() {
  const { theme } = useTheme(); // Use useTheme hook

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const features = [
    {
      title: 'Launch Your App With <span className="text-indigo-600">Lighting Speed</span>',
      description: 'Get your landing page with login & CTAs, Email Notifications, Styling, SEO & more. Spend your time building your startup, not integrating APIs.',
      imageUrl: '/pet_feature1.png',
    },
    {
      title: 'Scale Effortlessly',
      description: 'Our platform is built to scale with your business. Easily add new features and handle increased traffic without breaking a sweat.',
      imageUrl: '/pet_feature2.png',
    },
    // Add more features as needed
  ];

  return (
    <div id="features" className="relative bg-gray-100 dark:bg-gray-800 overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Playdates Made Easy
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center">
                <img src={feature.imageUrl} alt={feature.title} className="w-40 h-40 rounded-full mb-6 lg:mb-0 lg:mr-8" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}