import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes.contants';
import { ErrorBoundary, Loader } from '@components/common';

import Home from '@pages/home';
import ContactMe from '@pages/contactMe';
import Experience from '@pages/experience';

const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.CONTACT_ME, element: <ContactMe /> },
  { path: ROUTES.EXPERIENCE, element: <Experience /> },
  { path: '*', element: <Home /> },
];

/**
 * Application routes
 */
const AppRoutes = () => {
  const appRoutes = useRoutes(routes);

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary>{appRoutes}</ErrorBoundary>
    </Suspense>
  );
};

export default AppRoutes;
