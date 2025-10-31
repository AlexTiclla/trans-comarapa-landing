# Trans Comarapa Landing Page - AI Agent Instructions

## Project Overview
This is a single-page React + TypeScript + Vite landing site for Trans Comarapa, a Bolivian bus transportation service connecting Comarapa to Santa Cruz through 23 localities. Built with modern React patterns, shadcn/ui components, and Tailwind CSS with a custom Comarapa regional color scheme.

## Tech Stack & Architecture
- **Build**: Vite 6.0.1 with React 18.3.1 and TypeScript 5.6.2
- **Package Manager**: **pnpm** (critical - all scripts use `pnpm install` prefix)
- **Styling**: Tailwind CSS with custom Comarapa theme colors + shadcn/ui components
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Path Aliases**: `@/*` maps to `./src/*` (configured in vite.config.ts and tsconfig.json)
- **Icons**: Lucide React
- **Maps**: Google Maps via `@googlemaps/js-api-loader` and `@react-google-maps/api`
- **Analytics**: Vercel Analytics
- **Linting**: ESLint 9 with TypeScript rules (flat config format in eslint.config.js)

## Critical Development Workflows

### Running the Project
```powershell
pnpm dev          # Dev server (auto-installs deps)
pnpm build        # Production build (cleans .vite-temp, runs tsc, builds)
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
```

**Note**: All npm scripts auto-run `pnpm install` first. The build script explicitly removes `node_modules/.vite-temp` to avoid stale cache issues.

### Adding shadcn/ui Components
This project uses shadcn/ui with the following configuration:
- Style: `new-york`
- Base color: `zinc`
- CSS variables: `false` (uses direct Tailwind classes)
- Icon library: `lucide`
- Components directory: `src/components/ui/`

## Comarapa Regional Design System

### Color Palette
The entire design uses Comarapa regional colors defined in `tailwind.config.cjs` and `src/index.css`:
```typescript
comarapa: {
  dark: '#0D47A1',    // Primary dark blue - headers, CTAs
  medium: '#2196F3',   // Sky blue - hover states, accents
  light: '#64B5F6',    // Light blue - highlights, borders
  white: '#FFFFFF',    // White background
  gray: '#E3F2FD'      // Light gray for backgrounds
}
```

### Custom CSS Classes
Defined in `@layer components` in `src/index.css`:
- `.comarapa-gradient` - 135deg gradient from dark → medium → light
- `.comarapa-card` - Standard card with comarapa-light shadow on hover
- `.comarapa-button-primary` - Primary button with hover transform

**Always use these custom color tokens** instead of generic Tailwind colors for brand consistency.

## Component Architecture

### Main App Structure (`src/App.tsx`)
- **Single-page layout**: All sections in one 976-line component
- **State management**: React hooks for menu toggle, scroll effects, and hero slider
- **Hero slider**: Auto-rotates through 3 bus images every 5 seconds
- **Fixed header**: Transforms on scroll with shadow effect
- **Mobile-first**: Responsive design with hamburger menu for mobile

### Key Components
1. **RouteMap** (`src/components/RouteMap.tsx`): Displays 23 localities from Comarapa → Santa Cruz with horizontal scroll on mobile
2. **TestimonialsSlider** (`src/components/TestimonialsSlider.tsx`): Auto-rotating testimonials with dot indicators
3. **ErrorBoundary** (`src/components/ErrorBoundary.tsx`): Class component wrapping root in `main.tsx`

### Utility Function
- `cn()` in `src/lib/utils.ts`: Combines clsx and tailwind-merge for conditional className composition

## React Patterns Used

### Hooks
- `useState` for UI state (menu, scroll, slides)
- `useEffect` for side effects (intervals, scroll listeners)
- Always cleanup timers/listeners in useEffect return functions

### Component Props
- TypeScript interfaces for type safety
- `React.FC` or explicit prop types for components

### Styling Approach
- Tailwind utility classes with responsive modifiers (`sm:`, `md:`, `lg:`, `xl:`)
- Mobile-first responsive design (default styles are mobile)
- Use `cn()` utility for conditional classes

## Project Conventions

### File Naming
- Components: PascalCase (e.g., `RouteMap.tsx`, `ErrorBoundary.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- UI components from shadcn: kebab-case (e.g., `button.tsx`, `alert-dialog.tsx`)

### Import Order
1. React imports
2. Third-party libraries (Lucide icons, etc.)
3. Local components
4. Analytics/external services

### Responsive Design Breakpoints
Custom breakpoints in `tailwind.config.cjs`:
```javascript
xs: '320px', sm: '480px', md: '768px', 
lg: '1024px', xl: '1280px', '2xl': '1440px'
```

### Typography
- Font: `Inter` (imported from Google Fonts in index.css)
- Apply via `font-inter` Tailwind class

## ESLint Configuration
- Uses flat config format (`eslint.config.js`)
- Custom rules: `@typescript-eslint/no-unused-vars` and `no-explicit-any` set to 'off'
- React hooks rules enabled
- React refresh plugin for HMR

## External Integrations
- **WhatsApp**: Primary CTA links to `https://wa.me/59168921188`
- **Google Maps**: Used in RouteMap component for interactive maps
- **Vercel Analytics**: Imported and used in App component as `<Analytics />`

## Known Patterns

### Mobile Touch Targets
Buttons include minimum touch target size for accessibility:
```tsx
style={{ minWidth: '44px', minHeight: '44px' }}
```

### Image Slider Pattern
Hero uses `currentSlide` state with modulo operator for infinite loop:
```tsx
setCurrentSlide(prevSlide => (prevSlide + 1) % heroImages.length)
```

### Scroll Effects
Header changes appearance based on scroll position tracked in state.

## When Adding Features
1. Use existing Comarapa color tokens (never arbitrary colors)
2. Follow mobile-first responsive patterns with Tailwind breakpoints
3. Import Lucide icons for consistency
4. Use shadcn/ui components where possible
5. Add proper TypeScript types for all new components
6. Test mobile responsiveness (especially touch targets)
7. Maintain auto-install pattern in npm scripts if adding new scripts
