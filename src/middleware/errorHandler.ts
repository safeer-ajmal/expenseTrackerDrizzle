import { FastifyReply, FastifyRequest } from 'fastify';
import CustomError from '../errors/CustomError';

export const errorHandler = (error: any, request: FastifyRequest, reply: FastifyReply) => {
  let customError = {
    statusCode: error.statusCode || 500,
    message: error.message || 'Something went wrong',
  };

  if (error.validation) {
    customError.message = error.validation.map((val: any) => val.message).join(', ');
    customError.statusCode = 400;
  }

  reply.status(customError.statusCode).send({
    success: false,
    message: customError.message,
  });
};
