import { FastifyInstance } from 'fastify';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../controllers/expenseController';

export default async function expenseRoutes(fastify: FastifyInstance) {
  fastify.get('/', getExpenses);
  fastify.post('/', createExpense);
  fastify.put('/:id', updateExpense);
  fastify.delete('/:id', deleteExpense);
}
