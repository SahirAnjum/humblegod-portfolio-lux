import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MontSkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      category: 'Cloud & Data Platforms',
      skills: ['Azure Data Factory', 'Databricks', 'Azure DevOps', 'Snowflake', 'Control-M']
    },
    {
      category: 'Programming & Analytics',
      skills: ['Python', 'PySpark', 'SQL']
    },
    {
      category: 'Visualization & Tools',
      skills: ['Tableau', 'DBT', 'BMC Helix', 'Unix/Linux']
    },
    {
      category: 'Methodologies',
      skills: ['Agile', 'DevOps', 'Data Engineering', 'ETL/ELT', 'Business Intelligence']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-category', {
        opacity: 0,
        y: 40
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="mont-section bg-muted/30"
      id="skills"
    >
      <div className="mont-container">
        <div className="mont-grid grid-cols-1 lg:grid-cols-3">
          
          {/* Section Header */}
          <div className="lg:col-span-1">
            <p className="text-small text-muted-foreground mb-4">
              TECHNICAL EXPERTISE
            </p>
            <h2 className="text-heading mb-6">
              Skills &
              <br />
              Technologies
            </h2>
            <p className="text-body">
              A curated collection of tools and technologies I've mastered throughout my journey, with many more still to learn.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className="skill-category space-y-4"
                >
                  <h3 className="font-medium text-foreground">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="text-body hover:text-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MontSkillsSection;