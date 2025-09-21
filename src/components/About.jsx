const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-purple-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-2xl animate-floating"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-blue-600 font-semibold mb-6 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Excellence in Healthcare
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent mb-6">
            About Our Clinic
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ShreeDatta Clinic is dedicated to providing high-quality, personalized healthcare. We combine modern technology with a caring, patient-first approach to ensure your well-being.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-1/2 animate-slide-left animation-delay-200">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img src="/Images/Dr.png"
                  alt="Happy Patient in Clinic" 
                  className="relative rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition-all duration-500" />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-floating">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-floating animation-delay-500">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8 animate-slide-right animation-delay-400">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-800 bg-clip-text text-transparent mb-6">
                Our Philosophy
              </h3>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  At ShreeDatta Clinic, we believe that true healthcare goes beyond just treating symptoms. It's about building lasting relationships, understanding your unique needs, and empowering you with the knowledge to lead a healthier life.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Located in the heart of Pune, our clinic is a sanctuary of health and wellness, offering a wide range of services in a comfortable and modern environment. Our team is committed to making every visit a positive and stress-free experience.
                </p>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Patient-Centered Care</h4>
                <p className="text-gray-600 text-sm">Personalized treatment plans tailored to your unique needs</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Modern Technology</h4>
                <p className="text-gray-600 text-sm">State-of-the-art equipment for accurate diagnosis and treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;