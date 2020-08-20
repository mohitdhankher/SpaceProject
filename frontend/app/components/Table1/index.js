/**
 *
 * Table1
 *
 */

import React, {memo} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from "react-intl";
import messages from "./messages";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import "../Chart/style.css"
import paginationFactory from 'react-bootstrap-table2-paginator'
import Typography from "@material-ui/core/Typography";
import './style.css'

const useStyles = makeStyles(theme => ({

    card: {
        padding: 10,
        margin: '2px'
    },
    heading: {
        fontSize: '14px',
        fontFamily: 'MarsCentra-Bold'
    },

}));

const pageButtonRenderer = ({
                                page,
                                active,
                                disable,
                                title,
                                onPageChange
                            }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onPageChange(page);
    };

    const activeStyle = {padding: '10px'};
    if (active) {
        activeStyle.backgroundColor = '#0000a0';
        activeStyle.color = '#fff';
    } else {
        activeStyle.backgroundColor = '#fff';
        activeStyle.color = '#0000a0';
    }
    if (typeof page === 'string') {
        activeStyle.backgroundColor = '#fff';
        activeStyle.color = '#0000a0';
    }
    return (
        <li className="pagination" >
            <a href="#" onClick={ handleClick } style={ activeStyle }>{ page }</a>
        </li>
    );
};

const options = {
    pageButtonRenderer,
    paginationSize: 5,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    },{
        text: '15', value: 15
    }]
};

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);



const saveScenario = (cell, row) => {

    console.log('inside save scenario');
    return <Button style={{color: '#000000'}} variant="outlined" value={cell} onClick={handleScenarioSave}>Save</Button>
}

const handleScenarioSave = (event) => {
    console.log("cell no.", event.target.value);
}


const columns = [
    {
        dataField: 'real_item',
        text: 'REAL Item',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'regular',
        fontFamily: 'MarsCentra-Book',
        headerStyle: {
            width: '5%', textAlign: 'center',
            backgroundColor: 'rgb(0,215,185)',
            color: '#ffffff', fontWeight: 'bold', fontFamily: 'MarsCentra-Book',
            fontSize: '14px'
        }

    },
    {
        dataField: 'zrep_item',
        text: 'ZREP Item',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return {
                width: '5%',
                textAlign: 'center',
                backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'MarsCentra-Book',
                fontSize: '14px'
            }
        }
    },
    {
        dataField: 'u_brandflag',
        text: 'Brand',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return {
                width: '8%',
                textAlign: 'center',
                backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'MarsCentra-Book',
                fontSize: '14px'
            }
        }
    },
    {
        dataField: 'descr',
        text: 'Description',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return {
                width: '15%',
                textAlign: 'center',
                backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'MarsCentra-Book',
                fontSize: '14px'
            }
        }
    },
    {
        dataField: 'distinct_warehouses',
        text: 'Distinct Warehouses',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return {
                width: '8%',
                textAlign: 'center',
                backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'MarsCentra-Book',
                fontSize: '14px'
            }
        }
    },
    {
        dataField: 'projected_inventory',
        text: 'Projected Risk',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        backgroundColor: 'rgb(0,185,215)',
        headerStyle: (column, colIndex) => {
            return {
                width: '10%',
                textAlign: 'center',
                backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'MarsCentra-Book',
                fontSize: '14px'
            }
        }
    },

//     {
//     dataField: 'unrestricted',
//     text: 'Unrestricted',
//     align: 'center',
//     fontSize:'14px',
//     fontWeight: 'normal',
//     fontFamily: 'MarsCentra-Book',
//     headerStyle: (column, colIndex) => {
//         return {width: '6vw', textAlign: 'center', backgroundColor: 'rgb(0,215,185)', color: '#ffffff',fontWeight: 'bold',  fontFamily: 'MarsCentra-Book',
//             fontSize: '14px' }
//     }
// },

    {
        dataField: 'qi',
        text: 'QI',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return {
                width: '5%',
                textAlign: 'center',
                backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'MarsCentra-Book',
                fontSize: '14px'
            }
        }
    },
    {
        dataField: 'blocked',
        text: 'Blocked',
        align: 'center',
        fontSize: '12px',
        fontWeight: 'normal',
        fontFamily: 'MarsCentra-Book',
        headerStyle: (column, colIndex) => {
            return {
                width: '5%',
                textAlign: 'center',
                backgroundColor: 'rgb(0,215,185)',
                color: '#ffffff',
                fontWeight: 'bold',
                fontFamily: 'MarsCentra-Book',
                fontSize: '14px'
            }
        }
    },

// ,{
//     dataField: 'save',
//     text: 'Save Instance?',
//     align: 'center',
//     fontSize:'14px',
//     fontWeight: 'normal',
//     fontFamily: 'MarsCentra-Book',
//     formatter: saveScenario,
//     headerStyle: (column, colIndex) => {
//         return { width: '6vw', textAlign: 'center',backgroundColor: 'rgb(0,215,185)', color:'#ffffff' ,fontWeight: 'bold', fontFamily: 'MarsCentra-Book',
//             fontSize: '14px' }}
// }

];



function Table1({data, saveScene,onSelectingTableData}) {
    console.log('messages', messages, messages.header.riskdata);
    const classes = useStyles();


    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        selectColumnPosition: 'right',
        headerColumnStyle: {
            backgroundColor: 'rgb(0,215,185)'
        },
        onSelect: (row, isSelect, rowIndex, e) => {
            onSelectingTableData(row, isSelect, rowIndex);
          }
    };

    return (
        <div style={{boxSizing:'border-box', width:'100%'}} >
            {/*<Card className={classes.card} elevation={5} style={{margin:'10px 20px 10px 10px'}}>*/}
            <Paper elevation={10} square={true} style={{padding: '10px'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px 10px 0px'}}>
                        <Typography className={classes.heading} style={{marginTop: '0px 10px 10px'}} >Details of the products by Risk </Typography>

                    <Button onClick={saveScene} style={{
                        backgroundColor: 'rgb(0,0,160)',
                        color: 'rgb(255,255,255)',
                        fontFamily: 'Mars-centra',
                        fontSize:13,
                        textTransform:'capitalize',
                        marginBottom: 5,
                    }}>Save scenario</Button>
                </div>

                <Paper elevation={1} >
                    <BootstrapTable
                        bootstrap4
                        keyField='id'
                        data={data}
                        columns={columns}
                        selectRow={selectRow}
                        bordered={false}
                        pagination={ paginationFactory(options) }
                        striped
                        hover

                    />
                </Paper>
            </Paper>
        </div>
    );
}

Table1.propTypes = {};

export default memo(Table1);
