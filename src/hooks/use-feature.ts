import { useFeatures } from 'contexts/FeaturesProvider';
import { type PropsWithChildren } from 'react';
import { prop, pipe, drop, isBoolean, isNullish } from 'remeda';
import type { Feature } from 'types/feature-flags.type';

type RecursiveBoolean = {
  [key: string]: boolean | undefined | RecursiveBoolean;
};

const traverse = (obj: RecursiveBoolean, paths: Array<string>): boolean => {
  const path = paths[0]!;
  const next = pipe(obj, prop(path));

  if (isNullish(next)) {
    return false;
  }

  if (isBoolean(next)) {
    return next;
  }

  const remainingPaths = drop(paths, 1);
  return traverse(next, remainingPaths);
};

export const useFeature = (path: Feature) => {
  const features = useFeatures();

  return traverse(features, path.split('.'));
};

type FeatureFlagProps = {
  feature: Feature;
};
export const FeatureFlag = ({ feature, children }: PropsWithChildren<FeatureFlagProps>) => {
  const isAllowed = useFeature(feature);

  if (!isAllowed) {
    return null;
  }

  return children;
};
