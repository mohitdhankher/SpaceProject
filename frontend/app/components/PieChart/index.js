/**
 *
 * PieChart
 *
 */

import React, {memo, useEffect} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import './style.css';

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


function PieChart(props) {
    useEffect(() => {
        let chart = am4core.create("chartdivpie1", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        let title = chart.titles.create();
        title.text = "SPENDS BY PILLAR";
        title.fontSize = 15;
        title.paddingLeft = 50;
        title.marginTop = 10;

        chart.legend = new am4charts.Legend();
        chart.legend.labels.template.fontSize = 14;

        // chart.legend.markers.template;
        // markerTemplate.width = 10;
        // markerTemplate.height = 10;
        // chart.legend.labels.template.truncate = false;
        // chart.paddingLeft=90;
        // chart.paddingRight=10;
        chart.data = [
            {
                country: "Media",
                litres: 501.9
            },
            {
                country: "Shopper",
                litres: 301.9
            },
            {
                country: "Trade Promo",
                litres: 201.1
            },
            {
                country: "Consumer Promo",
                litres: 165.8
            }
        ];

        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.category = "country";
        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;

        series.colors.list = [
            am4core.color("#32b0e4"),
            am4core.color("#000077"),
            am4core.color("#00e6c5"),
            am4core.color("#858088"),
        ];
        series.slices.template.events.on("hit", function(event) {

            props.handlePie(event.target.dataItem.properties.category);

        })

        series.slices.template.propertyFields.fill = "color";
        series.slices.template.propertyFields.stroke = "color";
    })
  return (
    <div id="chartdivpie1">
    </div>
  );
}

PieChart.propTypes = {};

export default memo(PieChart);
