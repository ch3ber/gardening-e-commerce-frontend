# Gardening E-commerce Frontend

> A Next.js (App Router) and TypeScript powered storefront for gardening products.

This project serves as the frontend application for a gardening e-commerce platform, showcasing products, cart management (guest & authenticated), and a checkout flow.

## Table of Contents

- [Technologies](#technologies)
- [Setup & Installation](#setup--installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Services & API](#services--api)
- [Testing](#testing)
- [Linting](#linting)
- [Deployment](#deployment)

## Technologies

- **Next.js** 15 & **React** 19 (App Router)
- **TypeScript** 5
- **Tailwind CSS** 4 & PostCSS
- **ESLint** (Next.js core-web-vitals & TypeScript)
- **js-cookie** & **jwt-decode** (client-side cart/auth)
- **pnpm** (package manager)

## Setup & Installation

### Prerequisites

- Node.js v18+ (LTS recommended)
- pnpm v9+

### Install dependencies

```bash
git clone <repository-url>
cd gardening-e-commerce-frontend
pnpm install
```

## Available Scripts

In the project directory, you can run:

| Command      | Description                      |
| ------------ | -------------------------------- |
| `pnpm dev`   | Runs the app in development mode |
| `pnpm build` | Builds the app for production    |
| `pnpm start` | Starts the production server     |
| `pnpm lint`  | Runs ESLint for code quality     |

## Project Structure

```text
.
├── public/             # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js App Router pages & layouts
│   ├── components/     # Reusable React components
│   ├── services/       # Cart services (local & API handlers)
│   ├── utils/          # Utility functions (e.g., mock product data)
│   └── models/         # TypeScript type definitions
├── postcss.config.mjs  # PostCSS/Tailwind configuration
├── eslint.config.mjs   # ESLint configuration
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript compiler options
├── package.json        # Project metadata & scripts
└── pnpm-lock.yaml      # pnpm lockfile
```

## Styling

- Tailwind CSS is configured via `postcss.config.mjs`.
- Global styles and custom utilities live in `src/app/globals.css`.
- Theme colors and button utilities use CSS variables & `@apply`.

## Services & API

- **Local Cart** (`src/services/localCartService.ts`):
  manages guest & JWT-authenticated carts in `localStorage`.
- **API Cart** (`src/services/cartService.ts`):
  interacts with backend `/api/v1/cart` endpoints (requires a `token` cookie).

## Testing

There are no automated tests configured yet. To get started with testing:

- **Unit tests**: Jest & React Testing Library
- **End-to-End**: Cypress or Playwright

## Linting

ESLint is configured for Next.js best practices:

```bash
pnpm lint
```

## Deployment

You can deploy this Next.js application on various platforms. Below are two common approaches.

### Deploy to Vercel (recommended)

1. Import the repository in [Vercel Dashboard](https://vercel.com/dashboard).
2. Select **Framework Preset**: Next.js.
3. (Optional) Configure environment variables if needed.
4. Deploy.

### Self-Hosting

```bash
pnpm build
pnpm start
```

The production server will start on `http://localhost:3000` by default.

---

*Happy gardening!*
