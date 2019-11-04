import 'reflect-metadata';

import { Methods } from './methods';
import { MetadataKeys } from './metadatakeys';
import { RouteHandlerDescriptor } from '../../interfaces';

const routeBinder = (method: string) => (path: string) => (
  target: any,
  key: string,
  desc: RouteHandlerDescriptor
) => {
  Reflect.defineMetadata(MetadataKeys.path, path, target, key);
  Reflect.defineMetadata(MetadataKeys.method, method, target, key);
};

export const Get = routeBinder(Methods.get);
export const Delete = routeBinder(Methods.del);
export const Post = routeBinder(Methods.post);
export const Put = routeBinder(Methods.put);
export const Patch = routeBinder(Methods.patch);
