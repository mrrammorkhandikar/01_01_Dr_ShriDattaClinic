const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-green-200/20 to-teal-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl animate-floating"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm rounded-full text-blue-600 font-semibold mb-6 shadow-lg border border-blue-100">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to schedule an appointment or to know more about our services. We're here to help you achieve your best smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg animate-fade-in-up hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-50 relative overflow-hidden"
               style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
                  Clinic Details
                </h3>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-100/50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Shree Datta Clinic, Ganesh Mandir Chauk, 40 Futti, SNBP School Road, DattaNagari, near Z corner, Manjari BK, Pune, Maharashtra 412307
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50/50 to-teal-50/50 rounded-2xl border border-green-100/50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Phone</h4>
                    <p className="text-gray-600 text-lg font-medium">+91 98504 59002</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-2xl border border-purple-100/50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                    <p className="text-gray-600 text-lg font-medium">contact@shreedattaclinic.com</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>Call Now</span>
                </button>
                <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-700 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg animate-fade-in-up hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-50 relative overflow-hidden"
               style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-teal-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-900 to-teal-800 bg-clip-text text-transparent">
                  Find Us Here
                </h3>
              </div>
              
              <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 group-hover:shadow-2xl transition-all duration-500">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.883719014287!2d74.01998197519084!3d18.48892558259851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e92521ce3e59%3A0x126f560f68253a35!2sDr.%20Kudale&#39;s%20Advanced%20Dental%20Care%20And%20Implant%20Center!5e0!3m2!1sen!2sin!4v1758446704353!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Clinic Location"
                    className="hover:scale-105 transition-transform duration-500">
                </iframe>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-100/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Clinic Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent mb-4">
              Emergency Contact
            </h3>
            <p className="text-gray-600 text-lg">For dental emergencies, please call us immediately</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-md border border-red-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Emergency Line</h4>
                <p className="text-red-600 font-bold text-lg">+91 98765 43210</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 font-medium">Available 24/7 for urgent dental care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;