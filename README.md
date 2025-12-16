# Epoxy UI

A modern, scalable Next.js application with Material-UI, internationalization, and SCSS support.

## Features

- ✅ **Next.js 16** with App Router
- ✅ **Material-UI (MUI) v7** fully integrated with SSR
- ✅ **Internationalization (i18n)** with English and Arabic support
- ✅ **URL-based locale routing** (`/en/...`, `/ar/...`)
- ✅ **RTL/LTR support** with automatic direction handling
- ✅ **SCSS** with modular structure
- ✅ **SEO-friendly** with server-side rendering
- ✅ **Fully responsive** across all screen sizes
- ✅ **TypeScript** for type safety
- ✅ **Static Translation Script** for nav, footer, and other static content

## Project Structure

```
epoxy-ui/
├── app/
│   ├── [locale]/          # Locale-based routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── src/
│   ├── components/        # Reusable components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Library configurations
│   │   └── static-translations.ts  # Static translation loader
│   ├── locales/          # Static translations (nav, footer)
│   │   └── static/
│   │       ├── en/       # English static translations
│   │       └── ar/       # Arabic static translations
│   ├── styles/           # SCSS files
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   │   ├── base.scss
│   │   └── index.scss
│   ├── theme/            # MUI theme configuration
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── messages/             # next-intl translation files (dynamic content)
│   ├── en.json
│   └── ar.json
├── scripts/              # Build and utility scripts
│   └── translate.js      # Static content translation script
├── i18n.ts               # i18n configuration
└── middleware.ts         # Next.js middleware for i18n
```

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will automatically redirect to `/en` (default locale).

### Building

```bash
pnpm build
```

### Production

```bash
pnpm start
```

## Internationalization

The application supports two locales:
- **English (en)**: Default locale, LTR
- **Arabic (ar)**: RTL support

### Translation System

The project uses a **dual translation system**:

1. **next-intl** (`messages/` folder) - For dynamic content that changes based on user actions, API responses, etc.
2. **Static Translations** (`src/locales/static/` folder) - For static content like navigation, footer, that doesn't change dynamically

### Static Translations (Nav, Footer)

Static translations are managed separately and can be translated using the translation script.

#### Setting up Google Translate API (Optional)

For better translation quality, set up a Google Translate API key:

```bash
# Create a .env.local file
GOOGLE_TRANSLATE_API_KEY=your_api_key_here
```

#### Translating Static Content

1. **Add your static content** in `src/locales/static/en/`:
   - `nav.json` - Navigation items
   - `footer.json` - Footer content
   - Add more files as needed

2. **Run the translation script**:

```bash
# Translate to Arabic
pnpm translate:ar

# Or translate to multiple locales
pnpm translate ./src/locales/static en ar,fr,es

# Custom usage
pnpm translate <path> <source-locale> <target-locales>
```

3. **Use in components**:

```tsx
import { getStaticTranslations } from '@/src/lib/static-translations';

export default async function Nav({ locale }: { locale: 'en' | 'ar' }) {
  const nav = await getStaticTranslations(locale, 'nav');
  
  return (
    <nav>
      <a href="/">{nav.home}</a>
      <a href="/about">{nav.about}</a>
      {/* ... */}
    </nav>
  );
}
```

### Dynamic Translations (next-intl)

For dynamic content, use next-intl:

**In Server Components:**
```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyComponent() {
  const t = await getTranslations('common');
  return <h1>{t('welcome')}</h1>;
}
```

**In Client Components:**
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('common');
  return <h1>{t('welcome')}</h1>;
}
```

## Styling

### SCSS Structure

- `variables.scss` - Global variables (colors, spacing, breakpoints)
- `mixins.scss` - Reusable mixins (responsive, RTL/LTR, utilities)
- `base.scss` - Base styles and resets
- `index.scss` - Main entry point

### Using SCSS

Import SCSS files in your components:
```tsx
import '@/src/styles/index.scss';
```

### MUI Theme

The theme is configured in `src/theme/index.ts`. Customize colors, typography, and breakpoints there.

## Responsive Design

Use the `useResponsive` hook for responsive behavior:

```tsx
'use client';
import { useResponsive } from '@/src/hooks/useResponsive';

export default function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

## RTL/LTR Support

The application automatically handles RTL/LTR based on the selected locale:
- English (`/en`) - LTR
- Arabic (`/ar`) - RTL

MUI components automatically adjust, and SCSS mixins are available for custom RTL/LTR styles.

## Component Structure

Create modular, concise components in `src/components/`. Each component should:
- Be self-contained
- Use TypeScript
- Support RTL/LTR
- Be responsive
- Follow the project's styling conventions

## License

MIT
