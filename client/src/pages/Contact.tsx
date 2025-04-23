import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative overflow-hidden">
        <div className="gradient-bg absolute inset-0 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6">
                Contact Us
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Reach out to us for more information about our services or to discuss your project requirements.
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

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">
                Send Us a Message
              </h2>
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
                        <MapPin className="h-5 w-5" />
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
                        <Mail className="h-5 w-5" />
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
                        <Phone className="h-5 w-5" />
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
                        <Clock className="h-5 w-5" />
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

      {/* Google Map Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Visit Our Office
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              We'd love to meet you in person and discuss how we can help your business.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] w-full">
            <div className="h-full w-full bg-neutral-200 flex items-center justify-center">
              <p className="text-secondary">Map Loading...</p>
              {/* Map would be loaded here with an API key */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Find answers to common questions about our services and how we work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">What types of businesses do you work with?</h3>
                  <p className="text-secondary">
                    We work with businesses of all sizes across various industries, including healthcare, financial services, retail, manufacturing, education, and more. Our solutions are tailored to meet the specific needs of each client.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ Item */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">How long does a typical project take to complete?</h3>
                  <p className="text-secondary">
                    Project timelines vary depending on scope and complexity. A simple website may take a few weeks, while a comprehensive digital transformation initiative could span several months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ Item */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">Do you offer ongoing support after project completion?</h3>
                  <p className="text-secondary">
                    Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our team can provide regular updates, security patches, feature enhancements, and technical support based on your needs.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ Item */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">How do you approach data security and privacy?</h3>
                  <p className="text-secondary">
                    We take data security and privacy very seriously. Our solutions are designed with security best practices in mind, including encryption, secure authentication, and regular security audits. We also ensure compliance with relevant regulations such as GDPR, HIPAA, etc., depending on your industry.
                  </p>
                </CardContent>
              </Card>

              {/* FAQ Item */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-heading">What is your pricing model?</h3>
                  <p className="text-secondary">
                    Our pricing depends on the scope, complexity, and requirements of each project. We offer flexible pricing models including fixed-price contracts, time and materials, and retainer agreements. We'll provide a detailed proposal after understanding your specific needs during the consultation.
                  </p>
                </CardContent>
              </Card>
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
              Ready to Get Started?
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              Contact us today to schedule a consultation and discover how our solutions can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Send a Message
              </Button>
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
