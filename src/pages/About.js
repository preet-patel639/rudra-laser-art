import React from 'react';

const About = () => {
  const whyChooseUs = [
    'Expert craftsmanship with years of experience',
    'State-of-the-art CO2 laser technology',
    'Quick turnaround time',
    'Competitive pricing',
    '100% customer satisfaction guarantee',
    'Custom design support',
    'Quality materials and finishes',
    'Professional consultation'
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Rudra Laser Art</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for precision laser cutting and customization services
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Rudra Laser Art is a premier laser cutting and customization service provider based in Ahmedabad, Gujarat. 
              We specialize in transforming creative ideas into tangible products using advanced CO2 laser technology. 
              Our passion for precision and commitment to quality has made us a trusted name in the industry. 
              From corporate gifts to personalized nameplates, we bring your vision to life with exceptional craftsmanship.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional laser art and customization services that exceed customer expectations 
              through precision, creativity, and quality craftsmanship. We strive to make every project 
              unique and memorable.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading laser art and customization service provider in Gujarat, known for 
              innovation, quality, and customer satisfaction. We aim to set new standards in the industry 
              through continuous improvement and technological advancement.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors">
                <div className="text-primary text-3xl mb-3">✓</div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                💎
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We never compromise on quality and precision</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">Building lasting relationships with our clients</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Constantly evolving with latest technology</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Work Together</h2>
          <p className="text-gray-600 mb-8">Experience the Rudra Laser Art difference</p>
          <a href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
