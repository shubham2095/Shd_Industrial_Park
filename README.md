# SHD Industrial Park Website

Website for **SHD Industrial Park**, Ishapur, Bhojpur, Modinagar-Hapur Highway (UP): highlights, gallery, price list, location and a "Request a Callback" form that emails the project team.

It is one Node.js app: an Express server that serves the API **and** the built React website. There is no database.

## Tech stack

- **Frontend:** React 19 (Vite 8), React Router 8, Tailwind CSS 4, Framer Motion, Lucide icons
- **Backend:** Node.js 22.22+, Express 5, Nodemailer
- **Security:** helmet, rate limiting, zod validation, HTML-escaped emails
- **Tooling:** oxlint, concurrently

## Folder structure

```
.
├── client/                    React website (Vite)
│   ├── public/                favicons
│   │   └── images/            brand/, home/, gallery/, projects/, neighbours/
│   └── src/
│       ├── App.jsx            Root component
│       ├── PublicSite.jsx     Layout + all routes
│       ├── components/        layout/ (Navbar, Footer, FloatingButtons, ScrollToTop)
│       │                      common/ (page sections and shared pieces)
│       ├── pages/public/      Home, Gallery, PriceList, Contact, NotFound
│       ├── services/          API helpers (api.js, leadService.js)
│       ├── data/siteData.js   Phone, price, highlights, projects, gallery: EDIT CONTENT HERE
│       ├── utils/interop.js   Import fix for react-fast-marquee
│       └── index.css          Tailwind theme and brand colours
├── server/
│   ├── server.js              Entry file
│   ├── routes/                index.js + leadRoutes.js
│   ├── controllers/           lead, seo
│   ├── middleware/            rateLimit, validate, errorHandler
│   ├── schemas/               leadSchema.js (zod)
│   └── services/              mailService.js
├── .env.example               Every environment variable, with comments
└── package.json               Backend dependencies and all scripts
```

Some page text is written directly in the components and pages, so search there too when changing wording.

## Run it locally

```bash
npm install     # also installs and builds the client
npm run dev     # website on http://localhost:5173, API on http://localhost:5000
```

Create `.env` in the project root first (copy `.env.example`, but do not overwrite an existing `.env`). Vite forwards `/api` to the server. If you change `PORT`, set `API_PORT` to the same value when running the client.

| Command | What it does |
| --- | --- |
| `npm run dev` | Website and server together, with reload |
| `npm run build` | Builds the website into `client/dist` |
| `npm start` | Serves `client/dist` and the API |
| `npm run lint` | Lints the client with oxlint |

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `SMTP_USER` | yes | Address that sends the emails |
| `SMTP_PASS` | yes | Gmail **App Password** |
| `SMTP_HOST`, `SMTP_PORT` | no | Default `smtp.gmail.com`, `587` |
| `TO_EMAIL` | no | Inbox for enquiries (default `SMTP_USER`) |
| `SITE_URL` | no | Live address, used in `sitemap.xml` and `robots.txt` |
| `NODE_ENV` | no | `production` on the live site |
| `PORT` | no | Default `5000` |
| `TRUST_PROXY` | no | Reverse proxies in front of the app (default `1` in production) |

## API

| Route | Description |
| --- | --- |
| `GET /api/health` | `{ "status": "ok" }` |
| `POST /api/lead` | `{ name, mobile, email? }`, limited to 5 requests per IP every 15 minutes |
| `GET /sitemap.xml`, `GET /robots.txt` | Built from `SITE_URL` |

If an enquiry email fails to send, the visitor is asked to call, and the enquiry is written to the server log as `Unsent lead:`.

## Deploy on Hostinger (Node.js Web App from GitHub)

| Setting | Value |
| --- | --- |
| Framework | Express (or Other) |
| Node.js version | 24.x (must be 22.22 or newer) |
| Root directory | `./` |
| Build command | `npm run build` |
| Entry file / start | `server/server.js` / `npm start` |

Add the environment variables in hPanel (`NODE_ENV=production`, `SITE_URL=https://shdindustrialpark.com`, `SMTP_*`, `TO_EMAIL`). Never upload `.env` to GitHub.
