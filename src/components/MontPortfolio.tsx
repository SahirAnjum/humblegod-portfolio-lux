import { useEffect } from 'react';
import Navigation from './Navigation';
import MontHeroSection from './MontHeroSection';
import MontExperienceSection from './MontExperienceSection';
import MontSkillsSection from './MontSkillsSection';
import MontContactSection from './MontContactSection';

const MontPortfolio = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <MontHeroSection />
        <MontExperienceSection />
        <MontSkillsSection />
        <MontContactSection />
      </main>
    </>
  );
};

export default MontPortfolio;