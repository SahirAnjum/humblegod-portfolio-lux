import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Envelope, LinkedinLogo, Phone, MapPin } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)'
      });

      // Animate on scroll
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate contact items
      gsap.fromTo('.contact-item', {
        opacity: 0,
        y: 30,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Envelope,
      label: 'Email',
      value: 'sahiranjum2702@gmail.com',
      link: 'mailto:sahiranjum2702@gmail.com'
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
      value: '+91 - 7275405244',
      link: 'tel:+917275405244'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kanpur, India',
      link: '#'
    }
  ];

  return (
    <footer 
      id="contact"
      ref={sectionRef}
      className="py-20 relative overflow-hidden hero-gradient"
    >
      {/* Background effects */}
      <div className="glow-orb w-96 h-96 top-10 left-10 opacity-15"></div>
      <div className="glow-orb w-64 h-64 bottom-10 right-20 opacity-20"></div>

      <div className="container mx-auto px-6">
        <div ref={contentRef} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's{' '}
            <span className="glow-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-item luxury-card p-6 text-center group hover:scale-105 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <item.icon 
                    className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" 
                    weight="bold" 
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground break-words">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <p className="text-muted-foreground">
              © 2024 Sahir Anjum. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;