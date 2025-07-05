import React from 'react';
import { MapPin, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { EventDetail } from '../types';
import { useTranslation } from 'react-i18next';

interface EventCardProps {
  event: EventDetail;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md border border-gold-light hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-emerald to-emerald-dark p-4 text-white">
        <h3 className="text-lg md:text-xl font-primary font-semibold">
          {t(`events.${event.id}.title`)}
        </h3>
      </div>

      {/* Content - More Compact */}
      <div className="p-4 space-y-3">
        {/* Time */}
        <div className="flex items-center text-emerald">
          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="font-medium text-sm">{t(`events.${event.id}.time`)}</span>
        </div>
        
        {/* Location */}
        <div className="flex items-center text-gray-700">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0 text-gold" />
          <span className="font-medium text-sm">{t(`events.${event.id}.location`)}</span>
        </div>
        
        {/* Directions Button */}
        <motion.a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 bg-emerald text-white text-sm font-medium rounded-md hover:bg-emerald-dark transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t('events.getDirections')}
          <ExternalLink className="ml-1 h-3 w-3" />
        </motion.a>
      </div>

      {/* Compact Map */}
      <div className="h-48 border-t border-gray-100">
        <iframe
          src={event.embedMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map to ${t(`events.${event.id}.location`)}`}
        ></iframe>
      </div>
    </motion.div>
  );
};

export default EventCard;