import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'
import TitlebarImageList from './RightbarFeed'
import AlignItemsList from './RightbarLatestConvs'

export const Rightbar = () => {
  return (
    <Box sx={{flex: 2, p: 4, display: {xs: 'none', sm: 'block'}}}>
      
         <Box sx={{position: 'fixed'}}>
         <Typography variant='h4'>Online Friends</Typography>

<AvatarGroup total={24} sx={{mt: '10px', position: 'fixed'}}>
<Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3303918/pexels-photo-3303918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Avatar alt="Travis Howard" src="https://images.pexels.com/photos/6151981/pexels-photo-6151981.jpeg" />
<Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
<Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/7640878/pexels-photo-7640878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</AvatarGroup>

        <Typography variant='h4' sx={{mt: '55px', mb: '10px'}}>Latest Snaps</Typography>

        <TitlebarImageList />

        <Typography variant='h4'>Latest Feedbacks</Typography>
        <AlignItemsList/>

         </Box>
      </Box>
  )
}
