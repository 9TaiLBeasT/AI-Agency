import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
  videoSrc: string;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, videoSrc }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleComplete = () => {
    onComplete();
  };

  useEffect(() => {
    console.log('SplashScreen mounted, videoSrc:', videoSrc);
    const video = videoRef.current;
    if (!video) {
      console.log('No video element found, skipping splash screen');
      setTimeout(handleComplete, 1000);
      return;
    }

    const handleLoadedData = () => {
      console.log('Video loaded successfully');
      setIsVideoLoaded(true);
      // Auto play the video once loaded
      video.play().catch((error) => {
        console.error('Video play failed:', error);
        setIsVideoError(true);
        setTimeout(handleComplete, 1000);
      });
    };

    const handleEnded = () => {
      console.log('Video ended, transitioning to main site');
      setTimeout(handleComplete, 500);
    };

    const handleError = (error: Event) => {
      console.error('Video failed to load:', error);
      setIsVideoError(true);
      setTimeout(handleComplete, 1000);
    };

    const handleCanPlay = () => {
      console.log('Video can play');
      setIsVideoLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Fallback timeout - skip splash screen after 5 seconds regardless
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      console.log('Fallback timeout reached, skipping splash screen');
      handleComplete();
    }, 5000);

    return () => clearTimeout(fallbackTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      {/* Loading indicator while video loads or if error */}
      {(!isVideoLoaded || isVideoError) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-center"
        >
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-medium">Loading RivRang...</p>
          <p className="text-sm text-white/70 mt-2">
            {isVideoError ? 'Starting your creative experience' : 'Preparing your creative experience'}
          </p>
        </motion.div>
      )}

      {/* Video element */}
      {!isVideoError && (
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
        onClick={handleComplete}
        className="absolute top-8 right-8 text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-sm"
      >
        Skip
      </motion.button>
    </motion.div>
  );
};

export default SplashScreen;