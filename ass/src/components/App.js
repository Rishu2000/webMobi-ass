import React, {useState} from 'react';
import '../styles/App.css';
import {Grid, Tabs, Tab, Typography, Box, Paper, 
  Divider, Button, List, ListItem, ListItemText, 
  Switch, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
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
import CancelIcon from '@mui/icons-material/Cancel';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {

  const [value, setValue] = useState(0);
  const [anotherValue, setAnotherValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const anotherHandleChange = (event, newValue) => {
    setAnotherValue(newValue);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChangeExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
            <Paper sx={{margin:'30px 40px', borderRadius:'15px'}} elevation="5">
              <Grid container>
                <Grid item md={2} sm={4} xs={12}>
                  <Typography component="div" sx={{color:'#a6a6a6', textAlign:'center', pt:2, pb:2}}>
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
                <Grid item md={10} sm={8} xs={12}>
                  <Paper sx={{height:'100%', borderRadius:'15px'}} elevation={2}>
                    <Grid container sx={{display:'grid', gridTemplateRows:'50px auto 100px'}}>
                      <Grid item>
                        <CancelIcon sx={{float:'right', p:2, cursor: 'pointer'}}/>
                      </Grid>
                      <Grid item sx={{display:'flex', justifyContent:'center'}}>
                        <Box
                          sx={{ width: '100%', height: "100%", maxWidth: 560, bgcolor: 'background.paper' }}
                        >
                          <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChangeExpand("panel1")}
                            sx={{width:"100%", boxShadow:'none'}}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                              sx={{ display: "flex", width:'100%', alignItems: "center", justifyContent:'space-between', color:'#9900cc'}}
                            >
                              <div style={{display: "flex", alignItems: "center", width:'100%'}}>
                                <ForumIcon color="secondary" sx={{m:1}}/>
                                <Typography
                                  sx={{
                                    flexShrink: 0,
                                    fontSize: 24,
                                    fontWeight: "bold"
                                  }}
                                >
                                  Audience Q&A
                                </Typography>
                              </div>
                              <Switch color="secondary" checked sx={{float:'right'}}/>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Divider/>
                              <List sx={{overflowY:'scroll', height:'300px'}}>
                                <ListItem component="div" disablePadding sx={{ pl: 3, pr: 3 }}>
                                  <ListItemText
                                    primary="Moderation"
                                    secondary="Easily review all questions before thry go live."
                                  />
                                  <Switch color="secondary" />
                                </ListItem>
                                <ListItem component="div" disablePadding sx={{ pl: 3, pr: 3 }}>
                                  <ListItemText
                                    primary="Labels"
                                    secondary="Categorize and filter questions."
                                  />
                                  <Switch color="secondary" checked />
                                </ListItem>
                                <ListItem component="div" disablePadding sx={{pl:3, pr:3}}>
                                <ListItemText primary='Downvotes' secondary='Enable downvoting of questions.'/>
                                <Switch
                                  color="secondary"
                                  checked
                                />
                              </ListItem>
                              <ListItem component="div" disablePadding sx={{pl:3, pr:3}}>
                                <ListItemText primary='Replies' secondary='Enable downvoting of questions.'/>
                                <Switch
                                  color="secondary"
                                />
                              </ListItem>
                              <ListItem component="div" disablePadding sx={{pl:3, pr:3}}>
                                <ListItemText primary='Anonymous questions' secondary='Enable downvoting of questions.'/>
                                <Switch
                                  color="secondary"
                                />
                              </ListItem>
                              <ListItem component="div" disablePadding sx={{pl:3, pr:3}}>
                                <ListItemText primary='Maximum question length' secondary={
                                  <React.Fragment>
                                    {" Show number of votes insted of percentage."}
                                    <Typography
                                      component="div"
                                      variant="body2"
                                      sx={{mt:2}}
                                    >
                                      <Button color="secondary" variant="outlined" sx={{mr:2}}>160</Button>
                                      <Button color="secondary" variant="outlined" sx={{mr:2}}>240</Button>
                                      <Button color="secondary" variant="contained">300</Button>
                                    </Typography>
                                  </React.Fragment>
                                }/>
                                <Switch
                                  color="secondary"
                                />
                              </ListItem>
                              <ListItem component="div" disablePadding sx={{pl:3, pr:3}}>
                                <ListItemText primary='Close questions' secondary='Enable downvoting of questions.'/>
                                <Switch
                                  color="secondary"
                                />
                              </ListItem>
                              </List>
                            </AccordionDetails>
                          </Accordion>
                        </Box>
                      </Grid>
                      <Grid item sx={{display:'flex', alignItems: 'center', justifyContent: 'flex-end', pr:5}}>
                        <Button color="secondary" variant="contained" sx={{paddingRight:6, paddingLeft:6}}>Save</Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
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
