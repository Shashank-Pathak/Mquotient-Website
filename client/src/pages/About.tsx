import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { companyStats } from "@/lib/utils";

export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="relative overflow-hidden">
        <div className="gradient-bg absolute inset-0 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6">
                About mquotient
              </h1>
              <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                A trusted technology partner empowering businesses through
                innovative digital solutions.
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

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Our Story
              </h2>
              <p className="text-secondary text-lg mb-6">
                Founded with a vision to empower businesses through technology,
                mquotient has grown into a trusted partner for organizations
                seeking innovative digital solutions.
              </p>
              <p className="text-secondary text-lg mb-6">
                What started as a small team of passionate technologists has
                evolved into a dynamic company with a global presence. Throughout
                our journey, we've remained committed to our core values of
                excellence, innovation, integrity, and client-centricity.
              </p>
              <p className="text-secondary text-lg">
                Today, we continue to help businesses across various industries
                leverage technology to overcome challenges, seize opportunities,
                and achieve their strategic objectives.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Mission & Vision
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Guided by our core principles, we strive to make a meaningful
              impact through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-heading">
                  Our Mission
                </h3>
                <p className="text-secondary text-lg mb-4">
                  To empower businesses with innovative technology solutions
                  that drive growth, enhance efficiency, and create competitive
                  advantages in an increasingly digital world.
                </p>
                <p className="text-secondary text-lg">
                  We are committed to delivering exceptional value through our
                  expertise, reliability, and client-focused approach, helping
                  our clients navigate complex challenges and achieve their
                  strategic objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-heading">
                  Our Vision
                </h3>
                <p className="text-secondary text-lg mb-4">
                  To be the preferred technology partner for businesses
                  worldwide, recognized for our innovation, expertise, and
                  commitment to delivering transformative solutions that create
                  lasting value.
                </p>
                <p className="text-secondary text-lg">
                  We envision a future where technology seamlessly integrates
                  with business processes, enabling organizations to thrive in
                  the digital era while making a positive impact on society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Values
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              The core principles that guide our actions and decisions every
              day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">
                  Excellence
                </h3>
                <p className="text-secondary">
                  We strive for excellence in everything we do, consistently
                  delivering high-quality solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">
                  Innovation
                </h3>
                <p className="text-secondary">
                  We embrace creativity and forward-thinking, continuously
                  exploring new technologies and approaches to solve complex
                  challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">
                  Collaboration
                </h3>
                <p className="text-secondary">
                  We believe in the power of teamwork, fostering a collaborative
                  environment where diverse perspectives lead to better
                  outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">
                  Integrity
                </h3>
                <p className="text-secondary">
                  We conduct our business with the highest ethical standards,
                  building trust through transparency, honesty, and
                  accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              mquotient at a Glance
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Key figures that reflect our growth and impact in the technology
              industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, idx) => (
              <Card
                key={idx}
                className="bg-white border-0 shadow-md text-center"
              >
                <CardContent className="p-6">
                  <div className="text-primary font-bold text-4xl md:text-5xl mb-2">
                    {stat.value}
                  </div>
                  <p className="text-secondary text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Leadership Team
            </h2>
            <p className="max-w-2xl mx-auto text-secondary text-lg">
              Meet the experienced professionals who lead our company with
              vision, expertise, and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="CEO"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 font-heading">
                John Smith
              </h3>
              <p className="text-primary mb-3">CEO & Founder</p>
              <p className="text-secondary mb-4">
                With over 20 years of experience in technology leadership, John
                has led mquotient from its inception to become a trusted
                technology partner for businesses worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="CTO"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 font-heading">
                Sarah Johnson
              </h3>
              <p className="text-primary mb-3">Chief Technology Officer</p>
              <p className="text-secondary mb-4">
                Sarah brings deep technical knowledge and strategic vision to
                guide our technology development and innovation initiatives.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="COO"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 font-heading">
                Michael Rodriguez
              </h3>
              <p className="text-primary mb-3">Chief Operations Officer</p>
              <p className="text-secondary mb-4">
                Michael oversees our day-to-day operations, ensuring that we
                deliver exceptional service and value to our clients
                consistently.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative">
        <div className="gradient-bg absolute inset-0 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Partner with mquotient for Your Technology Needs
            </h2>
            <p className="text-white text-lg md:text-xl mb-8">
              Let's work together to transform your business with innovative
              technology solutions tailored to your specific needs.
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
