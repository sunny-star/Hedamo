
import { Users, Award, Globe, TrendingUp, BookOpen, Star } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: 'Global B2B Marketplace',
      label: 'Seamless trade opportunities for organic farmers, exporters, and businesses across the globe with reliable verified report',
      description: 'Professionals worldwide trust our certification'
    },
    {
      icon: Award,
      value: 'Find Producers Locally',
      label: 'Find authentic organic producers in your region for direct sourcing and collaboration.',
      description: 'Comprehensive certification courses available'
    },
    {
      icon: Globe,
      value: 'QR-Based Purity Reports',
      label: 'Every product on Hedamo comes with a verified report showcasing purity, chemical composition, and technical details.',
      description: 'Global recognition and acceptance'
    },


  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helping & Growing Organic Farming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white/80 dark:bg-amber-900/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 dark:border-amber-700/30 hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-colors">
                <div className="flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-800/30 rounded-xl mx-auto mb-4 group-hover:bg-amber-200 dark:group-hover:bg-amber-700/40 transition-colors">
                  <stat.icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-xl font-bold text-foreground mb-2 font-playfair">
                  {stat.value}
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
