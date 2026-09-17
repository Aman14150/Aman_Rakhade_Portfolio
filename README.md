# Aman R. Rakhade Portfolio

Personal portfolio website for Aman R. Rakhade, focused on AI engineering, full-stack product development, and applied software projects.

**Live:** https://aman14150.github.io/Aman_Rakhade_Portfolio/

## Overview

- Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.
- Designed as a premium dark-theme portfolio with motion, transitions, and resume-driven content.
- Content is centralized so experience, projects, and profile details can be updated quickly.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

- `src/app` contains the App Router pages, layout, and global styles.
- `src/components/portfolio-page.tsx` contains the main portfolio UI.
- `src/data/portfolio.ts` contains profile, experience, projects, skills, and content data.
- `public/Aman_Rakhade_Resume.pdf` is the downloadable resume used by the site.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/Aman_Rakhade_Portfolio` in the browser.

## One-click Run and Debug in VS Code

Install dependencies once with `npm install`, then open **Run and Debug**
(`Ctrl+Shift+D`), select **Portfolio: Run and Debug**, and press **F5** or the
green play button. This starts Next.js with Webpack and opens the portfolio in
Microsoft Edge with browser and Node.js debugging enabled. Save changes to
refresh the page automatically. Set breakpoints in your TypeScript/TSX files
to pause execution; press **Shift+F5** to stop the debug session.

If `npm run dev` is already running, select **Portfolio: Debug Already Running
Site** to debug the browser at port 3000, or stop the existing server with
`Ctrl+C` before using the full-project configuration. Next.js allows only one
development server per project output directory.

Edit `src/data/portfolio.ts` for content, `src/components/portfolio-page.tsx`
for layout and interactions, and `src/app/globals.css` for styling.

## Production Checks

```bash
npm run lint
npm run build
```

## Notes

- Portfolio content includes MaSyCoDa, internships, and AI projects. Update confirmed dates and outcomes in `src/data/portfolio.ts`.
- This repository is intended to be pushed to the personal portfolio GitHub repository after explicit confirmation.
