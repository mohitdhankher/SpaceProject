/**
 *
 * RiskCharts
 *
 */

import React, {memo} from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {FormattedMessage} from "react-intl";
import messages from "./messages";
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import LabelList from "recharts/lib/component/LabelList";
import {Card, Grid, Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({

    card: {
        height: '100%',
        width: '100%',
        margin: '1px',
    },
    heading: {
        margin: '10px',
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'MarsCentra-Book'
    }
}));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const data = [
    {
        name: 'OSS Risk',
        value: getRandomInt(500,700),
    },
    {
        name: 'No Risk',
        value: getRandomInt(20,100),
    },
    {
        name: 'Low Risk',
        value: getRandomInt(100,200),
    },
    {
        name: 'Medium Risk',
        value: getRandomInt(200,300),
    },
    {
        name: 'HS Risk',
        value: getRandomInt(500,740),
    },
];

const pointColor = (data) => {

    console.log('data.name', data, data.name, typeof (data.name), data.value);
    if (data.name === "Low Risk")
    {

        return 'rgba(242, 201, 76, 0.9)';
    }
    else if (data.name === "Medium Risk")
    {
        return 'rgba(255, 182, 117, 0.9)';
    }
    else if (data.name === "No Risk")
    {
        // return 'rgb(166,219,0)'
        return 'rgba(111, 207, 151, 0.9)';
    }
    else if(data.name === "OSS Risk" )
    {
        return 'rgba(251, 115, 115, 0.9)';
    }
    else
    {

        return 'rgba(86, 204, 242, 0.9)';
    }
};

function TickStyles(payload) {
    // console.log('payload>>>',payload);
    return (
        <g transform={`translate(${payload.x},${payload.y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.payload.value}</text>
        </g>
    );
}

function RiskCharts() {
    const classes = useStyles();

    return (
        // <div>
        <React.Fragment  >
            {/*// <Grid container>*/}
            {/*<Card className={classes.card} elevation={3} >*/}
            {/*<Paper style={{width: '80%'}}>*/}
            {/*    <h4 className={classes.heading} align={'left'}>Number of products by Risk</h4>*/}
                <div style={{width: '100%', height: 300}}>
                    <ResponsiveContainer>
                    <BarChart
                        data={data}
                        barSize={40}
                        margin={{
                            top: 20, right: 40, left: 40, bottom: 50,
                        }}
                    >
                        {/*<XAxis dataKey="name"  tick={{fontSize: 12, color: 'cyan'}} style={{fontFamily: 'MarsCentra'}}/>*/}
                        <XAxis dataKey="name"  tick={<TickStyles/> } style={{fontSize:12,fontFamily:"MarsCentra-Book"}} />
                        <YAxis type="number" domain={['auto','auto']} />
                        <Tooltip cursor={{fill:'transparent'}}/>
                        <Bar fontFamily="MarsCentra-Book" dataKey="value" fill="#050000">
                                <LabelList dataKey="value" position="top"/>
                                {
                                    data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pointColor(entry)}/>
                                    ))

                                }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/*</Card>*/}
            {/*</Paper>*/}
            {/*// </Grid>*/}
        {/*</div>*/}
        </React.Fragment>
    );
}

RiskCharts.propTypes = {};

export default memo(RiskCharts);
