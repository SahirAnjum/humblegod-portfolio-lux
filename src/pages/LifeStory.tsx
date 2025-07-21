import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const LifeStory = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && contentRef.current) {
      const tl = gsap.timeline();
      
      tl.from(heroRef.current.querySelector('.hero-content'), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      })
      .from(contentRef.current.querySelectorAll('.fade-in'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.5");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/lovable-uploads/b4159132-4160-4194-8eb1-3086c146d1e8.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="hero-content relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sahir Anjum
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Data Engineer | Software Developer
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="bg-background">
        {/* Companies Section */}
        <section className="py-20 px-6 fade-in">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Companies I worked with
            </h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to transformative milestones — grateful to every soul who shaped my journey. The crucibles where I was forged and forged ahead.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-20 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/bd5cc484-3cf6-4180-aab8-a1958f54ea33.png" 
                    alt="Amdocs" 
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-muted-foreground font-medium">Mar 2022 - Sept 2025</p>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="h-20 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/0bee547f-a11f-45d2-aefe-988c328f34f8.png" 
                    alt="Infosys" 
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-muted-foreground font-medium">Aug 2019 - Mar 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 px-6 bg-muted/30 fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Journey over the years...
            </h2>
            
            <div className="space-y-16">
              {/* Amdocs Chapter */}
              <div className="fade-in">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  From Code to Clarity: My Amdocs Chapter
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    Every story begins with a spark — mine ignited in the world of telecom, where I found myself at the intersection of complex data, business demands, and meaningful impact. I stepped into the role of a software developer for Hutchison 3G UK Limited (Three UK), a major telecom player in the United Kingdom.
                  </p>
                  <p className="mb-4">
                    But my journey wasn't confined to code alone — it took me across borders, challenges, and technologies.
                  </p>
                  <p className="mb-4">
                    Onsite in Reading, UK, I collaborated with cross-functional teams to decode intricate business requirements. Conversations turned into insights, insights turned into architectures, and slowly, I became a bridge — connecting raw data to real decisions.
                  </p>
                  <p className="mb-4">
                    I architected and developed robust data pipelines using Azure Data Factory, Delta Live Tables, and Databricks notebooks, transforming business logic into seamless flows. Using PySpark, Python, and SQL, I shaped data to speak in the language the business understood.
                  </p>
                  <p className="mb-4">
                    I brought stories to life with Tableau dashboards — not just creating visuals, but tailoring them with filters, actions, and dynamic elements that empowered stakeholders to make informed decisions.
                  </p>
                  <p>
                    The skills I've gathered are many — but the most valuable lesson? There's always more to learn. Technology evolves, business problems morph, and my passion for bridging the two only grows stronger.
                  </p>
                </div>
              </div>

              {/* Infosys Chapter */}
              <div className="fade-in">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  The beginning — of a journey | Initial Days in Telecom & Data Engineering: My Infosys Chapter
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    Every strong structure needs a solid foundation — and for me, that foundation was built at Infosys Ltd., where I began my journey from a trainee to a full-time system engineer, learning the ropes of software development in the high-stakes telecom domain.
                  </p>
                  <p className="mb-4">
                    My role centered around Spark NZ Limited, a major telecom and digital services provider in New Zealand. From day one, I was immersed in understanding complex functional specifications, decoding business logic, and turning it into scalable data workflows.
                  </p>
                  <p className="mb-4">
                    My journey with Infosys didn't begin in a live project — it started in the classroom. As an intern, I dove into the Infosys Foundation Program, exploring Business Intelligence with the MSBI suite and soaking in the fundamentals of data warehousing.
                  </p>
                  <p>
                    The beginning — of a journey still being written, one pipeline, one insight, one challenge at a time.
                  </p>
                </div>
              </div>

              {/* Growth Chapter */}
              <div className="fade-in">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Fueling Growth: Recognitions, Learning & Lifelong Curiosity
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    My journey has been marked not just by the roles I held, but by the impact I created and the mindset I nurtured. At Amdocs, I was recognized for delivering automation solutions that streamlined operations and unlocked efficiency — proof that innovation isn't just about tools, but about mindset.
                  </p>
                  <p className="mb-4">
                    Earlier, at Infosys, I earned a Global Agile Certification, deepening my understanding of collaborative delivery and iterative progress — skills that continue to shape my approach to data and development.
                  </p>
                  <p>
                    The roots of this journey go back to Pranveer Singh Institute of Technology, under Dr. A.P.J Abdul Kalam Technical University, where I laid the academic foundation for everything that followed — not just learning to code, but to think, solve, and adapt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-20 px-6 bg-background fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-8">
              <p>
                Discipline and drive have always been at the heart of my story. As a state-level swimming champion, I learned early what it takes to stay focused, push boundaries, and rise through perseverance — lessons that seamlessly flowed into my journey through tech. But this is far from the end. With every challenge faced and skill acquired, one truth becomes clear: there's always a better solution waiting to be discovered, a smarter insight hiding in the noise.
              </p>
            </div>
            <p className="text-sm text-muted-foreground/70 italic">
              The road ahead is vast — and I'm just getting started.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LifeStory;