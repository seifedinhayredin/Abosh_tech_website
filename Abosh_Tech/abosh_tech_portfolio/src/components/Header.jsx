
// export default function Header(){
//     return (
//         <div>
//             <a href="#">Home</a>
//             <a href="#">About Us</a>
//             <a href="#">Contact</a>
//             <a href="#">Our Services</a>
//             <a href="#">Testimonials</a>
//         </div>
//     )
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import Main from './Main';
import Mission from './Mission';
import Vision from './Vision';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Stack direction="row" spacing={2}>
        <img src='images/photo_2024-07-16_09-58-33.jpg' width={150} height={150} />
        </Stack>
        <Stack direction="row" spacing={2} paddingLeft={10}>
        
      
        <Link to="/"> <Button sx={{ minWidth: 100 , backgroundColor: "#19322E", color: "white"}}>Home</Button> </Link>
        <Link to="/about"> <Button sx={{ minWidth: 100 , backgroundColor: "#19322E", color: "white"}}>About</Button> </Link>
        <Link to="/contact"><Button sx={{ minWidth: 100, backgroundColor: "#19322E", color: "white" }}>Contact</Button> </Link> 
        <Link to="/services"><Button sx={{ minWidth: 100, backgroundColor: "#19322E", color: "white" }}>Our Services </Button></Link> 
        <Button sx={{ minWidth: 100, backgroundColor: "#19322E", color: "white" }}>Testimonials</Button>
</Stack>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32}}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
       
      </Menu>
      
      
       
         
        
    </>
  );
}