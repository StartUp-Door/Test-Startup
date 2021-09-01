import React from 'react'
import {CardActionArea, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import DetailsCard from './DetailsCard';
import Logo from '../image/logo.png'
const useStyles = makeStyles({
    root: {
        width: "100%",
        Height: "800px",
        margin: 10,
    },
    heading: {
        margin: "20px 0 0 10px",
    },
    detailsCard: {
        display: "flex",
        flexDirection: "row",
        flexFlow: "inline",
        justifyContent: "space-evenly",
    },
});

function Approvals() {
    const classes = useStyles();
    return (
        <React.Fragment>
           <CardActionArea className={classes.root}>
                <Typography variant="h6" component="h1" className={classes.heading} color="primary"> 
                    Approvals on technicians
                </Typography>
                <div className={classes.detailsCard}>
                    <DetailsCard name="Waruna prabhashwara" image={Logo} description="I'm a certified technician in SLTCA."/>
                    <DetailsCard name="Somasiri Dissanayake" image={Logo} description="I'm a certified Plumber."/>
                    <DetailsCard name="Dayarohana Samaranayake" image={Logo} description="I've certified from NAITA as a carpenter"/>
                    <DetailsCard name="Jayasumana Bandara" image={Logo} description="I'm a certified technician in SLTCA."/>
                </div>
                
            </CardActionArea>
        </React.Fragment>
    )
}

export default Approvals
