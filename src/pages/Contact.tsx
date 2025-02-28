import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-emerald-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-serif font-bold mb-8">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              We'd love to hear from you. Visit our store, reach out through
              social media, or send us a message.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <h2 className="text-3xl font-serif font-bold mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-700 to-emerald-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Store Location */}
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Visit Our Store
                </h3>
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330155716975!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sPlace%20Vend%C3%B4me%2C%2075001%20Paris%2C%20France!5e0!3m2!1sen!2s!4v1597994158180!5m2!1sen!2s"
                    className="w-full h-[300px] rounded-xl"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Store Address</h4>
                      <p className="text-gray-600">
                        Place Vendôme, 75001 Paris, France
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">contact@lumiere.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-full hover:scale-110 transition-transform"
                  >
                    <Instagram className="h-6 w-6 text-green-600" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-full hover:scale-110 transition-transform"
                  >
                    <Facebook className="h-6 w-6 text-green-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-full hover:scale-110 transition-transform"
                  >
                    <Twitter className="h-6 w-6 text-green-600" />
                  </a>
                </div>
              </div>

              {/* Store Hours */}
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Store Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Admin Login Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  to="/admin/login"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg transition-colors"
                >
                  <Lock className="h-4 w-4" />
                  <span>Admin Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
