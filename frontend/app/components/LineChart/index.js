/**
 *
 * LineChart
 *
 */

import React, { memo, useEffect } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import "./style.css";
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './style.css';
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



function LineChart() {

  useEffect(()=>{
    // Add data
    let chart = am4core.create("chartdivgraphLine", am4charts.XYChart);

    chart.data = [{
      "date": "2019-11-01",
      "value": 100,
      "value2": 49,
      "value3":52,
      "value4":51,
      "value5":59


    }, {
      "date": "2019-11-02",
      "value": 120,
      "value2": 49,
      "value3":68,
      "value4":69,
      "value5":70


    }, {
      "date": "2019-11-03",
      "value": 110,
      "value2": 49,
      "value3": 67,
      "value4": 64,
      "value5": 63


    }, {
      "date": "2019-11-04",
      "value": 150,
      "value2": 49,
      "value3":43,
      "value4":70,
      "value5": 78


    }, {
      "date": "2019-11-05",
      "value": 150,
      "value2": 49,
      "value3":50,
      "value4":55,
      "value5": 51


    }, {
      "date": "2019-11-06",
      "value": 136,
      "value2": 49,
      "value3": 73,
      "value4": 72,
      "value5": 74


    }, {
      "date": "2019-11-07",
      "value": 145,
      "value2": 49,
      "value3":50,
      "value4":51,
      "value5":56


    }, {
      "date": "2019-11-08",
      "value": 145,
      "value2": 49,
      "value3": 75,
      "value4": 73,
      "value5": 78


    }, {
      "date": "2019-11-09",
      "value": 140,
      "value2": 49,
      "value3": 78,
      "value4": 74,
      "value5": 56


    }, {
      "date": "2019-11-10",
      "value": 165,
      "value2": 75,
      "value3":78,
      "value4":74,
      "value5":72


    }, {
      "date": "2019-11-11",
      "value": 147,
      "value2": 87,
      "value3": 88,
      "value4": 83,
      "value5": 82


    }, {
      "date": "2019-11-12",
      "value": 169,
      "value2": 90,
      "value3": 93,
      "value4": 92,
      "value5": 94

    }, {
      "date": "2019-11-13",
      "value": 189,
      "value2": 83,
      "value3": 96,
      "value4": 83,
      "value5": 82

    }, {
      "date": "2019-11-14",
      "value": 187,
      "value2": 80,
      "value3": 83,
      "value4": 84,
      "value5": 85

    }, {
      "date": "2019-11-15",
      "value": 177,
      "value2": 85,
      "value3": 83,
      "value4": 82,
      "value5": 89


    }, {
      "date": "2019-11-16",
      "value": 182,
      "value2": 49,
      "value3": 84,
      "value4": 89,
      "value5": 87


    }, {
      "date": "2019-11-17",
      "value": 166,
      "value2": 49,
      "value3":69,
      "value4":56,
      "value5": 80


    }, {
      "date": "2019-11-18",
      "value": 180,
      "value2": 49,
      "value3":48,
      "value4":76,
      "value5": 50


    }, {
      "date": "2019-11-19",
      "value": 187,
      "value2": 49,
      "value3": 59,
      "value4": 53,
      "value5": 89


    }, {
      "date": "2019-11-20",
      "value": 170,
      "value2": 49,
      "value3": 84,
      "value4": 83,
      "value5": 80


    }, {
      "date": "2019-11-21",
      "value": 190,
      "value2": 49,
      "value3":33,
      "value4":56,
      "value5":90


    }, {
      "date": "2019-11-22",
      "value": 179,
      "value2": 49,
      "value3": 45,
      "value4": 89,
      "value5": 82


    }, {
      "date": "2019-11-23",
      "value": 180,
      "value2": 49,
      "value3":87,
      "value4":76,
      "value5":60


    }, {
      "date": "2019-11-24",
      "value": 190,
      "value2": 49,
      "value3": 72,
      "value4": 71,
      "value5": 70


    }, {
      "date": "2019-11-25",
      "value": 200,
      "value2": 45,
      "value3": 78,
      "value4": 74,
      "value5": 73


    }, {
      "date": "2019-11-26",
      "value": 176,
      "value2": 79,
      "value3": 78,
      "value4": 73,
      "value5": 72


    }, {
      "date": "2019-11-27",
      "value": 179,
      "value2": 89,
      "value3":43,
      "value4":66,
      "value5":40


    }, {
      "date": "2019-11-28",
      "value": 170,
      "value2": 69,
      "value3": 42,
      "value4": 43,
      "value5": 74


    }, {
      "date": "2019-11-29",
      "value": 173,
      "value2": 39,
      "value3":63,
      "value4": 76,
      "value5": 50


    }, {
      "date": "2019-11-30",
      "value": 161,
      "value2": 63,
      "value3":73,
      "value4": 67,
      "value5": 76



    }, {
      "date": "2019-12-01",
      "value": 187,
      "value2": 59,
      "value3":56,
      "value4": 46,
      "value5": 70


    }, {
      "date": "2019-12-02",
      "value": 166,
      "value2": 68,
      "value3":53,
      "value4": 66,
      "value5":78


    }, {
      "date": "2019-12-03",
      "value": 165,
      "value2": 56,
      "value3":54,
      "value4": 66,
      "value5": 67


    }, {
      "date": "2019-12-04",
      "value": 173,
      "value2": 72,
      "value3":53,
      "value4": 66,
      "value5": 80


    }, {
      "date": "2019-12-05",
      "value": 179,
      "value2": 80,
      "value3":73,
      "value4": 61,
      "value5": 63


    }, {
      "date": "2019-12-06",
      "value": 178,
      "value2": 68,
      "value3":53,
      "value4": 46,
      "value5": 50


    }, {
      "date": "2019-12-07",
      "value": 178,
      "value2": 69,
      "value3":67,
      "value4":63,
      "value5":89


    }, {
      "date": "2019-12-08",
      "value": 178,
      "value2": 80,
      "value3":81,
      "value4":85,
      "value5":83


    }, {
      "date": "2019-12-09",
      "value": 174,
      "value2": 59,
      "value3":53,
      "value4": 76,
      "value5": 67


    }, {
      "date": "2019-12-10",
      "value": 173,
      "value2": 72,
      "value3":76,
      "value4": 79,
      "value5": 73

    }, {
      "date": "2019-12-11",
      "value": 175,
      "value2": 73,
      "value3":78,
      "value4": 75,
      "value5": 74

    }, {
      "date": "2019-12-12",
      "value": 170,
      "value2": 69,
      "value3":87,
      "value4": 66,
      "value5": 79

    }, {
      "date": "2019-12-13",
      "value": 177,
      "value2": 74,
      "value3":73,
      "value4": 72,
      "value5": 75,

    }, {
      "date": "2019-12-14",
      "value": 167,
      "value2": 62,
      "value3":65,
      "value4": 66,
      "value5": 68

    }, {
      "date": "2019-12-15",
      "value": 162,
      "value2": 65,
      "value3":63,
      "value4": 66,
      "value5": 70

    }, {
      "date": "2019-12-16",
      "value": 164,
      "value2": 65,
      "value3":63,
      "value4":69,
      "value5": 80

    }, {
      "date": "2019-12-17",
      "value": 161,
      "value2": 68,
      "value3":78,
      "value4": 56,
      "value5": 70

    }, {
      "date": "2019-12-18",
      "value": 159,
      "value2": 49,
      "value3":46,
      "value4": 56,
      "value5": 73


    }, {
      "date": "2019-12-19",
      "value": 153,
      "value2": 50,
      "value3":56,
      "value4":52,
      "value5":54


    },
      {
        "date": "2019-12-20",
        "value": 154,
        "value2": 34,
        "value3":39,
        "value4": 56,
        "value5": 60

      }, {
        "date": "2019-12-21",
        "value": 156,
        "value2": 55,
        "value3":52,
        "value4": 46,
        "value5": 50


      }, {
        "date": "2019-12-22",
        "value": 159,
        "value2": 54,
        "value3":56,
        "value4": 66,
        "value5": 63


      }, {
        "date": "2019-12-23",
        "value": 158,
        "value2": 56,
        "value3":54,
        "value4": 46,
        "value5": 49

      }, {
        "date": "2019-12-24",
        "value": 155,
        "value2": 52,
        "value3":53,
        "value4":65,
        "value5": 80

      }, {
        "date": "2019-12-25",
        "value": 152,
        "value2": 58,
        "value3":67,
        "value4": 46,
        "value5": 81

      }, {
        "date": "2019-12-26",
        "value": 154,
        "value2": 52,
        "value3":55,
        "value4": 56,
        "value5": 54

      }, {
        "date": "2019-12-27",
        "value": 150,
        "value2": 53,
        "value3":43,
        "value4": 76,
        "value5": 50

      }, {
        "date": "2019-12-28",
        "value": 150,
        "value2": 40,
        "value3":43,
        "value4":66,
        "value5":70

      }, {
        "date": "2019-12-29",
        "value": 151,
        "value2":59,
        "value3":63,
        "value4":72,
        "value5": 76

      },
      {
        "date": "2019-12-30",
        "value": 152,
        "value2": 50,
        "value3":57,
        "value4": 66,
        "value5": 70

      }, {
        "date": "2019-12-31",
        "value": 158,
        "value2": 72,
        "value3":63,
        "value4":76,
        "value5":60

      }, {
        "date": "2020-01-01",
        "value": 160,
        "value2": 77,
        "value3":75,
        "value4": 66,
        "value5": 60

      }, {
        "date": "2020-01-02",
        "value": 167,
        "value2": 56,
        "value3":57,
        "value4": 66,
        "value5": 65

      }, {
        "date": "2020-01-03",
        "value": 164,
        "value2": 68,
        "value3":64,
        "value4": 66,
        "value5":68

      }, {
        "date": "2020-01-04",
        "value": 166,
        "value2": 63,
        "value3":62,
        "value4":70,
        "value5":72

      }, {
        "date": "2020-01-05",
        "value": 160,
        "value2": 55,
        "value3":58,
        "value4": 66,
        "value5": 40

      }, {
        "date": "2020-01-06",
        "value": 163,
        "value2": 62,
        "value3":64,
        "value4": 76,
        "value5": 71

      }, {
        "date": "2020-01-07",
        "value": 161,
        "value2": 63,
        "value3":45,
        "value4": 66,
        "value5": 73

      }, {
        "date": "2020-01-08",
        "value": 160,
        "value2": 53,
        "value3":45,
        "value4": 86,
        "value5": 50

      }, {
        "date": "2020-01-09",
        "value": 165,
        "value2": 69,
        "value3":75,
        "value4": 86,
        "value5": 90

      }, {
        "date": "2020-01-10",
        "value": 175,
        "value2": 74,
        "value3":73,
        "value4": 46,
        "value5": 50

      }, {
        "date": "2020-01-11",
        "value": 177,
        "value2": 71,
        "value3":72,
        "value4": 54,
        "value5": 57

      }, {
        "date": "2020-01-12",
        "value": 178,
        "value2": 76,
        "value3":67,
        "value4": 66,
        "value5": 60

      }, {
        "date": "2020-01-13",
        "value": 170,
        "value2": 65,
        "value3":69,
        "value4":68,
        "value5":75

      }, {
        "date": "2020-01-14",
        "value": 170,
        "value2": 69,
        "value3":67,
        "value4": 56,
        "value5": 76

      }, {
        "date": "2020-01-15",
        "value": 173,
        "value2": 78,
        "value3":79,
        "value4": 46,
        "value5": 60

      }, {
        "date": "2020-01-16",
        "value": 171,
        "value2": 72,
        "value3":78,
        "value4": 54,
        "value5": 76

      }, {
        "date": "2020-01-17",
        "value": 174,
        "value2": 75,
        "value3":64,
        "value4": 56,
        "value5": 80

      }, {
        "date": "2020-01-18",
        "value": 178,
        "value2": 77,
        "value3":78,
        "value4": 56,
        "value5": 89

      }, {
        "date": "2020-01-19",
        "value": 185,
        "value2": 88,
        "value3":83,
        "value4": 56,
        "value5": 70

      }, {
        "date": "2020-01-20",
        "value": 182,
        "value2": 80,
        "value3":83,
        "value4": 86,
        "value5": 90

      }, {
        "date": "2020-01-21",
        "value": 183,
        "value2": 85,
        "value3":78,
        "value4": 66,
        "value5": 80

      }, {
        "date": "2020-01-22",
        "value": 188,
        "value2": 86,
        "value3":65,
        "value4": 66,
        "value5": 70


      }, {
        "date": "2020-01-23",
        "value": 185,
        "value2": 84,
        "value3":83,
        "value4": 82,
        "value5": 85



      }, {
        "date": "2020-01-24",
        "value": 185,
        "value2": 86,
        "value3":84,
        "value4": 83,
        "value5": 89


      }, {
        "date": "2020-01-25",
        "value": 180,
        "value2": 88,
        "value3":83,
        "value4": 81,
        "value5": 79

      }, {
        "date": "2020-01-26",
        "value": 187,
        "value2": 85,
        "value3":84,
        "value4": 78,
        "value5": 75


      }, {
        "date": "2020-01-27",
        "value": 184,
        "value2": 88,
        "value3":89,
        "value4": 84,
        "value5": 86

      }, {
        "date": "2020-01-28",
        "value": 183,
        "value2": 84,
        "value3":82,
        "value4": 87,
        "value5": 70

      }, {
        "date": "2020-01-29",
        "value": 184,
        "value2": 89,
        "value3":87,
        "value4": 78,
        "value5": 73

      }, {
        "date": "2020-01-30",
        "value": 181,
        "value2": 88,
        "value3":83,
        "value4": 82,
        "value5": 73

      }];

    // // Set input format for the dates
//     chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
//
// // Create axes
//     let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
//     let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//
// // Create series
//     let series = chart.series.push(new am4charts.LineSeries());
//     series.dataFields.valueY = "value";
//     series.dataFields.dateX = "date";
//     series.tooltipText = "{value}"
//     series.strokeWidth = 2;
//     series.minBulletDistance = 15;
//
// // Drop-shaped tooltips
//     series.tooltip.background.cornerRadius = 20;
//     series.tooltip.background.strokeOpacity = 0;
//     series.tooltip.pointerOrientation = "vertical";
//     series.tooltip.label.minWidth = 40;
//     series.tooltip.label.minHeight = 40;
//     series.tooltip.label.textAlign = "middle";
//     series.tooltip.label.textValign = "middle";
//
// // Make bullets grow on hover
//     let bullet = series.bullets.push(new am4charts.CircleBullet());
//     bullet.circle.strokeWidth = 2;
//     bullet.circle.radius = 4;
//     bullet.circle.fill = am4core.color("#fff");
//
//     let bullethover = bullet.states.create("hover");
//     bullethover.properties.scale = 1.3;
//
// // Make a panning cursor
//     chart.cursor = new am4charts.XYCursor();
//     chart.cursor.behavior = "panXY";
//     chart.cursor.xAxis = dateAxis;
//     chart.cursor.snapToSeries = series;
//
// // Create vertical scrollbar and place it before the value axis
//     chart.scrollbarY = new am4core.Scrollbar();
//     chart.scrollbarY.parent = chart.leftAxesContainer;
//     chart.scrollbarY.toBack();
//
// // Create a horizontal scrollbar with previe and place it underneath the date axis
//     chart.scrollbarX = new am4charts.XYChartScrollbar();
//     chart.scrollbarX.series.push(series);
//     chart.scrollbarX.parent = chart.bottomAxesContainer;
//     dateAxis.renderer.labels.template.location = 0.0001;
//     dateAxis.start = 0.79;
//     dateAxis.keepSelection = true;

// Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

// Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    // let valueAxis3 = chart.yAxes.push(new am4charts.ValueAxis());
    // let valueAxis4 = chart.yAxes.push(new am4charts.ValueAxis());
    // let valueAxis5 = chart.yAxes.push(new am4charts.ValueAxis());




    valueAxis.title.text = "Spends($)";
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "M";
    });
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;

// Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;
    series.name = "Revenue";
//  Create series 2
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.tooltipText = "{value2}";
    series2.strokeWidth = 2;
    series2.minBulletDistance = 15;
    series2.name = "Consumer Promo";
    series2.stroke = am4core.color("#0a1be4");
// Create series 3
    let series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "value3";
    series3.dataFields.dateX = "date";
    series3.tooltipText = "{value3}";
    series3.strokeWidth = 2;
    series3.minBulletDistance = 15;
    series3.name= "Trade Promo";
    series3.stroke = am4core.color("#0fa926");

// Create series 4
    let series4 = chart.series.push(new am4charts.LineSeries());
    series4.dataFields.valueY = "value4";
    series4.dataFields.dateX = "date";
    series4.tooltipText = "{value4}";
    series4.strokeWidth = 2;
    series4.minBulletDistance = 15;
    series4.name = "Shopper";
// Create series 5
    let series5 = chart.series.push(new am4charts.LineSeries());
    series5.dataFields.valueY = "value5";
    series5.dataFields.dateX = "date";
    series5.tooltipText = "{value5}";
    series5.strokeWidth = 2;
    series5.minBulletDistance = 15;
    series5.name = "Media";
    series5.stroke = am4core.color("#41b495");



    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";
    chart.legend.align = "right";
    chart.legend.contentAlign = "right";
    chart.legend.marginBottom=30;
// Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

// Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;


// Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.70;
    dateAxis.keepSelection = true;
    // dateAxis.renderer.labels.template.location = 1;


  },[]);
  return (
      <div id="chartdivgraphLine">

      </div>
  );
}

LineChart.propTypes = {};

export default memo(LineChart);
