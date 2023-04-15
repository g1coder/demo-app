import CssBaseline from '@mui/material/CssBaseline';
import {RouterProvider} from 'react-router-dom';
import Spinner from '@shared/ui/Spinner';
import Toaster from '@shared/ui/Toaster';
import AppRouter from './router';
import ThemeProvider from './themes/ThemeProvider';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <RouterProvider router={AppRouter} fallbackElement={<Spinner />} />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
