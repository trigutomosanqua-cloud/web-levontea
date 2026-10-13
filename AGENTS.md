# AGENTS.md: Le Vontea Next.js Project

Single-page marketing/landing site for **Le Vontea** (a 220 ml tea drink).

## Quickstart

| Command | Description |
|---|---|
| `npm install` | Install dependencies (run once) |
| `npm run dev` | Start dev server (`next dev`, port 3000) |
| `npm run build` | Build production site (static prerendered output) |
| `npm run start` | Start production server (`next start`) |

## Stack

- **Next.js 15** (App Router) + **React 19**
- **Styling:** global CSS in `app/globals.css` (CSS variables + Google Fonts: "Baloo 2" and "DM Sans"). Not CSS-in-JS.
- **Images:** Next.js `<Image>`.
- **Dependencies in `package.json`:** `gsap`, `@gsap/react`, `lucide-react`.
  - ⚠️ **`gsap` / `@gsap/react` are currently NOT used anywhere in the code.**
  - ⚠️ `lucide-react` is only used inside the unused `SocialMedia.jsx`.

## Architecture

- **Single-page site.** The entire homepage lives in `app/page.js` — all sections are written inline (Header, Hero, Tentang, Produk, Momen, Social, Footer).
- `app/layout.js` is the root layout (sets metadata, imports `globals.css`).
- **`app/components/` contains 8 components** (`About`, `Activities`, `CTA`, `Footer`, `Hero`, `Moments`, `Product`, `SocialMedia`) that are **currently NOT imported/used** by `page.js`. They appear to be leftovers from an earlier modular version. Treat them as **dead code** unless you intend to refactor `page.js` to use them.
- New pages/routes go in `app/` following Next.js App Router conventions.

## Styling

- All styles live in `app/globals.css` (global CSS, not CSS-in-JS).
- Color palette is defined as CSS variables in `:root` (`--green`, `--lime`, `--red`, `--yellow`, `--cream`, `--ink`, `--muted`).
- Fonts are loaded via a Google Fonts `@import` at the top of `globals.css`.

## Images

- Use Next.js `<Image>` with `src` from `public/images/`:
  - `public/images/brand/logo-levontea.png` → referenced as `/images/brand/logo-levontea.png`
  - `public/images/product/levontea-product.png` → referenced as `/images/product/levontea-product.png`

## Custom server (local only)

- `server.mjs` is a **custom dev server** that boots Next.js and listens on `127.0.0.1:3000`. It is **NOT** wired into the npm scripts — `npm run start` runs `next start`, not `server.mjs`.
- To run the custom server: `node server.mjs`. If you change it, restart it manually.
- **Vercel ignores `server.mjs`** — Vercel detects Next.js automatically and serves via its own serverless runtime.

## Build & Deployment

- `npm run build` produces a **static prerendered** build (route `/` is prerendered as static content).
- **Deployed on Vercel** via GitHub integration:
  - Repo: `github.com/trigutomosanqua-cloud/web-levontea`
  - Live: `https://web-levontea.vercel.app`
  - **Auto-deploys on `git push` to `main`.**
- No `output: 'export'` / standalone mode — standard Next.js app.

## Conventions

- **Single package** (`package.json` at root). No workspaces / nested packages.
- **No lint / typecheck / test scripts** are defined. If you add ESLint/Prettier/TypeScript, add matching npm scripts.
- **No `.env` / environment variables** are used. `next.config.mjs` is minimal (only sets `outputFileTracingRoot`).

## Common Gotchas

- **Parentheses in path:** The workspace path contains `(VSCODE)`. Quote the path in shell commands (PowerShell) or use the tool's `workdir` parameter.
- **Unused components:** The 8 files in `app/components/` are not imported by `page.js`. Don't assume they render — the live homepage is entirely `page.js`.
- **Unused deps:** `gsap` / `@gsap/react` are in `package.json` but not used in code.
- **Dev vs production:** `npm run dev` = `next dev`; `npm run start` = `next start`; `node server.mjs` = custom server. They behave slightly differently.
