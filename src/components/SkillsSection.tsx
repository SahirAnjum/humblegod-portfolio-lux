import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

  const skills = [
    { name: 'Azure Data Factory', icon: '🏭', category: 'Cloud' },
    { name: 'Databricks', icon: '⚡', category: 'Analytics' },
    { name: 'Azure DevOps', icon: '🔄', category: 'DevOps' },
    { name: 'Snowflake', icon: '❄️', category: 'Data Warehouse' },
    { name: 'Control-M', icon: '⚙️', category: 'Automation' },
    { name: 'DBT', icon: '🔧', category: 'Transformation' },
    { name: 'BMC Helix', icon: '🏢', category: 'Enterprise' },
    { name: 'Tableau', icon: '📊', category: 'Visualization' },
    { name: 'Unix', icon: '💻', category: 'Systems' },
    { name: 'SQL', icon: '🗃️', category: 'Database' },
    { name: 'PySpark', icon: '🐍', category: 'Big Data' },
    { name: 'Python', icon: '🐍', category: 'Programming' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, gridRef.current, messageRef.current], {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)'
      });

      // Create timeline for section animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power2.out"
      })
      // Animate grid
      .to(gridRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.6")
      // Animate message
      .to(messageRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      // Animate individual skill cards
      gsap.fromTo('.skill-card', {
        opacity: 0,
        scale: 0.8,
        y: 30
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="glow-orb w-72 h-72 top-20 right-10 opacity-10"></div>
      <div className="glow-orb w-48 h-48 bottom-10 left-20 opacity-15"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Journey over the{' '}
            <span className="glow-text">years...</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card luxury-card p-6 text-center group hover:scale-105 transition-all duration-300 hover:shadow-glow cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

        <div ref={messageRef} className="text-center">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "and with many more still to learn, the journey continues..."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;