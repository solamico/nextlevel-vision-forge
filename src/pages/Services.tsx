import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Search, 
  Shield,
  Clock,
  Users,
  Award,
  Zap
} from "lucide-react";
import servicesBackground from "@/assets/services-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-12 w-12 text-secondary" />,
      title: "Branding & Identity",
      description: "Create memorable brand experiences that resonate with your audience and set you apart from competitors.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      price: "Starting at $2,500"
    },
    {
      icon: <Code className="h-12 w-12 text-secondary" />,
      title: "Web Development",
      description: "Build high-performance websites and web applications using modern technologies and best practices.",
      features: ["Custom Development", "E-commerce", "CMS Integration", "API Development"],
      price: "Starting at $5,000"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-secondary" />,
      title: "UX/UI Design",
      description: "Design intuitive user experiences that convert visitors into customers and drive business growth.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      price: "Starting at $3,500"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-secondary" />,
      title: "Digital Marketing",
      description: "Grow your online presence with data-driven marketing strategies that deliver measurable results.",
      features: ["Social Media", "Content Marketing", "PPC Campaigns", "Analytics"],
      price: "Starting at $2,000/month"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Fast Delivery",
      description: "We deliver projects on time without compromising quality."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Team",
      description: "Our team consists of industry experts with proven track records."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive quality assurance."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Award Winning",
      description: "Recognized by industry leaders for our innovative solutions."
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Cutting Edge",
      description: "We use the latest technologies and industry best practices."
    },
    {
      icon: <Search className="h-8 w-8 text-accent" />,
      title: "SEO Optimized",
      description: "All our solutions are built with search engine optimization in mind."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-primary overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 17, 40, 0.8), rgba(10, 17, 40, 0.8)), url(${servicesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-in-left">
            Comprehensive digital solutions to elevate your brand and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we provide end-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-smooth border-0 gradient-card">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-heading text-2xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold mb-3">What's Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline">{feature}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-lg text-secondary">
                      {service.price}
                    </span>
                    <Button variant="secondary">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose NextLevelDesign?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-background shadow-elegant hover:shadow-hover transition-smooth">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Get a Quote
            </Button>
            <Button variant="outline" size="xl" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;