/**
 *
 * NavigationTabs
 *
 */

import React, {memo} from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {FormattedMessage} from "react-intl";
import messages from "./messages";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import SideFilter from "../ControlPanel/Loadable";
import Filter from "../Filter";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";



function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel" React
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: '#ffffff',
        color: "#000000",

    },
    customizeTab: {
        fontWeight: 700,
        fontSize:'13px',
        minWidth: 50,
    },
}));


function NavigationTabs({getdata}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const preventDefault = event => event.preventDefault();
    return (
        // <div style={{height:'100vh'}} >
            <Grid container>
                <Grid item xs={12} sm={12} md={12} >
                    <Paper elevation={10} style={{marginTop: '20px'}} >
                        <AppBar className={classes.root} position="static"  >
                            <Tabs value={value} onChange={handleChange} indicatorColor="primary">
                                <Tab  className={classes.customizeTab} style={{outline:'none',fontFamily:'MarsCentra-Book', width: '50%',padding:0, textTransform:'capitalize'}} label="Control Panel" {...a11yProps(0)} />
                                <Tab className={classes.customizeTab} style={{outline:'none',fontFamily:'MarsCentra-Book', width: '50%',padding:0, textTransform:'capitalize'}} label="Filters" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} className={classes.customizeTab}>
                            <SideFilter  getDATA = {getdata}/>
                        </TabPanel>
                        <TabPanel value={value} className={classes.customizeTab} index={1}>
                            <Filter/>
                        </TabPanel>
                    </Paper>
                </Grid>
            </Grid>
        // </div>


    );
}




NavigationTabs.propTypes = {};

export default memo(NavigationTabs);
