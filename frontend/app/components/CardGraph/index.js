/**
 *
 * CardGraph
 *
 */

import React, {memo} from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {FormattedMessage} from "react-intl";
import messages from "./messages";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';


const useStyles = makeStyles({
    card: {
        height: '100%',
        width: '100%',
        margin: '15px',
        boxShadow: 'rgba(128, 128, 128, 1) 1px 1px 6px, rgba(128, 128, 128, 1) 0px 0px 0px',
    },
    Risk: {
        fontSize: '14px',
        fontFamily: 'MarsCentra-Book'
    },
    Value: {
        fontSize: '40px',
        fontFamily: 'MarsCentra-Book'
    },
    message: {
        fontSize: '12px',
        fontFamily: 'MarsCentra-Book'
    },

    // icon: {
    //     width:"42px",
    //     height:"34px",
    //
    //     marginLeft:'60px'
    // },
    iconLow_Risk: {
        width: "50%",
        height: "20%",
        color: "rgba(242, 201, 76, 0.9)"
    },
    iconHigh_Risk: {
        width: "50%",
        height: "20%",
        color: "rgba(86, 204, 242, 0.9)"
    },
    iconOSS_Risk: {
        width: "50%",
        height: "20%",
        color: "rgba(251, 115, 115, 0.9)"
    },
    iconMedium_Risk: {
        width: "50%",
        height: "20%",
        color: "rgba(255, 182, 117, 0.9)"
    },
    iconNo_Risk: {
        width: "50%",
        height: "20%",
        color: "rgba(111, 207, 151, 0.9)"
    }
});



function CardGraph(props) {
    const getColor = (props) => {

        if (props === "Low Risk") {

            // return 'rgba(242, 201, 76, 0.9)';
            return classes.iconLow_Risk;
        } else if (props === "Medium Risk") {
            return classes.iconMedium_Risk;
        } else if (props === "No Risk") {
            // return 'rgb(166,219,0)'
            return classes.iconNo_Risk;
        } else if (props === "OSS Risk") {
            return classes.iconOSS_Risk;
        } else {

            return classes.iconHigh_Risk;
        }
    };
    const classes = useStyles();
    let color = getColor(props.Risk);
    //let color  = classes.iconLow_Risk
    console.log("Color " + classes.iconLow_Risk);
    return (
        // <Card className={classes.card}  >
        //     <CardContent>
        <Paper style={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems: 'center', height:'300px' }}>
            <Typography className={color} align={'center'} variant={"h3"}>
                <WarningRoundedIcon style={{ fontSize: 40 }}/>
            </Typography>
            <Typography className={classes.Risk} align={'center'} variant={"h3"}>
                {props.Risk}
            </Typography>
            <Typography className={classes.Value} align={'center'} variant={"h3"} gutterBottom={true}>
                {props.Value}
            </Typography>
            <Typography className={classes.message} align={'center'} variant={"h3"} gutterBottom={true}>
                {props.message}
            </Typography>
        </Paper>
        // </CardContent>
        // </Card>
    )
}

CardGraph.propTypes = {
    Risk: PropTypes.string,
    Value: PropTypes.number,
    message: PropTypes.string,
};

export default memo(CardGraph);


