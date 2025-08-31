import React from 'react';
import { Star } from 'lucide-react';
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
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('clients.title')}
          </h1>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('clients.partners.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="bg-white h-24 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-gray-500 font-medium">Brand {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Certificates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('clients.certificates.title')}
          </h2>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('clients.testimonials.title')}
          </h2>
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