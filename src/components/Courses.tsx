
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  Users,
  Star,
  BookOpen,
  Code,
  Palette,
  LineChart,
  Shield,
  Smartphone,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Master modern web development with React, Node.js, and database management.',
      icon: Code,
      price: '$299',
      originalPrice: '$399',
      duration: '12 weeks',
      students: '2,847',
      rating: '4.9',
      level: 'Intermediate',
      features: ['Live Projects', 'Job Assistance', 'Certificate']
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      description: 'Comprehensive digital marketing course covering SEO, SEM, social media, and analytics.',
      icon: LineChart,
      price: '$199',
      originalPrice: '$299',
      duration: '8 weeks',
      students: '1,923',
      rating: '4.8',
      level: 'Beginner',
      features: ['Case Studies', 'Tools Access', 'Certificate']
    },
    {
      id: 3,
      title: 'UI/UX Design Professional',
      description: 'Create stunning user interfaces and experiences with industry-standard tools.',
      icon: Palette,
      price: '$249',
      originalPrice: '$349',
      duration: '10 weeks',
      students: '1,564',
      rating: '4.9',
      level: 'Intermediate',
      features: ['Portfolio Project', 'Mentorship', 'Certificate']
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Learn essential cybersecurity principles and hands-on security practices.',
      icon: Shield,
      price: '$349',
      originalPrice: '$449',
      duration: '14 weeks',
      students: '987',
      rating: '4.8',
      level: 'Advanced',
      features: ['Lab Access', 'Industry Projects', 'Certificate']
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile applications using React Native and Flutter.',
      icon: Smartphone,
      price: '$279',
      originalPrice: '$379',
      duration: '11 weeks',
      students: '1,432',
      rating: '4.7',
      level: 'Intermediate',
      features: ['App Store Deployment', 'Mentorship', 'Certificate']
    },
    {
      id: 6,
      title: 'Data Science & Analytics',
      description: 'Master data analysis, machine learning, and statistical modeling techniques.',
      icon: Database,
      price: '$329',
      originalPrice: '$429',
      duration: '16 weeks',
      students: '1,156',
      rating: '4.9',
      level: 'Advanced',
      features: ['Real Datasets', 'Industry Projects', 'Certificate']
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helping & Growing Organic Farming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl">
                      <course.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {course.level}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-foreground">{course.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      Save {Math.round(((parseInt(course.originalPrice.replace('$', '')) - parseInt(course.price.replace('$', ''))) / parseInt(course.originalPrice.replace('$', ''))) * 100)}%
                    </div>
                  </div>

                  <Link to="/buy-certificate" className="block">
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/buy-certificate">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
