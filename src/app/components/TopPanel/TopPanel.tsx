import React, {memo, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {DRAWER_WIDTH} from 'app/components/AppDrawer/AppDrawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import {getNameByPath} from 'core/constants/AppRoutes';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import {useContextSelector} from 'use-context-selector';
import AppContext from 'core/components/AppContext';


interface IProps {
  drawerToggle: () => void;
}

const TopPanel = ({drawerToggle}: IProps) => {
  const location = useLocation();
  const logout = useContextSelector(AppContext, state => state.logout);
  const pageTitle = useMemo(() => getNameByPath(location.pathname), [location]);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        position="fixed"
        sx={{
          width: {sm: `calc(100% - ${DRAWER_WIDTH}px)`},
          ml: {sm: `${DRAWER_WIDTH}px`},
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={drawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {pageTitle}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="logout"
            edge="end"
            onClick={logout}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default memo(TopPanel);
