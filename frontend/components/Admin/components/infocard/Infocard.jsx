import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import CardContainer from "./CardContainer";

const useStyles = makeStyles({
    flexBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "top",
        marginLeft: "20px",
        marginTop: "20px",
        width: "1200px",
        height: "fit-content",
    },
});

export default function SimpleCard() {
        const classes = useStyles();
    return (
        <Container className={classes.flexBox}>
            <CardContainer value="150" description="Total number of Service providers registered in the system." />
            <CardContainer value="245" description="Total Clients registered in the system." />
            <CardContainer value="10" description="Technicians' certifications on approval" />
            <CardContainer value="Rs.XXXX" description="Total money tranferred through the system." />
        </Container>
    )
}