import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productType: '',
    description: '',
    file: null
  });

  const productTypes = [
    'Laser Cutting on Wood',
    'Metal Marking',
    'Corporate Gifts',
    'Custom Gift Design',
    'Nameplate Creation',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      productType: '',
      description: '',
      file: null
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Advance Booking</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below to book your custom laser art project
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address *
              </label>
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

            {/* Product Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Product Type *
              </label>
              <select
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a product type</option>
                {productTypes.map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe your project requirements, dimensions, quantity, and any specific details..."
              ></textarea>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Design (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.ai,.svg"
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-gray-600">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="mt-2 text-sm">
                      {formData.file ? formData.file.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG, PDF, AI, SVG up to 10MB
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
              >
                Submit Booking Request
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              * Required fields. We'll contact you within 24 hours to confirm your booking.
            </p>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-800 mb-1">Quick Response</h3>
            <p className="text-sm text-gray-600">We respond within 24 hours</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold text-gray-800 mb-1">Free Quote</h3>
            <p className="text-sm text-gray-600">Get a detailed price estimate</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold text-gray-800 mb-1">Custom Design</h3>
            <p className="text-sm text-gray-600">We help create your design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
