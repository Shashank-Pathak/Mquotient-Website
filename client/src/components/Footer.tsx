import { Link } from "wouter";
import logoSrc from "@assets/mquotient LOGO.png";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { services, solutions } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/">
              <div className="block mb-6 cursor-pointer">
                <img
                  src={logoSrc}
                  alt="mquotient Logo"
                  className="h-10 brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Empowering businesses through innovative technology solutions that
              drive growth and create competitive advantage.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`}>
                    <div className="text-gray-300 hover:text-white transition cursor-pointer">
                      {service.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.slice(0, 6).map((solution) => (
                <li key={solution.id}>
                  <Link href={`/solutions#${solution.id}`}>
                    <div className="text-gray-300 hover:text-white transition cursor-pointer">
                      {solution.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <div className="text-gray-300 hover:text-white transition cursor-pointer">
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <div className="text-gray-300 hover:text-white transition cursor-pointer">
                    Case Studies
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials">
                  <div className="text-gray-300 hover:text-white transition cursor-pointer">
                    Testimonials
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="text-gray-300 hover:text-white transition cursor-pointer">
                    Blog
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="text-gray-300 hover:text-white transition cursor-pointer">
                    Careers
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="text-gray-300 hover:text-white transition cursor-pointer">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} mquotient. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
