# Quiz Funnel

React SPA for meal planning quiz with 22 screens across 8 phases.

## Stack

- React 19 + Vite 7
- Tailwind CSS 4
- npm

## App Views

The app has two views (both are deployed to GitHub):

| View | URL | Description |
|------|-----|-------------|
| Quiz | `/` | Client-facing quiz funnel |
| Structure | `/structure` | Internal overview of all screens, phases, and data |

## Project Structure

- `src/components/QuizFunnel.jsx` — Client-facing quiz
- `src/components/QuizStructure.jsx` — Internal structure viewer
- `src/data/quizData.js` — Single source of truth for all quiz data
- `src/assets/fonts/` — Custom fonts (Inter, Platform)
- `docs/` — Documentation (STRUCTURE.md, LOGIC.md, SCREENS.md)

## Conventions

- Components: PascalCase (QuizFunnel.jsx)
- CSS classes: kebab-case (quiz-title-main)
- JS variables: camelCase (mainGoal, totalPeople)
- Data IDs: snake_case (mental_load, healthy_eating)

## Key Files

- `src/components/QuizFunnel.jsx` — Client quiz logic and state
- `src/components/QuizStructure.jsx` — Structure viewer (internal)
- `src/data/quizData.js` — All screens, phases, and dynamic content
- `docs/LOGIC.md` — Conditional logic and calculations

## Commands

- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Production build
