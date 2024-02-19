import React from 'react'
import { Sidebar } from './components/Sidebar'
import { Feedbar } from './components/Feedbar'
import { Rightbar } from './components/Rightbar'
import { Stack, Box} from '@mui/material';
import { Navbar } from './components/Navbar'
import { NewPost } from './components/NewPost';

const App = () => {
  
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={'space-between'}>
      <Sidebar />
      <Feedbar />
      <Rightbar />
      </Stack>
      <NewPost/>
    </Box>
  )
}

export default App
