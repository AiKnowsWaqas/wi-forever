import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface TimerUnitProps {
  value: number;
  label: string;
  delay: number;
}

const TimerUnit: React.FC<TimerUnitProps> = ({ value, label, delay }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 relative">
        <div className="absolute inset-0 bg-white rounded-lg shadow-md transform rotate-3 border border-gold-light"></div>
        <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-3 border border-gold-light"></div>
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-lg shadow-md border border-gold z-10">
          <span className="font-primary text-2xl sm:text-3xl md:text-4xl font-semibold text-emerald">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="text-sm sm:text-base font-medium text-gray-600">{t(`countdown.${label.toLowerCase()}`)}</span>
    </motion.div>
  );
};

export default TimerUnit;