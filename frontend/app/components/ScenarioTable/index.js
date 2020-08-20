/**
 *
 * ScenarioTable
 *
 */

import React, {memo} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';

import {FormattedMessage} from "react-intl";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "../Chart/style.css"
const useStyles = makeStyles(theme => ({

    heading: {
        margin: '10px',
        fontSize: '14px',
        fontFamily:'MarsCentra-Bold'
    }
}));


const viewScenario = (cell, row) => {
    console.log('inside save scenario');
  return <Button style={{backgroundColor:"#0000a0",fontSize:13,fontFamily:'MarsCentra-Book',color: '#ffffff',textTransform:'capitalize'}}  variant={"text"} value={cell} onClick={handleScenarioSave}>View</Button>
}

const handleScenarioSave = (event) => {
  // console.log("cell no.", event.target.value);
    window.location.href="/dashboard";
}

const columns = [
    {
        dataField: 'scenario_name',
        text: 'Scenario Name',
        align: 'center',
        fontSize:'12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return { width: 'auto', textAlign: 'center', backgroundColor: 'rgb(0,215,185)', fontSize:'14px',fontWeight:'bold',  fontFamily: 'MarsCentra-Book',
                color: '#ffffff'}}
    },
     {
        dataField: 'datetime',
        text: 'Date Time',
         align: 'center',
         fontSize:'12px',
         fontWeight: 'normal',
         fontFamily: 'MarsCentra-Book',
         headerStyle: (column, colIndex) => {
             return { width: 'auto', textAlign: 'center',   backgroundColor: 'rgb(0,215,185)',  fontFamily: 'MarsCentra-Book', fontWeight: 'bold', fontSize: '14px',
                 color: '#ffffff' }},
    },  { dataField: 'oosrisk',
        text: 'OOS Risk',
        align: 'center',
        fontSize:'12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return { width: 'auto', textAlign: 'center' ,  backgroundColor: 'rgb(0,215,185)', fontSize:'14px',fontWeight:'bold',  fontFamily: 'MarsCentra-Book',
                color: '#ffffff'}}
    }, {
        dataField: 'lowrisk',
        text: 'Low Risk',
        align: 'center',
        fontSize:'12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return { width: 'auto', textAlign: 'center' ,  backgroundColor: 'rgb(0,215,185)', fontSize:'14px',fontWeight:'bold',  fontFamily: 'MarsCentra-Book',
                color: '#ffffff'}}
    }, {
        dataField: 'medrisk',
        text: 'Medium Risk',
        align: 'center',
        fontSize:'12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return { width: 'auto', textAlign: 'center' ,  backgroundColor: 'rgb(0,215,185)', fontSize:'14px',fontWeight:'bold',  fontFamily: 'MarsCentra-Book',
                color: '#ffffff'}}
    },  {
        dataField: 'hsrisk',
        text: 'HS Risk',
        align: 'center',
        fontSize:'12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return { width: 'auto', textAlign: 'center' , backgroundColor: 'rgb(0,215,185)', fontSize:'14px',fontWeight:'bold',  fontFamily: 'MarsCentra-Book',
                color: '#ffffff'}}
     }
        // , {
    //     dataField: 'zrepItem',
    //     text: 'ZREP Item',
    //     align: 'center',
    //     fontSize:'12px',
    //     fontWeight: 'normal',
    //     fontFamily: 'MarsCentra-Book',
    //     headerStyle: (column, colIndex) => {
    //         return { width: 'auto', textAlign: 'center' ,  backgroundColor: 'rgb(0,215,185)', fontSize:'14px',fontWeight:'bold',  fontFamily: 'MarsCentra-Book',
    //             color: '#ffffff'}}
    // }, {
    //     dataField: 'description',
    //     text: 'Description',
    //     align: 'center',
    //     fontSize:'12px',
    //     fontWeight: 'normal',
    //     fontFamily: 'MarsCentra-Book',
    //     headerStyle: (column, colIndex) => {
    //         return { width: 'auto', textAlign: 'center' , backgroundColor: 'rgb(0,215,185)',fontSize:'14px',fontWeight:'bold', fontFamily: 'MarsCentra-Book',
    //             color: '#ffffff'}}
    // }
    ,{
        dataField: 'viewScenarios',
        text:'View Scenarios',
        alignContent:'center',
        align: 'center',
        fontSize:'12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        formatter: viewScenario,
        headerStyle: (column, colIndex) => {
            return { width: 'auto', textAlign: 'center' , backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff', fontSize:'14px',fontWeight:'bold', fontFamily: 'MarsCentra-Book'}}
    },
];


function ScenarioTable({tableData}) {
    console.log('messages', messages, messages.header.data);
    const classes= useStyles();
    return (
        <Card elevation={5} style={{margin: '40px 40px 40px 40px'}}>
        <div>
            <h4 className={classes.heading}  align={'left'}>Scenarios table</h4>

        <Paper elevation={1} style={{margin: '10px'}}>
            <BootstrapTable
                keyField='id'
                data={tableData}
                columns={columns}
                bordered={false}
                headerClasses={"header-class"}
                hover
                striped
            />
        </Paper>
        </div>
        </Card>
    );
}

ScenarioTable.propTypes = {};

export default memo(ScenarioTable);
