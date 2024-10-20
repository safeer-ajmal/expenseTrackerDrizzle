import { FastifyReply, FastifyRequest } from 'fastify';
import { db } from '../db/connectDB';
import { expenses, Expense } from '../models/expenseModel';
import CustomError from '../errors/CustomError';

// @desc Get all expenses
export const getExpenses = async (request: FastifyRequest, reply: FastifyReply) => {
  const expenseList = await db.select().from(expenses);
  reply.status(200).send({ success: true, data: expenseList });
};

// @desc Create a new expense
export const createExpense = async (request: FastifyRequest<{ Body: Expense }>, reply: FastifyReply) => {
  const { title, amount, category } = request.body;
  if (!title || !amount || !category) {
    throw new CustomError("Please provide all required fields", 400);
  }

  const newExpense = await db.insert(expenses).values({ title, amount, category });
  reply.status(201).send({ success: true, data: newExpense });
};

// @desc Update an expense
export const updateExpense = async (request: FastifyRequest<{ Params: { id: string }; Body: Expense }>, reply: FastifyReply) => {
  const { id } = request.params;
  
  const updatedExpense = await db.update(expenses).set(request.body).where(expenses.id.eq(id));
  
  if (!updatedExpense) {
    throw new CustomError("Expense not found", 404);
  }

  reply.status(200).send({ success: true, data: updatedExpense });
};

// @desc Delete an expense
export const deleteExpense = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const { id } = request.params;

  const deletedExpense = await db.delete(expenses).where(expenses.id.eq(id));

  if (!deletedExpense) {
    throw new CustomError("Expense not found", 404);
  }

  reply.status(200).send({ success: true, data: {} });
};
