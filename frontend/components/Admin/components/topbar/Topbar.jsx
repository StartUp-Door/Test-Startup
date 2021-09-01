import React from 'react'
import {Toolbar, Typography, Avatar, makeStyles }  from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import logo from '../image/logo.png';

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ));

const StyledMenuItem = withStyles((theme) => ({
root: {
    '&:focus': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
    },
    },
},
}))(MenuItem);

const useStyles = makeStyles((theme)=> ({
    root: {
        flexGrow: 1,
        margin: "0px",
        padding: 0,
    },
    toolBar: {
        backgroundColor: "whitesmoke",
        height: "100px",
        marginLeft: "0",
    },
    text: {
        fontSize: "25px",
        fontWeight: "bold",
        marginRight: "250px",
    },
    margin: {
        margin: theme.spacing("0"),
    },
    rightSide: {
        margin: theme.spacing(1),
        display: "flex",
        justifyContent: "space-evenly",
        position: "absolute",
        right: "20px",
    },
}));

function Topbar(element) {
    const classes = useStyles();

    // Add onclick popup menu on profile icon
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
          <div className={classes.root}>          
                <Toolbar className={classes.toolBar}>
                    <img src={logo} alt="logo of the startup door" width="170px" height="170px"/> 

                    <Typography variant="h1" color="primary" className={classes.text}>
                        {element.name}
                    </Typography>

                    <div className={classes.rightSide}>
                        <IconButton color="primary" aria-label="Go to messages" >
                            <MessageIcon/>
                        </IconButton>
                        <IconButton color="primary" aria-label="Notifications">
                            <NotificationsIcon/>
                        </IconButton>
                        <IconButton aria-label="Profile">
                            <Avatar aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                                H
                            </Avatar>
                        </IconButton>
                        
                        {/* added a popping up box on profile */}
                        <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                            <StyledMenuItem onClick={handleClose} >
                                <ListItemIcon>
                                    <AccountBoxOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Update profile"/>
                            </StyledMenuItem>

                            <StyledMenuItem onClick={handleClose} >
                                <ListItemIcon>
                                    <SettingsOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </StyledMenuItem>

                            <StyledMenuItem onClick={handleClose} >
                                <ListItemIcon>
                                    <ExitToAppOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </StyledMenuItem>
                        </StyledMenu>      
                    </div>
                </Toolbar>
          </div>
    )
}

export default Topbar