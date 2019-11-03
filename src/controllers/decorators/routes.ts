import 'reflect-metadata';

const routeBinder = (method: string) => (path: string) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata('path', path, target, key);
  Reflect.defineMetadata('method', method, target, key);
};

export const Get = routeBinder('get');
export const Delete = routeBinder('delete');
export const Post = routeBinder('post');
export const Put = routeBinder('put');
export const Patch = routeBinder('patch');
