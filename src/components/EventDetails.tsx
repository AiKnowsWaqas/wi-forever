import React from 'react';
import { eventDetails } from '../utils/eventData';
import EventCard from './EventCard';
import { useTranslation } from 'react-i18next';

const EventDetails: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="events" className="section bg-white/80 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4 text-emerald">
          {t('events.title')}
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t('events.subtitle')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {eventDetails.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EventDetails;