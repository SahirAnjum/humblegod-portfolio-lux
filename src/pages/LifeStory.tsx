import React from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Code, Building, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LifeStory = () => {
  const navigate = useNavigate();

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
            Back
          </Button>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#journey" className="hover:text-foreground transition-colors">Journey</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Contact Info Bar */}
      <section className="pt-20 pb-8 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-300">
            <div>sahiranjum2702@gmail.com</div>
            <div>+91 - 7275405244</div>
            <div>linkedin.com/in/sahir-anjum/</div>
            <div>Kanpur, India</div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-4xl text-slate-300 mb-4">Hi, I am</p>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-white">
                Sahir Anjum
              </h1>
              <p className="text-2xl text-slate-400 mb-12">
                Data Engineer | Software Developer
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                Driven by passion. Fueled by curiosity. Known for adaptability and a relentless pursuit of excellence. With 5 years of 
                hands-on experience, a deep understanding of the Telecom domain, and mastery of the tools that power tomorrow.
              </p>
            </div>
            <div className="lg:text-right">
              <img 
                src="/lovable-uploads/80a74838-8597-4d1f-9366-aef7a9e4b6e1.png" 
                alt="Sahir Anjum" 
                className="w-96 h-auto mx-auto lg:mx-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Companies I worked with</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            From humble beginnings to transformative ventures—grateful to every soul who shared 
            my journey. The dedicated artists who traced and figured about.
          </p>
          <div className="flex justify-center items-center gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h3 className="font-semibold">Amdocs</h3>
              <p className="text-sm text-muted-foreground">May 2023 - Dec 2024</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold text-lg">i</span>
              </div>
              <h3 className="font-semibold">Infosys Ltd.</h3>
              <p className="text-sm text-muted-foreground">Aug 2021 - May 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Journey over the years...</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-primary mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold mb-2">Skills I acquired</h3>
                <p className="text-muted-foreground mb-4">
                  As an IT-based Developer, fundamentally Amdocs Analytics/Intelligence. Server-side logic Control of .NET, ETL 
                  tools, MQ Trading, Tools: Unit/Integration/e2e testing; JavaScript, Python.
                </p>
                <p className="text-sm text-muted-foreground">
                  And obviously I was the Team Tech reviewer coordinator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* From Code to Clarity */}
          <div>
            <h2 className="text-2xl font-bold mb-6">From Code to Clarity: My Amdocs Chapter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Joining Amdocs felt like entering the cockpit of a spacecraft—complex instruments, a focused 
              interface on the "intersection of complex data, advanced algorithms, and meaningful impact. I 
              stepped into the realm of a Software/Data Analytics, starting with high-frequency data processing that were 
              high-value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But my journey wasn't just about code alone... It was this creative boosters' challenges, and 
              technologies.
            </p>
          </div>

          {/* Code Contribution */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One to its founding: As I Collaboration with cross-functional teams for development lifecycle 
              Experience was centered: Contributions learned and be again... ongoing turned into 
              OUTSTANDING efficiency. I was very focused on things... something very different now.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am into that big experience to Boosting IT: Telecom and Engineering experience, from ideas 
              and Initiatives conference applications, transferring advanced data solutions from ideas 
              (using ideas), SSIS, .NET, I trained all the relevant data processing challenges & data retrieval from 
              different resources.
            </p>
          </div>

          {/* Skills and Growth */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I loved the fact my Big — from Big-data, slow-frequency — not just Cleansing; this data flow to gather 
              them (from future, software, and dynamics experience how empowered 6 solid teams to achieve 
              their objectives very strong.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The skills I've gathered are many... so, the most valuable lesson? There's always more to 
              learn... technology evolved, business directions had, yet to give positive, through at that lean 
              and grows stronger.
            </p>
          </div>

          {/* Infosys Chapter */}
          <div>
            <h2 className="text-2xl font-bold mb-6">The beginning... of a journey...</h2>
            <h3 className="text-xl font-semibold mb-4">Initial Days in Telecom & Data Engineering: My Infosys Chapter</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stepping into Software Analyst, a star foundation to - and for me, that foundation was built at 
              Infosys. I joined as a Junior System Engineer in 2021, and very quickly discovered that Infosys 
              was not just a job, but a school for those who are serious about learning in terms of 
              software development & the high-impact telecom industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My first encounter was quite be A I named to range solution so right! Servers provided us 
              with great Customer I had been entrusted — so fundamental functionalities! functionalities 
              Expert making discounting customers during... using through it to achieve what we'd own.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's in Infosys I learned that behind every program — the right constructive design analysis 
              that the real big training process — the full contract to shape my big path to 
              this very ambitious journey.
            </p>
          </div>

          {/* Professional Growth */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Fueling Growth: Recognitions, Learning & Lifelong Curiosity</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My learning has been the tool that led by the value I had, that led me to growth, I hand and life 
              the mindset I achieved. At Amdocs, I was recognized for delivering automation framework 
              and solutions that benefited the bulk... functionality and innovations that does discuss all teams who about method.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Later, at Infosys I reached a senior role Development. designing top yet understanding 
              that structure that learning engineer — as the most passionate engineer — even my logic path to this 
              that very real impact approach in tools like ASP.NET MVC and Android Development & technology — life, his first 
              About Exam: Star Software University, where I lent my excellence documented something that first 
              influenced me where that its 20 or 25, he to get from.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through the 5 years to my back to "Personal Strength! Java of Technology, back to A.I.U 
              About Indian Star general University, where I lent my excellence documented something that first 
              influenced me where that its goals, he to its from.
            </p>
          </div>

          {/* Philosophy */}
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Discipline and drive have always been at the heart of my work. As a graduated postgraduate champion, 
              a basketball player when I share to one Football. P2K instructions, and one concept experiences — 
              those principles where — life that's, and one I'm first both passionate, consistent success is 
              all effort that started to learning process.
              
              I discovered a concrete insight during in the sector.
            </p>
          </div>

        </div>
      </section>

      {/* Return Button */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Button 
            onClick={() => navigate('/')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium"
          >
            Return to Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LifeStory;