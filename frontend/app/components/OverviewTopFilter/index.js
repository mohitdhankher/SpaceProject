/**
 *
 * OverviewTopFilter
 *
 */

import React, {memo, useState} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {FormattedMessage} from "react-intl";
import messages from "./messages";
import Select from 'react-select';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Input, Radio, TreeSelect} from 'antd';

// import NumericInput from 'components/NumericInput';
import FilterContainer from './FilterContainer';
import 'antd/dist/antd.css'
import './style.css'
import Search from "antd/es/input/Search";
import Card from "@material-ui/core/Card";

const riskOptions = [
    {value: 'oos', label: 'OOS Risk - 20'},
    {value: 'no', label: 'No Risk'},
    {value: 'medium', label: 'Medium Risk - 50'},
    {value: 'low', label: 'Low Risk - 75'},
    {value: 'high', label: 'High Stock Risk - 90'}
]

const segmentOptions = [
    {value: 'mwc', label: 'MWC'},
    {value: 'petcare', label: 'Petcare'}
]

const siteOptions = [
    {value: 'site1', label: 'Site 1'},
    {value: 'site2', label: 'Site 2'}
]


const itemOptions = [
    {value: 'item1', label: 'Item 1'},
    {value: 'item2', label: 'Item 2'}
]

const riskValue = [
    {value: 0, label: '0'},
    {value: 10, label: '10'},
    {value: 20, label: '20'},
    {value: 30, label: '30'},
    {value: 40, label: '40'},
    {value: 50, label: '50'},
    {value: 60, label: '60'},
    {value: 70, label: '70'},
    {value: 80, label: '80'},
    {value: 90, label: '90'},
    {value: 100, label: '100'}
]


function OverviewTopFilter() {
    const [risk, setRisk] = useState("");
    const [segment, setSegment] = useState("");
    const [site, setSite] = useState("");
    const [realItem, setRealItem] = useState("");
    const [highRisk, setHighRisk] = useState("");
    const [lowRisk, setLowRisk] = useState("");

    const handleRiskChange = value => {
        console.log(value);
        setRisk(value);
    }

    const handleSegmentChange = value => {
        console.log(value);
        setSegment(value);
    }

    const handleSiteChange = value => {
        console.log(value);
        setSite(value);
    }

    const handleRealItemChange = value => {
        console.log(value);
        setRealItem(value);
    }
    const handleHighRiskChange = value => {
        console.log(value);
        setHighRisk(value);
    }
    const handleLowRiskChange = value => {
        console.log(value);
        setLowRisk(value);
    }

    return (
        <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography
                    style={{fontFamily: 'MarsCentra-Book', margin: '5px', color: '#3c67b3', fontSize: '18px'}}><i>Filters
                    (Risk, Segment, Site, Real Item )</i></Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: 'table', width: '100%'}}>
                <div style={{display: 'table-row', width: '100%'}}>
                    <FilterContainer>
                        <div className="row">

                        </div>
                        <div className="row" style={{marginTop: '1%', zIndex: '1'}}>
                            <div className='col-sm'>
                                <div>High Risk:</div>
                                <Select
                                    closeMenuOnSelect={true}
                                    options={riskValue}
                                    value={highRisk}
                                    onChange={handleHighRiskChange}
                                />
                            </div>
                            <div className='col-sm'>
                                <div>Low Risk:</div>
                                <Select
                                    closeMenuOnSelect={true}
                                    options={riskValue}
                                    value={lowRisk}
                                    onChange={handleLowRiskChange}
                                />
                            </div>
                            <div className='col-sm'>
                                <div>Risk factor:</div>
                                <Select
                                    closeMenuOnSelect={true}
                                    options={riskOptions}
                                    value={risk}
                                    onChange={handleRiskChange}
                                />
                            </div>
                            <div className='col-sm'>
                                <div>Segment:</div>
                                <Select
                                    closeMenuOnSelect={true}
                                    options={segmentOptions}
                                    value={segment}
                                    onChange={handleSegmentChange}
                                />
                            </div>
                            <div className='col-sm'>
                                <div>Site:</div>
                                <Select
                                    closeMenuOnSelect={true}
                                    options={siteOptions}
                                    value={site}
                                    onChange={handleSiteChange}
                                />
                            </div>
                            <div className='col-sm'>
                                <div>Real Item:</div>
                                <Select
                                    closeMenuOnSelect={true}
                                    options={itemOptions}
                                    value={realItem}
                                    onChange={handleRealItemChange}
                                />
                            </div>
                        </div>

                    </FilterContainer>
                    <div className="row" style={{textAlign: 'center'}}>
                        <div className="col-sm">
                            <button type="button" className="btn overview_page_button sizing"
                                    style={{float: 'right', marginTop: '3vw'}}>SUBMIT
                            </button>
                        </div>
                        <div className="col-sm">
                            <button type="button" className="btn overview_page_button sizing"
                                    style={{float: 'left', marginTop: '3vw'}}>CLEAR
                            </button>
                        </div>
                    </div>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

OverviewTopFilter.propTypes = {};

export default memo(OverviewTopFilter);
