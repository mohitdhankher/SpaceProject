/**
 *
 * Chart
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import {ResponsiveBar} from '@nivo/bar'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {ifElse} from "@progress/kendo-data-query/dist/npm/funcs";
import {Grid, Paper} from "@material-ui/core";
import './style.css';

const useStyles = makeStyles(theme => ({

    card : {
        height: 590,
        width: '100%',
    }
}));

function Chart() {
  return (

      <div>
          <BarGraph/>
      </div>

  );
}

Chart.propTypes = {};

export default memo(Chart);

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

const pointColor = (data) => {

      // console.log('data.name', data, data.name, typeof (data.name), data.value);
    if (data.indexValue === "Low Risk")
    {
        // return 'rgb(255,207,83)';
        // return 'rgb(255,130,0)';
        return 'rgb(150,0,255)';

    }
    else if (data.indexValue === "Medium Risk")
    {
        return 'rgb(0,250,220)';
    }
    else if (data.indexValue === "No Risk")
    {
        // return 'rgb(166,219,0)'
        // return 'rgb(0,215,185)';
        return 'rgb(0,0,160)';
        // return 'rgb(150,0,255)';
    }
    else if(data.indexValue === "OSS Risk" )
    {
        // return 'rgb(227,0,115)'
        // return 'rgb(150,0,255)';
        return 'rgb(0,215,185)';
    }
    else
    {

        // return 'rgb(255,130,0)';
        return 'rgb(255,50,160)';
    }
};

function BarGraph() {
     const classes=useStyles();
    return (
        <Grid container spacing={1}>


            <Card className={classes.card} elevation={5} style={{margin:'10px 10px 10px 20px'}}>

            <div style={{height: 500, width: 500, alignContent: 'centre'}}>
                <h4 className="heading" style={{color: 'rgb(0,0,160)',marginTop: '18px',marginBottom: '0px'}} align={'center'} >Number of Products by Risk</h4>
                <ResponsiveBar
                    data={data}
                    keys={['value']}
                    indexBy="name"
                    margin={{top: 50, right: 50, bottom: 22, left: 50}}
                    padding={0.45}
                    groupMode="grouped"
                    layout="vertical"
                    colors={pointColor}

                    borderColor="black"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{tickSize: 5, tickPadding: 5, tickRotation: 0, legend:'Types of Risks', legendPosition:'middle',legendOffset: 32}}
                    axisLeft={{
                        tickSize: '12px',
                        tickPadding: 5,
                        tickRotation: 0,
                        tickColor: 'rgb(0,0,260)',
                        legendPosition: 'middle',
                        legendOffset: -30
                    }}
                    gridYValues={5}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={'rgb(255,255,255)'}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemTextColor: 'transparent',
                            itemDirection: 'top-to-bottom',
                            itemOpacity: 0.85,
                            symbolSize: 0,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={false}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </div>
            </Card>
        </Grid>

    );
}
