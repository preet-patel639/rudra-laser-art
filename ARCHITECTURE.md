# 🏗️ WEBSITE ARCHITECTURE DIAGRAM

## 🎯 Complete System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     RUDRA LASER ART WEBSITE                      │
│                   (React.js + Tailwind CSS)                      │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                         index.js                                 │
│                      (Entry Point)                               │
│                  ReactDOM.render(<App />)                        │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                          App.js                                  │
│                    (Main Application)                            │
│                   React Router Setup                             │
└─────────────────────────────────────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
        ┌──────────────────┐      ┌──────────────────┐
        │  Layout Components│      │  Route Components│
        │  (Always Visible) │      │  (Page Specific) │
        └──────────────────┘      └──────────────────┘
                    │                         │
        ┌───────────┼───────────┐            │
        ▼           ▼           ▼            ▼
    ┌────────┐ ┌────────┐ ┌─────────┐  ┌──────────┐
    │ Navbar │ │ Footer │ │ Chatbot │  │  Pages   │
    └────────┘ └────────┘ └─────────┘  └──────────┘
                                              │
                    ┌─────────────────────────┼─────────────────────┐
                    ▼                         ▼                     ▼
            ┌──────────────┐         ┌──────────────┐     ┌──────────────┐
            │   Home (/)   │         │Services (/s) │     │ About (/a)   │
            └──────────────┘         └──────────────┘     └──────────────┘
                    ▼                         ▼                     ▼
            ┌──────────────┐         ┌──────────────┐
            │Contact (/c)  │         │Booking (/b)  │
            └──────────────┘         └──────────────┘
```

---

## 🔄 Component Hierarchy

```
App
├── Navbar (Sticky Top)
│   ├── Logo
│   ├── Navigation Links
│   │   ├── Home
│   │   ├── Services
│   │   ├── About
│   │   ├── Contact
│   │   └── Book Now
│   └── Mobile Menu Toggle
│
├── Main Content (Routes)
│   │
│   ├── Route: / (Home)
│   │   ├── Hero Section
│   │   ├── About Section
│   │   ├── Service Cards (4)
│   │   ├── Features Section
│   │   └── CTA Section
│   │
│   ├── Route: /services (Services)
│   │   ├── Page Header
│   │   ├── Service Cards (5)
│   │   ├── Technology Section
│   │   └── CTA Section
│   │
│   ├── Route: /about (About)
│   │   ├── Page Header
│   │   ├── Story Section
│   │   ├── Mission & Vision
│   │   ├── Why Choose Us (8 items)
│   │   └── Core Values
│   │
│   ├── Route: /contact (Contact)
│   │   ├── Page Header
│   │   ├── Contact Info Cards
│   │   ├── Google Maps
│   │   └── Contact Form
│   │
│   └── Route: /booking (Booking)
│       ├── Page Header
│       ├── Booking Form
│       │   ├── Name Input
│       │   ├── Phone Input
│       │   ├── Email Input
│       │   ├── Product Type Select
│       │   ├── Description Textarea
│       │   └── File Upload
│       └── Info Cards
│
├── Footer (Bottom)
│   ├── Company Info
│   ├── Quick Links
│   ├── Contact Info
│   └── Copyright
│
└── Chatbot (Floating)
    ├── Chat Button (Closed State)
    └── Chat Window (Open State)
        ├── Header
        ├── Messages Area
        │   ├── Bot Messages
        │   └── User Messages
        └── Input Area
```

---

## 🎨 Styling Architecture

```
┌─────────────────────────────────────────┐
│         Tailwind CSS Framework          │
└─────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
┌──────────────┐      ┌──────────────────┐
│tailwind.config│      │   index.css      │
│    .js       │      │  @tailwind base  │
│              │      │  @tailwind comp  │
│ - Colors     │      │  @tailwind util  │
│ - Breakpoints│      └──────────────────┘
│ - Extensions │
└──────────────┘
        │
        ▼
┌─────────────────────────────────────────┐
│      Component Inline Classes           │
│  className="bg-white text-primary..."   │
└─────────────────────────────────────────┘
```

---

## 🤖 Chatbot Data Flow

```
┌──────────────┐
│   User       │
│   Types      │
│   Message    │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  Chatbot.js      │
│  handleSend()    │
└──────┬───────────┘
       │
       ├─────────────────────┐
       ▼                     ▼
┌──────────────┐    ┌──────────────────┐
│ OpenRouter   │    │  Static Response │
│ API Call     │    │  (Fallback)      │
│              │    │                  │
│ - Send msg   │    │ - Check keywords │
│ - Get AI     │    │ - Return answer  │
│   response   │    │   from data.json │
└──────┬───────┘    └────────┬─────────┘
       │                     │
       └──────────┬──────────┘
                  ▼
         ┌─────────────────┐
         │  Display Reply  │
         │  in Chat UI     │
         └─────────────────┘
```

---

## 📊 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    public/data.json                      │
│  (Business Information, Services, FAQ, Contact)          │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ fetch('/data.json')
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   Chatbot Component                      │
│              useState(businessData)                      │
└────────────────────────┬────────────────────────────────┘
                         │
                         │ Used for AI context
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│              OpenRouter API Request                      │
│  {                                                       │
│    model: "llama-3.1-8b",                               │
│    messages: [                                           │
│      { role: "system", content: businessData },         │
│      { role: "user", content: userMessage }             │
│    ]                                                     │
│  }                                                       │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   AI Response                            │
│              Display to User                             │
└─────────────────────────────────────────────────────────┘
```

---

## 🌐 Routing Architecture

```
Browser URL
    │
    ▼
React Router (App.js)
    │
    ├── "/" ──────────────────────► Home.js
    │
    ├── "/services" ──────────────► Services.js
    │
    ├── "/about" ─────────────────► About.js
    │
    ├── "/contact" ───────────────► Contact.js
    │
    └── "/booking" ───────────────► Booking.js

All routes include:
    ├── Navbar (top)
    ├── Footer (bottom)
    └── Chatbot (floating)
```

---

## 📱 Responsive Design Breakpoints

```
┌─────────────────────────────────────────────────────────┐
│                    Screen Sizes                          │
└─────────────────────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Mobile     │  │   Tablet     │  │   Desktop    │
│   < 768px    │  │ 768-1024px   │  │   > 1024px   │
│              │  │              │  │              │
│ - Stack      │  │ - 2 columns  │  │ - 3+ columns │
│ - Hamburger  │  │ - Compact    │  │ - Full nav   │
│ - Full width │  │ - Medium     │  │ - Spacious   │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## 🔐 Form Handling Flow

```
User fills form
    │
    ▼
Form validation (HTML5 + React)
    │
    ├── Valid ──────────► handleSubmit()
    │                           │
    │                           ▼
    │                    Show success message
    │                           │
    │                           ▼
    │                    Clear form
    │                           │
    │                           ▼
    │                    (Ready for backend)
    │
    └── Invalid ────────► Show error message
```

---

## 🎯 User Journey Map

```
User lands on website
    │
    ▼
┌─────────────────────────────────────────┐
│         Home Page (/)                    │
│  - Sees hero section                     │
│  - Reads about services                  │
│  - Clicks "Our Services" or "Book Now"   │
└─────────────────────────────────────────┘
    │
    ├──────────────────┬──────────────────┐
    ▼                  ▼                  ▼
┌──────────┐    ┌──────────┐      ┌──────────┐
│ Services │    │  About   │      │ Contact  │
│   Page   │    │   Page   │      │   Page   │
│          │    │          │      │          │
│ - Reads  │    │ - Learns │      │ - Gets   │
│   details│    │   about  │      │   info   │
│          │    │   company│      │          │
└────┬─────┘    └────┬─────┘      └────┬─────┘
     │               │                  │
     └───────────────┴──────────────────┘
                     │
                     ▼
            ┌─────────────────┐
            │  Booking Page   │
            │                 │
            │ - Fills form    │
            │ - Uploads design│
            │ - Submits       │
            └─────────────────┘
                     │
                     ▼
            ┌─────────────────┐
            │ Success Message │
            │ "We'll contact  │
            │  you soon!"     │
            └─────────────────┘
```

---

## 🛠️ Build Process

```
Source Code (src/)
    │
    ▼
npm start (Development)
    │
    ├── Webpack compiles
    ├── Tailwind processes CSS
    ├── React transforms JSX
    └── Hot reload enabled
    │
    ▼
Development Server
(http://localhost:3000)

OR

npm run build (Production)
    │
    ├── Optimize code
    ├── Minify files
    ├── Generate static files
    └── Create build/ folder
    │
    ▼
Production Build
(Ready to deploy)
```

---

## 🚀 Deployment Flow

```
Local Development
    │
    ▼
npm run build
    │
    ▼
build/ folder created
    │
    ├─────────────┬─────────────┬─────────────┐
    ▼             ▼             ▼             ▼
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│Netlify │  │Vercel  │  │AWS S3  │  │ Other  │
│        │  │        │  │        │  │ Host   │
│ Drag & │  │ Git    │  │ Upload │  │ FTP    │
│ Drop   │  │ Deploy │  │ Files  │  │ Upload │
└────────┘  └────────┘  └────────┘  └────────┘
    │             │             │             │
    └─────────────┴─────────────┴─────────────┘
                     │
                     ▼
            Live Website 🌐
```

---

## 📦 Package Dependencies

```
package.json
    │
    ├── react (UI Framework)
    ├── react-dom (DOM Rendering)
    ├── react-router-dom (Navigation)
    ├── react-scripts (Build Tools)
    ├── tailwindcss (Styling)
    ├── postcss (CSS Processing)
    ├── autoprefixer (Browser Support)
    └── axios (API Calls)
```

---

## 🎨 Color System

```
Primary Colors
    │
    ├── Primary: #2563eb (Blue)
    │   └── Used for: Buttons, Links, Accents
    │
    ├── Secondary: #1e40af (Dark Blue)
    │   └── Used for: Hover states, Headers
    │
    ├── White: #ffffff
    │   └── Used for: Background, Cards
    │
    └── Gray Scale
        ├── Gray-50: Very light backgrounds
        ├── Gray-600: Body text
        └── Gray-800: Headings
```

---

## 🔄 State Management

```
Component State (useState)
    │
    ├── Navbar
    │   └── isOpen (mobile menu)
    │
    ├── Chatbot
    │   ├── isOpen (chat window)
    │   ├── messages (chat history)
    │   ├── input (user input)
    │   ├── businessData (from JSON)
    │   └── isLoading (AI response)
    │
    ├── Contact Form
    │   └── formData (name, email, phone, message)
    │
    └── Booking Form
        └── formData (name, phone, email, type, desc, file)
```

---

## 📱 Mobile-First Approach

```
Design Process:
    │
    ▼
1. Mobile Layout (< 768px)
    │
    ▼
2. Add Tablet Styles (768px+)
    │
    ▼
3. Add Desktop Styles (1024px+)

Tailwind Classes:
    │
    ├── Default: Mobile
    ├── md: Tablet
    └── lg: Desktop

Example:
    className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

---

**🎯 This architecture ensures:**
- ✅ Scalability
- ✅ Maintainability
- ✅ Performance
- ✅ User Experience
- ✅ SEO Optimization
- ✅ Responsive Design

---

**📚 For more details, see:**
- `FOLDER_STRUCTURE.md` - File organization
- `PROJECT_SUMMARY.md` - Feature overview
- `README.md` - Complete documentation
