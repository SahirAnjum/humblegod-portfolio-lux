import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

interface Chapter {
  id: string;
  period: string;
  title: string;
  position: 'top' | 'middle' | 'bottom';
  header: string;
  content: string;
}

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const chapters: Chapter[] = [
    {
      id: 'amdocs',
      period: '2022 - Current',
      title: 'Amdocs Chapter',
      position: 'top',
      header: 'From Code to Clarity: My Amdocs Chapter',
      content: `Every story begins with a spark — mine ignited in the world of telecom, where I found myself at the intersection of complex data, business demands, and meaningful impact. I stepped into the role of a software developer for Hutchison 3G UK Limited (Three UK), a major telecom player in the United Kingdom.

But my journey wasn't confined to code alone — it took me across borders, challenges, and technologies.

Onsite in Reading, UK, I collaborated with cross-functional teams to decode intricate business requirements. Conversations turned into insights, insights turned into architectures, and slowly, I became a bridge — connecting raw data to real decisions.

I architected and developed robust data pipelines using Azure Data Factory, Delta Live Tables, and Databricks notebooks, transforming business logic into seamless flows. Using PySpark, Python, and SQL, I shaped data to speak in the language the business understood.

I brought stories to life with Tableau dashboards — not just creating visuals, but tailoring them with filters, actions, and dynamic elements that empowered stakeholders to make informed decisions.

The skills I've gathered are many — but the most valuable lesson? There's always more to learn. Technology evolves, business problems morph, and my passion for bridging the two only grows stronger.`
    },
    {
      id: 'infosys',
      period: '2019 - 2022',
      title: 'Infosys Chapter',
      position: 'middle',
      header: 'Initial Days in Telecom & Data Engineering: My Infosys Chapter',
      content: `Every strong structure needs a solid foundation — and for me, that foundation was built at Infosys Ltd., where I began my journey from a trainee to a full-time system engineer, learning the ropes of software development in the high-stakes telecom domain.

My role centered around Spark NZ Limited, a major telecom and digital services provider in New Zealand. From day one, I was immersed in understanding complex functional specifications, decoding business logic, and turning it into scalable data workflows.

My journey with Infosys didn't begin in a live project — it started in the classroom. As an intern, I dove into the Infosys Foundation Program, exploring Business Intelligence with the MSBI suite and soaking in the fundamentals of data warehousing.

The beginning — of a journey still being written, one pipeline, one insight, one challenge at a time.`
    },
    {
      id: 'academic',
      period: '2015 - 2019',
      title: 'Academic Chapter - PSIT College',
      position: 'bottom',
      header: 'Fueling Growth: Recognitions, Learning & Lifelong Curiosity',
      content: `My journey has been marked not just by the roles I held, but by the impact I created and the mindset I nurtured. At Amdocs, I was recognized for delivering automation solutions that streamlined operations and unlocked efficiency — proof that innovation isn't just about tools, but about mindset.

Earlier, at Infosys, I earned a Global Agile Certification, deepening my understanding of collaborative delivery and iterative progress — skills that continue to shape my approach to data and development.

The roots of this journey go back to Pranveer Singh Institute of Technology, under Dr. A.P.J Abdul Kalam Technical University, where I laid the academic foundation for everything that followed — not just learning to code, but to think, solve, and adapt.`
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, timelineRef.current], {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      });

      // Section entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power2.out"
      })
      .to(timelineRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power2.out"
      }, "-=0.6");

      // Timeline items animation
      gsap.fromTo('.timeline-item', {
        opacity: 0,
        x: (index) => index % 2 === 0 ? -50 : 50,
        scale: 0.9
      }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  return (
    <section 
      id="timeline"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="glow-orb w-80 h-80 top-10 left-1/4 opacity-10"></div>
      <div className="glow-orb w-64 h-64 bottom-20 right-1/3 opacity-15"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Career{' '}
            <span className="glow-text">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/60 to-primary/30"></div>

          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className={`timeline-item relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div 
                  className="luxury-card p-6 cursor-pointer hover:shadow-glow transition-all duration-300 group"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`${index % 2 === 0 ? 'order-2' : ''}`}>
                      <span className="text-primary font-mono text-sm">
                        {chapter.period}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {chapter.title}
                      </h3>
                    </div>
                    <div className={`${index % 2 === 0 ? 'order-1' : ''}`}>
                      {expandedChapter === chapter.id ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Expanded content */}
                  {expandedChapter === chapter.id && (
                    <div className="mt-4 pt-4 border-t border-border/50 text-left">
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {chapter.header}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {chapter.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;