import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Clock, MapPin, Shield, Users, Calendar, FileText, ChevronRight } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen" aria-label="Landing Page">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
        aria-label="Hero Section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Compassionate Care During Life's Most Difficult Moments
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Providing dignified funeral services with respect, care, and understanding for over 50 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary btn flex items-center justify-center" aria-label="Plan Ahead">
                Plan Ahead
                <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-secondary btn flex items-center justify-center" aria-label="Immediate Need">
                Immediate Need
                <Phone className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50" aria-label="Services Overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of funeral and memorial services, tailored to honor your loved ones with dignity and respect
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Traditional Services',
                description: 'Dignified funeral services honoring your loved ones',
                image: 'https://images.unsplash.com/photo-1507484467459-0c01be16726e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                icon: Calendar,
                title: 'Pre-Planning',
                description: 'Plan ahead to ensure your wishes are fulfilled',
                image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                icon: Users,
                title: 'Memorial Services',
                description: 'Celebrate and remember precious memories',
                image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              },
              {
                icon: Shield,
                title: 'Grief Support',
                description: 'Professional counseling and support groups',
                image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl" aria-label={service.title}>
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-600 mr-2" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" aria-label="About Section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Our Facility"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">A Legacy of Compassionate Care</h2>
              <p className="text-gray-600 mb-6">
                For over five decades, Grace Memorial Services has been providing compassionate funeral and memorial services to our community. Our dedicated team of professionals is committed to helping families navigate through difficult times with dignity and respect.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-sm text-gray-600">Professional and caring staff</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-sm text-gray-600">Always here when you need us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16" aria-label="Contact Section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p>1-800-555-0123</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Available</h3>
                <p>24 Hours, 7 Days a Week</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>123 Memorial Drive</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}