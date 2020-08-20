/**
 *
 * NavLinks
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
        flexGrow: 1,
        width: '50%',
        background: '#0000a0',
        color: '#ffffff'

    },
    customizeTab: {
        fontWeight: 900,
        minWidth: 100,
        selectedTextColor:'rgb(0,215,185)',
        fontFamily: 'MarsCentra-Book'

    },
}));

function NavLinks() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const preventDefault = event => event.preventDefault();
    return (
        <Grid container>
            <AppBar className={classes.root} position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    width= '100%'
                >
                    <NavLink to='/Newdashboard' style={{color:'#ffffff'}} activeStyle={{color:'rgb(0,215,185)'}}><Tab style={{outline:'none',selectedTextColor:'rgb(0,215,185)',textTransform:'capitalize'}} indicatorColor={'rgb(0,215,185)'} label="Perpetual Inventory" {...a11yProps(0)} className={classes.customizeTab}>
                    </Tab></NavLink>
                    <NavLink to='/scenarios' style={{color:'#ffffff'}} activeStyle={{color:'rgb(0,215,185)'}}><Tab style={{outline:'none',selectedTextColor:'rgb(0,215,185)',textTransform:'capitalize'}} indicatorColor={'rgb(0,215,185)'} label="Scenarios" {...a11yProps(1)} className={classes.customizeTab}>
                    </Tab></NavLink>
                </Tabs>
            </AppBar>
        </Grid>
    );
}
NavLinks.propTypes = {};
export default memo(NavLinks);
