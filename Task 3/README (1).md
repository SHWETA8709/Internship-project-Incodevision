# NovaCart Mini E-Commerce

A complete mini e-commerce project using Express.js, MongoDB, JWT authentication and vanilla HTML/CSS/JavaScript.

## Features

- Product listing, search and category filter
- Separate product details page
- Add to cart, change quantity and remove items
- User registration and login
- Password hashing with bcrypt
- JWT-protected checkout
- Order creation in MongoDB
- Responsive mobile-friendly UI
- Demo checkout with no payment gateway

## Run locally

1. Install Node.js 18+ and MongoDB.
2. Open the project folder in VS Code.
3. Copy `.env.example` to `.env`.
4. Set `MONGO_URI` and `JWT_SECRET` in `.env`.
5. Run:

```bash
npm install
npm run seed
npm run dev
```

6. Open `http://localhost:5000`.

## MongoDB Atlas example

```env
PORT=5000
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/ecommerce_mini
JWT_SECRET=replace_with_a_long_random_secret
```

## Main API routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/orders`
- `GET /api/orders/my-orders`
