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

      {/* PDF Viewer */}
      <div className="pt-20 h-screen">
        <object
          data="/lovable-uploads/Desktop - 2.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full p-8">
            <p className="text-lg mb-4">Unable to display PDF in browser.</p>
            <Button 
              onClick={() => window.open('/lovable-uploads/Desktop - 2.pdf', '_blank')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Open PDF in New Tab
            </Button>
          </div>
        </object>
      </div>
    </div>
  );
};

export default LifeStory;