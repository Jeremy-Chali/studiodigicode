'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showUnavailableMessage, setShowUnavailableMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    triggerUnavailableMessage();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerUnavailableMessage();
  };

  const handleInputClick = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerUnavailableMessage();
  };

  const triggerUnavailableMessage = () => {
    setShowUnavailableMessage(true);
    setTimeout(() => {
      setShowUnavailableMessage(false);
    }, 3000);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let&apos;s Build Together
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Share your vision with us. We&apos;ll handle the technical execution.
          </p>
        </div>

        {showUnavailableMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slideDown">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-lg max-w-md">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-red-700 font-medium">
                    Form currently unavailable. Please contact us via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <a 
                  href="mailto:digicodestudio@gmail.com"
                  className="flex items-start space-x-4 group cursor-pointer no-underline"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Email</h3>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                      digicode17@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Response Time</h3>
                    <p className="text-gray-600">Typically within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">Prefer a Call?</h3>
                    <p className="text-gray-600">
                      Schedule a consultation after initial contact
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Initial project assessment
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Timeline and cost estimation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Technical feasibility review
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <form onSubmit={handleSubmit} onClick={handleInputClick}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-3 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onClick={handleInputClick}
                      readOnly
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-gray-50 cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-3 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onClick={handleInputClick}
                      readOnly
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-gray-50 cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="block text-gray-700 mb-3 font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    onClick={handleInputClick}
                    readOnly
                    rows={6}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-gray-50 cursor-not-allowed resize-none"
                    placeholder="Describe your project requirements, timeline, and budget..."
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-gray-400 text-white py-4 rounded-xl font-medium cursor-not-allowed"
                    disabled
                  >
                    Form Currently Unavailable
                  </button>
                  
                  <div className="mt-4 text-center">
                    <a 
                      href="mailto:digicodestudio@gmail.com"
                      className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                      Contact via Email Instead
                    </a>
                  </div>
                </div>
              </form>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-4">Common Project Types</h3>
                <div className="flex flex-wrap gap-3">
                  {['Web Applications', 'E-commerce', 'Mobile Apps', 'UI/UX Design', 'API Development', 'System Architecture'].map((type) => (
                    <span key={type} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}