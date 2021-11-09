import React, {useState} from 'react';
import '../styles/App.css';
import {Grid, Tabs, Tab, Typography, Box, Card, Paper, CardContent, CardHeader, Divider} from "@mui/material";
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
import LockIcon from '@mui/icons-material/Lock';

function App() {

  const [value, setValue] = useState(0);
  const [anotherValue, setAnotherValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const anotherHandleChange = (event, newValue) => {
    setAnotherValue(newValue);
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
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'transparent' }}
      >
        <Tab icon={<PhoneIcon/>} label="Events" sx={{color:'#8c1aff'}}/>
        <Tab icon={<AcUnitIcon/>} label="Teams" sx={{color:'#8c1aff'}}/>
        <Tab icon={<AddBoxIcon />} label="Analytics" />
        <Tab icon={<AddLocationIcon />} label="Results" />
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
          <Box sx={{ flexGrow: 1 }}>
            <Paper sx={{margin:'30px 40px'}} elevation="5">
              <Grid container>
                <Grid item md={2} xs={12}>
                  <Typography component="div" sx={{p:1, color:'#a6a6a6'}}>
                    Event Settings
                  </Typography>
                  <Divider/>
                  <Tabs
                    orientation="vertical"
                    value={anotherValue}
                    textColor="secondary"
                    indicatorColor="secondary"
                    onChange={anotherHandleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'transparent'}}
                  >
                    <Tab label="General" />
                    <Tab label="Privacy" />
                    <Tab label="Features" />
                    <Tab label="Customization" />
                    <Tab label="Intergration" />
                    <Tab 
                      icon={<LockIcon/>} 
                      iconPosition="end" 
                      label="Session Settings"/>
                    <Tab label="My plans"/>
                  </Tabs>
                </Grid>
                <Grid item md={10} xs={12}>Kumar</Grid>
              </Grid>
            </Paper>
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
