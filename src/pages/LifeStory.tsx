import React from 'react';
import { ArrowLeft } from 'lucide-react';
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
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-8">My Life Story</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                Content coming soon...
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                Content coming soon...
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <p className="text-muted-foreground leading-relaxed">
                Content coming soon...
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStory;