import React from 'react'
import { Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    cover: {
        width: "95%",
        height: "35px",
        margin: "5px 10px",
        paddingLeft: "20px",
        justifyContent: "left",
        '&:hover': {
            backgroundColor: "white",
        },
        '&:focus': {
            backgroundColor: "white",
        }, 
    },
}));

function Buttons(props) {
    const classes = useStyles();
    return (
        <div>                    
            <Button color={props.color} className={classes.cover} startIcon={props.startIcon}>{props.name}</Button>
        </div>
    )
}

export default Buttons
