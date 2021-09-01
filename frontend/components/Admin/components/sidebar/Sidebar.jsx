import React from 'react'
import { Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Home, Timeline, Message, Business, Grade, Settings, Build} from '@material-ui/icons'
import Buttons from './Buttons';

// import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom'
// import Statistics from '../../pages/Statistics';
// import AdminHome from '../../pages/AdminHome';

const useStyles = makeStyles({
    container: {
        backgroundColor: "whitesmoke",
        width: "230px",
        height: "100%",
        padding: "40px 0 0 0",
        margin: 0,
        position: "sticky",
        left: 0,
    },
    caption: {
        margin: "10px 15px",
        color: "gray",
    },
});
function Sidebar(props) {
    const classes = useStyles();

    return (
         <React.Fragment>
                <Container className={classes.container}>
                    <Typography variant="h6" className={classes.caption}>
                        Main Menu
                    </Typography>
                    <Buttons color="primary" name="Dashboard" startIcon={<Home/>}/>
                    <Buttons color="primary" name="Statistics" startIcon={<Timeline/>}/>
                    <Buttons color="primary" name="Messages" startIcon={<Message/>}/>

                    <Typography variant="h6" className={classes.caption}>
                        Reviews
                    </Typography>
                    <Buttons color="primary" name="Service providers" startIcon={<Business/>}/>
                    <Buttons color="primary" name="Clients" startIcon={<Grade/>}/>

                    <Typography variant="h6" className={classes.caption}>
                        Approvals
                    </Typography>
                    <Buttons color="primary" name="Technicians" startIcon={<Build/>}/>

                    <Typography variant="h6" className={classes.caption}>
                        Profile
                    </Typography>
                    <Buttons color="primary" name="Settings" startIcon={<Settings/>}/>
                </Container>  
         </React.Fragment>       
    )
}

export default Sidebar
