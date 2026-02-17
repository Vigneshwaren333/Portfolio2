# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TailwindCSS, and Radix UI.

## Features

- ✨ Modern UI with light/dark theme toggle
- 📱 Fully responsive design
- ⚡ Built with Next.js 15 and React 19
- 🎨 Styled with TailwindCSS
- 🚀 Optimized for performance
- 📦 Ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs on [http://localhost:9002](http://localhost:9002)

## Deployment to Netlify

This project is configured for easy deployment to Netlify:

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Netlify will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

The project includes:
- `netlify.toml` - Netlify configuration
- `next.config.mjs` - Next.js configuration optimized for deployment

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   ├── projects/       # Projects page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/ui/      # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utilities and data
├── public/                 # Static assets
└── package.json
```

## Technologies

- **Framework:** Next.js 15.5
- **UI Library:** React 19
- **Styling:** TailwindCSS
- **Components:** Radix UI
- **Icons:** Lucide React
- **Language:** TypeScript

## Scripts

- `npm run dev` - Start development server (port 9002)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## License

MIT
