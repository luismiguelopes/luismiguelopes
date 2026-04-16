# Personal Resume Website — Luís Miguel Lopes

A modern, responsive personal portfolio and resume website built with **React**, **TypeScript**, and **Vite**. It showcases professional experience, skills, projects, and contact information in a clean and visually appealing layout.

Live at: [luismiguelopes.com](https://luismiguelopes.com)

## Features

- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices
- **PWA**: Progressive Web App with offline capabilities and auto-update
- **SEO Optimized**: Meta tags, Open Graph, and structured data via `react-helmet-async`
- **Contact Form**: Functional contact form powered by EmailJS
- **Animations**: Smooth animations with Framer Motion
- **Accessibility**: ARIA labels and semantic HTML throughout
- **Component System**: shadcn/ui components built on Radix UI primitives
- **Bundle Analysis**: Built-in bundle visualizer (`npm run build:analyze`)
- **Testing**: Unit tests with Vitest and Testing Library

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 7 (SWC) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI) |
| Animations | Framer Motion |
| State management | Zustand |
| Routing | React Router DOM v6 |
| Forms | React Hook Form |
| Icons | Lucide React |
| Toasts | Sonner |
| Contact form | EmailJS |
| PWA | vite-plugin-pwa |
| Testing | Vitest + Testing Library |

## Getting Started

### Prerequisites

- Node.js v18 or above
- npm (or bun)

### Installation

1. Clone the repository

```bash
git clone https://github.com/luismiguelopes/luismiguelopes.git
cd luismiguelopes
```

2. Install dependencies

```bash
npm install
```

3. Copy the environment file and fill in your credentials

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

Open your browser at `http://localhost:8080`.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# EmailJS — required for the contact form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics — optional
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key into `.env`

## Content Management

All portfolio content lives in a single JSON file:

```
src/data/portfolio.json
```

Edit this file to update personal information, skills, experience, education, and projects without touching any component code.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server on port 8080 |
| `npm run build` | Build for production (output: `dist/`) |
| `npm run build:dev` | Build in development mode |
| `npm run build:analyze` | Build and open the bundle size visualizer |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage report |

## Deployment

Build for production:

```bash
npm run build
```

Deploy the contents of the `dist/` folder to your preferred hosting platform (GitHub Pages, Netlify, Vercel, etc.).

## License

This project is open source and available under the MIT License.
