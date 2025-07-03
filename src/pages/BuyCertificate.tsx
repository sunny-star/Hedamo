import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  Download,
  Award,
  BookOpen,
  Code,
  Palette,
  LineChart,
  Shield,
  Smartphone,
  Database,
  Cpu,
  Camera,
  Music
} from 'lucide-react';

const BuyCertificate = () => {
  const categories = [
    { name: 'All Courses', count: 200, active: true },
    { name: 'Technology', count: 85 },
    { name: 'Business', count: 42 },
    { name: 'Design', count: 35 },
    { name: 'Marketing', count: 28 },
    { name: 'Data Science', count: 15 }
  ];

  const courses = [

    {
      id: 4,
      title: 'Organic Essential',
      description: 'On-site inspection of your organisation Evaluation of product organics and standards',
      icon: Shield,
      price: 499,
      originalPrice: 1999,
      duration: '18 weeks',
      students: 987,
      rating: 4.8,
      level: 'Advanced',
      category: 'Technology',
      features: ['Lab Access', 'Industry Projects', 'Security Tools', 'Certificate'],
      modules: 15,
      assignments: 10,
      instructor: 'David Kim'
    },
    {
      id: 5,
      title: 'Organic Max',
      description: 'Build cross-platform mobile applications using React Native, Flutter, and native development.',
      icon: Smartphone,
      price: 999,
      originalPrice: 4999,
      duration: '14 weeks',
      students: 1432,
      rating: 4.7,
      level: 'Intermediate',
      category: 'Technology',
      features: ['App Store Deploy', 'Mentorship', 'Code Reviews', 'Certificate'],
      modules: 11,
      assignments: 8,
      instructor: 'Michael Chen'
    },
    {
      id: 6,
      title: 'Organic Organisation Custom Pricing',
      description: 'Master data analysis, machine learning, Python, R, and statistical modeling techniques.',
      icon: Database,
      price: 329,
      originalPrice: 429,
      duration: '20 weeks',
      students: 1156,
      rating: 4.9,
      level: 'Advanced',
      category: 'Data Science',
      features: ['Real Datasets', 'ML Projects', 'Python/R', 'Certificate'],
      modules: 16,
      assignments: 12,
      instructor: 'Dr. Lisa Thompson'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              Get Your Organic Certification
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your needs and boost your market credibility with our trusted certification.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <Award className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">Verified Certificates</span>
              </div>
              <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <Users className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">50,000+ Students</span>
              </div>
              <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <Star className="w-4 h-4 text-primary mr-2 fill-current" />
                <span className="text-muted-foreground">4.8 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 relative overflow-hidden">
                    {course.bestseller && (
                      <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                        Bestseller
                      </Badge>
                    )}
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
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {course.modules} Modules
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {course.assignments} Assignments
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">

                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">${course.price}</span>
                        <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                      </div>
                      <div className="text-sm text-green-400 font-medium">
                        Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      Instructor: <span className="font-medium text-foreground">{course.instructor}</span>
                    </p>

                    <div className="space-y-2">
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Play className="w-4 h-4 mr-2" />
                        Get Certificate
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Syllabus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
              Why Choose Our Certifications?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized credentials that employers trust and value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Verified Credentials</h3>
              <p className="text-muted-foreground">Blockchain-verified certificates recognized by top employers worldwide</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from industry professionals with real-world experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Lifetime Access</h3>
              <p className="text-muted-foreground">Keep your skills current with lifetime access to course materials</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyCertificate;
