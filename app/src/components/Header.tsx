import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconContext } from 'react-icons'
import { BsFillSuitSpadeFill } from "react-icons/bs";

const Header = () => {
  return(
    <AppBar position='static' style={{ backgroundColor: "#000000" }} enableColorOnDark>
      <Toolbar>
        <MenuIcon style={{ color: '#FFFFFF' }} />
        <Typography
          component="h1"
          variant='h5'
          color='#FFFFFF'
          noWrap
          sx={{ flexGrow: 1, pl: '20px' }}
        >
          <IconContext.Provider value={{ style: {
            verticalAlign: 'middle',
            marginRight: '4px',
            marginBottom: '0.025em',
            padding: '2px',
            color: '#b71c1c'
          }}}>
            <BsFillSuitSpadeFill />
          </IconContext.Provider>
          Poker log
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;