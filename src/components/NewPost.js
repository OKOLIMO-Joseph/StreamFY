import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal) ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
const UserBox = styled(Box) (({theme})=> ({
    // backgroundColor: 'white'
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }))

export const NewPost = () => {

      const [Open, setOpen] = useState(false)

  return (
    <div>
        <Tooltip sx={{position: 'fixed', bottom: 20, left:{xs: 'calc(50% - 25px)', md: 30}}} onClick={e=>setOpen(true)}>
        <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
        </Tooltip>

        <StyledModal
  open={Open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{backgroundColor: 'white', width: {xs: '400px', md: '600px'}, height: '400px', p: '10px', borderRadius: '15px'}}>
    <Typography variant="h6" component= 'h1' textAlign= 'center' color={'grey'} sx={{fontSize: '30px'}}>
      Create New Post
    </Typography>
    <UserBox>
        <Avatar sx={{width: 30, height: 30}} src='https://images.pexels.com/photos/19804968/pexels-photo-19804968/free-photo-of-black-and-white-studio-shot-of-two-women-in-creative-makeup-looks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <Typography>Charity</Typography>
        </UserBox>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder='What is on your mind?'
          variant="standard"
          sx={{width: '95%', mt: '20px', fontSize: '30px'}}
        />

        <Stack direction={'row'} mt={2} mb={3}>
          <InsertEmoticonIcon sx={{width: '40px', height: '40px', ml: '10px'}}/>
          <VideoCameraFrontIcon sx={{width: '40px', height: '40px', ml: '10px'}}/>
          <AudiotrackIcon sx={{width: '40px', height: '40px', ml: '10px'}}/>
          <AddAPhotoIcon sx={{width: '40px', height: '40px', ml: '10px'}}/>
        </Stack>

        <ButtonGroup variant="contained" aria-label="Basic button group" sx={{width: '95%', height: '80px'}}>
      <Button sx={{width: '70%', fontSize: '20px'}}>Post</Button>
      <Button sx={{width: '30%'}}><DateRangeIcon sx={{width: '50px', height: '50px'}}/></Button>
    </ButtonGroup>


  </Box>
</StyledModal>
    </div>
  )
}
