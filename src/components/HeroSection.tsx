import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Envelope } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Initial states
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)'
    });

    gsap.set(profileRef.current, {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(5px)'
    });

    // Animate elements in sequence
    tl.to(profileRef.current, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: "power2.out"
    })
    .to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.8")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    // Floating animation for background elements
    gsap.to(".glow-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });

  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('skills');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="glow-orb w-96 h-96 top-10 left-10 opacity-20"></div>
      <div className="glow-orb w-64 h-64 bottom-20 right-20 opacity-30"></div>
      <div className="glow-orb w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 
              ref={headlineRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="metallic-text">Sahir Anjum</span>
              <br />
              <span className="glow-text text-3xl md:text-4xl lg:text-5xl">
                Data Engineer | Software Developer
              </span>
            </h1>

            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            >
              Driven by passion. Fueled by curiosity. Known for adaptability and a relentless pursuit of excellence. 
              With 5 years of hands-on experience, a deep understanding of the Telecom domain, and mastery of the tools that power tomorrow.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('mailto:sahiranjum2702@gmail.com')}
                className="group"
              >
                <Envelope weight="bold" className="w-5 h-5" />
                Get In Touch
              </Button>
              
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => window.open('#', '_blank')}
                className="group"
              >
                <Download weight="bold" className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={profileRef} className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur-3xl opacity-20"></div>
              <img 
                src="/lovable-uploads/08a52170-6760-4225-8f56-230f8e0c8466.png"
                alt="Sahir Anjum - Data Engineer & Software Developer"
                className="relative w-full h-auto rounded-2xl luxury-card border-2 border-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown 
              weight="bold" 
              className="w-6 h-6 animate-bounce group-hover:text-primary" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;