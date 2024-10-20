import { pgTable, serial, varchar, integer, timestamp } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

export const expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  amount: integer('amount').notNull(),
  category: varchar('category', { length: 50 }).notNull(),
  date: timestamp('date').defaultNow(),
});

// TypeScript type for selecting expense data
export type Expense = InferSelectModel<typeof expenses>;  // For SELECT queries

// TypeScript type for inserting new expense data
export type NewExpense = InferInsertModel<typeof expenses>;  // For INSERT queries
