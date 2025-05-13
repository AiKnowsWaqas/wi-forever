import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('https://docs.google.com/uc?export=download&id=1-2xZn6daQGUKgdv8Hn9ZHMCbQB9ES_vr');
    audioRef.current.loop = true;
    audioRef.current.preload = 'auto';

    // Add event listeners
    const audio = audioRef.current;
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));

    // Cleanup
    return () => {
      if (audio) {
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const handleCanPlayThrough = () => {
    if (audioRef.current) {
      // Attempt autoplay
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Autoplay prevented:', error);
            setIsPlaying(false);
          });
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log('Playback prevented:', error);
          });
        }
      }
    }
  };

  return (
    <div className="fixed top-4 right-20 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="bg-white rounded-lg shadow-md border border-gold-light p-2 hover:bg-emerald/10 transition-colors"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-emerald" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-400" />
        )}
      </motion.button>
    </div>
  );
};

export default AudioPlayer;