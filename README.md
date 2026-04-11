# Portfolio — Gatmach Yuol

A full-stack personal portfolio website built with React, TypeScript, and Node.js. Features a dark minimal design, smooth scroll animations, active navbar tracking, and a working contact form.

## Live Demo

*Coming soon*

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| CSS Modules | Scoped component styling |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express | HTTP server & routing |
| TypeScript | Type safety |
| Nodemailer | Email dispatch |

## Features

- **Hero section** — Full-screen background image with staggered text animations
- **Active navbar** — Highlights the current section automatically as you scroll
- **Mobile menu** — Responsive burger menu that closes when scrolling into a new section
- **About section** — Bio with branded skill tags featuring brand colors and hover effects
- **Projects grid** — Card grid with hover animations, GitHub and live site links
- **Contact form** — Sends messages directly to my inbox
- **Scroll reveal** — Sections fade and slide into view on scroll
- **Footer** — Navigation and social links

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/my-portfolio-repo.git
   cd portfolio
   ```
## Install all dependencies
  ```bash
    npm install
  ```
### Configure environment variables
### This project uses environment variables to protect sensitive data. 
```
Create a .env file in the server/ folder and add your email service credentials.
```
### Run the development servers
```bash
npm run dev
```
This starts both the frontend and backend simultaneously.

## Available Scripts
 ### From the root folder:
Script	              Description
```
npm run dev	- Start both client and server in development mode
npm run build	- Build both client and server for production
```
## From the client/ folder:
Script	      Description
```
npm run dev	- Start frontend dev server only
npm run build	- Build frontend for production
npm run preview	Preview production build locally
```
## From the server/ folder:
Script	    Description
```
npm run dev	- Start backend with hot-reload
npm run build	- Compile TypeScript to dist/
npm start - compiled production server
```
## Deployment
### Frontend → Vercel
```bash
npm install -g vercel
cd client
vercel
```
## Backend → Render
### 1. Push your repo to GitHub
### 2. Go to render.com → New Web Service
### 3. Connect your repo and set the root directory to server/
### 4. Set build command to npm run build and start command to npm start
### 5. Add your environment variables in the Render dashboard

## License

## Author
### Gatmach Yuol — Developer
### GitHub: https://github.com/Gatmach
### LinkedIn: www.linkedin.com/in/gatmachyuolnyuon
