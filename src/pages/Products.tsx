import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { t } = useLanguage();

  const products = [
    {
      titleKey: 'products.tshirts',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      titleKey: 'products.shirts',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      titleKey: 'products.uniforms',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      titleKey: 'products.kids',
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      titleKey: 'products.sports',
      image: 'https://images.pexels.com/photos/7679479/pexels-photo-7679479.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      titleKey: 'products.formal',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('products.title')}
          </h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(product.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Custom manufacturing available with your specifications
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;