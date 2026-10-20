# Dev Stack

Dev Stack is a responsive technology explorer that helps developers browse popular tools and build a personal technology stack. Technology information is loaded from a local JSON file, and selected items can be managed in the stack panel.

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Toastify

## Features

1. **Browse technology cards** — Explore 15 technologies with their descriptions, categories, difficulty levels, badges, icons, and ratings.
2. **Build your stack** — Add technologies to a personal stack, remove individual items, or clear the entire stack. Duplicate additions show a warning.
3. **Responsive interface and feedback** — Use the app on mobile or desktop, with a mobile navigation menu, loading feedback, and toast notifications for stack actions.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Build the production app or run the linter:

```bash
npm run build
npm run lint
```

Technology data is stored in [`public/data.json`](./public/data.json) and fetched by the app at runtime.

## Project Structure

```text
public/
  data.json            Technology catalog loaded by the app
src/
  components/
    Banner.tsx         Hero section
    Footer.tsx         Footer and section links
    Nav.tsx            Sticky responsive navigation
    TechCard.tsx       Technology cards and stack controls
  App.tsx              Main page composition
  index.css            Global styles and shared brand gradient
  main.tsx             React entry point and toast notifications
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup inside JavaScript or TypeScript. React uses it to describe the UI in a clear, component-based way.

### 2. What is the difference between props and state?

Props are values a parent gives to a child component. State is data a component manages and can update over time; updating it makes React render the UI again.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing component data and provides a way to update it. In this project, it tracks the fetched technology list, selected stack, loading and error states in `TechCard.tsx`, and whether the mobile menu is open in `Nav.tsx`.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. It is used to fetch `public/data.json` when the technology stack component mounts, and to cancel the request if the component is removed.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React identify which list item changed, was added, or was removed. This lets React update lists accurately and efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. The stack panel shows “Your stack is empty” when no technologies are selected, and shows the selected items when the stack has entries.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. To send an event back, the parent can pass a callback function as a prop, which the child calls when an action happens.
