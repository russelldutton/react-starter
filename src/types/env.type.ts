import { z } from 'zod';
import { FeatureFlag } from './feature-flags.type';

export const Env = z.object({
  apiUrl: z.string(),
  featureFlags: FeatureFlag
});
export type Env = z.infer<typeof Env>;

export const PartialEnv = Env.partial();
export type PartialEnv = z.infer<typeof PartialEnv>;
