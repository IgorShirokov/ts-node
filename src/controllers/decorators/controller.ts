import { MetadataKeys } from './metadatakeys';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './methods';

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

    if (path) {
      router[method](`${routePrefix}${path}`, routeHandler);
    }
  }
};
