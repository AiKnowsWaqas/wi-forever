import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { calendarEvent } from '../utils/eventData';
import { weddingDate } from '../utils/dateUtils';
import { useTranslation } from 'react-i18next';

const CalendarIntegration: React.FC = () => {
  const { t } = useTranslation();
  
  const createGoogleCalendarLink = () => {
    const startDate = weddingDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(weddingDate.getTime() + 5 * 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d+/g, '');
    
    const baseUrl = 'https://calendar.google.com/calendar/render';
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: calendarEvent.title,
      details: calendarEvent.description,
      location: calendarEvent.location,
      dates: `${startDate}/${endDate}`,
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  const createOutlookLink = () => {
    const startDate = weddingDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(weddingDate.getTime() + 5 * 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d+/g, '');
    
    const baseUrl = 'https://outlook.live.com/calendar/0/deeplink/compose';
    const params = new URLSearchParams({
      subject: calendarEvent.title,
      body: calendarEvent.description,
      location: calendarEvent.location,
      startdt: startDate,
      enddt: endDate,
      path: '/calendar/action/compose',
      rru: 'addevent',
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  const createICSFile = () => {
    const startDate = weddingDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(weddingDate.getTime() + 5 * 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d+/g, '');
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${calendarEvent.title}`,
      `DESCRIPTION:${calendarEvent.description}`,
      `LOCATION:${calendarEvent.location}`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'wedding-invitation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="calendar" className="section py-16 bg-gradient-to-b from-white to-gold-light/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4 text-emerald">
            {t('calendar.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('calendar.subtitle')}
          </p>
        </motion.div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gold-light">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-12 h-12 text-emerald" />
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3">
            <motion.a
              href={createGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-md hover:border-gold transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium">{t('calendar.google')}</span>
            </motion.a>
            
            <motion.a
              href={createOutlookLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-md hover:border-gold transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium">{t('calendar.outlook')}</span>
            </motion.a>
            
            <motion.button
              onClick={createICSFile}
              className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-md hover:border-gold transition-colors shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium">{t('calendar.apple')}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarIntegration;