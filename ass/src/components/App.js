import React, {useState} from 'react';
import '../styles/App.css';
import {Grid, Tabs, Tab, Typography, Box} from "@mui/material";
import PropTypes from 'prop-types';
import PhoneIcon from '@mui/icons-material/Phone';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function App() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Grid container sx={{display:'grid', gridTemplateColumns:"100px auto 50px", height:"100vh"}}>
        <Grid item sx={{display:'flex', flexDirection:'column', alignItems: 'center',pt:1, 
          border:"1px solid #d9d9d9", backgroundColor:"white", boxShadow:'5px 0 20px #e6e6e6'}}>
      <Typography component="div" sx={{display:'flex', flexDirection:'column', alignItems: 'center',
            background:"linear-gradient(to bottom right, #6600cc 0%, #ff99cc 100%)", p:1, borderRadius:'5px', color:"white"}}>
        <AcUnitIcon/>
        <Typography component="div" sx={{display:'flex', flexDirection:'column', alignItems: 'center', fontSize:"8px", fontWeight:"bold"}}>
          <div>webMOBI<br/></div>
          <div>webMOBI 3D Event<br/></div>
          <div>2021</div>
        </Typography>
      </Typography>
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', width:"100%", justifyContent: 'center'}}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'transparent' }}
      >
        <Tab icon={<PhoneIcon/>} label="Events" {...a11yProps(0)} sx={{color:'#8c1aff'}}/>
        <Tab icon={<AcUnitIcon/>} label="Teams" {...a11yProps(1)} sx={{color:'#8c1aff'}}/>
        <Tab icon={<AddBoxIcon />} label="Analytics" {...a11yProps(2)} />
        <Tab icon={<AddLocationIcon />} label="Results" {...a11yProps(3)} />
      </Tabs>
    </Box>
        </Grid>
        <Grid item>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                  Admin Dashboard
                </Typography>
                <Typography component="div" sx={{border:'1px solid #a6a6a6', borderRadius:"4px"}}>
                  <Typography component="div" sx={{color:'#a6a6a6', padding:'5px 10px', display:'flex', alignItems:'center'}}>
                    preview on:
                    <PhoneAndroidIcon sx={{marginLeft:'5px', cursor: 'pointer'}}/>
                    <ComputerIcon sx={{marginLeft:'5px', cursor: 'pointer'}}/>
                  </Typography>
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
        <Grid item sx={{display:'flex', flexDirection:'column', alignItems: 'center',pt:1, 
          border:"1px solid #d9d9d9", backgroundColor:"white", color:'gray'}}>
          <AccountBoxIcon sx={{p:1, cursor: 'pointer'}}/>
          <CircleNotificationsIcon sx={{p:1, cursor: 'pointer'}}/>
          <ForumIcon sx={{p:1, cursor: 'pointer'}}/>
          <SettingsIcon sx={{p:1, cursor: 'pointer'}}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
