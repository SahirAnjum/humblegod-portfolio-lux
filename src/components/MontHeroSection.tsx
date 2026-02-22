import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Download } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const MontHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });

    // Initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, imageRef.current], {
      opacity: 0,
      y: 60
    });

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1");

  }, []);

  return (
    <section 
      ref={heroRef}
      className="mont-section pt-24 md:pt-32 min-h-screen flex items-center"
      id="about"
    >
      <div className="mont-container">
        <div className="mont-grid grid-cols-1 lg:grid-cols-5 items-center gap-16">
          
          {/* Image - Now on the left and wider */}
          <div ref={imageRef} className="relative lg:col-span-3 order-1 lg:order-1">
            <div className="aspect-[16/10] overflow-hidden mont-card">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/be8475ce-53c5-4dc0-a042-fdff043e0323.png`}
                alt="Sahir Anjum"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Content - Now on the right */}
          <div className="space-y-8 lg:col-span-2 order-2 lg:order-2">
            <div className="space-y-6">
              <p className="text-small text-muted-foreground">
                DATA ENGINEER & SOFTWARE DEVELOPER
              </p>
              
              <h1 
                ref={titleRef}
                className="text-display"
              >
                Sahir
                <br />
                Anjum
              </h1>

              <p 
                ref={subtitleRef}
                className="text-body max-w-lg"
              >
                Driven by passion. Fueled by curiosity. Known for adaptability and a relentless pursuit of excellence. 
                With Approx. 7 years of hands-on experience in the Telecom domain.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="mont"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const link = document.createElement('a');
                  link.href = `${import.meta.env.BASE_URL}lovable-uploads/Sahir_Anjum%20resume.pdf`;
                  link.download = 'Sahir_Anjum_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="group"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              
              <Button 
                variant="minimal"
                onClick={() => navigate('/life-story')}
                className="group"
              >
                Life story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MontHeroSection;