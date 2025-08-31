import React from 'react';
import { MessageCircle, FileText, Beaker, CheckCircle, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const { t } = useLanguage();

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('process.title')}
          </h1>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full text-xl font-bold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                        <IconComponent className="w-8 h-8 text-blue-700" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Process Step {index + 1}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;