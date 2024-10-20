import fastify from 'fastify';
import path from 'path';
import fastifyStatic from '@fastify/static';
import dotenv from 'dotenv';
import expenseRoutes from './routes/expenseRoutes';
import { errorHandler } from './middleware/errorHandler';
import { db } from './db/connectDB';

dotenv.config();

const app = fastify();

// Serve static files
app.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
  prefix: '/', // optional: default '/'
});

// Register routes
app.register(expenseRoutes, { prefix: '/api/expenses' });

// Global error handler
app.setErrorHandler(errorHandler);

// Connect to PostgreSQL and Start Server
const start = async () => {
  try {
    const port = process.env.PORT || 3002;
    await app.listen({ port });
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
};

start();
