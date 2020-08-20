/**
 *
 * RoiRevenueGraph
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


function RoiRevenueGraph() {
  useEffect(() => {
    let chart = am4core.create("chartRevenue", am4charts.XYChart);
    chart.paddingTop=20;
    let title = chart.titles.create();
    title.text = "Revenue Curve";
    title.fontSize = 15;
    title.marginBottom = 20;
    title.paddingLeft = 140;

    chart.data = [
        {value2:20, value1:10,value3:42},
        {value2:24, value1:11,value3:42},
        {value2:26, value1:12,value3:42},
        {value2:28, value1:13,value3:42},
        {value2:30, value1:14,value3:42},
        {value2:32, value1:15,value3:42},
        {value2:34, value1:16,value3:42},
        {value2:36, value1:17,value3:42},
        {value2:38, value1:18,value3:42},
        {value2:40, value1:19,value3:42},
        // {value2:42, value1:20,value3:42},
        // {value2:44, value1:21,value3:42},
        // {value2:42, value1:22,value3:42},
        // {value2:40, value1:23,value3:42},





        // {value2:20, value1:10,value3:42},
      // {value2:23, value1:11,value3:42},
      // {value2:26, value1:12,value3:42},
      // {value2:30, value1:13,value3:42},
      // {value2:32, value1:14,value3:42},
      // {value2:35, value1:30,value3:42},
      // {value2:40, value1:40,value3:42},
      // {value2:41, value1:42,value3:42},
      // {value2:42, value1:43,value3:42},
      // {value2:43, value1:43,value3:42},
      // {value2:44, value1:43,value3:42},
      // {value2:45, value1:43,value3:42},
      // {value2:46, value1:43,value3:42},
      // {value2:47, value1:43,value3:42},
      // {value2:47, value1:43,value3:42},
      // { value1:43,value3:42},
      // { value1:44,value3:42},
      // { value1:45,value3:42},
      // { value1:46,value3:42},




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
    valueAxis.title.text = "Revenue($)";
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "K";
    });






// Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value1";
    series.dataFields.valueX = "value2";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    // series.bullets.push(new am4charts.CircleBullet());
    series.bullets.strokeWidth = 1;
    series.tooltipText = "Revenue:{value1}"
    series.tensionX = 0.8;
    series.tensionY = 0.8;
    series.tooltip.pointerOrientation = "vertical";


    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value1";
    series2.dataFields.valueX = "value3";
    series2.strokeWidth = 2;
    series2.strokeDasharray = "3,4";
    series2.minBulletDistance = 10;
    series2.tooltipText = "[bold]{date.format}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";




// // Add cursor
    chart.cursor = new am4charts.XYCursor();
//     chart.cursor.xAxis = dateAxis;


// set stroke property field
    series.propertyFields.stroke = "color";

    // chart.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarX = scrollbarX;

    // dateAxis.start = 0.7;
    // dateAxis.keepSelection = true;

  })
    
  return (
    <div id="chartRevenue">
    </div>
  );
}

RoiRevenueGraph.propTypes = {};

export default memo(RoiRevenueGraph);
