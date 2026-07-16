<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2
# KoinX Tax Loss Harvesting

A responsive React + TypeScript application that simulates a Crypto Tax Loss Harvesting dashboard. The application displays capital gains before and after harvesting, allows users to select holdings for harvesting, and dynamically updates tax calculations.

---

## Features

- Display Before Harvesting capital gains
- Display After Harvesting capital gains
- Real-time tax calculation based on selected holdings
- Individual row selection
- Select All / Deselect All functionality
- Amount to Sell updates dynamically
- View All / Show Less holdings
- Mock API integration
- Responsive UI
- Loading state

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

---

## Project Structure

<<<<<<< HEAD
```
=======
## Project Structure

```text
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2
src/
├── api/
│   ├── capitalGainsApi.ts
│   └── holdingsApi.ts
├── components/
│   ├── Header.tsx
│   ├── CapitalCard.tsx
│   └── HoldingsTable.tsx
├── utils/
│   └── calculations.ts
<<<<<<< HEAD
├── App.tsx
└── main.tsx
```
=======
├── Screenshots/
│   ├── dashboard.png
│   └── holdings-table.png
├── App.tsx
└── main.tsx
```
```
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2

---

## Installation

<<<<<<< HEAD
Clone the repository
=======
Clone the repository:
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2

```bash
git clone https://github.com/kowshikadorraju03-lab/koinx-tax-loss-harvesting.git
```

<<<<<<< HEAD
Navigate to the project
=======
Navigate to the project:
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2

```bash
cd koinx-tax-loss-harvesting
```

<<<<<<< HEAD
Install dependencies
=======
Install dependencies:
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2

```bash
npm install
```

<<<<<<< HEAD
Run the project
=======
Run the development server:
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2

```bash
npm run dev
```

---

## Mock APIs

The application uses two mocked APIs:

### Holdings API

Returns cryptocurrency holdings including:

- Coin details
- Current price
- Average buy price
- Short-term gain
- Long-term gain

### Capital Gains API

Returns:

- Short-term profits
- Short-term losses
- Long-term profits
- Long-term losses

---

## Functionality

### Before Harvesting

Displays:

- Short-Term Profit
- Short-Term Loss
- Net Short-Term Gain
- Long-Term Profit
- Long-Term Loss
- Net Long-Term Gain
- Realised Capital Gains

### After Harvesting

Updates automatically when holdings are selected.

<<<<<<< HEAD
Positive gains reduce profits.

Negative gains increase losses.

Tax savings are displayed whenever the realised capital gains decrease after harvesting.
=======
- Positive gains reduce profits.
- Negative gains increase losses.
- Tax savings are displayed whenever realised capital gains decrease after harvesting.
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2

---

## Assumptions

- Holdings data is fetched from mocked APIs.
- Selecting a holding means the entire holding is harvested.
<<<<<<< HEAD
- Amount to Sell equals total holding when selected.
=======
- Amount to Sell equals the total holding when selected.
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2
- Capital gains update instantly after selection.

---

## Screenshots

### Dashboard

<<<<<<< HEAD
(Add dashboard screenshot here)

### Holdings Table

(Add holdings table screenshot here)
=======
![Dashboard](Screenshots/dashboard.png)

### Holdings Table

![Holdings Table](Screenshots/holdings-table.png)

> **Note:** Make sure these image files exist:
>
> ```
> Screenshots/dashboard.png
> Screenshots/holdings-table.png
> ```
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2

---

## Future Improvements

- Search and filter holdings
- Sorting by gain/loss
<<<<<<< HEAD
- Better UI matching Figma
=======
- Better UI matching the Figma design
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2
- Charts for tax savings
- Dark mode

---

## Deployment

The application can be deployed using:

- Vercel
- Netlify

---

## Author

**Kowshika Dorraju**

GitHub: https://github.com/kowshikadorraju03-lab
<<<<<<< HEAD
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
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
>>>>>>> 2af0a23 (Initial commit)
=======
>>>>>>> 2524f364e2a945668f463f09e1757a386ef0d5e2
