/**
 *
 * Filter
 *
 */

import React, {memo, useState} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {FormattedMessage} from "react-intl";
import messages from "./messages";
import Select from 'react-select';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const  useStyles = makeStyles(theme => ({
select:{
    fontSize:12,
    fontFamily:'MarsCenta-Book'
    },
}
))

const segmentOptions = [
    {value: 'mwc', label: 'MWC'},
    {value: 'petcare', label: 'Petcare'}
]

const siteOptions = [
    {value: 'site1', label: 'Site 1'},
    {value: 'site2', label: 'Site 2'}
]


const realItemOptions = [
    {value: 'item1', label: 'Item 1'},
    {value: 'item2', label: 'Item 2'}
]

const marketOptions = [
    {value: 'market1', label: 'Market 1'},
    {value: 'market2', label: 'Market 2'}
]


function Filter() {
    const [segment, setSegment] = useState("");
    const [site, setSite] = useState("");
    const [realItem, setRealItem] = useState("");
    const [market, setMarket] = useState("");

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

    const handleMarketChange = value => {
        console.log(value);
        setMarket(value);
    }

    const classes=useStyles();
    return (
        <div>
            <div className='col-sm' style={{width: '218px', paddingLeft: '0px', marginBottom: '3vw'}}>
                <div style={{fontWeight: 600, fontSize: 14,fontFamily:'MarsCentra-Bold'}}>Select Segment:</div>
                <Select className={classes.select}
                    closeMenuOnSelect={true}
                    options={segmentOptions}
                    value={segment}
                    onChange={handleSegmentChange}
                />
            </div>
            <div className='col-sm' style={{width: '218px', paddingLeft: '0px', marginBottom: '3vw'}}>
                <div style={{fontWeight: 600, fontSize: 14,fontFamily:'MarsCentra-Bold'}}>Select Site:</div>
                <Select className={classes.select}
                    closeMenuOnSelect={true}
                    options={siteOptions}
                    value={site}
                    onChange={handleSiteChange}
                />
            </div>
            <div className='col-sm' style={{width: '218px', paddingLeft: '0px', marginBottom: '3vw'}}>
                <div style={{fontWeight: 600,fontSize: 14,fontFamily:'MarsCentra-Bold'}}>Select Real Item:</div>
                <Select className={classes.select}
                    closeMenuOnSelect={true}
                    options={realItemOptions}
                    value={realItem}
                    onChange={handleRealItemChange}
                />
            </div>
            <div className='col-sm' style={{width: '218px', paddingLeft: '0px', marginBottom: '4vw'}}>
                <div style={{fontWeight: 600,fontSize: 14,fontFamily:'MarsCentra-Bold'}}>Select Market:</div>
                <Select className={classes.select}
                    closeMenuOnSelect={true}
                    options={marketOptions}
                    value={market}
                    onChange={handleMarketChange}
                />
            </div>
            <Button variant="contained" color="primary" style={{marginLeft:24, marginBottom:'27vw',textTransform:'capitalize', textAlign:'centre',
                fontSize:13,fontFamily:'MarsCentra-Book'}} >Apply Filters</Button>
        </div>
    );
}

Filter.propTypes = {};

export default memo(Filter);
