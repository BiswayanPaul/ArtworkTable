# Artwork Table Assignment

A React + TypeScript application built with Vite, featuring a PrimeReact DataTable with server-side pagination, persistent row selection, and a custom selection panel. The app displays artworks from the Art Institute of Chicago API.

## Features

- **React + TypeScript + Vite**: Fast development and modern tooling.
- **PrimeReact DataTable**: Rich table UI with checkboxes for row selection.
- **Server-side Pagination**: Data is fetched from the API on every page change.
- **Persistent Row Selection**: Selected rows are tracked by ID and persist across pages.
- **Custom Selection Panel**: Floating panel allows users to select N rows at once.
- **TailwindCSS & PrimeFlex**: Utility-first styling and responsive layouts.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/BiswayanPaul/ArtworkTable.git
   cd ArtworkTable
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Environment Variables

The API endpoint is set via Vite's environment variable.  
Create a `.env` file in the project root if you want to override the default:

```
VITE_BASE_FETCH_URL=https://api.artic.edu/api/v1/artworks
```

## Project Structure

```
src/
  App.tsx         # Main application logic and UI
  main.tsx        # Entry point
  index.css       # Global styles (Tailwind, PrimeReact)
  assets/         # Static assets
public/
  index.html      # HTML template
```

## Key Technologies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [PrimeReact](https://primereact.org/)
- [PrimeIcons](https://primefaces.org/primeicons/)
- [PrimeFlex](https://primefaces.org/primeflex/)
- [TailwindCSS](https://tailwindcss.com/)

## Usage

- **Browse Artworks:** Paginate through artworks from the Art Institute of Chicago.
- **Select Rows:** Use checkboxes to select/deselect rows. Selection persists across pages.
- **Custom Selection Panel:** Click the dropdown icon to open the panel, enter a number, and select N rows at once.
- **View Selected Rows:** See a summary of selected artworks below the table.

## Checks Before Submission

- [x] DataTable displays all required fields.
- [x] Server-side pagination works (no caching of all rows).
- [x] Row selection persists across pages.
- [x] Custom selection panel works as described.
- [x] App builds and runs without errors.

## License

MIT
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
