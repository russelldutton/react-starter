import { createContext, useContext, type PropsWithChildren } from 'react';
import type { FeatureFlags } from 'types/FeatureFlags.type';

const FeaturesContext = createContext<FeatureFlags | undefined>(undefined);

type FeaturesProviderProps = {
  features: FeatureFlags | undefined;
};
export const FeaturesProvider = ({
  features,
  children
}: PropsWithChildren<FeaturesProviderProps>) => {
  return <FeaturesContext.Provider value={features}>{children}</FeaturesContext.Provider>;
};

export const useFeatures = () => {
  const context = useContext(FeaturesContext);
  if (!context) {
    throw new Error('Cannot use Features Context outside Provider.');
  }

  return context;
};
