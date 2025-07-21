import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import TimelineSection from './TimelineSection';
import FooterSection from './FooterSection';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Initialize smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  };

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div className="relative">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <HeroSection />
        <SkillsSection />
        <TimelineSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Portfolio;