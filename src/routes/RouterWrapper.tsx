import Loader from 'components/Loader/Loader';
import { STORAGE_KEY } from 'constants/storage/storage';
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import React, { FC, memo, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteItem } from 'types/routes.types';
import { AUTH_ROUTE, ROOT_ROUTE, ROUTE_LIST } from './routes.config';

const NotFoundScreen: FC = () => <div>Not found</div>;

const routeWrapperFunc = ({
  id,
  path,
  component: Component,
  layout,
  isPrivateRoute,
  isAuthRoute,
}: RouteItem) => {
  const RouteLayout: FC = layout || DefaultLayout;

  return (
    <Route
      exact
      key={id}
      path={path}
      render={(props): React.ReactNode => {
        const isSignedIn = Boolean(localStorage.getItem(STORAGE_KEY.TOKEN));

        //cant turn back auth route when logged in
        if (isAuthRoute && isSignedIn) {
          return <Redirect key="ROOT_ROUTE" to={ROOT_ROUTE} />;
        }

        //protect route: requỉed login before access this route
        if (isPrivateRoute && !isSignedIn) {
          return <Redirect key="AUTH_ROUTE" to={AUTH_ROUTE} />;
        }

        const Content = memo(() => (
          <RouteLayout>
            <Component {...props} />
          </RouteLayout>
        ));

        return <Content />;
      }}
    />
  );
};

const RouterWrapper: FC = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {ROUTE_LIST.map((route) => routeWrapperFunc(route))}
      <Route path="*" render={() => <NotFoundScreen />} />
    </Switch>
  </Suspense>
);

export default memo(RouterWrapper);
