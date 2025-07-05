import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

const GuestBook: React.FC = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<GuestMessage[]>([
    {
      id: '1',
      name: 'Ahmed & Family',
      message: 'Congratulations on your beautiful union! May Allah bless your marriage with love, happiness, and countless blessings. We are so happy for you both!',
      timestamp: new Date('2025-01-15T10:30:00')
    },
    {
      id: '2',
      name: 'Fatima Aunty',
      message: 'MashAllah! What a wonderful celebration. May your love story be filled with joy and may Allah grant you both a lifetime of happiness together.',
      timestamp: new Date('2025-01-15T11:15:00')
    },
    {
      id: '3',
      name: 'The Rahman Family',
      message: 'Barakallahu lakuma wa baraka alaykuma! Wishing you both all the happiness in the world. Your love is truly inspiring.',
      timestamp: new Date('2025-01-15T12:00:00')
    }
  ]);
  
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.name.trim() || !newMessage.message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const message: GuestMessage = {
      id: Date.now().toString(),
      name: newMessage.name.trim(),
      message: newMessage.message.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [message, ...prev]);
    setNewMessage({ name: '', message: '' });
    setIsSubmitting(false);
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section id="guestbook" className="section py-16 bg-gradient-to-b from-white to-gold-light/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4 text-emerald">
            {t('guestbook.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('guestbook.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md border border-gold-light"
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-emerald mr-3" />
              <h3 className="text-xl font-semibold text-emerald">
                {t('guestbook.leaveMessage')}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('guestbook.yourName')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald focus:border-emerald transition-colors"
                  placeholder={t('guestbook.namePlaceholder')}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('guestbook.yourMessage')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={newMessage.message}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald focus:border-emerald transition-colors resize-none"
                  placeholder={t('guestbook.messagePlaceholder')}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting || !newMessage.name.trim() || !newMessage.message.trim()}
                className="w-full flex items-center justify-center px-6 py-3 bg-emerald text-white font-medium rounded-md hover:bg-emerald-dark focus:outline-none focus:ring-2 focus:ring-emerald focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? t('guestbook.sending') : t('guestbook.sendMessage')}
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md border border-gold-light"
          >
            <div className="flex items-center mb-6">
              <Heart className="w-6 h-6 text-gold mr-3 fill-current" />
              <h3 className="text-xl font-semibold text-emerald">
                {t('guestbook.messages')} ({messages.length})
              </h3>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-gold-light/20 rounded-lg border border-gold-light/50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-emerald">{msg.name}</h4>
                    <span className="text-xs text-gray-500">
                      {formatTimestamp(msg.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{msg.message}</p>
                </motion.div>
              ))}
            </div>
            
            {messages.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>{t('guestbook.noMessages')}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuestBook;