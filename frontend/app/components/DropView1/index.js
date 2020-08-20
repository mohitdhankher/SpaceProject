/**
 *
 * DropView1
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import {FormControlLabel} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import './style.css';
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";



const useStyles = makeStyles(theme => ({
        button: {
            display: 'block',
            marginTop: "1%",
        },
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 120,
        },
        textBold:{
            fontWeight:"bolder"
        }
    }),
);


function DropView1() {
    const classes = useStyles();

  return (
    <React.Fragment>
        <Grid container className="centerDrop">
            <Grid xs={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                        CTA
                    </InputLabel>
                    <NativeSelect
                        className="dropdownC"
                        // value={state.age}
                        // onChange={handleChange}
                        // inputProps={{
                        //     name: 'age',
                        //     id: 'age-native-label-placeholder',
                        // }}
                    >
                        {/*<option value="">None</option>*/}
                        <option value={10}>New York</option>
                        <option value={20}>Boston</option>
                        <option value={30}>California</option>
                        <option value={40}>Washington</option>

                    </NativeSelect>
                    {/*<FormHelperText>Time Period</FormHelperText>*/}
                </FormControl>
            </Grid>
            <Grid xs={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                        PPG
                    </InputLabel>
                    <NativeSelect
                        className="dropdownC"
                        // value={state.age}
                        // onChange={handleChange}
                        // inputProps={{
                        //     name: 'age',
                        //     id: 'age-native-label-placeholder',
                        // }}
                    >
                        {/*<option value="">None</option>*/}
                        <option value={10}>M&M</option>
                        <option value={20}>Snickers</option>
                        <option value={30}>Twix</option>
                        <option value={40}>Dove</option>

                    </NativeSelect>
                    {/*<FormHelperText>Time Period</FormHelperText>*/}
                </FormControl>

            </Grid>
            <Grid xs={4}>
                <FormControl className={classes.formControl}>
                    <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                        TACTIC
                    </InputLabel>
                    <NativeSelect
                        className="dropdownC"
                        // value={state.age}
                        // onChange={handleChange}
                        // inputProps={{
                        //     name: 'age',
                        //     id: 'age-native-label-placeholder',
                        // }}
                    >
                        {/*<option value="">None</option>*/}
                        <option value={10}>Media</option>
                        <option value={20}>Shopper</option>
                        <option value={30}>Trade Promo</option>
                        <option value={40}>Consumer Promo</option>

                    </NativeSelect>
                    {/*<FormHelperText>Time Period</FormHelperText>*/}
                </FormControl>

            </Grid>
        </Grid>
    </React.Fragment>
  );
}

DropView1.propTypes = {};

export default memo(DropView1);
