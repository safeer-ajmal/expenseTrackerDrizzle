CREATE TABLE IF NOT EXISTS "expenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"amount" integer NOT NULL,
	"category" varchar(50) NOT NULL,
	"date" timestamp DEFAULT now()
);
