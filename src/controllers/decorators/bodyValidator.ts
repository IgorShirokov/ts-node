import 'reflect-metadata';

import { MetadataKeys } from './metadatakeys';

export const BodyValidator = (...keys: string[]) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
};
