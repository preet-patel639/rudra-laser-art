# 🤖 AI CHATBOT SETUP GUIDE

## OpenRouter API Integration

This guide will help you set up the AI chatbot with OpenRouter API.

---

## 🎯 What is OpenRouter?

OpenRouter is an API service that provides access to multiple AI models including:
- Meta Llama 3.1
- GPT models
- Claude models
- And many more

**Benefits:**
- ✅ Free tier available
- ✅ Multiple AI models
- ✅ Easy to use
- ✅ Good documentation
- ✅ Pay-as-you-go pricing

---

## 📝 Step-by-Step Setup

### Step 1: Create OpenRouter Account

1. Go to: **https://openrouter.ai/**
2. Click "Sign Up" or "Get Started"
3. Sign up with:
   - Email
   - Google account
   - GitHub account
4. Verify your email

### Step 2: Get API Key

1. Log in to OpenRouter
2. Go to **"Keys"** section in dashboard
3. Click **"Create Key"**
4. Give it a name (e.g., "Rudra Laser Art Website")
5. Copy the API key (starts with `sk-or-v1-...`)
6. **IMPORTANT:** Save it somewhere safe - you won't see it again!

### Step 3: Add API Key to Project

**Option A: Direct in Code (Quick Start)**

1. Open file: `src/components/Chatbot.js`
2. Find line 28:
   ```javascript
   const OPENROUTER_API_KEY = 'YOUR_OPENROUTER_API_KEY';
   ```
3. Replace with your actual key:
   ```javascript
   const OPENROUTER_API_KEY = 'sk-or-v1-abc123xyz789...';
   ```
4. Save the file

**Option B: Environment Variable (Recommended for Production)**

1. Create `.env` file in project root
2. Add this line:
   ```
   REACT_APP_OPENROUTER_API_KEY=sk-or-v1-your-actual-key-here
   ```
3. Update `Chatbot.js` line 28:
   ```javascript
   const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
   ```
4. Restart development server

---

## 🔧 Configuration Details

### Current Model
```javascript
model: 'meta-llama/llama-3.1-8b-instruct:free'
```

**This is a FREE model!** Perfect for getting started.

### Other Available Models

You can change the model in `Chatbot.js` (line 35):

**Free Models:**
```javascript
'meta-llama/llama-3.1-8b-instruct:free'
'google/gemma-2-9b-it:free'
'microsoft/phi-3-mini-128k-instruct:free'
```

**Paid Models (Better Quality):**
```javascript
'openai/gpt-3.5-turbo'
'anthropic/claude-3-haiku'
'meta-llama/llama-3.1-70b-instruct'
```

---

## 💰 Pricing Information

### Free Tier
- ✅ Free models available
- ✅ No credit card required
- ✅ Rate limits apply
- ✅ Perfect for testing

### Paid Usage
- Pay only for what you use
- Typical cost: $0.001 - $0.01 per request
- Set spending limits
- Monitor usage in dashboard

**Example Costs:**
- 1,000 messages with free model: **$0**
- 1,000 messages with GPT-3.5: **~$2-5**
- 1,000 messages with GPT-4: **~$20-30**

---

## 🧪 Testing the Chatbot

### Test Questions to Try:

1. **Services:**
   - "What services do you offer?"
   - "Tell me about laser cutting"
   - "Do you do metal marking?"

2. **Contact:**
   - "What's your phone number?"
   - "Where are you located?"
   - "How can I contact you?"

3. **Booking:**
   - "How do I place an order?"
   - "Can I book online?"
   - "What's the process?"

4. **Technology:**
   - "What technology do you use?"
   - "Tell me about CO2 laser"
   - "What materials can you work with?"

---

## 🔍 Troubleshooting

### Issue: "API key is invalid"

**Solutions:**
1. Check if key is copied correctly (no extra spaces)
2. Verify key is active in OpenRouter dashboard
3. Make sure key starts with `sk-or-v1-`
4. Try generating a new key

### Issue: "Network error" or "Failed to fetch"

**Solutions:**
1. Check internet connection
2. Verify OpenRouter service is up (https://status.openrouter.ai/)
3. Check browser console for CORS errors
4. Try different browser

### Issue: "Rate limit exceeded"

**Solutions:**
1. Wait a few minutes
2. Upgrade to paid tier
3. Use different model
4. Implement request throttling

### Issue: Chatbot gives generic responses

**Solutions:**
1. Check if `data.json` is loading correctly
2. Verify API key is set
3. Check browser console for errors
4. Try refreshing the page

---

## 🛡️ Security Best Practices

### ⚠️ IMPORTANT: Never Commit API Keys to Git!

**What NOT to do:**
```javascript
// ❌ DON'T DO THIS in production
const API_KEY = 'sk-or-v1-abc123...';
```

**What TO do:**
```javascript
// ✅ DO THIS instead
const API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
```

### Protect Your API Key:

1. **Use Environment Variables**
   - Create `.env` file
   - Add to `.gitignore`
   - Never commit to GitHub

2. **Set Spending Limits**
   - Go to OpenRouter dashboard
   - Set monthly spending limit
   - Get alerts when limit is reached

3. **Rotate Keys Regularly**
   - Generate new key every few months
   - Delete old keys
   - Update in your project

4. **Monitor Usage**
   - Check OpenRouter dashboard regularly
   - Look for unusual activity
   - Review request logs

---

## 🎨 Customizing AI Responses

### Modify System Prompt

In `Chatbot.js`, find the `context` variable (around line 31):

```javascript
const context = `You are an AI assistant for Rudra Laser Art...`;
```

**Customize it:**
```javascript
const context = `You are a friendly AI assistant for Rudra Laser Art.

Your personality:
- Professional but warm
- Helpful and informative
- Quick to respond
- Always positive

Your knowledge:
- Services: ${businessData.services.map(s => s.name).join(', ')}
- Contact: ${businessData.contact.phones.join(', ')}
- Location: ${businessData.contact.address}

Guidelines:
- Keep responses under 100 words
- Always be polite
- Suggest booking if user is interested
- Provide contact info when asked`;
```

---

## 📊 Monitoring & Analytics

### Track Chatbot Usage

Add to `Chatbot.js`:

```javascript
const handleSend = async () => {
  // ... existing code ...
  
  // Track usage
  console.log('Message sent:', input);
  console.log('Response received:', response);
  
  // Optional: Send to analytics
  // analytics.track('chatbot_message', { message: input });
};
```

### Useful Metrics to Track:
- Number of messages
- Common questions
- Response time
- User satisfaction
- Conversion rate (booking form submissions)

---

## 🚀 Advanced Features (Optional)

### 1. Add Typing Indicator

Already implemented! Shows "..." while AI is thinking.

### 2. Add Quick Reply Buttons

```javascript
const quickReplies = [
  "What services do you offer?",
  "How can I contact you?",
  "I want to book"
];
```

### 3. Add Message History

Already implemented! Maintains conversation context.

### 4. Add File Upload to Chat

```javascript
// Allow users to upload images in chat
<input type="file" accept="image/*" />
```

### 5. Add Voice Input

```javascript
// Use Web Speech API
const recognition = new webkitSpeechRecognition();
```

---

## 📱 Mobile Optimization

The chatbot is already mobile-optimized:
- ✅ Responsive design
- ✅ Touch-friendly buttons
- ✅ Proper sizing on small screens
- ✅ Smooth animations

**Test on:**
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Various screen sizes

---

## 🔄 Fallback System

The chatbot has a built-in fallback system:

```javascript
try {
  // Try OpenRouter API
  const response = await axios.post(...);
  return response.data;
} catch (error) {
  // Fall back to static responses
  return getStaticResponse(userMessage);
}
```

**This means:**
- ✅ Works even without API key
- ✅ Works if API is down
- ✅ Works offline (basic responses)
- ✅ Always provides some answer

---

## 📝 Updating Business Data

The chatbot reads from `public/data.json`:

```json
{
  "businessName": "Rudra Laser Art",
  "services": [...],
  "contact": {...},
  "faq": [...]
}
```

**To update:**
1. Edit `public/data.json`
2. Save the file
3. Refresh browser
4. Chatbot now has new information!

---

## ✅ Checklist

Before going live:

- [ ] OpenRouter account created
- [ ] API key generated
- [ ] API key added to project
- [ ] Chatbot tested with various questions
- [ ] Responses are accurate
- [ ] Mobile version tested
- [ ] Fallback responses work
- [ ] Business data is correct
- [ ] Spending limit set (if using paid models)
- [ ] API key secured (not in Git)

---

## 🆘 Need Help?

### Resources:
- **OpenRouter Docs:** https://openrouter.ai/docs
- **OpenRouter Discord:** https://discord.gg/openrouter
- **React Docs:** https://react.dev
- **Axios Docs:** https://axios-http.com/

### Common Questions:

**Q: Is OpenRouter free?**
A: Yes, they have free models. Paid models are pay-as-you-go.

**Q: How many requests can I make?**
A: Free tier has rate limits. Check OpenRouter dashboard for details.

**Q: Can I use other AI services?**
A: Yes! You can modify the code to use OpenAI, Anthropic, etc.

**Q: Will the chatbot work without internet?**
A: Basic fallback responses will work, but AI features need internet.

---

## 🎯 Next Steps

1. ✅ Set up OpenRouter account
2. ✅ Add API key to project
3. ✅ Test chatbot thoroughly
4. ✅ Customize responses
5. ✅ Monitor usage
6. ✅ Gather user feedback
7. ✅ Improve over time

---

**🎉 Your AI chatbot is ready to help customers 24/7!**

---

**For more help, see:**
- `README.md` - General documentation
- `QUICKSTART.md` - Quick setup
- `SETUP_INSTRUCTIONS.md` - Detailed setup
