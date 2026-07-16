# KoinX Tax Loss Harvesting

A responsive **React + TypeScript** application that simulates a Crypto Tax Loss Harvesting dashboard. Users can view capital gains before and after harvesting, select holdings for tax-loss harvesting, and see tax savings updated in real time.

---

## Features

- Display Before Harvesting capital gains
- Display After Harvesting capital gains
- Real-time tax calculation
- Individual row selection
- Select All / Deselect All
- Dynamic Amount to Sell
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

```text
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
├── App.tsx
└── main.tsx

Screenshots/
├── dashboard.png
└── holdings-table.png
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/kowshikadorraju03-lab/koinx-tax-loss-harvesting.git
```

Go to the project directory:

```bash
cd koinx-tax-loss-harvesting
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Mock APIs

### Holdings API

Returns:

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

Updates automatically whenever holdings are selected.

- Positive gains reduce profits.
- Negative gains increase losses.
- Tax savings are displayed whenever realised capital gains decrease after harvesting.

---

## Assumptions

- Holdings data is fetched from mocked APIs.
- Selecting a holding harvests the entire holding.
- Amount to Sell equals the total holding when selected.
- Capital gains update instantly after selection.

---

## Screenshots

### Dashboard

![Dashboard](Screenshots/dashboard.png)

### Holdings Table

![Holdings Table](Screenshots/holdings-table.png)

---

## Future Improvements

- Search and filter holdings
- Sorting by gain/loss
- Better UI matching the Figma design
- Charts for tax savings
- Dark mode

---

## Deployment

This project can be deployed using:

- Vercel
- Netlify

---

## Author

**Kowshika Dorraju**

GitHub: https://github.com/kowshikadorraju03-lab

