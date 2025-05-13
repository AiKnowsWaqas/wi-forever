import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gold-light"
    >
      <div className="p-6">
        <h3 className="text-2xl font-primary text-emerald font-semibold mb-2">
          {t(`events.${event.id}.title`)}
        </h3>
        <div className="flex items-start mb-4">
          <div className="mt-1">
            <MapPin className="h-5 w-5 text-gold mr-2" />
          </div>
          <div>
            <p className="font-medium">{t(`events.${event.id}.location`)}</p>
            <p className="text-gray-600">{t(`events.${event.id}.time`)}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{t(`events.${event.id}.description`)}</p>
        <a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald hover:text-emerald-dark transition-colors"
        >
          {t('events.getDirections')}
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
      <div className="h-64 sm:h-80">
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