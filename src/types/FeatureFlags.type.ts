import type { Path } from './path.type';
import type { DeepRequired } from 'ts-essentials';
import { z } from 'zod';

export const FeatureFlag = z
  .object({
    devTools: z.boolean(),
    query: z
      .object({
        requestLogging: z.boolean()
      })
      .partial()
  })
  .partial();

export type FeatureFlags = z.infer<typeof FeatureFlag>;

export type Feature = Path<DeepRequired<FeatureFlags>>;
