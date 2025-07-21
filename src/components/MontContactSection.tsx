import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Envelope, LinkedinLogo, Phone, MapPin, ArrowRight } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const MontContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const contactMethods = [
    {
      icon: Envelope,
      label: 'Email',
      value: 'sahiranjum2702@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&to=sahiranjum2702@gmail.com'
    },
    {
      icon: LinkedinLogo,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sahir-anjum',
      link: 'https://linkedin.com/in/sahir-anjum'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7275405244',
      link: 'tel:+917275405244'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kanpur, India',
      link: '#'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-item', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
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
      id="contact"
    >
      <div className="mont-container">
        <div className="mont-grid grid-cols-1 lg:grid-cols-2 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-small text-muted-foreground mb-4">
                LET'S CONNECT
              </p>
              <h2 className="text-heading mb-6">
                Ready to discuss
                <br />
                your next project?
              </h2>
              <p className="text-body mb-8">
                I'm always open to exploring new opportunities, collaborating on interesting projects, 
                or simply having a conversation about technology and innovation.
              </p>
            </div>

            <Button 
              variant="mont"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=sahiranjum2702@gmail.com', '_blank')}
              className="group"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              // Make Location non-clickable
              if (method.label === 'Location') {
                return (
                  <div
                    key={index}
                    className="contact-item block mont-card p-6 cursor-default"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-muted rounded-full">
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-small text-muted-foreground mb-1">
                          {method.label}
                        </p>
                        <p className="font-medium">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Keep other items clickable
              return (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-item block mont-card p-6 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-muted rounded-full group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-small text-muted-foreground mb-1">
                        {method.label}
                      </p>
                      <p className="font-medium">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-small text-muted-foreground space-y-2 md:space-y-0">
            <p>© 2025 Sahir Anjum. All rights reserved.</p>
            <div className="flex flex-col md:items-end text-center md:text-right">
              <p>Crafted with passion and precision.</p>
              <p className="text-xs mt-1">
                Photo credit: <a 
                  href="https://www.linkedin.com/in/devyansh-barwar-a86b4233b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline"
                >
                  Devyansh Barwar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MontContactSection;