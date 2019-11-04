import { RequestHandler, Request, Response, NextFunction } from 'express';

export const bodyValidators = (keys: string): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body) {
    res.status(422).send('Invalid request');
  }
  for (let key of keys) {
    if (!req.body[key]) {
      res.status(422).send('Invalid request');
      return;
    }
  }
  next();
};
