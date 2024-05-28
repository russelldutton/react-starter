import { createContext, type PropsWithChildren, useContext } from 'react';
import { mergeDeep } from 'remeda';
import { Env, PartialEnv } from 'types/Env.type';
import { FeaturesProvider } from './FeaturesProvider';

declare global {
  interface Window {
    env: Record<string, unknown>;
  }
}

const EnvContext = createContext<Env | undefined>(undefined);
EnvContext.displayName = 'Environment Variables Configuration';

const defaultConfig = {
  apiUrl: 'http://localhost:5001',
  featureFlags: { devTools: true }
} satisfies Env;

export const EnvProvider = ({ children }: PropsWithChildren) => {
  const windowConfig = window?.env ?? {};
  const validatedConfig = PartialEnv.parse(windowConfig);

  const mergedConfig = mergeDeep(validatedConfig, defaultConfig);
  const featureFlags = mergedConfig.featureFlags;

  const envConfig = Env.parse(mergedConfig);

  return (
    <EnvContext.Provider value={envConfig}>
      <FeaturesProvider features={featureFlags}>{children}</FeaturesProvider>
    </EnvContext.Provider>
  );
};

export const useEnvContext = () => {
  const context = useContext(EnvContext);

  if (!context) {
    throw new Error('Cannot use Env Context outside of Env Context Provider');
  }

  return context;
};
