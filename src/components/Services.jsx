const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-2xl animate-floating"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm rounded-full text-blue-600 font-semibold mb-6 shadow-lg border border-blue-100">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Comprehensive Healthcare
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of medical services to meet the needs of your entire family with modern technology and compassionate care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* General Consultation */}
          <div className="service-card group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg text-center animate-zoom-in hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-50 relative overflow-hidden"
              style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4 group-hover:from-blue-800 group-hover:to-indigo-700 transition-all duration-300">
                General Consultation
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Comprehensive check-ups and expert advice for a wide range of health concerns with personalized treatment plans.
              </p>
            </div>
          </div>

          {/* Homeopathic Treatment */}
          <div className="service-card group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg text-center animate-zoom-in hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-green-50 relative overflow-hidden"
              style={{animationDelay: '0.4s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-teal-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 via-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-green-700 bg-clip-text text-transparent mb-4 group-hover:from-green-700 group-hover:to-teal-600 transition-all duration-300">
                Homeopathic Treatment
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Holistic and natural remedies tailored to your individual health profile for sustainable wellness.
              </p>
            </div>
          </div>

          {/* Specialized Care */}
          <div className="service-card group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg text-center animate-zoom-in hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-orange-50 relative overflow-hidden"
              style={{animationDelay: '0.6s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent mb-4 group-hover:from-orange-700 group-hover:to-red-600 transition-all duration-300">
                Specialized Care
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Targeted treatments for a variety of conditions, ensuring specialized attention and expert care.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-blue-100">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Health Education & Counseling</h4>
                <p className="text-gray-600 leading-relaxed">Empowering patients with knowledge about their health conditions and preventive care strategies.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-green-100">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Preventive Health Screenings</h4>
                <p className="text-gray-600 leading-relaxed">Regular health assessments and early detection programs to maintain optimal wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;