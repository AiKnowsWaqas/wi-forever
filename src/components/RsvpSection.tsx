import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { RsvpFormData } from '../types';

const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState<RsvpFormData>({
    name: '',
    email: '',
    phone: '',
    attending: true,
    guests: 1,
    dietaryRestrictions: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof RsvpFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : type === 'number' 
          ? parseInt(value) 
          : value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof RsvpFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RsvpFormData, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (formData.attending && (formData.guests < 1 || formData.guests > 10)) {
      newErrors.guests = 'Please select between 1 and 10 guests';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to a server
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="rsvp" className="section py-16 bg-white/80">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-primary font-semibold mb-4 text-emerald">
            RSVP
          </h2>
          <p className="text-lg text-gray-700">
            Please let us know if you'll be joining us on our special day.
          </p>
        </motion.div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gold-light">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald/10 text-emerald mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-primary font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-700">
                Your RSVP has been received. We look forward to celebrating with you!
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-emerald hover:text-emerald-dark transition-colors"
              >
                Submit another response
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? 'border-error' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input ${errors.email ? 'border-error' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`input ${errors.phone ? 'border-error' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="guests" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Number of Guests*
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    className={`input ${errors.guests ? 'border-error' : ''}`}
                  />
                  {errors.guests && (
                    <p className="mt-1 text-sm text-error">{errors.guests}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="attending" 
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="attending"
                    name="attending"
                    checked={formData.attending}
                    onChange={handleChange}
                    className="w-5 h-5 text-emerald border-gold rounded focus:ring-emerald mr-2"
                  />
                  <span className="text-gray-700">
                    I will be attending the wedding
                  </span>
                </label>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="dietaryRestrictions" 
                  className="block text-gray-700 font-medium mb-2"
                >
                  Dietary Restrictions/Special Requirements
                </label>
                <textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  rows={3}
                  className="input"
                  placeholder="Please let us know if you have any dietary restrictions or special requirements"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-emerald text-white font-medium rounded-md shadow-sm hover:bg-emerald-dark transition-colors focus:outline-none focus:ring-2 focus:ring-emerald focus:ring-opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send RSVP
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;