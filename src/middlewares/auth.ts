import { Request, Response, NextFunction } from 'express';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.session && req.session.logedIn === true) {
    next();
    return;
  }
  res.status(403).send('Not permitted');
};
