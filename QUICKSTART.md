# 🚀 QUICK START GUIDE - Rudra Laser Art Website

## ⚡ Fast Setup (5 Minutes)

### Step 1: Install Node.js
If you don't have Node.js installed:
1. Go to https://nodejs.org/
2. Download and install the LTS version
3. Verify installation: Open terminal and type `node --version`

### Step 2: Install Dependencies
Open terminal in this project folder and run:
```bash
npm install
```
Wait for all packages to install (2-3 minutes)

### Step 3: Configure AI Chatbot
1. Get FREE API key from: https://openrouter.ai/
2. Open file: `src/components/Chatbot.js`
3. Line 28: Replace `YOUR_OPENROUTER_API_KEY` with your key
4. Save the file

### Step 4: Start the Website
In terminal, run:
```bash
npm start
```

The website will open automatically at http://localhost:3000

## ✅ That's It!

Your website is now running locally. You should see:
- ✅ Homepage with hero section
- ✅ Navigation menu working
- ✅ All 5 pages accessible
- ✅ Chatbot icon at bottom-right
- ✅ Responsive design on all devices

## 🎯 Next Steps

1. **Test the Chatbot**: Click the chatbot icon and ask questions
2. **Customize Content**: Edit `public/data.json` for business info
3. **Change Colors**: Edit `tailwind.config.js` for color scheme
4. **Add Images**: Place images in `src/assets/` folder
5. **Deploy**: Run `npm run build` when ready to go live

## 📞 Need Help?

- Check README.md for detailed documentation
- Verify all files are in correct folders
- Make sure Node.js version is 14 or higher
- Clear browser cache if styles don't load

## 🎨 Key Files to Customize

| File | Purpose |
|------|---------|
| `public/data.json` | Business information for chatbot |
| `src/components/Chatbot.js` | AI chatbot configuration |
| `tailwind.config.js` | Color scheme and styling |
| `src/pages/*.js` | Page content and layout |

---

**Happy Building! 🚀**
