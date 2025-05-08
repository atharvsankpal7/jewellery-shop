import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Lock,
  Calendar,
  Clock,
  User,
  MessageSquare,
  Send,
  ChevronRight,
  Info,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  // State for form type selection
  const [activeForm, setActiveForm] = useState("message"); // "message" or "schedule"
  
  // State for message form
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  // State for schedule form
  const [scheduleForm, setScheduleForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    purpose: ""
  });
  
  // State for submission feedback
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Available time slots
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM"
  ];

  // Visit purpose options
  const visitPurposes = [
    "Jewelry Consultation",
    "Custom Design Discussion",
    "Repair Service",
    "Appraisal",
    "General Browsing",
    "Other"
  ];

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message form submitted:", messageForm);
    
    // Show success message
    setSuccessMessage("Your message has been sent successfully!");
    setShowSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setShowSuccess(false);
      setMessageForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 3000);
  };

  const handleScheduleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Schedule form submitted:", scheduleForm);
    
    // Show success message
    setSuccessMessage("Your visit has been scheduled successfully!");
    setShowSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setShowSuccess(false);
      setScheduleForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        purpose: ""
      });
    }, 3000);
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Get date 30 days from now
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateString = maxDate.toISOString().split("T")[0];

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
            {/* Form Section with Tabs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b">
                <button
                  onClick={() => setActiveForm("message")}
                  className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-colors ${
                    activeForm === "message" 
                      ? "text-green-700 border-b-2 border-green-700" 
                      : "text-gray-500 hover:text-green-600"
                  }`}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
                <button
                  onClick={() => setActiveForm("schedule")}
                  className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-colors ${
                    activeForm === "schedule" 
                      ? "text-green-700 border-b-2 border-green-700" 
                      : "text-gray-500 hover:text-green-600"
                  }`}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule a Visit</span>
                </button>
              </div>
              
              {/* Content Area */}
              <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                {/* Success Message */}
                {showSuccess && (
                  <div className="mb-6 bg-green-100 border border-green-300 text-green-800 rounded-lg p-4 flex items-center gap-3 animate-fadeIn">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>{successMessage}</span>
                  </div>
                )}
                
                {/* Message Form */}
                {activeForm === "message" && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleMessageSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            value={messageForm.name}
                            onChange={(e) =>
                              setMessageForm({ ...messageForm, name: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Your name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            value={messageForm.email}
                            onChange={(e) =>
                              setMessageForm({ ...messageForm, email: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            value={messageForm.phone}
                            onChange={(e) =>
                              setMessageForm({ ...messageForm, phone: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <textarea
                            id="message"
                            rows={6}
                            value={messageForm.message}
                            onChange={(e) =>
                              setMessageForm({ ...messageForm, message: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Your message or inquiry..."
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-700 to-emerald-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
                      >
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </button>
                    </form>
                  </div>
                )}
                
                {/* Schedule Form */}
                {activeForm === "schedule" && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-6">Schedule a Store Visit</h2>
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 flex items-start gap-3">
                      <Info className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">
                        Schedule an appointment with our jewelry experts for personalized service.
                        We'll confirm your appointment via email or phone within 24 hours.
                      </p>
                    </div>
                    <form onSubmit={handleScheduleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="sched-name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="sched-name"
                            value={scheduleForm.name}
                            onChange={(e) =>
                              setScheduleForm({ ...scheduleForm, name: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Your name"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="sched-email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              id="sched-email"
                              value={scheduleForm.email}
                              onChange={(e) =>
                                setScheduleForm({ ...scheduleForm, email: e.target.value })
                              }
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="sched-phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              id="sched-phone"
                              value={scheduleForm.phone}
                              onChange={(e) =>
                                setScheduleForm({ ...scheduleForm, phone: e.target.value })
                              }
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              placeholder="Your phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="purpose"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Purpose of Visit
                        </label>
                        <select
                          id="purpose"
                          value={scheduleForm.purpose}
                          onChange={(e) =>
                            setScheduleForm({ ...scheduleForm, purpose: e.target.value })
                          }
                          className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                          required
                        >
                          <option value="">Select purpose of visit</option>
                          {visitPurposes.map((purpose) => (
                            <option key={purpose} value={purpose}>
                              {purpose}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Preferred Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="date"
                              id="date"
                              min={today}
                              max={maxDateString}
                              value={scheduleForm.date}
                              onChange={(e) =>
                                setScheduleForm({ ...scheduleForm, date: e.target.value })
                              }
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Preferred Time
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <select
                              id="time"
                              value={scheduleForm.time}
                              onChange={(e) =>
                                setScheduleForm({ ...scheduleForm, time: e.target.value })
                              }
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                              required
                            >
                              <option value="">Select a time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-700 to-emerald-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
                      >
                        <Calendar className="h-5 w-5" />
                        <span>Schedule Visit</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              {/* Store Location */}
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Visit Our Store
                </h3>
                <div className="aspect-w-2 aspect-h-1 mb-8 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0832498140439!2d${74.40447524373178}!3d${16.622139620734664}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDM3JzE5LjciTiA3NMKwMjQnMTYuMSJF!5e0!3m2!1sen!2sin!4v1620312345678!5m2!1sen!2sin`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[400px]"
                  ></iframe>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Store Address</h4>
                      <p className="text-gray-600">
                        Plot no. 40, Yashwant nagar, Hupari
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">
                        <strong>
                          Proprietor: Parshuram Ranbhare +91 9834601795
                        </strong>
                      </p>
                      <p className="text-gray-600">
                        Rahul Belekar: +91 89561 11982
                      </p>
                      <p className="text-gray-600">
                        Office Contact: +91 744-8179595
                      </p>
                      <p className="text-gray-600">
                        Office WhatsApp: +91 744-8289595
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">contact@rbjewelers.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Store Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Monday - Friday</span>
                    <span className="font-medium text-green-700">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Saturday</span>
                    <span className="font-medium text-green-700">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Sunday</span>
                    <span className="font-medium text-green-700">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full hover:scale-110 transition-transform shadow-md flex items-center justify-center"
                  >
                    <Instagram className="h-6 w-6 text-green-600" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full hover:scale-110 transition-transform shadow-md flex items-center justify-center"
                  >
                    <Facebook className="h-6 w-6 text-green-600" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full hover:scale-110 transition-transform shadow-md flex items-center justify-center"
                  >
                    <Twitter className="h-6 w-6 text-green-600" />
                  </a>
                </div>
              </div>

              {/* Admin Login Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  to="/admin/login"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg transition-colors shadow-sm"
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