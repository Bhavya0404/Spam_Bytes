import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Container } from '@mui/system'
import { TextField } from '@mui/material'
import logo from '../assets/images/logo.png'
const drawerWidth = 240
const navItems = ['Districts', 'Policy', 'Acts', 'NCLP', 'Guildlines']

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="logo" />
      </Typography>
      <Divider variant="middle" />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item}`}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
    >
      <AppBar
        component="nav"
        sx={{
          width: '100%',
          position: 'relative',
          backgroundColor: '#FFFF',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Link to="/">
              <Box component="img" sx={{ height: '90px' }} src={logo}></Box>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex', width: '50%' },
              justifyContent: 'space-between',
            }}
          >
            {navItems.map((item) => (
              <Link to={`/${item}`} style={{ textDecoration: 'none' }}>
                <Button
                  
                  key={item}
                  sx={{ color: 'black', textDecoration: 'none' }}
                >
                  <Typography variant="h5">{item}</Typography>
                </Button>
              </Link>
            ))}
            <Box>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large">
                  Login
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="large">
                  Signup
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default DrawerAppBar
