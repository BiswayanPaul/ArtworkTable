# Artwork Table Assignment

A modern React + TypeScript application built with Vite, featuring a PrimeReact DataTable for browsing artworks from the Art Institute of Chicago API. The app demonstrates advanced table features, server-side pagination, persistent row selection, and a custom selection panel.

## Features

- **React + TypeScript + Vite**: Fast, modern development stack.
- **PrimeReact DataTable**:
  - Displays artwork fields: title, place_of_origin, artist_display, inscriptions, date_start, date_end.
  - Checkbox selection for individual rows and "select all" for the current page.
  - Sorting enabled for key columns.
- **Server-side Pagination**:
  - Fetches data from the API on every page change.
  - No caching of all rows; only current page data is loaded.
- **Persistent Row Selection**:
  - Selected rows are tracked by their IDs and persist across page changes.
  - Selection logic ensures that deselected rows are removed from the selection, even when paginating.
- **Custom Row Selection Panel**:
  - Floating panel allows users to select N rows at once.
  - Panel can be opened via a dropdown icon in the table header.
  - Enter a number to select that many rows from the dataset.
- **Selected Rows Summary**:
  - Displays a summary of selected artworks below the table.
  - Shows artwork titles for all selected rows.
- **Responsive UI**:
  - Styled with TailwindCSS and PrimeFlex for modern, responsive layouts.
  - Clean, accessible design.
- **PrimeReact Paginator**:
  - Pagination controls below the table for easy navigation.

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
   vite.svg        # Vite logo
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
