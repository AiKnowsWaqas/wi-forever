import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <header className="section text-center pt-20 pb-12 md:pt-24 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-8"
      >
        <h1 className="bismillah arabic-text text-4xl md:text-5xl lg:text-6xl mb-6 text-emerald">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h1>
        <p className="text-sm md:text-base text-gray-600 italic">
          {t('header.bismillah')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-10"
      >
        <div className="h-0.5 w-32 md:w-48 bg-gold-light mx-auto mb-8"></div>
        <h2 className="text-2xl md:text-3xl font-light mb-6">
          {t('header.invitation')}
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-emerald mb-6">
          {t('header.ceremony')}
        </h3>
        <div className="flex flex-col items-center justify-center space-y-6 mb-8">
          <div className="space-y-2 text-center">
            <span className="font-primary text-2xl md:text-3xl">{t('header.waqas')}</span>
            <p className="text-lg md:text-xl text-gray-600">
              {t('header.son')} 
            </p>
          </div>
          <span className="font-serif text-gold text-3xl">&</span>
          <div className="space-y-2 text-center">
            <span className="font-primary text-2xl md:text-3xl">{t('header.ifrah')}</span>
            <p className="text-lg md:text-xl text-gray-600">
              {t('header.daughter')}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <div className="p-6 md:p-8 border border-gold-light rounded-md bg-white/80 backdrop-blur-sm">
          <p className="arabic-text text-xl md:text-2xl mb-4 text-emerald">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <p className="text-gray-700 italic">
            {t('header.quranVerse')}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {t('header.surah')}
          </p>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;