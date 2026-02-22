import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Navigation from './Navigation';
import MontHeroSection from './MontHeroSection';
import MontExperienceSection from './MontExperienceSection';
import MontSkillsSection from './MontSkillsSection';
import MontContactSection from './MontContactSection';

const MontPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Page load animation with extended duration
    const tl = gsap.timeline({ 
      delay: 3, // 3 second delay for preloading
      onComplete: () => setIsLoaded(true)
    });

    // Set initial loaded state to true after delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    // Smooth scrolling setup
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div className={`loading-overlay fixed inset-0 bg-background z-50 flex items-center justify-center transition-all duration-800 ${isLoaded ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}>
        <div className="text-center">
          <h1 className="text-2xl font-light tracking-wider">SAHIR ANJUM</h1>
          <div className="w-16 h-px bg-foreground mt-4 mx-auto"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Navigation />
        <main>
          <MontHeroSection />
          <MontExperienceSection />
          <MontSkillsSection />
          <MontContactSection />
        </main>
      </div>
    </>
  );
};

export default MontPortfolio;