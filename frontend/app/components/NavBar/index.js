/**
 *
 * NavBar
 *
 */

import React, { memo } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import './style.css'


const useStyles = makeStyles(theme => ({
    title: {
        padding: '0px 16px 0px 16px',
        color: 'white',
        cursor: 'pointer',
        fontSize: 'larger',
        fontWeight: 'bold',
        "&:hover": {
            color: 'aquamarine'
        },
    }
}));

function NavBar(){
    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title}>
                    Create Scenarios
                </Typography>
                <Typography className={classes.title}>
                    View Scenarios
                </Typography>
                <Typography className={classes.title}>
                    Compare Scenarios
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
Navbar.propTypes = {};

export default memo(NavBar);