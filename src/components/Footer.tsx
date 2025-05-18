import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white border-t border-gold-light">
      <div className="section py-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-32 bg-gold-light mx-auto mb-8"></div>
            
            <div className="mb-6">
              <h3 className="arabic-text text-xl md:text-2xl mb-3 text-emerald">
                بارك الله لكما وبارك عليكما وجمع بينكما في خير
              </h3>
              <p className="text-gray-700 italic">
                {t('footer.dua')}
              </p>
            </div>
            
            <div className="flex justify-center items-center mb-8">
              <div className="h-px w-16 bg-gold-light"></div>
              <Heart className="w-5 h-5 mx-4 text-gold fill-current" />
              <div className="h-px w-16 bg-gold-light"></div>
            </div>
            
            <div className="text-gray-600">
              <p className="mb-4">
                 {t('footer.contact')}
              </p>
             
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="bg-emerald text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
       
         
    <a
      href="https://nsmdwaqas-ai.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-200"
    >
      © Made with ❤️ and  ( some tea ! ) by Waqas | Click to know more.. 
    </a>
    
      
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;