import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Settings, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const cardData = [
    {
      icon: Users,
      titleKey: 'home.cards.about.title',
      descKey: 'home.cards.about.desc',
      path: '/about'
    },
    {
      icon: Settings,
      titleKey: 'home.cards.services.title',
      descKey: 'home.cards.services.desc',
      path: '/services'
    },
    {
      icon: Phone,
      titleKey: 'home.cards.contact.title',
      descKey: 'home.cards.contact.desc',
      path: '/contact'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-black bg-opacity-40"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('home.hero.cta')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {t(card.descKey)}
                  </p>
                  <div className="text-center">
                    <Link
                      to={card.path}
                      className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors"
                    >
                      {t('common.learnMore')}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('home.clients.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-100 h-20 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-500 font-medium">Brand {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {isRTL ? 'جاهزون لتصنيع ملابسك؟' : 'Ready to Manufacture Your Clothing?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {isRTL 
              ? 'تواصل معنا اليوم واحصل على عرض سعر مجاني'
              : 'Contact us today and get a free quote'
            }
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t('common.requestQuote')}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;