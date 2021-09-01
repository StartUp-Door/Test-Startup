import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    wrapper: {
        maxWidth: "250px",
        margin: "10px",
    },
    media: {
        height: "150px",
    },
})


function DetailsCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.wrapper}>
            <CardMedia className={classes.media} image = {props.image} />
            <CardContent>
                <Typography variant="h6" color="primary">
                    {props.name}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DetailsCard
