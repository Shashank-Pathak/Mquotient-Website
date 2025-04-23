# mquotient Company Website

A professional company website for mquotient that showcases their services and brand identity using React and Express.

## Features

- Modern, responsive design with gradient styling that matches mquotient branding
- Complete company website with Home, Services, Solutions, About, Case Studies, and Contact pages
- Responsive navigation with mobile menu support
- Contact form with backend integration
- Showcase for services, solutions, and case studies
- Client testimonials section
- Professional gradient styling and animations

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: Express
- **Routing**: Wouter
- **Form Handling**: React Hook Form with Zod validation
- **API Communication**: TanStack Query
- **Styling**: Tailwind CSS with custom configuration

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions and common code
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main application component
│   │   └── main.tsx      # Entry point
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite server integration
├── shared/               # Shared code between frontend and backend
│   └── schema.ts         # Data schemas using Drizzle ORM
├── attached_assets/      # Project assets
└── package.json          # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mquotient-website.git
   cd mquotient-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Deployment Options

### Standard Server Deployment

1. Build the project for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

3. Configure your web server (Nginx, Apache, etc.) to proxy requests to the application port (default: 5000).

### GitHub Pages Deployment

To deploy this project on GitHub Pages, follow these steps:

1. Create a GitHub repository and push your code.

2. Update the `vite.config.ts` file to include the correct base path:
   ```typescript
   // vite.config.ts
   export default defineConfig({
     // Add this line with your repo name
     base: '/your-repo-name/',
     // ... other config
   });
   ```

3. Add a GitHub Actions workflow file `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm install

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@4.1.5
           with:
             branch: gh-pages
             folder: dist
   ```

4. Push your changes to GitHub and enable GitHub Pages in your repository settings.

### Deploying on Replit

This project is already set up to run on Replit:

1. Fork the project on Replit
2. Use the "Start application" workflow to run the app
3. Click the "Deploy" button in the Replit interface

## Environment Variables

The following environment variables can be configured:

- `PORT`: The port to run the server on (default: 5000)
- `NODE_ENV`: Environment mode (development, production, etc.)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Wouter](https://github.com/molefrog/wouter) for the routing
- [mquotient](https://mquotient.net) for the inspiration and branding