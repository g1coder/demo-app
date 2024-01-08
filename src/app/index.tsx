import CssBaseline from '@mui/material/CssBaseline';
import {RouterProvider} from 'react-router-dom';
import {Spinner, Toaster} from '@shared/ui-kit';
import Router from './router';
import ThemeProvider from './themes/ThemeProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} fallbackElement={<Spinner />} />
          <Toaster />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};
