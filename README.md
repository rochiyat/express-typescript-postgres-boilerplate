# Boilerplate for Next.js, Express, and PostgreSQL Integration

This repository provides a boilerplate for building a full-stack web application using Next.js for the frontend, Express.js for the backend API, and PostgreSQL as the database. It is designed to streamline the development process by offering a pre-configured setup that integrates these technologies seamlessly.

## Features

- **TypeScript Support**: Leverage TypeScript's static typing for enhanced code quality and developer experience.
- **Express Setup**: Pre-configured with Express for rapid API development.
- **Environment Configuration**: Easily manage environment variables using [dotenv](https://github.com/motdotla/dotenv).
- **ESLint & Prettier**: Pre-configured for consistent code style and linting.
- **Jest**: Ready-to-go setup for unit and integration testing.
- **Swagger UI**: Auto-generated API documentation using [Swagger](https://swagger.io/).
- **Error Handling**: Centralized error handling middleware.
- **PostgreSQL**: Pre-configured with PostgreSQL for database integration.
- **Prisma**: Pre-configured with Prisma for database integration.

## Getting Started

### Prerequisites

- **Node.js** (>= 14.x recommended)
- **Yarn** or **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/rochiyat/express-typescript-postgres-boilerplate.git

# Navigate into the directory
cd express-typescript-postgres-boilerplate

# Install dependencies
yarn install
# or
npm install
```

### Running the Application

```bash
# Start the development server
yarn dev
# or
npm run dev
```

The server will start on **http://localhost:3000** by default.

### Building for Production

```bash
yarn build
# or
npm run build
```

This will compile the TypeScript code into JavaScript under the `dist` directory.

### Running Tests

```bash
yarn test
# or
npm test
```

## Project Structure

```
src/
│
├── controllers/       # Route controllers (Controllers layer)
├── models/            # Data models (e.g., Mongoose schemas)
├── routes/            # Express routes
├── services/          # Business logic (Service layer)
├── utils/             # Utility functions and helpers
│
└── index.ts           # Entry point
```

## Configuration

Environment variables are managed using a `.env` file. Here's an example:

```
PORT=3000
NODE_ENV=development
```

## API Documentation

API documentation is automatically generated with Swagger and available at:

```
http://localhost:3000/api-docs
```

## Contributing

Feel free to fork this project and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

## Acknowledgements

Special thanks to the open-source community for providing great libraries and tools!



https://github.com/rochiyat/postgres-mock-seeder/tree/master/static-mock-data-seeder