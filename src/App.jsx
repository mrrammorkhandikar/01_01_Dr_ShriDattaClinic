import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [formMessage, setFormMessage] = useState('')
  const [showFormMessage, setShowFormMessage] = useState(false)

  // Refs for scroll animations
  const observerRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running'
        }
      })
    }, { threshold: 0.1 })

    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-zoom-in')
    animatedElements.forEach(element => {
      element.style.animationPlayState = 'paused'
      observerRef.current.observe(element)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowFormMessage(true)
    setFormMessage('Thank you for your request! We will contact you shortly.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-gray-50 text-gray-800 font-inter">
      <style>{`
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 5px;
          left: 0;
          background: #2563EB;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .hero-bg-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-zoom-in {
          animation: zoomIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounceIn 1.2s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .hero-image {
          border-radius: 2rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .hero-image:hover {
          transform: scale(1.02);
        }

        .glass-effect {
           background: rgba(255, 255, 255, 0.1);
           backdrop-filter: blur(10px);
           border: 1px solid rgba(255, 255, 255, 0.2);
         }

         .service-card {
           transition: all 0.3s ease;
         }

         .service-card:hover {
           transform: translateY(-5px);
         }

         .doctor-card {
           transition: all 0.3s ease;
         }

         .doctor-card:hover {
           transform: translateY(-5px);
         }

         .testimonial-card {
           transition: all 0.3s ease;
         }

         .testimonial-card:hover {
           transform: translateY(-3px);
         }

         .contact-card {
           transition: all 0.3s ease;
         }

         .contact-card:hover {
           transform: translateY(-3px);
         }

         .form-input {
           transition: all 0.3s ease;
         }

         .form-input:focus {
           transform: translateY(-2px);
           box-shadow: 0 8px 25px rgba(37, 99, 235, 0.15);
         }

         .btn-submit {
           background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
           box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
           transition: all 0.3s ease;
         }

         .btn-submit:hover {
           transform: translateY(-2px);
           box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
         }
       `}</style>

      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleSmoothScroll={handleSmoothScroll}
      />

      <main>
        <Hero handleSmoothScroll={handleSmoothScroll} />
        <About />
        <Services />
        <Doctors />
        <Testimonials />
        <Contact />

        {/* Appointment Section */}
        <section id="appointment" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-blue-900">Book Your Appointment</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you to confirm your booking.
              </p>
            </div>
            <div className="max-w-xl mx-auto p-8 bg-white rounded-3xl shadow-lg animate-zoom-in"
                style={{animationDelay: '0.2s'}}>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     name="name"
                     value={formData.name}
                     onChange={handleInputChange}
                     className="form-input mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     required 
                   />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                   <input 
                     type="tel" 
                     id="phone" 
                     name="phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                     className="form-input mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                     required 
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                   <input 
                     type="email" 
                     id="email" 
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     className="form-input mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" 
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                   <textarea 
                     id="message" 
                     name="message" 
                     rows="4"
                     value={formData.message}
                     onChange={handleInputChange}
                     className="form-input mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                   ></textarea>
                 </div>
                 <button type="submit"
                     className="btn-submit w-full py-3 px-6 text-white rounded-full font-semibold transition-colors duration-300 transform hover:scale-105">
                   Submit Request
                 </button>
              </form>
              {showFormMessage && (
                <div className="mt-4 text-center text-sm font-medium text-green-600">
                  {formMessage}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm">
              &copy; 2025 ShreeDatta Clinic. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Designed and developed with care for ShreeDatta Clinic, Pune.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
