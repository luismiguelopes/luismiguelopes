# Personal Resume Website

This is a modern, responsive personal resume website built with **React**, **TypeScript**, and **Tailwind CSS**. It showcases my professional experience, skills, projects, and contact information in a clean and visually appealing way.

## Features

- 🎨 **Modern Design**: Fully responsive design for desktop, tablet, and mobile devices
- ⚡ **Performance**: Built with React 18, TypeScript, and Vite for optimal performance
- 🎯 **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- 📧 **Contact Form**: Functional contact form with EmailJS integration
- 📊 **Analytics**: Google Analytics integration for tracking
- 🔄 **PWA Ready**: Progressive Web App with offline capabilities
- 🧪 **Testing**: Unit tests with Vitest and Testing Library
- 🎭 **Animations**: Smooth animations with Framer Motion
- 📱 **Accessibility**: ARIA labels and semantic HTML
- 🎨 **Design System**: shadcn/ui components with Tailwind CSS

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development
- JavaScript (ES6+)
- HTML5 & CSS3

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-resume-website.git
cd your-resume-website
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm start
# or
yarn start
```

4. Open your browser at `http://localhost:8080` to view the website.

## Configuration

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```bash
# EmailJS Configuration (required for contact form)
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### Content Management

The portfolio content is managed through JSON files in `src/data/`:
- `portfolio.json` - Contains all personal information, skills, experience, and projects
- Update this file to customize the content without touching the components

## Deployment

You can build the project for production with:

```bash
npm run build
# or
yarn build
```

Then deploy the contents of the `build` folder to your preferred hosting platform (GitHub Pages, Netlify, Vercel, etc.).

## Customization

- Update the content in the React components located in the `src` folder
- Modify styles by editing Tailwind classes or extending Tailwind config

## License

This project is open source and available under the MIT License.

---

Feel free to reach out if you have any questions or suggestions!
