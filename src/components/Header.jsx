const Header = ({ handleSmoothScroll, isMobileMenuOpen, setIsMobileMenuOpen }) => {

  return (
    <>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <img src="/Images/TheLogo.png" alt="ShreeDatta Clinic Logo" className="h-12 w-auto" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent">
              ShreeDatta Clinic
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} 
               className="nav-link text-gray-700 hover:text-blue-600 relative transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              About Us
            </a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} 
               className="nav-link text-gray-700 hover:text-blue-600 relative transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Services
            </a>
            <a href="#doctors" onClick={(e) => handleSmoothScroll(e, '#doctors')} 
               className="nav-link text-gray-700 hover:text-blue-600 relative transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Our Doctors
            </a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} 
               className="nav-link text-gray-700 hover:text-blue-600 relative transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-600 after:to-indigo-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
            <a href="#appointment" onClick={(e) => handleSmoothScroll(e, '#appointment')}
                className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-semibold">
                Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-md shadow-2xl border-l border-blue-100 z-50 md:hidden transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
      }`}>
        <div className="p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 h-full">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-300 hover:scale-110 shadow-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div className="pt-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg">
                SDC
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent">
                ShreeDatta Clinic
              </span>
            </div>
            
            <nav className="flex flex-col space-y-4 text-lg font-medium">
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} 
                 className="nav-link p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-md">
                About Us
              </a>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} 
                 className="nav-link p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-md">
                Services
              </a>
              <a href="#doctors" onClick={(e) => handleSmoothScroll(e, '#doctors')} 
                 className="nav-link p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-md">
                Our Doctors
              </a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} 
                 className="nav-link p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-white/60 transition-all duration-300 hover:scale-105 hover:shadow-md">
                Contact
              </a>
              <a href="#appointment" onClick={(e) => handleSmoothScroll(e, '#appointment')}
                  className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-semibold text-center">
                  Book Appointment
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;