import { ContentLoader } from 'components/atoms/content-loader/ContentLoader';
import { PageContent } from 'components/atoms/page-content/PageContent';
import { NavBar } from 'components/molecules/navbar/NavBar';
import { QueryContainer } from 'components/molecules/query-container/QueryContainer';
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
          <NavBar.Link key={link.text} {...link} />
        ))}
      </NavBar>
      <div
        style={css({
          flexGrow: 1,
          flexDirection: 'column',
          display: 'flex',
          marginTop: '64px'
        })}
      >
        <QueryContainer>
          <PageContent>
            <Outlet />
          </PageContent>
        </QueryContainer>
      </div>
    </div>
  );
};
