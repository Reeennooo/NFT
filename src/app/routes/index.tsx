import {Route, Routes} from 'react-router-dom';
import {ProtectedRoute} from './ProtectedRoute.tsx';
import type {ReactElement} from 'react';
import {Home} from 'pages/Home.tsx';
import NotFound from 'pages/NotFound.tsx';

const isRegistered= true;

export const RoutesList = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            isRegistered={isRegistered}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
