# AlgoKing Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Flask backend.

## Features

- 🎨 Modern, clean design with dark/light mode
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized performance
- 🎭 Smooth animations and transitions
- 📧 Working contact form with Flask backend
- 🔍 Project filtering functionality
- 💫 Interactive testimonials carousel
- 🎯 SEO optimized

## Tech Stack

### Frontend
- React 19
- Tailwind CSS
- React Icons
- Framer Motion (for animations)
- Vite (build tool)

### Backend
- Python Flask
- Flask-Mail (email handling)
- Flask-CORS (cross-origin requests)

## Quick Start

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

### Backend Setup

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your email credentials
```

4. Run Flask server:
```bash
python app.py
```

## Environment Variables

Create a `.env` file with:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Backend (Render/Railway)

1. Connect your repository
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `python app.py`
4. Add environment variables
5. Deploy

## Customization

### Personal Information
- Update contact details in `src/Contact.jsx`
- Modify social links in `src/Header.jsx` and `src/Footer.jsx`
- Change projects data in `src/Projects.jsx`
- Update skills in `src/Skills.jsx`

### Styling
- Colors: Edit `tailwind.config.js`
- Fonts: Update Google Fonts import in `src/index.css`
- Animations: Modify Tailwind animations in config

### Content
- Hero section: `src/Hero.jsx`
- About section: `src/About.jsx`
- Testimonials: `src/Testimonials.jsx`

## Performance Optimizations

- Lazy loading for images
- Code splitting with React.lazy()
- Optimized bundle size with Vite
- Compressed assets
- SEO meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

For questions or support, reach out at contact@algoking.dev# Eliud-portfolio
