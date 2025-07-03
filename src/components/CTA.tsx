
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const benefits = [
    'Industry-recognized certificates',
    'Expert instructors and mentorship',
    'Hands-on projects and real-world experience',
    'Job placement assistance',
    'Lifetime access to course materials',
    'Global community of professionals'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:30px_30px] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Hedamo. 
            Start your certification journey today and unlock new opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 dark:bg-rose-900/20 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 dark:border-rose-700/30">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Hedamo?</h3>
              <ul className="space-y-3 text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/80 dark:bg-rose-900/20 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 dark:border-rose-700/30">
              <h3 className="text-xl font-semibold text-foreground mb-4">Get Started Today</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-rose-100 dark:bg-rose-800/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm">1</span>
                  </div>
                  <span className="text-muted-foreground">Choose your certification program</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-rose-100 dark:bg-rose-800/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm">2</span>
                  </div>
                  <span className="text-muted-foreground">Complete the course and projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-rose-100 dark:bg-rose-800/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm">3</span>
                  </div>
                  <span className="text-muted-foreground">Earn your verified certificate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-rose-100 dark:bg-rose-800/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm">4</span>
                  </div>
                  <span className="text-muted-foreground">Advance your career</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buy-certificate">
              <Button size="lg" className="text-lg px-8 py-3 h-auto">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
                Talk to an Advisor
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            ⭐ Trusted by 50,000+ professionals • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
