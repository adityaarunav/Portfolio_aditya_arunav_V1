# Portfolio - Aditya Arunav V1

A high-end, minimalist portfolio website for a Product Designer & Product Manager built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 16 (App Router) with TypeScript
- **Design-First Aesthetic**: Framer-inspired design with generous whitespace and high-contrast typography
- **Smooth Animations**: Framer Motion for fade-ins and subtle parallax effects
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Accessible Components**: Built with Radix UI primitives
- **Contact Form**: Functional contact form with toast notifications

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Fonts**: Playfair Display (serif headings), Inter (sans-serif body)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── projects/     # Projects page
│   │   ├── experience/   # Experience page
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI primitives (Button, etc.)
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── project-card.tsx
│   │   └── ...
│   └── lib/              # Utility functions
└── public/               # Static assets
```

## Customization

Update the following files to personalize your portfolio:

- `src/components/site-header.tsx` - Navigation and branding
- `src/components/site-footer.tsx` - Contact email and form
- `src/app/page.tsx` - Home page content and featured projects
- `src/app/projects/page.tsx` - Project listings
- `src/app/experience/page.tsx` - Work experience entries

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and proprietary.
