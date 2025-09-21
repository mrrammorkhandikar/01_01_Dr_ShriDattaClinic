const Doctors = () => {
  return (
    <section id="doctors" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-purple-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-2xl animate-floating"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm rounded-full text-blue-600 font-semibold mb-6 shadow-lg border border-blue-100">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Expert Medical Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent mb-6">
            Meet Our Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated and compassionate doctors are here to provide you with the best care, combining years of experience with modern medical practices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Dr. Atul Hole */}
          <div className="doctor-card group bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg text-center animate-scale-in animation-delay-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-50 relative overflow-hidden max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative mb-8">
                <div className="w-52 h-52 mx-auto relative">
                  <img src="/Images/Dr_Atul_Hole.webp" alt="Dr. Atul Hole"
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent mb-3 group-hover:from-blue-800 group-hover:to-indigo-700 transition-all duration-300">
                Dr. Atul Hole
              </h3>
              <p className="text-blue-600 font-semibold text-lg mb-6 group-hover:text-blue-700 transition-colors duration-300">
                General Physician & Homeopath
              </p>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto mb-8 group-hover:text-gray-700 transition-colors duration-300">
                With over 17 years of experience, Dr. Atul Hole is a trusted and skilled practitioner in Pune, known for his patient-first approach and expertise in holistic healing.
              </p>
              <button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:animate-pulse">
                View Profile
              </button>
            </div>
          </div>

          {/* Dr. Ashwini Hole */}
          <div className="doctor-card group bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg text-center animate-scale-in animation-delay-400 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-purple-50 relative overflow-hidden max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative mb-8">
                <div className="w-52 h-52 mx-auto relative">
                  <img src="/Images/Dr_Ashvini_Hole.webp" alt="Dr. Ashwini Hole"
                      className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-600 to-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-900 to-pink-800 bg-clip-text text-transparent mb-3 group-hover:from-purple-800 group-hover:to-pink-700 transition-all duration-300">
                Dr. Ashwini Hole
              </h3>
              <p className="text-purple-600 font-semibold text-lg mb-6 group-hover:text-purple-700 transition-colors duration-300">
                General Physician & Homeopath
              </p>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm mx-auto mb-8 group-hover:text-gray-700 transition-colors duration-300">
                Dr. Ashwini Hole is a compassionate and knowledgeable doctor who specializes in providing holistic care with a gentle, understanding approach to patient wellness.
              </p>
              <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:animate-pulse">
                View Profile
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">17+ Years</h4>
                <p className="text-gray-600">Combined Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">1000+</h4>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">100%</h4>
                <p className="text-gray-600">Dedicated Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;