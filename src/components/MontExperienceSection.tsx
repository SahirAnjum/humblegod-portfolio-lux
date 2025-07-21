import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MontExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      period: '2022 — Present',
      company: 'Amdocs',
      role: 'Software Developer',
      location: 'Pune, India',
      description: 'Delivered scalable solutions for Three UK by migrating on-prem data to Snowflake. Building pipelines using Azure Data Factory, Databricks, SQL and version control with Azure DevOps. Proficient in Tableau dashboard development.',
      technologies: ['Azure Data Factory', 'Databricks', 'PySpark', 'Python', 'SQL', 'Tableau']
    },
    {
      period: '2019 — 2022',
      company: 'Infosys',
      role: 'System Engineer',
      location: 'Pune, India',
      description: 'Built robust data workflows for Spark NZ Limited. Specialized in business intelligence and data warehousing using MSBI suite. Earned Global Agile Certification.',
      technologies: ['MSBI', 'SQL Server', 'SSIS', 'SSRS', 'Agile']
    },
    {
      period: '2015 — 2019',
      company: 'PSIT College',
      role: 'Computer Science Student',
      location: 'Kanpur, India',
      description: 'Laid the foundation at Pranveer Singh Institute of Technology under Dr. A.P.J Abdul Kalam Technical University. Developed problem-solving mindset and technical skills.',
      technologies: ['Java', 'Data Structures', 'Algorithms', 'Database Systems']
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.experience-item', {
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
      className="mont-section"
      id="experience"
    >
      <div className="mont-container">
        <div className="mont-grid grid-cols-1 lg:grid-cols-3">
          
          {/* Section Header */}
          <div className="lg:col-span-1">
            <p className="text-small text-muted-foreground mb-4">
              PROFESSIONAL JOURNEY
            </p>
            <h2 className="text-heading">
              Experience
            </h2>
          </div>

          {/* Experience List */}
          <div className="lg:col-span-2 space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="experience-item mont-card p-8 hover:shadow-soft transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  
                  {/* Period */}
                  <div className="md:col-span-1">
                    <p className="text-small text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-medium mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-body">
                        {exp.company} — {exp.location}
                      </p>
                    </div>

                    <p className="text-body">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MontExperienceSection;