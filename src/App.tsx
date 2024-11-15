/* eslint-disable react-hooks/exhaustive-deps */
import { useFetch } from '@/hooks/useFetch';
import { ShowContext } from '@/store';
import urlConstants from '@/utilities/constants';
import { router } from '@/utilities/routes';
import { useContext, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  const { setShowList } = useContext(ShowContext);
  const { data } = useFetch({ url: urlConstants.fetchShows });

  useEffect(() => {
    setShowList(data);
  }, [data]);

  return (
    <ErrorBoundary fallback={<div>An error has occured. Please refresh the page and try again.</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
