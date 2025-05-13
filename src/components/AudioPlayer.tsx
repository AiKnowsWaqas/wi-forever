import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motionKinnon } from 'framer-motion';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Default to true for intended autoplay
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/bg.mp3');
    audioRef.current.loop = true;
    audioRef.current.preload = 'auto';

    const audio = audioRef.current;

    // Event listeners
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('loadedmetadata', () => {
      // Attempt to play as soon as metadata is loaded
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Autoplay failed:', error);
            setIsPlaying(false);
            // Fallback: Attempt to play on first user interaction
            const tryPlayOnInteraction = () => {
              const playPromise = audio.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                    // Remove listeners after successful play
                    window.removeEventListener('click', tryPlayOnInteraction);
                    window.removeEventListener('touchstart', tryPlayOnInteraction);
                  })
                  .catch((err) => console.log('Interaction play failed:', err));
              }
            };
            window.addEventListener('click', tryPlayOnInteraction);
            window.addEventListener('touchstart', tryPlayOnInteraction);
          });
      }
    });

    // Cleanup
    return () => {
      if (audio) {
        audio.removeEventListener('play', () => setIsPlaying(true));
        audio.removeEventListener('pause', () => setIsPlaying(false));
        audio.removeEventListener('loadedmetadata', () => {});
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

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