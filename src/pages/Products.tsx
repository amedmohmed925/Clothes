import React from 'react';
import { Shirt } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { t, language } = useLanguage();

  const products = [
    {
      titleKey: 'products.tshirts',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: {
        ar: 'تي شيرت عالي الجودة بتصاميم مخصصة وأقمشة مريحة للارتداء اليومي',
        en: 'High-quality custom t-shirts with comfortable fabrics for everyday wear'
      }
    },
    {
      titleKey: 'products.shirts',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: {
        ar: 'قمصان رسمية وكاجوال بأقمشة فاخرة وتفصيل دقيق للمظهر الأنيق',
        en: 'Formal and casual shirts with premium fabrics and precise tailoring for elegant appearance'
      }
    },
    {
      titleKey: 'products.uniforms',
      image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: {
        ar: 'زي موحد للشركات والمؤسسات بتصاميم احترافية تعكس هوية العلامة التجارية',
        en: 'Corporate uniforms for companies and institutions with professional designs reflecting brand identity'
      }
    },
    {
      titleKey: 'products.kids',
      image: 'https://images.pexels.com/photos/3661389/pexels-photo-3661389.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: {
        ar: 'ملابس أطفال مريحة وآمنة بألوان زاهية وتصاميم مرحة تناسب نمو الطفل',
        en: 'Comfortable and safe children\'s clothing with bright colors and fun designs suitable for child growth'
      }
    },
    {
      titleKey: 'products.sports',
      image: 'https://images.pexels.com/photos/7679479/pexels-photo-7679479.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: {
        ar: 'ملابس رياضية احترافية بتقنيات تحكم في الرطوبة وتهوية ممتازة للأداء الأمثل',
        en: 'Professional sportswear with moisture control technology and excellent ventilation for optimal performance'
      }
    },
    {
      titleKey: 'products.formal',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: {
        ar: 'ملابس رسمية فاخرة بتفصيل يدوي وأقمشة عالية الجودة للمناسبات الرسمية',
        en: 'Luxury formal wear with hand tailoring and high-quality fabrics for formal occasions'
      }
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
            <Shirt className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('products.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('products.tshirts')}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('products.uniforms')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {t(product.titleKey)}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {product.description[language]}
                  </p>

                  {/* Bottom Pattern */}
                  <div className="flex justify-end space-x-2">
                    <div className="w-2 h-2 bg-blue-200 rounded-full opacity-50"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;