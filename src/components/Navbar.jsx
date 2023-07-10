import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
export function Navbar(){
  const NavLinkStyles = ({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : 'bold',
      textDecoration: isActive ? 'none' : 'none',
      color: isActive ? 'white' : 'black'
    }
}
  return(
    <AppBar >
      <Toolbar>
          <Stack direction='row' spacing={2}>
            <NavLink to='/' style={NavLinkStyles}>Home</NavLink>
            <NavLink to='/dashboard' style={NavLinkStyles}>Dashboard</NavLink>
            <NavLink to='/contact' style={NavLinkStyles}>Contact</NavLink>   
          </Stack>
      </Toolbar>
    </AppBar>
  )
}