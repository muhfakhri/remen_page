# Remen Coffee Website

This is a [Next.js](https://nextjs.org) project for Remen Coffee - a modern coffee shop website featuring product showcase, contact information, and interactive features. Built with Next.js and styled with Tailwind CSS.

## Features

- 🏠 Modern homepage with hero section
- ☕ Product showcase for coffee varieties
- 📞 Contact information and location
- 🤝 Partnership/collaboration section
- 📱 Responsive design with Tailwind CSS
- 💬 Interactive chat component
- 🔝 Scroll-to-top functionality

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Remen Coffee website.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── hero/           # Homepage hero section
│   ├── product/        # Product showcase
│   ├── about/          # About section
│   ├── contact/        # Contact information
│   ├── kerjasama/      # Partnership section
│   ├── chat/           # Chat component
│   ├── navbar/         # Navigation bar
│   ├── Footer/         # Footer component
│   └── topbutton/      # Scroll to top button
├── hooks/              # Custom React hooks
├── pages/              # Next.js pages
└── styles/             # Global styles
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Technologies Used

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Component-based UI library
- **Custom Fonts** - Mersin and Lumios Brush fonts
- **Responsive Design** - Mobile-first approach

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

## Development

This project uses custom fonts and components for the Remen Coffee brand. The website includes:

- Product catalog for different coffee varieties
- Contact and location information
- Partnership opportunities
- Interactive user interface elements

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load custom fonts including Mersin and Lumios Brush fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
