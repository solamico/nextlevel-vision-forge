import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Palette, 
  Code, 
  Smartphone, 
  TrendingUp,
  Star,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-secondary" />,
      title: "Branding & Identity",
      description: "Create memorable brand experiences that set you apart from the competition."
    },
    {
      icon: <Code className="h-8 w-8 text-secondary" />,
      title: "Web Development",
      description: "Build powerful, scalable websites using the latest technologies and best practices."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-secondary" />,
      title: "UX/UI Design",
      description: "Design intuitive user experiences that convert visitors into loyal customers."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "NextLevelDesign transformed our brand completely. The results exceeded our expectations!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Eco Solutions",
      content: "Professional, creative, and delivered on time. Couldn't ask for a better team.",
      rating: 5
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 17, 40, 0.9), rgba(0, 194, 186, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Digital Agency Excellence
            </Badge>
            <h1 className="font-heading text-4xl md:text-7xl font-bold text-primary-foreground mb-6">
              Turning Ideas into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Digital Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              We craft exceptional digital solutions that drive growth, engage audiences, 
              and transform businesses in the modern digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-16 h-16 bg-secondary/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-accent/30 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              What We Do Best
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide comprehensive digital solutions 
              that elevate your brand and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-hover transition-smooth border-0 gradient-card">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-smooth">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <Button variant="ghost" className="group-hover:text-secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in">
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Featured Case Study</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                EcoTech Solutions: A Complete Brand Transformation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                How we helped a sustainable technology startup increase their brand recognition 
                by 40% and generate 60% more qualified leads through strategic branding and web design.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span>40% increase in brand recognition</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span>60% more qualified leads</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                  <span>Complete brand identity redesign</span>
                </div>
              </div>

              <Button variant="secondary" size="lg" asChild>
                <Link to="/portfolio">
                  View Full Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <Card className="shadow-elegant overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop" 
                  alt="EcoTech Solutions case study"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">EcoTech Solutions</h3>
                  <p className="text-muted-foreground">Sustainable Technology Startup</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-elegant border-0">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-heading font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button variant="outline" size="xl" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
