# Basic Ecommerce

A modern, full-featured ecommerce web application built with React, TypeScript, and Vite. This project demonstrates best practices in frontend development, state management, and UI design using Tailwind CSS.

## Features

- Product listing and detail pages
- Shopping cart and checkout flow
- User authentication (login/register)
- Wishlist management
- Responsive design
- Context-based state management
- Modular UI components
- Routing for multiple pages
- Form validation

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS, PostCSS
- **State Management:** React Context API
- **Build Tools:** Vite, ESLint
- **Testing:** (Add your testing framework here if used)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Folder Structure

```
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # UI primitives (button, card, etc.)
│   ├── contexts/           # React Contexts for Auth, Cart, Wishlist
│   ├── data/               # Static data (products)
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components (Home, Product, Cart, etc.)
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles
├── public/                 # Static assets (add if needed)
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── README.md               # Project documentation
```

## Main Components

- [`src/App.tsx`](src/App.tsx:1): Root component, sets up routing and context providers.
- [`src/pages/HomePage.tsx`](src/pages/HomePage.tsx:1): Homepage with product listings.
- [`src/pages/ProductDetailPage.tsx`](src/pages/ProductDetailPage.tsx:1): Product details.
- [`src/pages/CartPage.tsx`](src/pages/CartPage.tsx:1): Shopping cart.
- [`src/pages/CheckoutPage.tsx`](src/pages/CheckoutPage.tsx:1): Checkout flow.
- [`src/pages/LoginPage.tsx`](src/pages/LoginPage.tsx:1): User login.
- [`src/pages/RegisterPage.tsx`](src/pages/RegisterPage.tsx:1): User registration.
- [`src/pages/WishlistPage.tsx`](src/pages/WishlistPage.tsx:1): Wishlist management.
- [`src/components/ProductCard.tsx`](src/components/ProductCard.tsx:1): Product card UI.
- [`src/contexts/AuthContext.tsx`](src/contexts/AuthContext.tsx:1): Authentication context.
- [`src/contexts/CartContext.tsx`](src/contexts/CartContext.tsx:1): Cart context.
- [`src/contexts/WishlistContext.tsx`](src/contexts/WishlistContext.tsx:1): Wishlist context.

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:

- Author: Nafis Rayan
- Email: [your-email@example.com]
