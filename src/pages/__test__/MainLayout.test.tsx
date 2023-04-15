import {screen} from '@testing-library/dom';
import {render} from '@testing-library/react';
import {Route, Routes, MemoryRouter} from 'react-router-dom';
import RouteConstants from '@shared/constants/route.constants';
import MainLayout from '../MainLayout';

describe('MainLayout', () => {
  const renderComponent = (route = '/') => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path={RouteConstants.LANDING_PAGE.url} element={<div>{'Dasboard page text'}</div>} />
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
