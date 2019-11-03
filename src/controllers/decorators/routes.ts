import 'reflect-metadata';

export const GET = (path: string) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata('path', path, target, key);
};
