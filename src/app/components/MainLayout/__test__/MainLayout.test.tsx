import {render} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import MainLayout from '../MainLayout';
import {Route, Routes, MemoryRouter} from 'react-router-dom';
import React from 'react';
import AppRoutes from 'core/constants/AppRoutes';

describe('MainLayout', () => {
  let props: {isAllowed: boolean};

  beforeEach(() => {
    props = {
      isAllowed: false,
    };
  });

  const renderComponent = (route: string = '/') => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={AppRoutes.LOGIN.path} element={<div>{'Login page text'}</div>} />
          <Route path="/" element={<MainLayout {...props} />}>
            <Route path={AppRoutes.DASHBOARD.path} element={<div>{'Dasboard page text'}</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  it('should redirect to the login page if user is not authorized', async () => {
    renderComponent();
    expect(await screen.findByText('Login page text')).toBeInTheDocument();
    expect(screen.queryByText('Dasboard page text')).not.toBeInTheDocument();
  });

  it('should show Dashboard if user is authorized', async () => {
    props.isAllowed = true;
    renderComponent(AppRoutes.DASHBOARD.path);
    expect(await screen.findByText('Dasboard page text')).toBeInTheDocument();
    expect(screen.queryByText('Login page text')).not.toBeInTheDocument();
  });
});
