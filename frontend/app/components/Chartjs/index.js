/**
 *
 * Chartjs
 *
 */

import React, { memo } from "react";
import {Bar} from 'react-chartjs-2';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";

function Chartjs() {
  return (
    <div>
      <ChartJS/>
    </div>
  );
}

Chartjs.propTypes = {};

export default memo(Chartjs);



const data = [
    {
        name: 'OSS Risk',
        value: 586,
    },
    {
        name: 'No Risk',
        value: 210,
    },
    {
        name: 'Medium Risk',
        value: 60,
    },
    {
        name: 'Low Risk',
        value: 90,
    },
    {
        name: 'High Stock Risk',
        value: 596,
    },
];

function ChartJS()
    {

        return (
            <Grid container spacing={1}>


                <Card className={classes.card} elevation={5} style={{margin:'10px 10px 10px 20px'}}>

                    <div style={{height: 300, width: 500, margin: 'auto', alignContent: 'centre'}}>
                        <h4 className="heading" style={{color: 'rgb(0,0,160)',marginTop: '18px',marginBottom: '0px'}} align={'center'} >Number of Products by Risk</h4>

                        <Bar
                    data={data}
                    width={300}
                    height={500}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
                </Card>
            </Grid>
        );
}