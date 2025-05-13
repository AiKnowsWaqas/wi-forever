import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, Check } from 'lucide-react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';
import { shareMessage } from '../utils/eventData';
import { useTranslation } from 'react-i18next';

const ShareSection: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const { t } = useTranslation();
  const shareUrl = window.location.href;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <section id="share" className="section py-16 bg-gradient-to-b from-gold-light/20 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4 text-emerald">
            {t('share.title')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('share.subtitle')}
          </p>
        </motion.div>
        
        <div className="bg-white p-8 rounded-lg shadow-md border border-gold-light">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Share2 className="w-5 h-5 text-emerald" />
            <span className="text-gray-700 font-medium">{t('share.via')}</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <WhatsappShareButton url={shareUrl} title={shareMessage}>
                <div className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
              </WhatsappShareButton>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <FacebookShareButton url={shareUrl} quote={shareMessage}>
                <div className="flex items-center justify-center w-12 h-12 bg-[#3b5998] text-white rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </FacebookShareButton>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <TwitterShareButton url={shareUrl} title={shareMessage}>
                <div className="flex items-center justify-center w-12 h-12 bg-[#1DA1F2] text-white rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </TwitterShareButton>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <EmailShareButton url={shareUrl} subject={shareMessage} body="I wanted to share this wedding invitation with you:">
                <div className="flex items-center justify-center w-12 h-12 bg-[#B23121] text-white rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </EmailShareButton>
            </motion.div>
          </div>
          
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="w-full p-3 text-gray-700 bg-gray-50 border-none focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center p-3 bg-emerald text-white"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-8 left-0 right-0 text-center text-sm text-emerald font-medium"
              >
                {t('share.copied')}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;