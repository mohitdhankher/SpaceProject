/**
 *
 * RoiProfitGraph
 *
 */

import React, { memo,useEffect } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './style.css';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


function RoiProfitGraph() {
    useEffect(() => {
        let chart = am4core.create("chartProfit", am4charts.XYChart);
        chart.paddingTop=20;
        let title = chart.titles.create();
        title.text = "Profit Curve";
        title.fontSize = 15;
        title.marginBottom = 20;
        title.paddingLeft = 150;


        chart.data = [
            {value2:10, value1:10,value3:34},
            {value2:11, value1:10,value3:34},
            {value2:12, value1:12,value3:34},
            {value2:15, value1:14,value3:34},
            {value2:16, value1:16,value3:34},
            {value2:22, value1:20,value3:34},
            {value2:24, value1:22,value3:34},
            {value2:26, value1:25,value3:34},
            {value2:28, value1:26,value3:34},
            {value2:30, value1:28,value3:34},
            {value2:34, value1:30,value3:34},
            {value2:36, value1:30,value3:34},
            {value2:37, value1:30,value3:34},
            {value2:40, value1:30,value3:34},
            { value1:31,value3:34},
            { value1:32,value3:34},
            { value1:33,value3:34},
            { value1:34,value3:34},
            {value2:41, value1:30,value3:34},
            {value2:42, value1:30,value3:34},
            {value2:44, value1:30,value3:34},
            {value2:46, value1:30,value3:34},



        ];

// Create axes
        let valueAxis1 = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis1.renderer.minGridDistance = 50;
        valueAxis1.renderer.grid.template.disabled = true;
        valueAxis1.title.text = "Spends($)";
        valueAxis1.renderer.labels.template.adapter.add("text", function(text) {
            return text + "M";
        });



        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.title.text = "Profit($)";
        valueAxis.renderer.labels.template.adapter.add("text", function(text) {
            return text + "K";
        });






// Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value1";
        series.dataFields.valueX = "value2";
        series.strokeWidth = 2;
        series.tensionX = 0.77;
        series.minBulletDistance = 10;
        series.tooltipText = "[bold]{date.format}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
        series.tooltip.pointerOrientation = "vertical";

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "value1";
        series2.dataFields.valueX = "value3";
        series2.strokeWidth = 2;
        series2.strokeDasharray = "3,4";
        series2.minBulletDistance = 10;
        series2.tooltipText = "[bold]{date.format}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";




// // Add cursor
//     chart.cursor = new am4charts.XYCursor();
//     chart.cursor.xAxis = dateAxis;


// set stroke property field
        series.propertyFields.stroke = "color";

        chart.cursor = new am4charts.XYCursor();

        // let scrollbarX = new am4core.Scrollbar();
        // chart.scrollbarX = scrollbarX;

        // dateAxis.start = 0.7;
        // dateAxis.keepSelection = true;

    })

    return (
        <div id="chartProfit">
        </div>
    );
}

RoiProfitGraph.propTypes = {};

export default memo(RoiProfitGraph);
