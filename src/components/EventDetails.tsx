import React from 'react';
import { eventDetails } from '../utils/eventData';
import EventCard from './EventCard';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EventDetails: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="events" className="section bg-white/80 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4 text-emerald">
          {t('events.title')}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {t('events.subtitle')}
        </p>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center mt-8 mb-4">
          <div className="h-px w-16 bg-gold-light"></div>
          <div className="w-3 h-3 bg-gold rounded-full mx-4"></div>
          <div className="h-px w-16 bg-gold-light"></div>
        </div>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {eventDetails.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EventDetails;