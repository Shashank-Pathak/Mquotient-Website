import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Code,
  Cloud,
  Cog,
  Brain,
  Database,
  Shield,
  Quote,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import {
  services,
  solutions,
  caseStudies,
  testimonials,
  companyStats,
} from "@/lib/utils";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="gradient-bg absolute inset-0 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row py-16 md:py-24 items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-6">
                Transforming Ideas into Digital Excellence
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 max-w-lg">
                mquotient delivers cutting-edge technology solutions to help
                businesses innovate, optimize, and grow in today's digital
                landscape.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100"
                  >
                    Explore Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Technology Solutions"
                className="rounded-lg shadow-2xl max-w-full h-auto"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Comprehensive technology solutions tailored to meet your business
              challenges and drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => {
              // Map icon name to the corresponding component
              let IconComponent = Code;
              switch (service.icon) {
                case "cloud":
                  IconComponent = Cloud;
                  break;
                case "cog":
                  IconComponent = Cog;
                  break;
                case "brain":
                  IconComponent = Brain;
                  break;
                case "database":
                  IconComponent = Database;
                  break;
                case "shield":
                  IconComponent = Shield;
                  break;
                default:
                  IconComponent = Code;
              }

              return (
                <Card
                  key={service.id}
                  className="bg-neutral-50 shadow-md transition duration-300 card-hover border-0"
                >
                  <CardContent className="p-8">
                    <div className="text-primary mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-heading">
                      {service.title}
                    </h3>
                    <p className="text-secondary mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services#${service.id}`}>
                      <a className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Industry-specific solutions designed to address unique challenges
              and capitalize on opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {solutions.slice(0, 3).map((solution) => (
              <Card
                key={solution.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover border-0"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">
                    {solution.title}
                  </h3>
                  <p className="text-secondary mb-4">{solution.description}</p>
                  <Link href={`/solutions#${solution.id}`}>
                    <a className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition">
                      Explore solution{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/solutions">
              <Button className="bg-primary hover:bg-primary/90">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="About mquotient"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                About mquotient
              </h2>
              <p className="text-secondary text-lg mb-6">
                Founded with a vision to empower businesses through technology,
                mquotient has grown into a trusted partner for organizations
                seeking innovative digital solutions.
              </p>
              <p className="text-secondary text-lg mb-6">
                Our team of experts combines deep technical knowledge with
                business acumen to deliver solutions that drive real results.
                We're committed to excellence, innovation, and long-term
                partnerships with our clients.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {companyStats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-primary font-bold text-3xl md:text-4xl mb-2">
                      {stat.value}
                    </div>
                    <p className="text-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Case Studies
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Discover how we've helped organizations overcome challenges and
              achieve their business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover border-0"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <Badge
                      variant="outline"
                      className="text-white border-white"
                    >
                      {caseStudy.industry}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">
                    {caseStudy.title}
                  </h3>
                  <p className="text-secondary mb-4">
                    {caseStudy.description}
                  </p>
                  <Link href={`/case-studies#${caseStudy.id}`}>
                    <a className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition">
                      Read case study <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button className="bg-primary hover:bg-primary/90">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Hear from organizations that have transformed their businesses
              with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-neutral-50 rounded-lg shadow-md border-0"
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    <Quote className="h-8 w-8" />
                  </div>
                  <p className="text-secondary italic mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-secondary">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="gradient-bg absolute inset-0 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              Contact us today to discuss your needs and discover how our
              solutions can help you achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                >
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Contact Us
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Reach out to us for more information about our services or to
              discuss your project requirements.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
              <ContactForm />
            </div>

            <div className="lg:w-1/2 lg:pl-8">
              <Card className="bg-neutral-50 rounded-lg shadow-md h-full border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 font-heading">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Office Location</h4>
                        <p className="text-secondary">
                          1234 Innovation Drive, Suite 500
                          <br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email Us</h4>
                        <p className="text-secondary">
                          info@mquotient.net
                          <br />
                          support@mquotient.net
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Call Us</h4>
                        <p className="text-secondary">
                          +1 (555) 123-4567
                          <br />
                          +1 (555) 987-6543
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Working Hours</h4>
                        <p className="text-secondary">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-medium mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
