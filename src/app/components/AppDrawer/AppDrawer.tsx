import _ from 'lodash';
import React, {memo, useMemo} from 'react';
import {Link, useLocation, useMatch} from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AppRoutes from 'core/constants/AppRoutes';

export const DRAWER_WIDTH = 240;

interface IProps {
  isMobileOpen: boolean;
  drawerToggle: () => void;
  toolbarTitle?: string;
}

const menuItems = _.values(AppRoutes).filter((r) => !r.hidden);

const AppDrawer = ({isMobileOpen, drawerToggle, toolbarTitle}: IProps) => {
  const location = useLocation();
  const match = useMatch(location.pathname);

  const content = useMemo(
    () => (
      <>
        <Toolbar>{toolbarTitle}</Toolbar>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton component={Link} to={item.path} selected={match?.pathname === item.path}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
                {}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>
    ),
    [toolbarTitle, match?.pathname]
  );

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <Box component="nav" sx={{width: {sm: DRAWER_WIDTH}, flexShrink: {sm: 0}}} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        open={isMobileOpen}
        onClose={drawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {xs: 'block', sm: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: DRAWER_WIDTH},
        }}
      >
        {content}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: {xs: 'none', sm: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: DRAWER_WIDTH},
        }}
        open
      >
        {content}
      </Drawer>
    </Box>
  );
};

export default memo(AppDrawer);
