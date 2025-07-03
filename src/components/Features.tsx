
import { Card, CardContent } from '@/components/ui/card';
import food from "./ui/images/Screenshot 2025-07-03 194351.png"
import fo from "./ui/images/Screenshot 2025-07-03 194421.png"
import f from "./ui/images/Screenshot 2025-07-03 194442.png"
import {
  Shield,
  Clock,
  Users,
  Award,
  BookOpen,
  Zap,
  Globe,
  CheckCircle,
  Target,
  Briefcase
} from 'lucide-react';
import { Description } from '@radix-ui/react-toast';

const Features = () => {
  const features = [


    {

      title: 'Food',
      description: food
    },
    {

      title: 'Clothing',
      description: fo
    },
    {

      title: 'Cosmetics',
      description: f
    },
    {

      title: 'Fashion',
      description: fo
    },



  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Find Products By Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred choice for professional certification
            and career advancement in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:border-emerald-400/50 bg-white/80 dark:bg-emerald-900/20 backdrop-blur-sm border-emerald-200/50 dark:border-emerald-700/30"
            >
              <CardContent className="p-6">

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <img src={feature.description} alt="" className='rounded-md duration-200 hover:scale-x-105' />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
