import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Star, Coffee, Code, Briefcase } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const LifeStory = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline({ delay: 0.5 });
    
    gsap.set(['.story-title', '.story-subtitle', '.story-nav'], {
      opacity: 0,
      y: 60
    });

    tl.to('.story-title', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .to('.story-subtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to('.story-nav', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

    // Story sections animation
    gsap.fromTo('.story-section', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const storyMilestones = [
    {
      icon: Heart,
      year: "1999",
      title: "The Beginning",
      description: "Born in Kanpur, India. From an early age, I was fascinated by how things work - taking apart radios, exploring computers, and asking endless questions about technology."
    },
    {
      icon: Code,
      year: "2017",
      title: "First Line of Code",
      description: "Wrote my first 'Hello World' program in college. That moment of seeing code come to life sparked a passion that would define my career path."
    },
    {
      icon: Star,
      year: "2019",
      title: "University Journey",
      description: "Graduated with a degree in Computer Science. These years shaped my analytical thinking and introduced me to the vast world of software engineering."
    },
    {
      icon: Briefcase,
      year: "2020",
      title: "Professional Start",
      description: "Began my career in the Telecom domain. Over 5 years, I've grown from a curious graduate to a seasoned Data Engineer and Software Developer."
    },
    {
      icon: Coffee,
      year: "2024",
      title: "Continuous Learning",
      description: "Today, I continue to evolve, embracing new technologies and challenges. Every project is an opportunity to innovate and create impact."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="mont-nav">
        <div className="mont-container">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="story-nav flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="story-nav">
              <span className="text-small">LIFE STORY</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="mont-section pt-32">
        <div className="mont-container text-center">
          <h1 className="story-title text-display mb-8">
            My Journey
          </h1>
          <p className="story-subtitle text-body max-w-2xl mx-auto">
            Every line of code tells a story. Every project shapes a vision. 
            Here's the journey that brought me to where I am today.
          </p>
        </div>
      </section>

      {/* Story Timeline */}
      <section ref={storyRef} className="mont-section">
        <div className="mont-container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {storyMilestones.map((milestone, index) => (
                <div key={index} className="story-section">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    
                    {/* Timeline marker */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-foreground text-background rounded-full flex items-center justify-center mb-4">
                        <milestone.icon className="w-8 h-8" />
                      </div>
                      <div className="text-small font-bold">
                        {milestone.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 mont-card p-8">
                      <h3 className="text-heading mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-body">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="mont-section bg-muted/30">
        <div className="mont-container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-heading">
              My Philosophy
            </h2>
            <p className="text-body text-lg">
              "Technology is not just about solving problems—it's about creating possibilities. 
              Every challenge is an opportunity to innovate, every failure is a lesson learned, 
              and every success is a stepping stone to something greater."
            </p>
            <div className="pt-8">
              <Button 
                variant="mont"
                onClick={() => window.location.href = '/'}
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeStory;