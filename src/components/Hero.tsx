
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:20px_20px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              #1 Platform
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-5xl font-playfair font-bold text-foreground mb-6 leading-tight">
              Redefining Organic
              <span className="text-primary block">Trust with Verified
                Purity & Global Reach</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Connecting organic farmers with the world through verified reports,
              B2B connections, and direct consumer engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/buy-certificate">
                <Button size="lg" className="text-lg px-8 py-3 h-auto">
                  Explore products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">6000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">200+</span>
                </div>
                <p className="text-sm text-muted-foreground">Freelancers</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">30+</span>
                </div>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Client Satisfaction</h3>
                      <p className="text-sm text-muted-foreground">Complete your journey</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">Progress</div>
                  </div>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1"></div>
                  <div className="text-lg font-semibold text-foreground">Global B2B Marketplace</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1"></div>
                  <div className="text-lg font-semibold text-foreground">Find Producers Locally</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
