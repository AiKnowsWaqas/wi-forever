import React from 'react';
import { eventDetails } from '../utils/eventData';
import EventCard from './EventCard';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EventDetails: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="events" className="section py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-primary font-semibold mb-3 text-emerald">
          {t('events.title')}
        </h2>
        
        {/* Simple decorative element */}
        <div className="w-16 h-0.5 bg-gold mx-auto"></div>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
        {eventDetails.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EventDetails;