import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'

export const Navbar = () => {

     const [Open, setOpen] = useState(false)

  const StyledToolbar = styled(Toolbar) ({
     display: 'flex',
     justifyContent: 'space-between'
  });
  const Search = styled('div') (({theme}) =>({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '10px',
    width: "25%"
  }));

  const BarIcons = styled(Box) (({theme})=> ({
    // backgroundColor: 'white'
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }));

  const UserBox = styled(Box) (({theme})=> ({
    // backgroundColor: 'white'
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }))
  return (
    <AppBar sx={{position: 'sticky', backgroundColor: 'orange'}}>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>StreamFY</Typography>
        <LiveTvIcon sx={{display: {xs: 'block', sm: 'none'}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <BarIcons sx={{display: {xs: 'none', sm:'flex'}}}>
        <Badge badgeContent={4} color="error">
        <MailIcon/>
        </Badge>
        <Badge badgeContent={3} color="error">
        <NotificationsIcon/>
        </Badge>
        <Avatar sx={{width: 30, height: 30}} onClick={e =>setOpen(true)} src='https://images.pexels.com/photos/19804968/pexels-photo-19804968/free-photo-of-black-and-white-studio-shot-of-two-women-in-creative-makeup-looks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </BarIcons>
        <UserBox sx={{display: {xs: 'flex', sm: 'none'}}} onClick={e =>setOpen(true)}>
        <Avatar sx={{width: 30, height: 30}} src='https://images.pexels.com/photos/19804968/pexels-photo-19804968/free-photo-of-black-and-white-studio-shot-of-two-women-in-creative-makeup-looks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Typography>Charity</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}
