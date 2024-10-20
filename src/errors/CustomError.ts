// src/errors/CustomError.ts

export default class CustomError extends Error {
    public statusCode: number;
  
    constructor(message: string, statusCode: number) {
      super(message); // Call the parent constructor (Error)
      this.statusCode = statusCode;
      // Set the prototype explicitly to maintain proper instance type
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  }
  