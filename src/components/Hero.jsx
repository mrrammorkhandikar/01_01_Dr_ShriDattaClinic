const Hero = ({ handleSmoothScroll }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 floating-animation"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-15 floating-animation" style={{animationDelay: '1s'}}></div>
        
        {/* Dental Icons Pattern */}
        <div className="absolute top-16 right-20 opacity-10">
          <svg className="w-12 h-12 text-white animate-spin" style={{animationDuration: '20s'}} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <svg className="w-10 h-10 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold shadow-lg animate-bounce-in">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Award-Winning Dental Care
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight animate-fade-in-up">
                Transform Your
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Smile Today
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-cyan-300 font-semibold">Premium Dental Excellence</span>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Experience cutting-edge dental technology combined with compassionate care. Our expert team delivers personalized treatments that exceed expectations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a href="#appointment" onClick={(e) => handleSmoothScroll(e, '#appointment')}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2 overflow-hidden">
                <span className="relative z-10">Book Consultation</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}
                  className="px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-cyan-400 hover:bg-cyan-400 hover:bg-opacity-20 transition-all duration-300 inline-flex items-center justify-center space-x-2 backdrop-blur-sm">
                <span>Explore Services</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-blue-200 text-sm font-medium">Smiles Transformed</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">20+</div>
                <div className="text-blue-200 text-sm font-medium">Years Excellence</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">99%</div>
                <div className="text-blue-200 text-sm font-medium">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative flex justify-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/Images/dental-clinic-hero.svg" 
                     alt="Modern Dental Clinic" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       e.target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=600&fit=crop&crop=center";
                     }} />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-bounce-in border border-white/20" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold">Pain-Free</div>
                    <div className="text-blue-200 text-sm">Advanced Technology</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-bounce-in border border-white/20" style={{animationDelay: '1.2s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold">24/7</div>
                    <div className="text-blue-200 text-sm">Emergency Care</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl animate-bounce-in border border-white/20" style={{animationDelay: '1.4s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold">Expert</div>
                    <div className="text-blue-200 text-sm">Specialists</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;