# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (enforced in CI via `--frozen-lockfile`).

```bash
pnpm dev        # Vite dev server with HMR
pnpm build      # tsc -b (typecheck) then vite build → dist/
pnpm lint       # oxlint
pnpm preview    # serve the production build locally
```

There is no test runner configured. Type errors fail the build because `build` runs `tsc -b` before `vite build`.

## Architecture

Single-page React 19 app (Vite + TypeScript + Tailwind v4 + shadcn/ui) deployed to **GitHub Pages** as a Project Page. The deployment target shapes several non-obvious decisions:

- **Base path is coupled to the repo name.** `vite.config.ts` sets `base: '/${REPO_NAME}/'` where `REPO_NAME = 'AiDesign'`. `main.tsx` feeds the same value into the router via `<BrowserRouter basename={import.meta.env.BASE_URL}>`. If the GitHub repo is renamed, update `REPO_NAME` in `vite.config.ts` — everything else derives from `BASE_URL`.
- **SPA deep-link handling on Pages.** `public/404.html` and the restore script in `index.html` implement the `rafgraph/spa-github-pages` redirect trick, so `react-router` client routes survive a hard refresh / direct link. `pathSegmentsToKeep = 1` because the repo segment (`/AiDesign`) must be preserved. Touch these together if the base path scheme changes.
- **Deploy is automatic.** `.github/workflows/deploy.yml` builds and publishes `dist/` to Pages on every push to `main`. No manual deploy step.

### Routing & layout

- `App.tsx` holds the full route table. All routes nest under `RootLayout` (`src/layouts/root-layout.tsx`), which renders persistent `SiteHeader` / `SiteFooter` around an `<Outlet />`; `path="*"` renders `NotFound`.
- Pages live in `src/pages/`. `PageShell` (`src/components/page-shell.tsx`) is the standard inner-page title/description wrapper for consistency.

### Theming

`ThemeProvider` (`src/components/theme-provider.tsx`) wraps the app in `main.tsx`. It applies the resolved theme as a `.light`/`.dark` class on `<html>` (driving Tailwind's `dark:` variant), persists the choice to `localStorage` under `aidesign-ui-theme`, and follows the OS preference in `"system"` mode. Consume it via the `useTheme()` hook, which throws outside the provider.

### UI conventions

- shadcn/ui with the **`base-nova`** style (`components.json`), `neutral` base color, CSS variables, and `lucide` icons. Generated primitives go in `src/components/ui/`.
- Import alias `@` → `src` (configured in both `vite.config.ts` and `tsconfig`). Prefer `@/...` imports.
- `cn()` in `src/lib/utils.ts` (clsx + tailwind-merge) is the standard className combiner.
- Tailwind v4 is wired through the `@tailwindcss/vite` plugin (no `tailwind.config.js`); design tokens live in `src/index.css`.

## Notes

- `README.md` is the stock Vite template readme — not project documentation; don't rely on it.
- Linting is oxlint, not ESLint.
