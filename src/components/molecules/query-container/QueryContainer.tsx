import { ContentLoader } from 'components/atoms/content-loader/ContentLoader';
import { Suspense, type PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const QueryContainer = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong rendering that route!</div>}>
      <Suspense fallback={<ContentLoader />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
