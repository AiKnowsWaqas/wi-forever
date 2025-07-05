import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Calendar, MessageSquare } from 'lucide-react';
import { WhatsappShareButton } from 'react-share';
import { shareMessage } from '../utils/eventData';
import { calendarEvent } from '../utils/eventData';
import { weddingDate } from '../utils/dateUtils';
import { useTranslation } from 'react-i18next';

const FloatingActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const shareUrl = window.location.href;

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

  const handleCalendarClick = () => {
    window.open(createGoogleCalendarLink(), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gold-light p-4 min-w-[200px]"
          >
            <div className="space-y-3">
              <WhatsappShareButton url={shareUrl} title={shareMessage}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-3 rounded-md hover:bg-emerald/10 transition-colors cursor-pointer w-full"
                >
                  <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Share via WhatsApp</span>
                </motion.div>
              </WhatsappShareButton>

              <motion.button
                onClick={handleCalendarClick}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-3 rounded-md hover:bg-emerald/10 transition-colors w-full"
              >
                <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Add to Calendar</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-emerald text-white' : 'bg-white text-emerald border border-gold-light'
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Share2 className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingActions;