import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'ka', name: 'ಕನ್ನಡ' }
  ];

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white rounded-lg shadow-md border border-gold-light p-2">
        <div className="flex gap-2">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                i18n.language === lang.code
                  ? 'bg-emerald text-white'
                  : 'text-gray-700 hover:bg-emerald/10'
              }`}
              onClick={() => i18n.changeLanguage(lang.code)}
            >
              {lang.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;