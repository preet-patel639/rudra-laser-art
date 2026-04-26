import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🪵',
      title: 'Laser Cutting on Wood',
      description: 'Precision laser cutting on various types of wood for custom designs, decorative items, and functional products. Perfect for intricate patterns and detailed artwork.',
      features: ['Custom designs', 'Multiple wood types', 'Intricate patterns', 'Smooth edges']
    },
    {
      icon: '⚙️',
      title: 'Metal Marking',
      description: 'Permanent and precise metal marking using advanced CO2 laser technology for industrial and personal applications. Ideal for branding and identification.',
      features: ['Permanent marking', 'High precision', 'Various metals', 'Industrial grade']
    },
    {
      icon: '🎁',
      title: 'Corporate Gifts',
      description: 'Customized corporate gifting solutions including branded items, awards, and personalized business gifts that leave a lasting impression.',
      features: ['Bulk orders', 'Custom branding', 'Premium packaging', 'Quick delivery']
    },
    {
      icon: '💝',
      title: 'Custom Gift Design',
      description: 'Personalized gift creation for special occasions including birthdays, anniversaries, weddings, and celebrations. Make every moment memorable.',
      features: ['Personalized designs', 'Any occasion', 'Unique creations', 'Gift wrapping']
    },
    {
      icon: '📛',
      title: 'Nameplate Creation',
      description: 'Custom nameplates for homes, offices, and businesses with elegant designs and durable materials. Professional and stylish identification.',
      features: ['Custom fonts', 'Multiple materials', 'Weather resistant', 'Easy installation']
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional laser cutting and customization services powered by advanced CO2 laser technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Technology: CO2 Laser</h2>
          <p className="text-lg text-blue-100 mb-8 text-center max-w-3xl mx-auto">
            We use state-of-the-art CO2 laser technology that provides unmatched precision and quality 
            for cutting and marking various materials.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h4 className="font-semibold text-xl mb-2">High Precision</h4>
              <p className="text-blue-100">Accurate cuts down to 0.1mm tolerance</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h4 className="font-semibold text-xl mb-2">Clean Edges</h4>
              <p className="text-blue-100">Smooth finish with minimal post-processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h4 className="font-semibold text-xl mb-2">Versatile</h4>
              <p className="text-blue-100">Works on wood, acrylic, leather, and metal</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Contact us for a free consultation and quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7567800813" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
              Call Now
            </a>
            <a href="/booking" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Book Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
