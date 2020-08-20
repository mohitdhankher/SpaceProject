/**
 *
 * ControlPanel
 *
 */

import React, {memo, useState} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {FormattedMessage} from "react-intl";
import messages from "./messages";
import Card from "@material-ui/core/Card";
import NavigationTabs from "../NavigationTabs";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import InputAdornment from "@material-ui/core/InputAdornment";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";


const useStyles = makeStyles(theme => ({
    tabs: {
        width: '100%',
        background: 'white',
    },
    button: {
        // margin: '10px',
        // marginBottom: 25,
        background: '#0000a0',
        fontFamily: 'MarCentra-Book',
        // width: '112px',
        // height: '30px',
        fontSize: '10px',
        fontWeight: 500,
        borderRadius: '4px',
        // marginLeft: '50px',
        textTransform:'capitalize',

    },
    headings: {
        // fontWeight: 'bold',
        fontFamily: 'MarsCentra-Extrabold',
        fontSize: 12,
        marginBottom:10,

    },
    subHeading: {
        margin: '5px',
        fontSize: 12,
        fontFamily: 'MarsCentra-Book',
        color: '#ffffff',
        fontWeight: 600,
    },
    percentage: {
        fontSize: 30,
        fontFamily: 'MarsCentra-Book',
        color: '#ffffff',
        fontWeight: 600,
    },
    card: {
        maxWidth: '100%'
    },
    input: {
        margin: '10px',
        width: 60,
    },
    radio: {
        width: '100%',
    },
    textField: {
        fontSize: 12,
        fontFamily: 'MarsCentra-Book',
        width: '90px',
        border: '1px dashed #9E0000',
    },

    formControl: {
        marginBottom: 20,
        display: "flex",
    }
}));

function SideFilter({getDATA}) {
    const classes = useStyles();
    const [Hrisk, setHRisk] = useState("");
    const [HriskValid, setHriskValid] = useState("")
    const HriskHandler = (evt) => {
        let Value = evt.target.value;
        console.log("RISK  " + Value);
        setHRisk(Value);
        if (Value % 10 & Value <= 100) {
            setHriskValid("Invalid input")
        } else {
            setHriskValid("");
        }
    }

    const [Lrisk, setLRisk] = useState("");
    const [LriskValid, setLriskValid] = useState("")
    const LriskHandler = (evt) => {
        let Value = evt.target.value;
        console.log("RISK  " + Value);
        setLRisk(Value);
        if (Value % 10 & Value <= 100) {
            setLriskValid("Invalid input")
        } else {
            setLriskValid("");
        }
    }

    const submitHandler = () => {
        getDATA(Hrisk, Lrisk);
    }
    return (
        <div >
            <div style={{ marginBottom: 8}}>

                <h6 className={classes.headings}>Risk Classification Duration</h6>
                <Grid container item={24} style={{display: 'flex', flexDirection: 'row', justifyContent: "center", margin: 'auto'}}  >
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center",margin:'auto', width: '100%'}}>
                    <Grid item xs={12} sm={12} md={11} style={{padding: 2}}>
                    <Typography style={{fontSize: '10px',fontFamily:'MarsCentra-Book', margin:'0px 2px 0px 0px'}}>Include next</Typography>
                    </Grid>
                        <Grid item xs={12} sm={8} md={6}  style={{padding: 2}}>
                    <input  style={{width:'40px', display:'block',  height:'20px', margin:"auto"}} />
                        </Grid>
                            <Grid item xs={12} sm={11} md={12}  style={{padding: 1}}>
                        <input type="radio"  /> <label style={{fontSize: '10px',fontFamily:'MarsCentra-Book'}}>days</label>
                            </Grid>
                                <Grid item xs={12} sm={11} md={12}  style={{padding: 1}}>
                        <input type="radio"  /> <label style={{fontSize: '10px',fontFamily:'MarsCentra-Book'}}>weeks</label>
                                </Grid>
                    {/*<FormControl component="fieldset">*/}
                    {/*    <RadioGroup aria-label="position" name="position" row>*/}
                    {/*        <FormControlLabel*/}
                    {/*            value="end"*/}
                    {/*            control={<Radio color="primary"/>}*/}
                    {/*            label={<span style={{fontSize: '12px', fontFamily: "MarsCentra-Book"}}>days</span>}*/}
                    {/*            labelPlacement="end"*/}
                    {/*        />*/}
                    {/*        <FormControlLabel*/}
                    {/*            value="end"*/}
                    {/*            control={<Radio color="primary"/>}*/}
                    {/*            label={<span style={{fontSize: '12px', fontFamily: "MarsCentra-Book"}}>weeks</span>}*/}
                    {/*            labelPlacement="end"*/}
                    {/*        />*/}
                    {/*    </RadioGroup>*/}
                    {/*</FormControl>*/}
                </div>
                </Grid>
                {/*<div style={{display: "flex", flexDirection: "row"}}>*/}
                {/*    /!*<FormControl component="fieldset" className={classes.formControl}>*!/*/}
                {/*    /!*    <RadioGroup aria-label="duration" name="riskDuration" >*!/*/}
                {/*    /!*        <FormControlLabel style={{margin:0}} value="Days" className={classes.radio} control={<Radio/>} label={<span style={{ fontSize: '12px', fontFamily: "MarsCentra-Book" }}>Days</span>}/>*!/*/}
                {/*    /!*        <FormControlLabel style={{margin:0}} value="Weeks" className={classes.radio} control={<Radio/>} label={<span style={{ fontSize: '12px', fontFamily: "MarsCentra-Book" }}>Weeks</span>}/>*!/*/}
                {/*    /!*    </RadioGroup>*!/*/}
                {/*    /!*</FormControl>*!/*/}
                {/*   */}
                {/*</div>*/}
            </div>
            <Divider/>
            <div>
                <h6 className={classes.headings} style={{marginTop:8}}>Risk Percentage Boundaries</h6>
            </div>
            <Grid container style={{backgroundColor: "rgba(86, 204, 242, 0.9)", margin: '10px 0px 10px 0px',borderRadius:4, alignItems: 'center'}}>
                <Grid item md={4} sm={4} xs={4}>
                    <Typography className={classes.subHeading}>High Risk</Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                    <Tooltip title="Enter number only in multiples of 10">
                        <TextField
                            style={{backgroundColor: '#fff', margin: '5px'}}
                            className={classes.textField}
                            size={"small"}
                            type="number"
                            value={Hrisk}
                            error={HriskValid !== ""}
                            id="highRisk"
                            //label="High Risk"
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={HriskHandler}
                            helperText={HriskValid}
                        />
                    </Tooltip>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                    <Typography className={classes.percentage} style={{margin: 'auto'}}>%</Typography>
                </Grid>
            </Grid>
            <Grid container style={{backgroundColor: "rgba(242, 201, 76, 0.9)", margin: '10px 0px 10px 0px',borderRadius:4, alignItems: 'center'}}>
                <Grid item md={4} sm={4} xs={4}>
                    <Typography className={classes.subHeading}>Low Risk </Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                    <Tooltip title="Enter number only in multiples of 10">
                    <TextField
                        style={{backgroundColor: '#fff', margin: '5px'}}
                        className={classes.textField}
                        size={"small"}
                        type="number"
                        value={Lrisk}
                        id="lowRisk"
                        //label="Low Risk"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={LriskHandler}
                        helperText={LriskValid}
                    />
                    </Tooltip>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                    <Typography className={classes.percentage} style={{margin: 'auto'}}>%</Typography>
                </Grid>
            </Grid>
            <Grid container style={{backgroundColor: "rgba(251, 115, 115, 0.9)", margin: '10px 0px 10px 0px',borderRadius:4, alignItems: 'center'}}>
                <Grid item md={4} sm={4} xs={4}>
                    <Typography className={classes.subHeading} >OOS </Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                    <Tooltip title="Enter number only in multiples of 10">
                    <TextField
                        style={{backgroundColor: '#fff', margin: '5px'}}
                        className={classes.textField}
                        type="number"
                        size={"small"}
                        //value={Hrisk}
                        //error={HriskValid !== ""}
                        //id="highRisk"
                        //label="High Risk"
                        autoComplete="current-password"
                        variant="outlined"
                        //onChange={HriskHandler}
                        //helperText={HriskValid}

                    />
                    </Tooltip>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                    <Typography className={classes.percentage} style={{margin: 'auto'}}>%</Typography>
                </Grid>
            </Grid>
            <Grid container style={{backgroundColor: "rgba(255, 182, 117, 0.9)", margin: '10px 0px 10px 0px',borderRadius:4, alignItems: 'center'}}>
                <Grid item md={4} sm={4} xs={4}>
                    <Typography className={classes.subHeading}>Medium Risk </Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                    <Tooltip title="Enter number only in multiples of 10">
                    <TextField
                        style={{backgroundColor: '#fff', margin: '5px'}}
                        className={classes.textField}
                        type="number"
                        size={"small"}
                        //value={Hrisk}
                        //error={HriskValid !== ""}
                        //id="highRisk"
                        //label="High Risk"
                        autoComplete="current-password"
                        variant="outlined"
                        //onChange={HriskHandler}
                        //helperText={HriskValid}

                    />
                    </Tooltip>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                    <Typography className={classes.percentage}>%</Typography>
                </Grid>
            </Grid>
            <Divider/>
            <div>
                <h6 className={classes.headings} style={{marginTop: 8}}>Include in Projection</h6>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="duration" name="riskDuration">
                        <FormControlLabel style={{margin: 0}} value="QI" control={<Radio/>}
                                          label={<span style={{fontSize: '12px', fontFamily: "MarsCentra-Book"}}>QI</span>}/>
                        <FormControlLabel style={{margin: 0}} value="Maturation" control={<Radio/>}
                                          label={<span style={{fontSize: '12px', fontFamily: "MarsCentra-Book"}}>Maturation</span>}/>
                        <FormControlLabel style={{margin: 0}} value="Transit" control={<Radio/>}
                                          label={<span style={{fontSize: '12px', fontFamily: "MarsCentra-Book"}}>Transit</span>}/>
                        <FormControlLabel style={{margin: 0}} value="Predicted Arrival" control={<Radio/>}
                                          label={<span style={{fontSize: '12px', fontFamily: "MarsCentra-Book"}}>Predicted Arrival</span>}/>
                    </RadioGroup>
                </FormControl>
            </div>
            <div style={{textAlignLast:'center'}}>
                <Button variant="contained" color="primary" onClick={submitHandler} style={{textAlign:'centre'}} className={classes.button}>
                    Save Settings
                </Button>

            </div>
        </div>
    );
}

SideFilter.propTypes = {};

export default memo(SideFilter);