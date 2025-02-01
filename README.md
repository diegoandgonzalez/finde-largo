# finde-largo

Website that tells you when the next argentinean **long weekend** occurs.

## Table of contents
* [Technologies](#technologies)
* [Features](#features)
* [Getting Started](#getting-started)

## Technologies

- TypeScript
- React
- Next.js (with [App Router](https://nextjs.org/docs/app))
- Tailwind CSS

## Features
- Check amount of days until the next long weekend (with a different message if the long weekend has already started)
- Check every upcoming long weekend for the rest of the year
- Check every holiday related to each long weekend
- Dark/light mode

## Getting Started

### 1. Installation

Clone the repository and install the dependencies.

```bash
npm install
```

### 2. Add environment variables

Create `.env.local` file in the project's root folder.
This file contains the environment variables that are injected by Next.js.
It should include the following:

```javascript
NEXT_PUBLIC_URL=http://localhost:3000
```
>Note: replace 3000 with your current development port.

### 3. Run development server

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
>Note: replace 3000 with your current development port.