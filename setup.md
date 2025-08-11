# Portfolio Setup Guide

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies (optional)
pip install -r requirements.txt
```

### 2. Development

```bash
# Start frontend development server
npm run dev

# Start backend server (in separate terminal)
python app.py
```

### 3. Customization

#### Update Personal Information:
- **Contact Details**: Edit `src/Contact.jsx`
- **Social Links**: Update `src/Header.jsx` and `src/Footer.jsx`
- **Projects**: Modify project data in `src/Projects.jsx`
- **Skills**: Update skills array in `src/Skills.jsx`
- **About**: Edit content in `src/About.jsx`
- **Resume**: Replace `public/resume.pdf` with your actual resume

#### Customize Styling:
- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Update Google Fonts in `src/index.css`
- **Logo**: Change "AlgoKing" to your brand name

### 4. Email Setup (Optional)

1. Create `.env` file:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. Enable 2FA on Gmail and generate app password
3. Update recipient email in `app.py`

### 5. Deployment

#### Frontend (Vercel - Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

#### Backend (Render/Railway)
1. Connect GitHub repository
2. Set environment variables
3. Deploy Flask app

## 🎨 Customization Tips

### Colors
```js
// tailwind.config.js
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color',
  }
}
```

### Projects Data
```js
// src/Projects.jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Python'],
    github: 'your-github-link',
    demo: 'your-demo-link'
  }
];
```

### Skills
```js
// src/Skills.jsx
const skills = [
  { name: 'Your Skill', icon: YourIcon, level: 90 }
];
```

## 🚀 Enhanced Features Included

**Core Features:**
- ✅ Fully responsive design
- ✅ Dark/Light mode toggle
- ✅ Animated particle background
- ✅ Typing animation in hero
- ✅ Real-time form validation
- ✅ Advanced project filtering & search
- ✅ Interactive 3D skill cards
- ✅ Testimonials carousel
- ✅ SEO & performance optimized

**Unique Enhancements:**
- ✨ Cursor trail effect
- ✨ Floating action buttons
- ✨ 3D hover effects
- ✨ Gradient animations
- ✨ Interactive progress circles
- ✨ Real-time clock display
- ✨ Advanced loading screen
- ✨ Smooth scroll indicators
- ✨ Glow effects & shimmer animations
- ✨ Professional micro-interactions

## 🔧 Tech Stack

**Frontend:**
- React 19
- Tailwind CSS
- React Icons
- Vite

**Backend:**
- Python Flask
- Flask-Mail
- Flask-CORS

## 📞 Support

Need help? Contact: contact@algoking.dev