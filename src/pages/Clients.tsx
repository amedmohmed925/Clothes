import React from 'react';
import { Star, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Clients: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      company: 'Fashion Brand Co.',
      text: isRTL 
        ? 'خدمة ممتازة وجودة عالية. نتعامل معهم منذ 3 سنوات ودائماً ملتزمون بالمواعيد'
        : 'Excellent service and high quality. We have been working with them for 3 years and they are always on time'
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Apparel Ltd.',
      text: isRTL
        ? 'أفضل مصنع تعاملنا معه. جودة المنتجات تفوق التوقعات'
        : 'Best factory we have worked with. Product quality exceeds expectations'
    },
    {
      name: 'Omar Hassan',
      company: 'Modern Clothing',
      text: isRTL
        ? 'فريق محترف ومتعاون. يفهمون احتياجاتنا بدقة'
        : 'Professional and cooperative team. They understand our needs precisely'
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
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('clients.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('clients.partners.title')}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('clients.certificates.title')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {t('clients.partners.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Nike', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png' },
              { name: 'Adidas', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png' },
              { name: 'Puma', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png' },
              { name: 'Levi\'s', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Levis-Logo.png' },
              { name: 'H&M', logo: 'https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png' },
              { name: 'Zara', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Zara-Logo.png' },
              { name: 'Gucci', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Gucci-Logo.png' },
              { name: 'Louis Vuitton', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Louis-Vuitton-Logo.png' },
              { name: 'Chanel', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Chanel-Logo.png' },
              { name: 'Prada', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Prada-Logo.png' },
              { name: 'Tommy Hilfiger', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Tommy-Hilfiger-Logo.png' },
              { name: 'Ralph Lauren', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Ralph-Lauren-Logo.png' }
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-text') as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span className="fallback-text text-gray-500 font-medium text-sm" style={{ display: 'none' }}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Certificates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {t('clients.certificates.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['ISO 9001', 'OEKO-TEX', 'GOTS'].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 font-bold text-lg">{cert}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert} Certified
                </h3>
                <p className="text-gray-600 text-sm">
                  International quality standard certification
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {t('clients.testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;