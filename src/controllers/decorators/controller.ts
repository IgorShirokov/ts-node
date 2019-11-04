import 'reflect-metadata';

import { MetadataKeys } from './metadatakeys';
import { AppRouter } from '../../AppRouter';
import { Methods } from './methods';
import { bodyValidators } from '../../middlewares';

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

    const requiredBodyProps =
      Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

    const validator = bodyValidators(requiredBodyProps);

    if (path) {
      router[method](
        `${routePrefix}${path}`,
        ...middlewares,
        validator,
        routeHandler
      );
    }
  }
};
