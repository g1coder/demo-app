import {render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import MainLayout from '../ui';
import {Route, Routes, MemoryRouter} from 'react-router-dom';
import AppRoutes from '@shared/constants/AppRoutes';

describe('MainLayout', () => {
  const renderComponent = (route: string = '/') => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path={AppRoutes.LANDING_PAGE.url} element={<div>{'Dasboard page text'}</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  it('should redirect header', async () => {
    renderComponent();
    screen.getByText('Home');
    screen.getByText('Catalog');
    screen.getByText('About us');
    screen.getByText('Contacts');
    screen.getByText('Sign up');
    screen.getByText('Sign in');
    screen.getByText('vsl');
    screen.getByText('© All Rights Reserved - 2022');
  });
});
