import CssBaseline from '@mui/material/CssBaseline';
import {RouterProvider} from 'react-router-dom';
import {AuthProvider} from '@widgets/auth';
import Spinner from '@shared/ui/Spinner';
import Toaster from '@shared/ui/Toaster';
import AppRouter from './router';
import ThemeProvider from './themes/ThemeProvider';

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={AppRouter} fallbackElement={<Spinner />} />
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
