import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/utils";

export default function CaseStudies() {
  return (
    <>
      {/* Case Studies Hero */}
      <section className="relative overflow-hidden">
        <div className="gradient-bg absolute inset-0 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6">
                Case Studies
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Discover how we've helped organizations overcome challenges and
                achieve their business objectives with our technology solutions.
              </p>
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

      {/* Featured Case Study */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <Badge className="bg-primary text-white mb-4">Featured</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Healthcare Provider Transformation
              </h2>
              <p className="text-secondary text-lg mb-6">
                We helped a major healthcare provider modernize their infrastructure and patient management systems, resulting in 40% cost reduction and significantly improved patient experience.
              </p>
              <p className="text-secondary text-lg mb-6">
                The client faced challenges with legacy systems that were unable to scale, slow performance, and compliance concerns. Our team implemented a comprehensive cloud migration strategy and developed new integrated applications for seamless patient care.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 text-primary font-bold">40%</div>
                  <div>Reduction in operational costs</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-primary font-bold">65%</div>
                  <div>Improvement in system performance</div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 text-primary font-bold">3x</div>
                  <div>Increase in patient satisfaction scores</div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Read Full Case Study
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare Provider Case Study"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Success Stories
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Learn how our solutions have helped businesses across various industries overcome challenges and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.id}
                id={caseStudy.id}
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
                  <Link href={`#${caseStudy.id}`}>
                    <a className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition">
                      Read case study <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}

            {/* Additional Case Studies */}
            <Card className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover border-0">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Manufacturing Case Study"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <Badge
                    variant="outline"
                    className="text-white border-white"
                  >
                    Manufacturing
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 font-heading">
                  Smart Factory Implementation
                </h3>
                <p className="text-secondary mb-4">
                  Implemented IoT sensors and real-time analytics for a leading manufacturer, resulting in 25% increased production efficiency and 30% reduction in downtime.
                </p>
                <a className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition">
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover border-0">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Education Case Study"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <Badge
                    variant="outline"
                    className="text-white border-white"
                  >
                    Education
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 font-heading">
                  University Digital Transformation
                </h3>
                <p className="text-secondary mb-4">
                  Developed an integrated digital platform for a leading university that improved student engagement by 45% and streamlined administrative processes.
                </p>
                <a className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition">
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 card-hover border-0">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Finance Case Study"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <Badge
                    variant="outline"
                    className="text-white border-white"
                  >
                    Insurance
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 font-heading">
                  Claims Processing Automation
                </h3>
                <p className="text-secondary mb-4">
                  Implemented AI-powered claims processing for a major insurance provider, reducing processing time by 70% and improving accuracy by 35%.
                </p>
                <a className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition">
                  Read case study <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Metrics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Measurable Results
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Our solutions consistently deliver tangible business outcomes that create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-neutral-50 border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl md:text-5xl mb-2">
                  40%
                </div>
                <p className="text-secondary">
                  Average cost reduction achieved for our clients
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl md:text-5xl mb-2">
                  65%
                </div>
                <p className="text-secondary">
                  Typical improvement in operational efficiency
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl md:text-5xl mb-2">
                  85%
                </div>
                <p className="text-secondary">
                  Client satisfaction rate with our solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50 border-0 shadow-md text-center">
              <CardContent className="p-6">
                <div className="text-primary font-bold text-4xl md:text-5xl mb-2">
                  95%
                </div>
                <p className="text-secondary">
                  Projects delivered on time and within budget
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-primary mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-secondary-dark mb-6 italic">
              "Working with mquotient was a true partnership. They took the time to understand our business challenges and developed tailored solutions that addressed our specific needs. The results have been transformative for our organization."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Thomas Anderson</p>
                <p className="text-sm text-secondary">CIO, Global Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative">
        <div className="gradient-bg absolute inset-0 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              Contact us today to discuss your business challenges and explore how our solutions can help you achieve your goals.
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
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
