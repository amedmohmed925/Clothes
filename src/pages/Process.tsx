import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, FileText, Beaker, CheckCircle, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t, language } = useLanguage();
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: MessageCircle,
      titleKey: 'process.step1.title',
      descKey: 'process.step1.desc'
    },
    {
      icon: FileText,
      titleKey: 'process.step2.title',
      descKey: 'process.step2.desc'
    },
    {
      icon: Beaker,
      titleKey: 'process.step3.title',
      descKey: 'process.step3.desc'
    },
    {
      icon: CheckCircle,
      titleKey: 'process.step4.title',
      descKey: 'process.step4.desc'
    },
    {
      icon: Truck,
      titleKey: 'process.step5.title',
      descKey: 'process.step5.desc'
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.25, // Balanced trigger
          rootMargin: '0px 0px -75px 0px' // Moderate trigger
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

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
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('process.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' ? 'اكتشف كيف نعمل مع عملائنا خطوة بخطوة لتحقيق أفضل النتائج' : 'Discover how we work with our clients step by step to achieve the best results'}
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {language === 'ar' ? 'عملية موثوقة' : 'Trusted Process'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-medium">
                {language === 'ar' ? 'جودة مضمونة' : 'Quality Assured'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-25"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Process Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'خطوات العملية' : 'Our Process Steps'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 h-full rounded-full"></div>

            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                const isVisible = visibleSteps.has(index);

                return (
                  <div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row transition-all duration-800 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                    }}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-4 border-white shadow-lg z-20 transition-all duration-400 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}>
                      <div className={`absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30 transition-opacity duration-400 ${
                        isVisible ? 'opacity-30' : 'opacity-0'
                      }`}></div>
                    </div>

                    {/* Step Number */}
                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-6 w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg z-20 transition-all duration-500 ${
                      isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150 + 200}ms` : '0ms'
                    }}>
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:pl-16' : 'md:pl-16 md:pr-16'} pl-20 md:pl-0 transition-all duration-700 ${
                      isVisible ? 'translate-x-0' : (isEven ? '-translate-x-8' : 'translate-x-8')
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 150 + 300}ms` : '0ms'
                    }}>
                      <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 md:p-8 border border-gray-100 group hover:-translate-y-1 transform ${
                        isEven ? 'md:ml-8' : 'md:mr-8'
                      }`}>
                        {/* Header */}
                        <div className={`flex items-start justify-between mb-4 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${index * 150 + 400}ms` : '0ms'
                        }}>
                          <div className="flex items-center">
                            <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl text-white mr-4 shadow-md group-hover:scale-110 transition-all duration-400 ${
                              isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                            }`}
                            style={{
                              transitionDelay: isVisible ? `${index * 150 + 500}ms` : '0ms'
                            }}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300">
                                {t(step.titleKey)}
                              </h3>
                              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                            </div>
                          </div>

                          {/* Progress Badge */}
                          <div className={`bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-400 ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                          }`}
                          style={{
                            transitionDelay: isVisible ? `${index * 150 + 600}ms` : '0ms'
                          }}>
                            Step {index + 1}
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-gray-600 leading-relaxed mb-4 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${index * 150 + 700}ms` : '0ms'
                        }}>
                          {t(step.descKey)}
                        </p>

                        {/* Visual Progress */}
                        <div className={`flex items-center space-x-2 transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{
                          transitionDelay: isVisible ? `${index * 150 + 800}ms` : '0ms'
                        }}>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full transition-all duration-700"
                              style={{
                                width: isVisible ? `${((index + 1) / steps.length) * 100}%` : '0%',
                                transitionDelay: isVisible ? `${index * 150 + 900}ms` : '0ms'
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500 font-medium">
                            {Math.round(((index + 1) / steps.length) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {language === 'ar' ? 'جاهز للبدء في مشروعك؟' : 'Ready to Start Your Project?'}
                </h3>
                <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
                  {language === 'ar' ? 'اتصل بنا الآن ودعنا نساعدك في تحقيق رؤيتك' : 'Contact us now and let us help you achieve your vision'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-block bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </a>
                  <a
                    href="/services"
                    className="inline-block bg-blue-500 bg-opacity-20 text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
                  >
                    {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;