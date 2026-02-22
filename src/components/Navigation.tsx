import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`mont-nav ${scrolled ? 'backdrop-blur-md' : ''}`}>
        <div className="mont-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Robot, click goes to main site */}
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="/assets/robot.png"
                alt="Home"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="mont-button-minimal"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="mont" 
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=sahiranjum2702@gmail.com', '_blank')}
              >
                Get in touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="mont-container pt-24">
            <div className="space-y-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-2xl font-light"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="mont" 
                onClick={() => {
                  window.open('https://mail.google.com/mail/?view=cm&to=sahiranjum2702@gmail.com', '_blank');
                  setIsOpen(false);
                }}
                className="mt-8"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;