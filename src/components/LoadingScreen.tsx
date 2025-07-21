import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(progressBarRef.current, { width: 0 });
    gsap.set(logoRef.current, { opacity: 0, y: 30 });
    gsap.set(percentRef.current, { opacity: 0 });

    // Animate logo entrance
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    })
    .to(percentRef.current, {
      opacity: 1,
      duration: 0.5
    }, "-=0.5");

    // Progress bar animation with percentage counter
    let progressValue = 0;
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        progressValue = Math.round(this.progress() * 100);
        if (percentRef.current) {
          percentRef.current.textContent = `${progressValue}%`;
        }
      },
      onComplete: () => {
        // Exit animation
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete();
          }
        });
      }
    });

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1
    });

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Background glow effects */}
      <div className="glow-orb w-96 h-96 top-1/4 left-1/4 opacity-20"></div>
      <div className="glow-orb w-64 h-64 bottom-1/4 right-1/4 opacity-30"></div>
      
      <div className="flex flex-col items-center space-y-8">
        {/* Logo/Brand */}
        <div ref={logoRef} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold metallic-text mb-2">
            HUMBLEGOD
          </h1>
          <p className="text-muted-foreground text-lg">
            Crafting Digital Excellence
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 space-y-4">
          <div className="relative w-full h-1 bg-secondary/30 rounded-full overflow-hidden">
            <div 
              ref={progressBarRef}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
          
          {/* Percentage */}
          <div className="text-center">
            <span ref={percentRef} className="text-2xl font-mono text-primary">
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;