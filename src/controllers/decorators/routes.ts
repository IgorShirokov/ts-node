import 'reflect-metadata';
import { Methods } from './methods';

const routeBinder = (method: string) => (path: string) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata('path', path, target, key);
  Reflect.defineMetadata('method', method, target, key);
};

export const Get = routeBinder(Methods.get);
export const Delete = routeBinder(Methods.del);
export const Post = routeBinder(Methods.post);
export const Put = routeBinder(Methods.put);
export const Patch = routeBinder(Methods.patch);
