/**
 *
 * Header
 *
 */

import React from "react";
// import ReactDOM from "react-dom";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Mars() {
    return (
        <img height={65}
             src="https://www.mars.com/sites/g/files/jydpyr316/files/Mars%20Wordmark%20RGB%20Blue.png"
             alt="Mars logo"
        />
    );
}


const useStyles = makeStyles({
    iconButton: {
        display: "flex",
        flexDirection: "column",
        color: '#0000a0',
        outline: 'none',
    },
    toolbarButtons: {
        marginLeft: "auto",
        // marginRight: -12,
    },
    typography: {
        color: '#0000a0',
        fontWeight: 700,
        fontFamily:'MarsCentra-Extrabold'
    },
    toolbar: {
        display: "flex",
        // marginRight: '76.5vw',
    },
});

export default function Header() {
    const classes = useStyles();

    return (
        <div>
        <AppBar position="static" style={{background: 'white', width: '100%'}}>
            <Toolbar style={{padding: 0}}>
                <Grid container>
                    <div>
                    <Grid item md={2} sm={2} xs={6} style={{ background: 'white', width: '100%'}} >
                        <Mars/>
                    </Grid>
                    </div>
                    <Grid item md={8} sm={4} xs={6} style={{ background: 'white', width: '100%'}} >
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Typography className={classes.typography} variant={"h4"}
                                        style={{
                                            background: 'white',
                                            verticalAlign: 'center',
                                            paddingTop: '23px',
                                        }}>
                                360 CMOS
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item md={2} sm={5} xs={12} style={{ background: 'white', width: '100%'}} >
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight:'-5vw'}}>
                            <IconButton style={{outline: 'none'}} classes={{label: classes.iconButton}}>
                                <AccountCircleIcon/>
                                <Typography variant={"caption"} style={{fontFamily:'MarsCentra-Book'}}>
                                    My Profile
                                </Typography>
                            </IconButton>
                            <IconButton style={{outline: 'none'}} classes={{label: classes.iconButton}}>
                                <ExitToAppIcon/>
                                <Typography variant={"caption"} style={{fontFamily:'MarsCentra-Book'}}>
                                    Logout
                                </Typography>
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
                {/*<Grid item xs={12} sm={6} md={1} style={{background: 'white', margin: '5px 9px 0px 1px'}}>*/}
                {/*    <Mars/>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={12} sm={6} md={8}>*/}
                {/*    <Typography className={classes.typography} variant={"h4"}*/}
                {/*                style={{background: 'white', margin: '20px 0px 4px 15px', align: 'left'}}>*/}
                {/*        360&#176; CMOS Engine*/}
                {/*    </Typography>*/}
                {/*    <Grid>*/}
                {/*        <IconButton classes={{label: classes.iconButton}}>*/}
                {/*            <AccountCircleIcon/>*/}
                {/*            <Typography variant={"caption"}>*/}
                {/*                My Profile*/}
                {/*            </Typography>*/}
                {/*        </IconButton>*/}
                {/*        <IconButton classes={{label: classes.iconButton}}>*/}
                {/*            <ExitToAppIcon/>*/}
                {/*            <Typography variant={"caption"}>*/}
                {/*                Logout*/}
                {/*            </Typography>*/}
                {/*        </IconButton>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Toolbar>
        </AppBar>
        </div>
    );
}

Header.propTypes = {};
