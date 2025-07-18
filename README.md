# Cyan Branch: Voice Box

An anonymous suggestion box for workplaces, communities, or schools.

### User Stories:

- As an admin, I can create a box and share a submission link.
- As a user, I can submit anonymous feedback.
- As an admin, I can review and respond to submissions.

## Prerequisites

### NodeJS and NPM

Check you have Node and NPM installed:

`node -v`

If not, you can install them by going to [NodeJS installation guide](https://nodejs.org/en/download).

### PNPM

You can install pnpm with:

`npm install -g pnpm@latest-10`

## Installing dependencies

`pnpm install`

## Prisma Setup

In order to generate the prisma client, follow these steps:

- Create a .env file contaning the .env.local file content. This is necessary to generate the Prisma client since
  .env.local is only recognized by the NextJs server

- Generate the client with `pnpm dlx prisma generate`

## Auth Setup

1. Add the following environment variables to `.env`:

```
GOOGLE_ID=google-client-id
GOOGLE_SECRET=google-client-secret
```

2. Update prisma client:

```
pnpm prisma generate
```

3. Test Google sign-in:

```
pnpm dev
```

- Open `http://localhost:3000/dashboard` in the browser
- Sign in with Google
- You should now see your credentials in the Atlas Cloud DB

## Project Structure

```
/
├── app/                    # Next.js app router pages
│   ├── api/                # API routes
│   │   ├── auth/           # User authentication with Google OAuth and NextAuth
│   │   ├── boxes/          # Endpoints to create and retrieve anonymous suggestion boxes
│   │   └── submissions/    # Endpoints to submit and retrieve anonymous submissions for each box
│   ├── dashboard/          # Admin dashboard for managing boxes and viewing submissions
│   ├── submit/             # Public-facing page for submitting anonymous suggestions to a box
│   ├── components/         # Reusable React components
│   └── styles/             # Global and module CSS for styling the app
├── lib/                    # Shared libraries and utilities
├── prisma/                 # Prisma schema and queries
├── public/                 # Static assets
└── README.md               # Documentation for local setup
```
