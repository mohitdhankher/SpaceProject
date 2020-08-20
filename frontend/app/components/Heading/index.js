/**
 *
 * Heading
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    typography: {
        color: "#0000a0",
        marginLeft: "34vw",
        fontWeight: 600,
        fontSize: '30px',
        fontFamily: 'MarsCentra-Book'
    }
}));


function Heading() {
    const classes = useStyles();

    return (

        <div className={classes.root}>

            <AppBar position="relative" style={{ background: 'white'}}>
                <Toolbar variant="dense">
                    <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6" className={classes.typography} style={{margin: 'auto', align: 'left'}}>
                        Perpetual Inventory - Overview
                    </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>

    );
}

Heading.propTypes = {};

export default memo(Heading);
