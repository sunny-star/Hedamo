
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  Code,
  Database,
  Palette,
  Shield,
  Smartphone,
  LineChart,
  Cpu,
  Globe
} from 'lucide-react';

const Career = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $150,000',
      icon: Code,
      description: 'Join our dynamic team to build scalable web applications using React, Node.js, and MongoDB.',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
      benefits: ['Health Insurance', 'Remote Work', '401k', 'Stock Options']
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'DataVision Inc',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100,000 - $130,000',
      icon: Database,
      description: 'Analyze complex datasets and build machine learning models to drive business insights.',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Pandas'],
      benefits: ['Health Insurance', 'Flexible Hours', 'Learning Budget', 'Gym Membership']
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Digital',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$80,000 - $100,000',
      icon: Palette,
      description: 'Create intuitive and beautiful user interfaces for our mobile and web applications.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems'],
      benefits: ['Health Insurance', 'Creative Freedom', 'MacBook Pro', 'Flexible PTO']
    },


  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover exciting career opportunities in technology. We're looking for passionate
              professionals to help shape the future of digital innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <Briefcase className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">{jobs.length} Open Positions</span>
              </div>
              <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <Users className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">Remote Friendly</span>
              </div>
              <div className="flex items-center bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50">
                <DollarSign className="w-4 h-4 text-primary mr-2" />
                <span className="text-muted-foreground">Competitive Salary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl">
                        <job.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {job.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-2">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {job.description}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{job.salary}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-800">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Globe className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a company that values innovation, growth, and work-life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Great Team Culture</h3>
              <p className="text-muted-foreground">Work with passionate professionals in a collaborative environment</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Cutting-edge Technology</h3>
              <p className="text-muted-foreground">Work with the latest tools and technologies in the industry</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Career Growth</h3>
              <p className="text-muted-foreground">Continuous learning opportunities and clear career advancement paths</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
