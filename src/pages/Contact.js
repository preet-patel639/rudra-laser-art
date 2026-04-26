import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with us for any inquiries or custom orders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Phone Numbers</h3>
                  <p className="text-gray-600">7567800813</p>
                  <p className="text-gray-600">9998434388</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    6 Bhagat Estate, Behind Galaxy Cinema,<br />
                    Galaxy Cross Road, Naroda,<br />
                    Ahmedabad, Gujarat - 382330
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  📷
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Social Media</h3>
                  <a 
                    href="https://www.instagram.com/rudra_laser_art/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    @rudra_laser_art
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  ⏰
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Rudra Laser Art Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d72.65!3d23.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzEyLjAiTiA3MsKwMzknMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
