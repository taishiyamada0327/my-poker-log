import * as React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { SideMenuData } from "./SideMenuData";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import BarChartIcon from '@mui/icons-material/BarChart';

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'Background.paper' }} >
        <nav aria-label="main">
          <List>
            <ListItem disablePadding>
              <ListItemButton className="SideMenuList">
                <ListItemIcon>
                  <BarChartIcon className="sideMenuIcon" />
                </ListItemIcon>
                <ListItemText className="sideMenuTitle" primary="Result" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton className="SideMenuList">
                <ListItemIcon>
                  <BarChartIcon className="sideMenuIcon" />
                </ListItemIcon>
                <ListItemText className="sideMenuTitle" primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  )
}

export default SideMenu;