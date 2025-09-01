import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Users, Globe, Clock, Target, Eye, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    capacity: 0,
    countries: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = useMemo(() => [
    { icon: Clock, value: 15, labelKey: 'about.stats.experience', counterKey: 'experience' },
    { icon: Users, value: 500, labelKey: 'about.stats.clients', counterKey: 'clients' },
    { icon: Globe, value: 100, labelKey: 'about.stats.capacity', counterKey: 'capacity' },
    { icon: Award, value: 25, labelKey: 'about.stats.countries', counterKey: 'countries' }
  ], []);

  const animateCounter = (targetValue: number, counterKey: string, duration: number = 2000) => {
    const startValue = 0;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      setCounters(prev => ({
        ...prev,
        [counterKey]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Start counters with slight delays
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateCounter(stat.value, stat.counterKey);
              }, index * 200); // 200ms delay between each counter
            });
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, [hasAnimated, stats]);

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
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {isRTL ? 'تعرف على قصتنا ورؤيتنا وكيف نسعى لتقديم أفضل الخدمات' : 'Learn about our story, vision, and how we strive to provide the best services'}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {isRTL ? 'خبرة 15 عام' : '15 Years Experience'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {isRTL ? 'جودة مضمونة' : 'Quality Assured'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('about.story.content')}
              </p>
              <div className="grid grid-cols-2 gap-6" ref={statsRef}>
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  const currentValue = counters[stat.counterKey as keyof typeof counters];
                  const displayValue = stat.counterKey === 'capacity' 
                    ? `${currentValue}K+` 
                    : `${currentValue}+`;
                  
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                        <IconComponent className="w-6 h-6 text-blue-700" />
                      </div>
                      <div className="text-2xl font-bold text-blue-700 transition-all duration-300">
                        {hasAnimated ? displayValue : '0+'}
                      </div>
                      <div className="text-sm text-gray-600">{t(stat.labelKey)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Factory"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isRTL ? 'رسالتنا ورؤيتنا' : 'Our Mission & Vision'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group relative h-full">
              {/* Hexagonal Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 scale-110 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-white p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-200 overflow-hidden h-full flex flex-col">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
                
                {/* Content Container */}
                <div className="relative z-10 flex-grow">
                  {/* Icon and Title Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {t('about.mission.title')}
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {t('about.mission.content')}
                  </p>

                  {/* Bottom Pattern */}
                  <div className="flex justify-end space-x-2 mt-auto">
                    <div className="w-3 h-3 bg-blue-200 rounded-full opacity-50"></div>
                    <div className="w-3 h-3 bg-blue-300 rounded-full opacity-50"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative h-full">
              {/* Hexagonal Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 transform rotate-45 scale-110 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-white p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-200 overflow-hidden h-full flex flex-col">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
                
                {/* Content Container */}
                <div className="relative z-10 flex-grow">
                  {/* Icon and Title Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {t('about.vision.title')}
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                    {t('about.vision.content')}
                  </p>

                  {/* Bottom Pattern */}
                  <div className="flex justify-end space-x-2 mt-auto">
                    <div className="w-3 h-3 bg-blue-200 rounded-full opacity-50"></div>
                    <div className="w-3 h-3 bg-blue-300 rounded-full opacity-50"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => navigate('/contact')}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">
                {isRTL ? 'انضم إلينا في رحلتنا' : 'Join Us in Our Journey'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;