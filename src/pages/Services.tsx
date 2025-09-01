import React from 'react';
import { Scissors, Shirt, Package, Shield, Truck, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scissors,
      titleKey: 'services.custom.title',
      descKey: 'services.custom.desc'
    },
    {
      icon: Shirt,
      titleKey: 'services.fabric.title',
      descKey: 'services.fabric.desc'
    },
    {
      icon: Package,
      titleKey: 'services.packaging.title',
      descKey: 'services.packaging.desc'
    },
    {
      icon: Shield,
      titleKey: 'services.quality.title',
      descKey: 'services.quality.desc'
    },
    {
      icon: Truck,
      titleKey: 'services.export.title',
      descKey: 'services.export.desc'
    },
    {
      icon: Palette,
      titleKey: 'services.design.title',
      descKey: 'services.design.desc'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white bg-opacity-5 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm">
            <Scissors className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('services.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('services.custom.title')}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('services.quality.title')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                    <IconComponent className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('common.requestQuote')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('home.hero.subtitle')}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('common.contactUs')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;