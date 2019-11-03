import 'reflect-metadata';

export const Controller = (routePrefix: string) => (target: Function) => {
  for (let key in target.prototype) {
    const routeHandler = target.prototype[key];

    const path = Reflect.getMetadata('path', target.prototype[key], key);
  }
};
