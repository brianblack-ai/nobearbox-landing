# NoBearBox Landing Page

A production-ready marketing landing page for NoBearBox - bear-resistant trash enclosures for mountain properties.

## Features

- Built with Next.js 14+ App Router and TypeScript
- Styled with Tailwind CSS
- Fully responsive and mobile-first design
- High-contrast black/white/red color scheme
- Accessible with semantic HTML and ARIA labels
- SEO optimized with metadata
- Smooth scrolling navigation
- Lead capture form with photo upload (front-end only)
- Modal and inline form options

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd nobearbox
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

Your site will be live at a Vercel URL (e.g., `nobearbox.vercel.app`). You can then configure a custom domain in the Vercel dashboard.

## Project Structure

```
nobearbox/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx          # Sticky header with navigation
│   ├── Hero.tsx            # Hero section
│   ├── ProblemStrip.tsx    # Problem statement section
│   ├── SolutionIntro.tsx   # Solution introduction
│   ├── HowItWorks.tsx      # 3-step process
│   ├── AudienceSegments.tsx # Target audience cards
│   ├── ProductDetails.tsx  # Product specifications
│   ├── InstallLogistics.tsx # Installation options
│   ├── ProofGallery.tsx    # Photo gallery placeholder
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── FinalCTA.tsx        # Final call-to-action with form
│   ├── LeadForm.tsx        # Reusable lead capture form
│   └── Footer.tsx          # Site footer
├── public/
│   └── logo.svg            # NoBearBox logo
└── package.json

```

## Customization

### Editing Copy

Most copy is stored directly in the components as TypeScript constants at the top of each file. Simply edit these arrays and objects to update content.

### Colors

The color palette is defined in `tailwind.config.ts`:
- Black: `#000000`
- White: `#FFFFFF`
- Red: `#DC2626` (brand-red)

### Logo

Replace `/public/logo.svg` with your final logo design. The current placeholder is a simple bear silhouette with a prohibition symbol.

## Form Handling

The lead form currently logs submissions to the browser console. To integrate with a backend:

1. Update the `handleSubmit` function in `components/LeadForm.tsx`
2. Add API endpoint or service integration (e.g., email service, CRM, database)
3. Handle photo upload to cloud storage if needed

## License

Proprietary - All rights reserved
