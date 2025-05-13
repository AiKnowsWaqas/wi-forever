import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import TimerUnit from './TimerUnit';
import { weddingDate, getTimeRemaining, formatEventDate, formatEventTime } from '../utils/dateUtils';
import { useTranslation } from 'react-i18next';

const CountdownTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(weddingDate));
  const [isWeddingDay, setIsWeddingDay] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(weddingDate);
      setTimeRemaining(remaining);
      
      if (remaining.months === 0 && remaining.days === 0 && remaining.hours === 0 && 
          remaining.minutes === 0 && remaining.seconds === 0) {
        setIsWeddingDay(true);
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-2 text-emerald">
        {t('countdown.title')}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-6">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-gold" />
            <span className="text-lg">{formatEventDate(weddingDate)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-gold" />
            <span className="text-lg">{formatEventTime(weddingDate)}</span>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-10 max-w-3xl border border-gold-light">
        <h3 className="text-2xl md:text-3xl text-center font-primary mb-8">
          {isWeddingDay ? (
            <span className="text-emerald">{t('countdown.weddingDay')}</span>
          ) : (
            <span>{t('countdown.counter')}</span>
          )}
        </h3>
        
        <div className="flex justify-center space-x-4 md:space-x-8 mb-8">
          <TimerUnit value={timeRemaining.months} label="Months" delay={0.1} />
          <TimerUnit value={timeRemaining.days} label="Days" delay={0.2} />
          <TimerUnit value={timeRemaining.hours} label="Hours" delay={0.3} />
          <TimerUnit value={timeRemaining.minutes} label="Minutes" delay={0.4} />
          <TimerUnit value={timeRemaining.seconds} label="Seconds" delay={0.5} />
        </div>
        
        <motion.div 
          className="text-center text-gray-600 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {isWeddingDay ? (
            <p className="text-lg text-emerald">
              {t('countdown.blessingMessage')}
            </p>
          ) : (
            <p>
              {t('countdown.message')}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;