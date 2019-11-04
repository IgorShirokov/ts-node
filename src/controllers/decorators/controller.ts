import 'reflect-metadata';
import { RequestHandler, Request, Response, NextFunction } from 'express';

import { MetadataKeys } from './metadatakeys';
import { AppRouter } from '../../AppRouter';
import { Methods } from './methods';

const bodyValidators = (keys: string): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const Controller = (routePrefix: string) => (target: Function) => {
  for (let key in target.prototype) {
    const router = AppRouter.getInstance();
    const routeHandler = target.prototype[key];
    const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
    const method: Methods = Reflect.getMetadata(
      MetadataKeys.method,
      target.prototype,
      key
    );
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];

    if (path) {
      router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
    }
  }
};
