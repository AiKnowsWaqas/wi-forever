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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gold-light hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald to-emerald-dark p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-primary font-semibold mb-2">
          {t(`events.${event.id}.title`)}
        </h3>
        <div className="flex items-center text-emerald-light">
          <Clock className="h-5 w-5 mr-2" />
          <span className="font-medium">{t(`events.${event.id}.time`)}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="mt-1 mr-3">
            <MapPin className="h-5 w-5 text-gold" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg text-gray-800 mb-1">
              {t(`events.${event.id}.location`)}
            </p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          {t(`events.${event.id}.description`)}
        </p>
        
        <motion.a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-emerald text-white font-medium rounded-lg hover:bg-emerald-dark transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('events.getDirections')}
          <ExternalLink className="ml-2 h-4 w-4" />
        </motion.a>
      </div>

      {/* Map Section */}
      <div className="h-64 sm:h-80 border-t border-gray-100">
        <iframe
          src={event.embedMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map to ${t(`events.${event.id}.location`)}`}
          className="rounded-b-xl"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default EventCard;