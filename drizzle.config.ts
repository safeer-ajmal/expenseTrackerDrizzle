import { defineConfig } from "drizzle-kit"

export default defineConfig ({
    schema: "./src/models/expenseModel.ts",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
})
