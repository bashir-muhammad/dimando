# Questionnaire Application

A Questionnaire application with reusable UI components, Storybook integration and local response persistence.

## Architecture and Design Decisions

- App Router with two route groups: (main) for the `home` and `results` pages and `questionnaire/[id][step]` for the multistep flow.
- Config driven UI: All content (questions, labels, colors, background images) come from a single source, fetched in the root layout and provided via React Context.
- State Management: Used `useReducer` + `Context` for global state. This provids a lightweight solution without third-party library.

## Component Library / Storybook

- All shared components are documented in the Storybook
- Accessibilty addon is included for a11y checks.

## Styling

- Pure CSS: Developed with standard `css` without `SCSS` or `less`, leveraging modern features.
- CSS Modules: Implemented the CSS modules pattern to ensure scoped styling and prevent class name collisions.

## Known issues

- A11y: Some color contrast issues exist, primarly originating from the specific design requirement.
- There mahy be minor visual mismatch between the development and design mockup.

## Link

- Production: [https://dimando-questionnaire.vercel.app/](https://dimando-questionnaire.vercel.app/)
- Storybook: [https://dimando-dusky.vercel.app](https://dimando-dusky.vercel.app/)

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `pnpm dev` - start development server
- `pnpm build` - create production build
- `pnpm start` - run production server
- `pnpm lint` - run ESlint
- `pnpm lint:style` - run Stylelint
- `pnpm format` - format with Prettier
- `pnpm storybook` - run storybook on port 6006
- `pnpm build-storybook` - build static Storybook
