# nrdliebling

`nrdliebling` is the personal Ghost theme for [nathandodson.com](https://nathandodson.com) — built by Nathan Dodson. Originally forked from [eddiesigner's liebling theme](https://github.com/eddiesigner/liebling/releases) and progressively redesigned into something distinct.

**v2.0** is a full visual overhaul: richer dark palette, warm gold accent system, sharper typography, and a new career/work history page.

---

## Design System (v2.0)

### Palette
| Role | Value |
|------|-------|
| Background | `#0C0C0B` — deep warm near-black |
| Surface (cards) | `#141412` |
| Border primary | `#242420` |
| Border secondary | `#2E2E2A` |
| Text primary | `#E8E5DF` — warm off-white |
| Text muted | `#8C8880` |
| Accent | `#C8A96E` — muted gold |
| Footer background | `#080806` |

### Typography
- **Display/Headers:** `bc-alphapipe` (Adobe TypeKit), weight 400
- **Body:** `noto-sans`, 1.0625rem, line-height 1.75
- **Nav:** Uppercase, 0.8px letter-spacing, 1rem
- **Site name:** Uppercase, 2px letter-spacing

### Key UI Patterns
- Cards use a warm surface color with a gold inset left-border that appears on hover
- Navigation links transition to accent color on hover
- Header has a 1px warm border-bottom for definition
- Footer shows a professional tagline rather than Ghost attribution

---

## Pages & Templates

| Template | Ghost Slug | Purpose |
|----------|------------|---------|
| `index.hbs` | `/` | Homepage with profile section and post grid |
| `post.hbs` | — | Individual post with progress indicator, related posts |
| `page.hbs` | — | Generic static page |
| `page-career.hbs` | `career` | Work history / resume timeline |
| `photos.hbs` | `photos` | Photography portfolio |
| `tag.hbs` | — | Tag archive |
| `author.hbs` | — | Author archive |
| `page-newsletter.hbs` | `newsletter` | Newsletter signup |
| `error-404.hbs` | — | 404 page |

### Career Page Setup
Create a Ghost page with the slug `career` — Ghost will automatically use `page-career.hbs`. The content is driven by the `partials/career.hbs` partial; edit that file to update the work history.

---

## Project Structure

```
nrdliebling/
├── *.hbs                  # Page templates (root level)
├── partials/              # Reusable Handlebars partials
│   ├── header.hbs
│   ├── footer.hbs
│   ├── career.hbs         # Work history content
│   ├── profile.hbs
│   ├── loop.hbs
│   └── ...
├── assets/
│   ├── css/               # Compiled CSS (do not edit directly)
│   └── js/                # Compiled JS (do not edit directly)
├── src/
│   ├── sass/              # SCSS source files
│   │   ├── common/        # Variables, themes, mixins, global
│   │   ├── components/    # Header, articles, hero, search, etc.
│   │   ├── layouts/       # Grid, wrapper, content
│   │   ├── app.scss       # Main bundle entry
│   │   └── career.scss    # Career page styles
│   ├── js/                # JavaScript source
│   └── webpack.mix.js     # Laravel Mix build config
├── locales/               # i18n translation files (35+ languages)
└── package.json           # Ghost theme manifest
```

---

## Development

### Requirements
- Node.js 18+
- Ghost CLI

### macOS Setup

1. Install prerequisites via Homebrew if you don't have them:
   ```bash
   brew install node
   npm install -g ghost-cli@latest
   ```

2. Clone the theme repo:
   ```bash
   git clone https://github.com/nathanrdodson/nrdliebling.git
   ```

3. Set up a local Ghost install in a separate directory:
   ```bash
   mkdir ghost-dev && cd ghost-dev
   ghost install local
   ```

4. Load sample content:
   ```bash
   curl -L https://go.nrdnas.net/web/client/pubshares/qt7wmNFn5WaVy45akg2vxS -o sample.zip && \
   unzip sample.zip && \
   mv .permalinks/ghost_images_sample.v5.62/* ./content/images/ && \
   mv .permalinks/ghost_posts_sample.v5.62.json . && \
   rm -r .permalinks sample.zip
   ```

5. Symlink the theme into Ghost:
   ```bash
   ln -s ../../../nrdliebling content/themes/nrdliebling
   ```

6. Restart Ghost:
   ```bash
   ghost restart
   ```

Ghost admin will be at `http://localhost:2368/ghost`. BrowserSync (during `npm run watch`) proxies to `http://localhost:3000`.

### WSL2 Setup

1. Clone the theme repo:
   ```
   git clone https://github.com/nathanrdodson/nrdliebling.git
   ```

2. Set up a local Ghost install in a separate directory:
   ```
   mkdir ghost-dev && cd ghost-dev
   npm install -g ghost-cli@latest
   ghost install local
   ```

3. Load sample content *(requires `unzip`)*:
   ```
   wget https://go.nrdnas.net/web/client/pubshares/qt7wmNFn5WaVy45akg2vxS && \
   unzip qt7wmNFn5WaVy45akg2vxS && \
   mv .permalinks/ghost_images_sample.v5.62/* ./content/images/ && \
   mv .permalinks/ghost_posts_sample.v5.62.json . && \
   rm -r .permalinks qt7wmNFn5WaVy45akg2vxS
   ```

4. Symlink the theme into Ghost:
   ```
   ln -s ../../../nrdliebling content/themes/nrdliebling
   ```

5. Restart Ghost:
   ```
   ghost restart
   ```

### Building Assets

From the `src/` directory:

```bash
npm install           # first time only
npm run watch         # dev mode with hot reload (BrowserSync at localhost:3000)
npm run build         # production build (minified)
```

Compiled output goes to `assets/css/` and `assets/js/`. Do not edit these files directly.

### Adding/Editing Styles

All source styles live in `src/sass/`. The main entry points are:

| File | Purpose |
|------|---------|
| `sass/app.scss` | Global styles (imports all components) |
| `sass/home.scss` | Homepage-specific |
| `sass/post.scss` | Post page |
| `sass/listing.scss` | Tag/author archive pages |
| `sass/career.scss` | Career page |
| `sass/404.scss` | Error page |

Theme tokens (colors, accent) are in `sass/common/_variables.scss` and `sass/common/_themes.scss`.

---

## Ghost Theme Settings

Configured in `package.json` under `config.custom`:

| Setting | Type | Description |
|---------|------|-------------|
| `dark_mode_logo` | Image | Optional logo variant for dark mode |
| `enable_native_search` | Boolean | Use Ghost's native search instead of Fuse.js API search |
| `search_api_key` | Text | Content API key for Fuse.js search |
| `disable_fade_animation` | Boolean | Disable fade-in scroll animations |

---

## Key Dependencies

| Package | Purpose |
|---------|---------|
| Swiper 8 | Article carousels and recent post slider |
| Fuse.js | Client-side full-text search |
| medium-zoom | Click-to-zoom on post images |
| Headroom.js | Scroll-aware sticky header |
| FitVids | Responsive video embeds |
| Tippy.js | Tooltips |
| Laravel Mix 6 | SCSS/JS build pipeline |
| jQuery 3.6 | DOM manipulation |
