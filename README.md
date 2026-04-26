# 🎨 Rudra Laser Art - Professional Business Website

A modern, fully responsive business website built with React.js and Tailwind CSS, featuring an AI-powered chatbot for customer engagement.

## 🚀 Features

- ✅ **Modern UI/UX** - Clean white background with elegant blue accents
- ✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ✅ **5 Complete Pages** - Home, Services, About, Contact, and Booking
- ✅ **AI Chatbot** - Intelligent chatbot powered by OpenRouter API
- ✅ **React Router** - Smooth navigation between pages
- ✅ **Tailwind CSS** - Modern utility-first styling
- ✅ **Contact Forms** - Professional inquiry and booking forms
- ✅ **Google Maps** - Embedded location map
- ✅ **Social Media Integration** - Instagram link

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## 🛠️ Installation & Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- React Router DOM
- Tailwind CSS
- Axios (for API calls)
- And other dependencies

### Step 2: Configure OpenRouter API Key

1. Get your OpenRouter API key from: https://openrouter.ai/
2. Open `src/components/Chatbot.js`
3. Find line 28: `const OPENROUTER_API_KEY = 'YOUR_OPENROUTER_API_KEY';`
4. Replace `YOUR_OPENROUTER_API_KEY` with your actual API key

Example:
```javascript
const OPENROUTER_API_KEY = 'sk-or-v1-abc123...';
```

### Step 3: Start Development Server

Run the following command:

```bash
npm start
```

The website will automatically open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
rudra-laser-art/
├── public/
│   ├── index.html
│   └── data.json          # Business data for AI chatbot
├── src/
│   ├── components/
│   │   ├── Navbar.js      # Navigation bar
│   │   ├── Footer.js      # Footer component
│   │   └── Chatbot.js     # AI Chatbot component
│   ├── pages/
│   │   ├── Home.js        # Homepage
│   │   ├── Services.js    # Services page
│   │   ├── About.js       # About Us page
│   │   ├── Contact.js     # Contact page
│   │   └── Booking.js     # Booking page
│   ├── App.js             # Main app component with routing
│   ├── index.js           # Entry point
│   └── index.css          # Global styles with Tailwind
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Pages Overview

### 1. Home Page (`/`)
- Hero section with call-to-action buttons
- Service highlights
- Why choose us section
- Contact CTA

### 2. Services Page (`/services`)
- Detailed service descriptions
- CO2 laser technology information
- Service features
- Call-to-action buttons

### 3. About Us Page (`/about`)
- Company story
- Mission & Vision
- Why choose us
- Core values

### 4. Contact Page (`/contact`)
- Contact information
- Google Maps integration
- Contact form
- Business hours

### 5. Booking Page (`/booking`)
- Advance booking form
- File upload for designs
- Product type selection
- Project description

## 🤖 AI Chatbot Features

The chatbot is located at the bottom-right corner of every page and includes:

- **Smart Responses** - Uses OpenRouter AI to generate intelligent answers
- **Business Knowledge** - Knows about services, contact info, location, etc.
- **Fallback Responses** - Works even without API (static responses)
- **Modern UI** - Blue and white theme with smooth animations
- **Conversation History** - Maintains chat context

### Chatbot Data Source

The chatbot uses `public/data.json` which contains:
- Business details
- Services information
- Contact information
- FAQ data
- Technology details

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#2563eb',    // Main blue color
  secondary: '#1e40af',  // Darker blue
}
```

### Business Information

Update `public/data.json` to modify:
- Business name and tagline
- Services
- Contact details
- FAQ
- About information

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 🌐 Deployment

You can deploy this website to:
- **Netlify** - Drag and drop the `build` folder
- **Vercel** - Connect your GitHub repository
- **AWS S3** - Upload the `build` folder
- **Any web hosting** - Upload the `build` folder contents

## 📞 Contact Information

**Rudra Laser Art**
- Phone: 7567800813, 9998434388
- Address: 6 Bhagat Estate, Behind Galaxy Cinema, Galaxy Cross Road, Naroda, Ahmedabad - 382330
- Instagram: [@rudra_laser_art](https://www.instagram.com/rudra_laser_art/)

## 🔧 Troubleshooting

### Issue: Chatbot not responding
- Check if OpenRouter API key is correctly set
- Verify internet connection
- Check browser console for errors

### Issue: Styles not loading
- Run `npm install` again
- Clear browser cache
- Restart development server

### Issue: Pages not routing
- Ensure React Router is installed
- Check browser console for errors

## 📝 License

This project is created for Rudra Laser Art business use.

## 🙏 Support

For any issues or questions, contact the development team or refer to:
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- OpenRouter: https://openrouter.ai

---

**Built with ❤️ using React.js and Tailwind CSS**
