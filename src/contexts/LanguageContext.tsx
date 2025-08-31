import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.products': 'المنتجات',
    'nav.process': 'آلية العمل',
    'nav.gallery': 'المعرض',
    'nav.clients': 'عملاؤنا',
    'nav.news': 'الأخبار',
    'nav.contact': 'تواصل معنا',
    
    // Home Page
    'home.hero.title': 'نصنع ملابسك بجودة عالمية وبأفضل الأسعار',
    'home.hero.subtitle': 'مصنع متخصص في تصنيع الملابس للعلامات التجارية والشركات بأعلى معايير الجودة',
    'home.hero.cta': 'اطلب عرض سعر الآن',
    'home.cards.about.title': 'من نحن',
    'home.cards.about.desc': 'مصنع رائد في تصنيع الملابس بخبرة تزيد عن 15 عامًا',
    'home.cards.services.title': 'خدماتنا',
    'home.cards.services.desc': 'تصنيع مخصص، تصميم، تعبئة وتغليف، ومراقبة الجودة',
    'home.cards.contact.title': 'تواصل معنا',
    'home.cards.contact.desc': 'فريقنا جاهز لمساعدتك في تحقيق رؤيتك',
    'home.clients.title': 'عملاؤنا وشركاؤنا',
    
    // About Page
    'about.title': 'من نحن',
    'about.story.title': 'قصتنا',
    'about.story.content': 'تأسس مصنعنا عام 2008 برؤية واضحة: تقديم خدمات تصنيع الملابس بأعلى معايير الجودة العالمية. نحن نخدم العلامات التجارية والشركات في جميع أنحاء العالم، ونفخر بكوننا شريكًا موثوقًا في رحلة نجاحهم.',
    'about.mission.title': 'رسالتنا',
    'about.mission.content': 'نسعى لتكون الخيار الأول للعلامات التجارية التي تبحث عن شريك موثوق في تصنيع الملابس، من خلال تقديم منتجات عالية الجودة، وخدمة عملاء استثنائية، والالتزام بالمواعيد المحددة.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.content': 'أن نكون المرجع العالمي في تصنيع الملابس، ونساهم في نجاح شركائنا من خلال الابتكار المستمر والتطوير التقني.',
    'about.stats.experience': 'سنة خبرة',
    'about.stats.clients': 'عميل راضٍ',
    'about.stats.capacity': 'قطعة شهريًا',
    'about.stats.countries': 'دولة نصدر إليها',
    
    // Services Page
    'services.title': 'خدماتنا',
    'services.custom.title': 'التصنيع المخصص',
    'services.custom.desc': 'نقوم بتصنيع الملابس حسب تصاميمكم ومواصفاتكم الخاصة',
    'services.fabric.title': 'توريد الخامات',
    'services.fabric.desc': 'نوفر أجود أنواع الأقمشة أو نعمل بخاماتكم الخاصة',
    'services.packaging.title': 'التعبئة والتغليف',
    'services.packaging.desc': 'خدمات تعبئة وتغليف احترافية مع ملصقاتكم الخاصة',
    'services.quality.title': 'مراقبة الجودة',
    'services.quality.desc': 'فحص شامل لكل منتج لضمان أعلى معايير الجودة',
    'services.export.title': 'التصدير والشحن',
    'services.export.desc': 'خدمات شحن آمنة وسريعة لجميع أنحاء العالم',
    'services.design.title': 'خدمات التصميم',
    'services.design.desc': 'فريق مصممين محترف لتطوير تصاميمكم',
    
    // Products Page
    'products.title': 'المنتجات',
    'products.tshirts': 'تي شيرت',
    'products.shirts': 'قمصان',
    'products.uniforms': 'الزي الموحد',
    'products.kids': 'ملابس أطفال',
    'products.sports': 'ملابس رياضية',
    'products.formal': 'ملابس رسمية',
    
    // Process Page
    'process.title': 'آلية العمل',
    'process.step1.title': 'تواصل معنا',
    'process.step1.desc': 'شاركنا متطلباتكم وتصاميمكم',
    'process.step2.title': 'تحديد المواصفات',
    'process.step2.desc': 'نحدد الخامات والمقاسات والكميات',
    'process.step3.title': 'إنتاج العينة',
    'process.step3.desc': 'نصنع عينة أولية للاعتماد',
    'process.step4.title': 'اعتماد الطلبية',
    'process.step4.desc': 'نبدأ الإنتاج بعد موافقتكم',
    'process.step5.title': 'التسليم',
    'process.step5.desc': 'تسليم الطلبية في الموعد المحدد',
    
    // Gallery Page
    'gallery.title': 'المعرض',
    'gallery.factory.title': 'صور المصنع',
    'gallery.production.title': 'خطوط الإنتاج',
    
    // Clients Page
    'clients.title': 'عملاؤنا وشهادات الجودة',
    'clients.partners.title': 'شركاؤنا',
    'clients.certificates.title': 'شهادات الجودة',
    'clients.testimonials.title': 'آراء العملاء',
    
    // Contact Page
    'contact.title': 'تواصل معنا',
    'contact.form.title': 'أرسل رسالة',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.phone': 'الهاتف',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.address': 'العنوان',
    'contact.info.whatsapp': 'واتساب',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.contactUs': 'تواصل معنا',
    'common.requestQuote': 'اطلب عرض سعر',
    'common.whatsapp': 'واتساب',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.company': 'مصنع الملابس المتخصص'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.process': 'How We Work',
    'nav.gallery': 'Gallery',
    'nav.clients': 'Clients',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'We Manufacture Your Clothing with Global Quality at Best Prices',
    'home.hero.subtitle': 'Specialized factory for clothing manufacturing for brands and companies with the highest quality standards',
    'home.hero.cta': 'Request a Quote Now',
    'home.cards.about.title': 'About Us',
    'home.cards.about.desc': 'Leading clothing manufacturer with over 15 years of experience',
    'home.cards.services.title': 'Our Services',
    'home.cards.services.desc': 'Custom manufacturing, design, packaging, quality control',
    'home.cards.contact.title': 'Contact Us',
    'home.cards.contact.desc': 'Our team is ready to help bring your vision to life',
    'home.clients.title': 'Our Clients & Partners',
    
    // About Page
    'about.title': 'About Us',
    'about.story.title': 'Our Story',
    'about.story.content': 'Founded in 2008 with a clear vision: to provide clothing manufacturing services with the highest global quality standards. We serve brands and companies worldwide, and we take pride in being a trusted partner in their success journey.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'We strive to be the first choice for brands seeking a reliable partner in clothing manufacturing, by delivering high-quality products, exceptional customer service, and commitment to deadlines.',
    'about.vision.title': 'Our Vision',
    'about.vision.content': 'To be the global reference in clothing manufacturing, contributing to our partners\' success through continuous innovation and technical development.',
    'about.stats.experience': 'Years Experience',
    'about.stats.clients': 'Satisfied Clients',
    'about.stats.capacity': 'Pieces/Month',
    'about.stats.countries': 'Export Countries',
    
    // Services Page
    'services.title': 'Our Services',
    'services.custom.title': 'Custom Manufacturing',
    'services.custom.desc': 'We manufacture clothing according to your designs and specifications',
    'services.fabric.title': 'Fabric Sourcing',
    'services.fabric.desc': 'We provide the finest fabrics or work with your materials',
    'services.packaging.title': 'Packaging & Labeling',
    'services.packaging.desc': 'Professional packaging and labeling services with your brand',
    'services.quality.title': 'Quality Control',
    'services.quality.desc': 'Comprehensive inspection of every product to ensure highest quality',
    'services.export.title': 'Export & Shipping',
    'services.export.desc': 'Safe and fast shipping services worldwide',
    'services.design.title': 'Design Services',
    'services.design.desc': 'Professional design team to develop your concepts',
    
    // Products Page
    'products.title': 'Products',
    'products.tshirts': 'T-Shirts',
    'products.shirts': 'Shirts',
    'products.uniforms': 'Uniforms',
    'products.kids': 'Kids Wear',
    'products.sports': 'Sports Wear',
    'products.formal': 'Formal Wear',
    
    // Process Page
    'process.title': 'How We Work',
    'process.step1.title': 'Contact Us',
    'process.step1.desc': 'Share your requirements and designs with us',
    'process.step2.title': 'Specifications',
    'process.step2.desc': 'Define materials, sizes, and quantities',
    'process.step3.title': 'Sample Production',
    'process.step3.desc': 'Create initial sample for approval',
    'process.step4.title': 'Order Approval',
    'process.step4.desc': 'Begin production after your approval',
    'process.step5.title': 'Delivery',
    'process.step5.desc': 'Deliver order on scheduled time',
    
    // Gallery Page
    'gallery.title': 'Gallery',
    'gallery.factory.title': 'Factory Photos',
    'gallery.production.title': 'Production Lines',
    
    // Clients Page
    'clients.title': 'Our Clients & Quality Certificates',
    'clients.partners.title': 'Our Partners',
    'clients.certificates.title': 'Quality Certificates',
    'clients.testimonials.title': 'Client Testimonials',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.whatsapp': 'WhatsApp',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.requestQuote': 'Request Quote',
    'common.whatsapp': 'WhatsApp',
    'footer.rights': 'All Rights Reserved',
    'footer.company': 'Specialized Clothing Factory'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};