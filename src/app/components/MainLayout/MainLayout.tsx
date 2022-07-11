import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import {useCallback, useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useContextSelector} from 'use-context-selector';
import AppContext from 'core/components/AppContext';
import AppDrawer, {DRAWER_WIDTH} from 'app/components/AppDrawer/AppDrawer';
import AppRoutes from 'core/constants/AppRoutes';
import TopPanel from 'app/components/TopPanel/TopPanel';

const MainLayout = () => {
  const navigate = useNavigate();

  const user = useContextSelector(AppContext, (state) => state.user);
  useEffect(() => {
    if (!user) {
      navigate(AppRoutes.LOGIN.path);
    }
  }, [navigate, user]);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setIsMobileOpen((currentValue) => !currentValue);
  }, []);

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />

      <TopPanel drawerToggle={handleDrawerToggle} />
      <AppDrawer isMobileOpen={isMobileOpen} drawerToggle={handleDrawerToggle} toolbarTitle={user?.name} />

      <Box component="main" sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${DRAWER_WIDTH}px)`}}}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
