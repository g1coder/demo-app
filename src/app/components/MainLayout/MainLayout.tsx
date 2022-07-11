import React, {memo} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import {useCallback, useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import AppDrawer, {DRAWER_WIDTH} from 'app/components/AppDrawer/AppDrawer';
import AppRoutes from 'core/constants/AppRoutes';
import TopPanel from 'app/components/TopPanel/TopPanel';

interface IProps {
  isAllowed: boolean;
}

const MainLayout = ({isAllowed}: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAllowed) {
      navigate(AppRoutes.LOGIN.path);
    }
  }, [navigate, isAllowed]);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setIsMobileOpen((currentValue) => !currentValue);
  }, []);

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />

      <TopPanel drawerToggle={handleDrawerToggle} />
      <AppDrawer isMobileOpen={isMobileOpen} drawerToggle={handleDrawerToggle} />

      <Box component="main" sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${DRAWER_WIDTH}px)`}}}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default memo(MainLayout);
