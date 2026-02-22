import { useEffect, useRef } from 'react';
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
        duration: 1.2,
        ease: "power3.out"
      })
      .from(contentRef.current.querySelectorAll('.fade-in'), {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      }, "-=0.6");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-[60vh] md:h-screen flex items-center overflow-hidden"
      >
        <img
          src={`${import.meta.env.BASE_URL}lovable-uploads/b4159132-4160-4194-8eb1-3086c146d1e8.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="hero-content relative z-10 text-left text-white max-w-6xl px-6 pt-20 pb-12 md:py-0 ml-4 md:ml-16 lg:ml-24">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              <span className="block">Sahir</span>
              <span className="block text-white/90">Anjum</span>
            </h1>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-lg md:text-2xl lg:text-3xl text-white/90 font-light max-w-lg leading-relaxed">
              Data Engineer | Software Developer
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="bg-background">
        {/* Companies Section */}
        <section className="py-24 px-6 fade-in bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Companies I worked with
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                From humble beginnings to transformative milestones — grateful to every soul who shaped my journey. The crucibles where I was forged and forged ahead.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              <div className="group flex flex-col items-center space-y-6 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <div className="h-24 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/bd5cc484-3cf6-4180-aab8-a1958f54ea33.png`} 
                    alt="Amdocs" 
                    className="h-20 object-contain"
                  />
                </div>
                <p className="text-muted-foreground font-medium text-lg">Mar 2022 - Sept 2025</p>
              </div>
              
              <div className="group flex flex-col items-center space-y-6 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <div className="h-24 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/0bee547f-a11f-45d2-aefe-988c328f34f8.png`} 
                    alt="Infosys" 
                    className="h-20 object-contain"
                  />
                </div>
                <p className="text-muted-foreground font-medium text-lg">Aug 2019 - Mar 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-24 px-6 fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Journey over the years...
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-24">
              {/* Amdocs Chapter */}
              <div className="fade-in group">
                <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    From Code to Clarity: My Amdocs Chapter
                  </h3>
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    <p className="text-lg leading-relaxed">
                      Every story begins with a spark — mine ignited in the world of telecom, where I found myself at the intersection of complex data, business demands, and meaningful impact. I stepped into the role of a software developer for Hutchison 3G UK Limited (Three UK), a major telecom player in the United Kingdom.
                    </p>
                    <p className="text-lg leading-relaxed">
                      But my journey wasn't confined to code alone — it took me across borders, challenges, and technologies.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Onsite in Reading, UK, I collaborated with cross-functional teams to decode intricate business requirements. Conversations turned into insights, insights turned into architectures, and slowly, I became a bridge — connecting raw data to real decisions.
                    </p>
                    <p className="text-lg leading-relaxed">
                      I architected and developed robust data pipelines using Azure Data Factory, Delta Live Tables, and Databricks notebooks, transforming business logic into seamless flows. Using PySpark, Python, and SQL, I shaped data to speak in the language the business understood.
                    </p>
                    <p className="text-lg leading-relaxed">
                      I brought stories to life with Tableau dashboards — not just creating visuals, but tailoring them with filters, actions, and dynamic elements that empowered stakeholders to make informed decisions.
                    </p>
                    <p className="text-lg leading-relaxed font-medium text-foreground">
                      The skills I've gathered are many — but the most valuable lesson? There's always more to learn. Technology evolves, business problems morph, and my passion for bridging the two only grows stronger.
                    </p>
                  </div>
                </div>
              </div>

              {/* Infosys Chapter */}
              <div className="fade-in group">
                <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    The beginning — of a journey | Initial Days in Telecom & Data Engineering: My Infosys Chapter
                  </h3>
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    <p className="text-lg leading-relaxed">
                      Every strong structure needs a solid foundation — and for me, that foundation was built at Infosys Ltd., where I began my journey from a trainee to a full-time system engineer, learning the ropes of software development in the high-stakes telecom domain.
                    </p>
                    <p className="text-lg leading-relaxed">
                      My role centered around Spark NZ Limited, a major telecom and digital services provider in New Zealand. From day one, I was immersed in understanding complex functional specifications, decoding business logic, and turning it into scalable data workflows.
                    </p>
                    <p className="text-lg leading-relaxed">
                      My journey with Infosys didn't begin in a live project — it started in the classroom. As an intern, I dove into the Infosys Foundation Program, exploring Business Intelligence with the MSBI suite and soaking in the fundamentals of data warehousing.
                    </p>
                    <p className="text-lg leading-relaxed font-medium text-foreground">
                      The beginning — of a journey still being written, one pipeline, one insight, one challenge at a time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth Chapter */}
              <div className="fade-in group">
                <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    Fueling Growth: Recognitions, Learning & Lifelong Curiosity
                  </h3>
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    <p className="text-lg leading-relaxed">
                      My journey has been marked not just by the roles I held, but by the impact I created and the mindset I nurtured. At Amdocs, I was recognized for delivering automation solutions that streamlined operations and unlocked efficiency — proof that innovation isn't just about tools, but about mindset.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Earlier, at Infosys, I earned a Global Agile Certification, deepening my understanding of collaborative delivery and iterative progress — skills that continue to shape my approach to data and development.
                    </p>
                    <p className="text-lg leading-relaxed font-medium text-foreground">
                      The roots of this journey go back to Pranveer Singh Institute of Technology, under Dr. A.P.J Abdul Kalam Technical University, where I laid the academic foundation for everything that followed — not just learning to code, but to think, solve, and adapt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-24 px-6 fade-in bg-gradient-to-t from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
              <div className="prose prose-xl max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-xl leading-relaxed">
                  Discipline and drive have always been at the heart of my story. As a swimming champion, I learned early what it takes to stay focused, push boundaries, and rise through perseverance — lessons that seamlessly flowed into my journey through tech. But this is far from the end. With every challenge faced and skill acquired, one truth becomes clear: there's always a better solution waiting to be discovered, a smarter insight hiding in the noise.
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground/80 italic font-light tracking-wide mb-8">
              The road ahead is vast — and I'm just getting started.
            </p>
            <div className="border-t border-border/20 pt-8">
              <p className="text-base text-muted-foreground/70">
                With heartfelt gratitude to my parents <span className="font-medium text-foreground">Mohd. Sirajuddin</span> and <span className="font-medium text-foreground">Rubana Rehman</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifeStory;