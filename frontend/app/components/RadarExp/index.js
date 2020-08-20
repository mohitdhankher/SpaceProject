/**
 *
 * RadarExp
 *
 */

import React, {memo, useEffect} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './style.css';
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
function RadarExp(props) {
    useEffect(() => {

        let temperatures = {
            "Drugs": [
                ["Walgreens", 17.89, 3.61, 1.61, 1.61, 1.11, 3.36, 3.36],
                ["CVS", 6.9, -0.33, 0.18, 0.36, -0.05, 0.42],
                ["RiteAid", 9.15, -0.48, -0.05, 1.22, -1.58, -0.94, 0.47, 1.08, 4.14, 2.33, 2.07, 0.89, 1.51, 2.09, 1.56, 2.09, 2.31],
                ["rest", 9.15, -0.48, -0.05, 1.22, -1.58, -0.08, 0.13, 0.24,  1.12, 0.24, 0.55, -0.83, 0.64, 0.54, -0.48, -0.33, 0.51, 1.61, 0.91, 0.51, 1.9, -0.04, 0.48, -0.94, 0.47, 1.08, 4.14, 2.33, 2.07, 0.89, 1.51, 2.09, 1.56, 2.09, 2.31]
            ],
            "Convenience": [
                ["SevenEleven", 17.89, 3.61, 1.61, 1.61, 1.11, 3.36, 3.36],
                // ["PPG1", 6.9, -0.33, 0.18, 0.36, -0.05, 0.42],
                // ["PPG3", 9.15 ,1.61, 0.91, 0.51, 1.9, -0.04, 0.48, -0.94, 0.47, 1.08, 4.14, 2.33, 2.07, 0.89, 1.51, 2.09, 1.56, 2.09, 2.31]
            ],
            "Grocery": [
                ["Walmart Total US TA", 17.89, 3.61, 1.61, 1.61, 1.11, 3.36, 3.36],
                ["Circle K Grand", 6.9,  0.18, 0.36,  0.42,0.91, 0.51, 1.9,],
                // ["PPG6", 9.15, -0.48, -0.05, 1.22,0.51, 1.61, 0.91, 0.51, 1.9, -0.04, 0.48, -0.94, 0.47, 1.08, 4.14, 2.33, 2.07, 0.89, 1.51, 2.09, 1.56, 2.09, 2.31]
            ],
            "rest": [
                ["Walgreens", 17.89, 3.61, 1.61, 1.61, 1.11, 3.36, 3.36],
                ["CVS", 6.9, -0.33, 0.18, 0.36, -0.05, 0.42],
                ["RiteAid", 9.15, -0.48, -0.05, 1.22, -1.58, -0.08, 0.13, 0.24, -1.24, 0.78, 0.19, 0.9, -0.18, -1.37, -0.15, -1.77, -0.3, 1.33, 1.12, 0.24, 0.55, -0.83, 0.64, 0.54, -0.48, -0.33, 0.51, 1.61, 0.91, 0.51, 1.9, -0.04, 0.48, -0.94, 0.47, 1.08, 4.14, 2.33, 2.07, 0.89, 1.51, 2.09, 1.56, 2.09, 2.31]
            ],
            // "Account12": [
            //     ["PPG", 16.99, 0.55, 0.09, 0.44, -4.27, 0.58, 0.28, 0.93, 0.58, -0.5, 2.37, -1.47, 1.45, 1.74, 1.34, 2.07, 0.91, 0.61, 1.84, 0.71, 0.54, 0.36, 2.18, 2.28, 1.93, 4.09, 1.03, 1.77, 1.32, 2.72, 1.51, 2.68, 1.43, 1.82, 2.62, 1.64, 1.72, 3.03, 1.88, 2.16, 2.45, -0.54, 3.03, 1.52, 3.32],
            //     // ["Angola", 23.86, 1.64, 0.58, -0.54, 0.37, 0.96, 0.56, 0.56, 0.56, -1.61, -1.94, -1.94, -1.94, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, 0.86, 1.81, 0.79, 0.18, 0.64, 1.38, 1.98, 0.65, 0.65, 0.09, 3.67, 5.14, 5.14, 2.62, 1.91, 2.57],
            //     // ["Zambia", 21.76, 3.24, -3.41, 1.78, -0.2, -0.06, -3.73, 1.24, -1.18, -1.47, 1.4, 2.4, 0.78, 0.65, -0.65, 1.28, 0.35, -0.7, 0.44, -0.51, -0.28, -3.03, 0.08, 0.25, 1.94, -2.09, 4.19, 1.19, -1.39, 2.88, 1.77, 0.54, -0.14, 3.77, -1.06, 1.69, 0.24, 0.72, 2.36, 3.51, 0.63, 1.03, 1.08, 1.81, 4.54],
            //     // ["Zimbabwe", 19.03, 0.15, -0.56, -0.41, -0.39, 0.21, -0.18, 0.06, -0.16, -0.31, 0.27, 1.32, 0.43, -0.03, 0.14, 1.04, 0.21, 0.07, 0.68, 0.45, 0.91, -0.18, 0.3, 0.87, 0.12, -0.25, 0.61, -0.42, -0.36, 0.39, 0.77, 0.48, 0.37, 1.07, 0.32, 0.42, 0.94, 0.47, 0.61, 1.61, 0.34, 0.2, 0.56, 0.7, 1.42]
            // ],
            // "Display,Featue and TPR": [
            //     ["PPG", 18.38, 0.36, -0.34, -0.14, -0.48, -0.08, -0.34, 0.3, 0.57, 0.12, -0.11, 0.1, -0.62, -0.21, -0.44, -0.13, 0.56, -0.31, -0.26, -0.18, -0.66, -0.38, -0.44, -0.61, -0.59, -0.35, -0.11, -0.29, -0.29, -0.21, 0.19, 0.11, -0.02, 0.28, -0.06, 0.26, -0.21, 0.41, 0.01, -0.18, -0.18, 0.56, 0.48, 0.27, 0.41],
            //     // ["Fiji", 26.11, 0, 0, 0, 1.39, 1.39, 1.39, -1.22, 0.79, -0.77, -0.77, -0.77, 1.39, 1.39, 1.39, -1.72, 1.27, -0.96, -0.66, -0.39, 0.97, -1.45, -1.12, -0.58, -0.54, -0.82, 0.27, 0.12, 0.58, 0.17, 0.71, 0.07, 0.19, 0.21, 0.11, 0.51, 0.04, -0.41, 0.42, 0.42, 0.18, 0.38, 0.19, -0.02, 0.45],
            //     // ["French Polynesia", 25.11, 0, 0, 0, 1.14, 1.14, 1.14, -0.19, 0.03, -0.3, -0.33, -0.19, -0.15, -0.01, -0.06, -0.08, 0.13, -0.04, 0.11, -0.06, 0.26, 0.09, -0.02, 0.27, -0.05, 0.06, 0.23, 0.34, 0.24, 0.22, 0.55, 0.36, 0.28, 0.19, 0.48, 0.32, 0.07, 0.51, 0.29, 0.22, -0.09, 0.01, -0.05, 0.37, 0.45],
            //     // ["New Zealand", 12.39, 0.27, 0.47, 0.43, -0.27, -0.31, 0.44, -0.16, -0.18, 0.08, -0.28, -0.36, 0.32, 0.29, 0.27, 0.35, 0.41, 0.63, 0.57, -0.2, -0.59, -0.37, -0.71, 0.26, 0.28, -0.06, 0.96, 0.91, 0.52, 0.65, 0.69, 0.47, 0.04, 0.84, 0.01, 0.26, 0.34, -0.26, 0.53, 0.21, 0.62, 1.62, 0.79, 0.37, 0.64],
            //     // ["Tuvalu", 26.37, 0, 0, 0, 0, 0, 0, -0.92, -1.87, -0.87, 1.73, 1.49, 1.63, 1.85, 2.03, 1.65, 1.62, 1.57, 1.94, 2.03, 1.86, 1.77, 2.3, 1.86, 1.52, 1.52, 1.54, 1.73, 2.09, 2.23, 2.33, 2.38, 2.21, 2.32, 2.35, 2.23, 1.86, 2.23, 2.03, 2.12, 1.77, 2.38, 2.34, 2.36, 2.64],
            // ]
        }

        let startYear = 2019;
        let endYear = 2020;
        let currentYear = 1995;
        let colorSet = new am4core.ColorSet();


        let chart = am4core.create("chartRadarExp", am4charts.RadarChart);
        chart.numberFormatter.numberFormat = "#.0M|#.0M|0M";
        chart.hiddenState.properties.opacity = 0;
        let title = chart.titles.create();
        let ptitle=props.title;
        // title.text ="Distribution of "+ ptitle+" ROI";
        title.fontSize = 15;
        // title.paddingLeft = 50;
        // title.paddingBottom = 70;
        // title.marginTop = 10;
        // chart.paddingBottom=30;
        chart.startAngle = 270 - 180;
        chart.endAngle = 270 + 180;

        chart.padding(1,5,5,10)
        chart.radius = am4core.percent(65);
        chart.innerRadius = am4core.percent(50);

// year label goes in the middle
        let yearLabel = chart.radarContainer.createChild(am4core.Label);
        yearLabel.horizontalCenter = "middle";
        yearLabel.verticalCenter = "middle";
        yearLabel.fill = am4core.color("#0a1be4");
        yearLabel.fontSize = 30;
        yearLabel.text = String(currentYear);

// zoomout button
        let zoomOutButton = chart.zoomOutButton;
        zoomOutButton.dx = 0;
        zoomOutButton.dy = 0;
        zoomOutButton.marginBottom = 15;
        zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarX.parent = chart.rightAxesContainer;
        chart.scrollbarX.orientation = "vertical";
        chart.scrollbarX.align = "center";
        chart.scrollbarX.exportable = false;
        // chart.scrollbarX.paddingTop=12130;
        chart.scrollbarX.marginTop=130;

// vertical orientation for zoom out button and scrollbar to be positioned properly
        chart.rightAxesContainer.layout = "vertical";
        chart.rightAxesContainer.padding(120, 20, 120, 60);

// category axis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "country";

        let categoryAxisRenderer = categoryAxis.renderer;
        let categoryAxisLabel = categoryAxisRenderer.labels.template;
        categoryAxisLabel.location = 0.5;
        categoryAxisLabel.radius = 28;
        categoryAxisLabel.relativeRotation = 90;

        categoryAxisRenderer.fontSize = 11;
        categoryAxisRenderer.minGridDistance = 10;
        categoryAxisRenderer.grid.template.radius = -25;
        categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
        categoryAxisRenderer.grid.template.interactionsEnabled = false;

        categoryAxisRenderer.ticks.template.disabled = true;
        categoryAxisRenderer.axisFills.template.disabled = true;
        categoryAxisRenderer.line.disabled = true;

        categoryAxisRenderer.tooltipLocation = 0.5;
        categoryAxis.tooltip.defaultState.properties.opacity = 0;

// value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = -3;
        valueAxis.max = 6;
        valueAxis.strictMinMax = true;
        valueAxis.tooltip.defaultState.properties.opacity = 0;
        valueAxis.tooltip.animationDuration = 0;
        valueAxis.cursorTooltipEnabled = true;
        valueAxis.zIndex = 10;

        let valueAxisRenderer = valueAxis.renderer;
        valueAxisRenderer.axisFills.template.disabled = true;
        valueAxisRenderer.ticks.template.disabled = true;
        valueAxisRenderer.minGridDistance = 20;
        valueAxisRenderer.grid.template.strokeOpacity = 0.05;


// series
        let series = chart.series.push(new am4charts.RadarColumnSeries());
        series.columns.template.width = am4core.percent(90);
        series.columns.template.strokeOpacity = 0;
        series.dataFields.valueY = "value" + currentYear;
        series.dataFields.categoryX = "country";
        series.tooltipText = "{categoryX}:{valueY.value}";


// this makes columns to be of a different color, depending on value
        series.heatRules.push({ target: series.columns.template, property: "fill", minValue: -3, maxValue: 6, min: am4core.color("#000077"), max: am4core.color("#4cd6b0"), dataField: "valueY" });

// cursor
        let cursor = new am4charts.RadarCursor();
        chart.cursor = cursor;
        cursor.behavior = "zoomX";

        cursor.xAxis = categoryAxis;
        cursor.innerRadius = am4core.percent(40);
        cursor.lineY.disabled = true;

        cursor.lineX.fillOpacity = 0.2;
        cursor.lineX.fill = am4core.color("#000000");
        cursor.lineX.strokeOpacity = 0;
        cursor.fullWidthLineX = true;

// year slider
        let yearSliderContainer = chart.createChild(am4core.Container);
        yearSliderContainer.layout = "vertical";
        yearSliderContainer.padding(0, 38, 0, 38);
        yearSliderContainer.width = am4core.percent(100);

        let yearSlider = yearSliderContainer.createChild(am4core.Slider);
        yearSlider.events.on("rangechanged", function () {
            updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
        })
        yearSlider.orientation = "horizontal";
        yearSlider.start = 0.5;
        yearSlider.exportable = false;

        chart.data = generateRadarData();

        function generateRadarData() {
            let data = [];
            let i = 0;
            for (var continent in temperatures) {
                let continentData = temperatures[continent];

                continentData.forEach(function (country) {
                    let rawDataItem = { "country": country[0] }

                    for (var y = 2; y < country.length; y++) {
                        rawDataItem["value" + (startYear + y - 2)] = country[y];
                    }

                    data.push(rawDataItem);
                });

                createRange(continent, continentData, i);
                i++;

            }
            return data;
        }


        function updateRadarData(year) {
            if (currentYear != year) {
                currentYear = year;
                yearLabel.text = String(currentYear);
                series.dataFields.valueY = "value" + currentYear;
                chart.invalidateRawData();
            }
        }

        function createRange(name, continentData, index) {

            let axisRange = categoryAxis.axisRanges.create();
            axisRange.axisFill.interactionsEnabled = true;
            axisRange.text = name;
            // first country
            axisRange.category = continentData[0][0];
            // last country
            axisRange.endCategory = continentData[continentData.length - 1][0];

            // every 3rd color for a bigger contrast
            axisRange.axisFill.fill = colorSet.getIndex(index * 18);
            axisRange.grid.disabled = true;
            axisRange.label.interactionsEnabled = false;
            axisRange.label.bent = true;

            let axisFill = axisRange.axisFill;
            axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
            axisFill.radius = -20; // negative radius means it is calculated from max radius
            axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
            axisFill.fillOpacity = 1;
            axisFill.togglable = true;

            axisFill.showSystemTooltip = true;
            axisFill.readerTitle = "click to zoom";
            axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

            axisFill.events.on("hit", function (event) {
                let dataItem = event.target.dataItem;
                if (!event.target.isActive) {
                    categoryAxis.zoom({ start: 0, end: 1 });
                }
                else {
                    categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
                }
            })

            // hover state
            let hoverState = axisFill.states.create("hover");
            hoverState.properties.innerRadius = -10;
            hoverState.properties.radius = -25;

            let axisLabel = axisRange.label;
            axisLabel.location = 0.5;
            axisLabel.fill = am4core.color("#000000");
            axisLabel.radius = 3;
            axisLabel.relativeRotation = 0;
        }

        let slider = yearSliderContainer.createChild(am4core.Slider);
        slider.start = 1;
        slider.exportable = false;
        slider.events.on("rangechanged", function () {
            let start = slider.start;

            chart.startAngle = 270 - start * 179 - 1;
            chart.endAngle = 270 + start * 179 + 1;

            valueAxis.renderer.axisAngle = chart.startAngle;
        })

    });
  return (
    <div id="chartRadarExp">

    </div>
  );
}

RadarExp.propTypes = {};

export default memo(RadarExp);
