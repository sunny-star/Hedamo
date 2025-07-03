
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {


      name: 'Michael Chen',
      role: 'Digital Marketing Manager',
      company: 'Growth Agency',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: 'The digital marketing course exceeded my expectations. The instructors were knowledgeable and the hands-on projects helped me understand complex concepts. I got promoted within 3 months of completion.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Design Studio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'The UI/UX course was exactly what I needed to transition into design. The portfolio project and mentorship program were invaluable. I landed my dream job right after certification.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Cybersecurity Specialist',
      company: 'SecureNet',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'The cybersecurity fundamentals course provided me with practical skills that I use daily. The lab exercises were challenging and the certificate opened doors to new opportunities.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Full Stack Developer',
      company: 'StartupTech',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
      content: 'Amazing learning experience! The full-stack development course covered everything from frontend to backend. The job assistance program helped me find a position at a great company.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Data Scientist',
      company: 'Analytics Pro',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      content: 'The data science course was comprehensive and well-structured. Working with real datasets and industry projects gave me the confidence to tackle complex problems at work.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            What Our Client Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Hedamo certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-violet-900/20 backdrop-blur-sm border-violet-200/50 dark:border-violet-700/30 hover:border-violet-400/50 dark:hover:border-violet-500/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-violet-300/50 dark:text-violet-500/30" />
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
