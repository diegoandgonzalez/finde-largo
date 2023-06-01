# finde-largo

Website that tells you when the next argentinean **long weekend** occurs.

## Table of contents
* [Live link](#live-link)
* [Technologies](#technologies)
* [Features](#features)
* [Getting Started](#getting-started)

## Live link
[https://finde-largo.vercel.app/](https://finde-largo.vercel.app/)

## Technologies

- React
- Next.js 13 (with new [App Router](https://nextjs.org/docs/app))
- Tailwind CSS

## Features
- Check amount of days until the next long weekend (with a different message if you're on it now)
- Check every upcoming long weekend for the rest of the year
- Check every holiday related to each long weekend

## Getting Started

### 1. Installation

Clone the repository and install the dependencies.

```bash
npm install
```

### 2. Add environment variables

Create `.env.local` file in the root folder of the project.
This file contains the environment variables that are injected by Next.js.
It should contain the following:

```javascript
NEXT_PUBLIC_VERCEL_URL=localhost:3000
```
>Note: replace 3000 with your current development port.
---
```javascript
NEXT_PUBLIC_VERCEL_ENV=development
```
> When deployed to Vercel, it'll be replaced to **production**


### 3. Run Development Server

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
>Note: replace 3000 with your current development port.