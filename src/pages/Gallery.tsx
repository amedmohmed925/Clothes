import React from 'react';
import { Camera } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const factoryImages = [
    'https://argaamplus.s3.amazonaws.com/24a0dd37-b863-4c1e-9b01-df914942e7b3.jpg',
    'https://argaamplus.s3.amazonaws.com/02d44437-cb25-4e4a-817a-72f18d0f49e9.jpg',
    'https://argaamplus.s3.amazonaws.com/dc72133f-7373-4a47-9ca7-4b496f08fd1b.jpg',
    'https://argaamplus.s3.amazonaws.com/3333355c-fe07-4131-9271-ef6c245bb835.jpg',
    'https://media.egyin.com/2025/7/large/18101928218891202507030238313831.jpg',
    'https://images.skynewsarabia.com/images/v1/2023/01/15/1588935/800/450/1-1588935.jpg'
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
            <Camera className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('gallery.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('gallery.factory.title')}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {t('gallery.production.title')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Photos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {t('gallery.factory.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factoryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={image}
                  alt={`Factory ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Lines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {t('gallery.production.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-12"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://i.insider.com/62b5e4639f5e550019aa8898?width=1000&format=jpeg&auto=webp"
                alt="Production Line 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Production Line A
                </h3>
                <p className="text-gray-600">
                  Advanced sewing machines and quality control systems
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://landing-page-backend.s3.ap-south-1.amazonaws.com/blog_page_prodimages/d1e94c61-240d-44a9-adc9-a1009d53c236/shutterstock_155647982_xl.png"
                alt="Production Line 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Production Line B
                </h3>
                <p className="text-gray-600">
                  Cutting and fabric preparation department
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;