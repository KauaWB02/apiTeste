import { Request, Response } from 'express';

module.exports = (request: Request, response: Response, next: any) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  next();
};
