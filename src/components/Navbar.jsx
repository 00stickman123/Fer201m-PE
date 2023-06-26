import { AppBar, Toolbar, Stack, Link } from "@mui/material";

export function Navbar(){
  return(
    <AppBar >
      <Toolbar>
          <Stack direction='row' spacing={2}>
            <Link href="#" color="inherit" underline="none">Home</Link>
            <Link href="#" color="inherit" underline="none">Dashboard</Link>
            <Link href="#" color="inherit" underline="none">Contact</Link>   
          </Stack>
      </Toolbar>
    </AppBar>
  )
}