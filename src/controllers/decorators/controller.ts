import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export const Controller = (routePrefix: string) => (target: Function) => {
  for (let key in target.prototype) {
    const router = AppRouter.getInstance();
    const routeHandler = target.prototype[key];
    const path = Reflect.getMetadata('path', target.prototype, key);
    if (path) {
      router.get(`${routePrefix}${path}`, routeHandler);
    }
  }
};
