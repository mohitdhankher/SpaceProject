/**
 *
 * CurveProfit
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

let options={
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
// subtitle: {
//     text: 'Source: WorldClimate.com'
// },
//     xAxis: {
//         categories: ['P2W4', 'P3W1', 'P3W2', 'P3W3', 'P3W4','...']
//     },
    xAxis: {
        gridLineColor: false,
        title: {
            text: 'Spend($)'
        },
        labels: {
            formatter: function () {
                return this.value * 1000/2;
            }
        }
    },
    yAxis: {
        gridLineColor: false,
        title: {
            text: 'Profit($)'
        },
        labels: {
            formatter: function () {
                return this.value * 1000/2;
            }
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 0,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        color:'rgb(10,0,150)',
        lineWidth:3,
        data: [7.0, 6.9, 9.5, 14.5,{
            y: 26.5,
            // marker: {
            //     // symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            // }
        }, 23.3]

    }, {
            data: [[4,0],[4,1],[4,2],[4, 3], [4, 4], [4, 5],[4, 6],[4, 7],[4, 8],[4, 9],[4, 10],[4, 11],[4, 12],[4, 13],[4, 14],[4, 15],[4, 16],[4, 17],[4, 18],[4, 19],[4, 20],[4, 21],[4, 22],[4, 23],[4, 24],[4, 25],[4, 26],[4, 27],[4, 28],[4, 29],[4, 30]],
            dashStyle: 'shortdot'
        }
        ]
};

function CurveProfit() {
  return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

CurveProfit.propTypes = {};

export default memo(CurveProfit);
