import { ContentLoader } from 'components/atoms/content-loader/ContentLoader';
import { PageContent } from 'components/atoms/page-content/PageContent';
import { NavBar } from 'components/molecules/navbar/NavBar';
import { css } from 'css';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

const links = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/blog',
    text: 'Blog Example'
  }
];

export const RootLayout = () => {
  return (
    <div
      style={css({
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      })}
    >
      <NavBar>
        {links.map((link) => (
          <NavBar.Link {...link} />
        ))}
      </NavBar>
      <div
        style={css({
          flexGrow: 1,
          display: 'flex',
          on: ($) => [$('child', { flexGrow: 1 })]
        })}
      >
        <ErrorBoundary fallback={<div>Something went wrong rendering that route!</div>}>
          <Suspense fallback={<ContentLoader />}>
            <PageContent>
              <Outlet />
            </PageContent>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
