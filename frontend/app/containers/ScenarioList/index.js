/**
 *
 * ScenarioList
 *
 */

import React, {memo, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {compose} from "redux";
import './style.css';
import {useInjectSaga} from "../../utils/injectSaga";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import saga from "./saga";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import {CssBaseline, FormControl, InputLabel} from "@material-ui/core";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {borderRight} from "@material-ui/system";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import history from "../../utils/history";
import products from "./promoData.json";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {NavLink} from "react-router-dom";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import RoiNavBar from "../../components/RoiNavBar";
import makeSelectScenarioList from "./selectors";
import { Theme, createStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: '#FFFFFF',
    minHeight: '52vh'
  },
  rootpro: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  outerPaper: {
    margin: theme.spacing(4),
    padding: theme.spacing(3),
    borderRadius: '10px'
  },
  expandOuter:{
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: '10px'
  },
  innerPaper: {
    marginTop: theme.spacing(4)
  },
  formLabel: {
    marginTop: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  header: {
    padding: 10,
    // background: '#009688',
    background: '#000077',
    color:'white'
    // border: '10%',
    // borderColor: '#OOOOOO'
    // minHeight: 67
  },
  textAlignment: {
    textAlign: 'center'
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'xxx-large',
    color: 'green'
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: "large",
    fontWeight: "bold"
  },
  inputMargin: {
    borderRadius: "7px",
    margin:"1%",
    minHeight: "96%"
  },
}));

function rankFormatter(cell, row, rowIndex, formatExtraData) {
  return (
      < div
          style={{ textAlign: "center",
            cursor: "pointer",
            lineHeight: "normal" }}>
        {/*<CircularProgress variant="static" value={row.progress} />*/}
        <DeleteOutlinedIcon className="svgsize" style={{color:'#E85A4F'}} />
      </div>
  ); }



export function ScenarioList() {
  useInjectReducer({ key: "scenarioList", reducer });
  useInjectSaga({ key: "scenarioList", saga });
  const classes = useStyles();
  let staticProducts = products.product;

  useEffect(() =>{
    console.log("Inside useEffect")
    // FetchProducts();
  }, []);

  const Link =(e, column, columnIndex, row, rowIndex) =>{
    history.push("/createproject");
  };

  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted((prevCompleted) => (prevCompleted >= 100 ? 0 : prevCompleted + 10));
    }

    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);


  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      headerStyle: {width: '190px',
        borderTopLeftRadius:'10px',
        borderBottomLeftRadius:'10px',
        textAlign:"left",
        paddingLeft: "2%",
},
      classes:'linkdata',
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {

          Link(e, column, columnIndex, row, rowIndex);
        },
        onMouseEnter: (e, column, columnIndex, row, rowIndex) => {
        }
      }
    },
    {
      dataField: 'ownership',
      text: 'Ownership',
      headerStyle: {
        width:'100px',
        textAlign:'left'
      }

    },
    {
      dataField: 'stakeholders',
      text: 'Stakeholders',
      headerStyle: {
        width:'100px',
        textAlign:'left'
      },

    },
    {
      dataField: 'action',
      text: 'Actions',
      headerStyle: {width: '90px',textAlign:"center",
        borderTopRightRadius:'10px',
        borderBottomRightRadius:'10px'},
      formatter: rankFormatter
    }];
  const rowStyle2 = (row, rowIndex) => {
    const style = {};
    style.fontSize = '15px';
    // style.backgroundColor = '#C1C8E4';
    style.backgroundColor = 'rgb(228,243,253)';
    style.color ='black';
    style.height= '1px';
    style.borderTopLeftRadius = "16px";
    style.paddingLeft = "2px"
    return style;

  };
  const customTotal = (from, to, size) => (
      <span style={{marginLeft:'2%'}} className="react-bootstrap-table-pagination-total">
           Showing {from} to {to} of {size} Results
     </span>
  );
  // const options = {
  //   paginationSize: 4,
  //   pageStartIndex: 0,
  //   hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  //   firstPageText: 'First',
  //   prePageText: 'Back',
  //   nextPageText: 'Next',
  //   lastPageText: 'Last',
  //   nextPageTitle: 'First page',
  //   prePageTitle: 'Pre page',
  //   firstPageTitle: 'Next page',
  //   lastPageTitle: 'Last page',
  //   showTotal: true,
  //   // paginationTotalRenderer: customTotal,
  // };

  const [Scenario, setScenario] = useState( true);
  const [Scenario1, setScenario1] = useState( false);
  const [Scenario2, setScenario2] = useState( true);
  const [Scenario3, setScenario3] = useState( false);
  const [ResultHeading1, setResultHeading1] = useState( 'Scenario');
  const [ResultHeading2, setResultHeading2] = useState( 'Scenario2');
  const [selecteddrop, setselecteddrop] = useState( {
    values: "lime",
    values1: "grapefruit",
    values2: 10,
    valuebrand:"grapefruit",
    valuesPpg:"coconut",
    values3: "lime",
    country:[],
    From:'Trade Promo',
    To:"Marketing",
    valueScenario:10,
    valueScenarioSecond:10,
    // ResultHeading1:'',
    // ResultHeading2:'',
    // drop1:'lime',
    drop2:'',
    countries: [
      {  value :"grapefruit", country: [ { id: "1", country: "Tander" },
          { id: "2", country: "DIXY" },
          { id: "3", country: "X5" }] },
      {  value :"lime", country: [ { id: "1", country: "Nestle" },
          { id: "2", country: "Mars" },
        ] },
      {  value :"mango", country: [ { id: "1", country: "PPG" },
          { id: "2", country: "Bulgeria" },
          { id: "3", country: "US" }] },

    ]
  });
  // handleSubmit(event) {
  //     alert("Your favorite flavor is: " + this.state.value);
  //     event.preventDefault();
  // };

  const handleChangeD = event => {
    var index = event.nativeEvent.target.selectedIndex;
    let x= event.nativeEvent.target[index].text
    setselecteddrop({...selecteddrop,From:x, values: event.target.value });
    setselecteddrop({...selecteddrop,From:x, values2: event.target.value,country: selecteddrop.countries.filter(option=>option.value===event.target.value)});

  };
  const handleChangeTo = event => {
    var index = event.nativeEvent.target.selectedIndex;
    let x= event.nativeEvent.target[index].text

    // setselecteddrop({...selecteddrop,To:x, values3: event.target.value });
    setselecteddrop({...selecteddrop,To:x, values3: event.target.value});
  };
  const handleChangeScenario = event => {
    var index = event.nativeEvent.target.selectedIndex;
    let x= event.nativeEvent.target[index].text
    if(x==='Scenario') {
      setScenario(true);
      setScenario1(false);
    } if(x==='Scenario1') {
      setScenario(false);
      setScenario1(true);

    }

    setselecteddrop({...selecteddrop, valueScenario: event.target.value});
    setResultHeading1(x);

  };
  const handleChangeScenarioSecond = event => {
    var index = event.nativeEvent.target.selectedIndex;
    let x= event.nativeEvent.target[index].text
    if(x==='Scenario2') {
      setScenario2(true);
      setScenario3(false);
    } if(x==='Scenario3') {
      setScenario2(false);
      setScenario3(true);

    }


    setselecteddrop({...selecteddrop, valueScenarioSecond: event.target.value});
    setResultHeading2(x);
  };
  const [value, setValue] = React.useState('$1.2M');

  return (
    <React.Fragment>
        <RoiNavBar/>

      <Paper elevation={3} className={classes.outerPaper}>
        <ToolkitProvider
            keyField="id"
            data={staticProducts}
            columns={columns}
            search>
          {
            props => (
                <Box borderRadius={16}>
                  <Box border={1} borderRadius={10} className={classes.header}>
                    <Grid container>
                      <Grid xs={6}>
                        <Typography>
                          Scenarios
                        </Typography>
                      </Grid>
                      <Grid xs={5}/>
                      <Grid xs={1}>
                        <NavLink to ="/createproject"><AddBoxIcon style={{color:'#fff'}}/></NavLink>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className="bootFont" borderRadius={10}>
                    <BootstrapTable headerClasses="boxhead"  rowStyle={rowStyle2}                                                                           condensed
                                    bordered={false}
                                    classes="tableSpace"
                                    // wrapperClasses="table-responsive"
                                    {...props.baseProps}
                        // pagination={paginationFactory(options)}
                    />
                  </Box>
                </Box>

            )
          }
        </ToolkitProvider>
      </Paper>
      {/*<Paper elevation={3}>*/}
      <Grid lg={12}  className={classes.expandOuter}>
        <ExpansionPanel defaultExpanded="true" >
          <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"

        >
            <Typography className={classes.heading}>Compare the Scenarios</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid lg={6}>
                <Grid container>
                  <Grid lg={9} className="compareAlign">
                    {/*<Typography variant="h5">*/}
                    {/*  Compare the Scenario:*/}
                    {/*</Typography>*/}
                  </Grid>
                  <Grid lg={3}>
                    <FormControl className={classes.margin}>
                      <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                        Scenario
                      </InputLabel>
                      <NativeSelect
                          className = "dropSize"
                          id="demo-customized-select-native"
                          value={selecteddrop.valueScenario} onChange={handleChangeScenario}
                          // input={<BootstrapInput />}
                      >
                        <option value={10}>Scenario</option>
                        <option value={20}>Scenario1</option>

                      </NativeSelect>
                    </FormControl>
                  </Grid>
                </Grid>

                {Scenario &&
                <Grid lg={12} className="bxheightmain">
                  <Box boxShadow={2} className={classes.inputMargin}>
                    <Grid container>
                      <Grid lg={12}>
                        <Typography variant="h5" className="predictMargin">
                          {ResultHeading1}
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr/>
                    <Grid container className="resulalign">
                      <Grid lg={5}>
                        <b> Marketing </b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            3%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            NSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            2%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Spend
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            $1.5M
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            ROI
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            1.2
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Rate
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            0.3
                          </Grid>
                        </Grid>
                      </Grid>
                      {/*<Grid lg={1}></Grid>*/}
                      <Grid lg={1} className="vl">
                      </Grid>
                      <Grid lg={5}>
                        <b> Trade Promo</b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            3.5%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Sales
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            2.8%
                          </Grid>
                        </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          Trade Spend
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          $1.9M
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          ROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          1.34
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          MROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          1.5
                        </Grid>
                      </Grid>

                      </Grid>
                    </Grid>

                  </Box>
                  {/*/!*<form onSubmit={handleSubmit}>*!/*/}
                  {/*<Box eleavtion={1} boxShadow={1} className="result">*/}
                  {/*    /!*<Grid className="Result">*!/*/}
                  {/*    /!*    Predicted Results*!/*/}
                  {/*    /!*</Grid>*!/*/}


                </Grid>
                }
                {Scenario1 &&
                <Grid lg={12}>
                  <Box boxShadow={2} className={classes.inputMargin}>
                    <Grid container>
                      <Grid lg={12}>
                        <Typography variant="h5" className="predictMargin">
                          {ResultHeading1}
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr/>
                    <Grid container className="resulalign">
                      <Grid lg={5}>
                        <b> Trade Promo </b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            5%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            NSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            4%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Spend
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            $2.5M
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            ROI
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            1.9
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Rate
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            0.5
                          </Grid>
                        </Grid>
                      </Grid>
                      {/*<Grid lg={1}></Grid>*/}
                      <Grid lg={1} className="vl">
                      </Grid>
                      <Grid lg={5}>
                        <b> Media</b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            4.5%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Sales
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            3.8%
                          </Grid>
                        </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          Trade Spend
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          $2.9M
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          ROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          2.34
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          MROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          1.8
                        </Grid>
                      </Grid>

                      </Grid>
                    </Grid>
                  </Box>
                  {/*<Box eleavtion={1} boxShadow={1} className="result">*/}
                  {/*<Grid className="Result">*/}
                  {/*    Predicted Results*/}
                  {/*</Grid>*/}


                </Grid>
                }
              </Grid>
              <Grid lg={6}>
                <FormControl className={classes.margin}>
                  <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                    Scenario
                  </InputLabel>
                  <NativeSelect
                      className = "dropSize"
                      id="demo-customized-select-native"
                      value={selecteddrop.valueScenarioSecond} onChange={handleChangeScenarioSecond}
                      // input={<BootstrapInput />}
                  >
                    <option value={10}>Scenario2</option>
                    <option value={20}>Scenario3</option>

                  </NativeSelect>
                </FormControl>
                {Scenario2 &&
                <Grid lg={12} className="bxheightmain">
                  <Box boxShadow={2} className={classes.inputMargin}>
                    <Grid container>
                      <Grid lg={12}>
                        <Typography variant="h5" className="predictMargin">
                          {ResultHeading2}
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr/>
                    <Grid container className="resulalign">
                      <Grid lg={5}>
                        <b> Marketing </b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            3%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            NSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            2%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Spend
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            $1.5M
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            ROI
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            1.2
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Rate
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            0.3
                          </Grid>
                        </Grid>
                      </Grid>
                      {/*<Grid lg={1}></Grid>*/}
                      <Grid lg={1} className="vl">
                      </Grid>
                      <Grid lg={5}>
                        <b> Shopper</b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            3.5%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Sales
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            2.8%
                          </Grid>
                        </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          Trade Spend
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          $1.9M
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          ROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          1.34
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          MROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          1.5
                        </Grid>
                      </Grid>

                      </Grid>
                    </Grid>
                  </Box>


                </Grid>
                }
                {Scenario3 &&
                <Grid lg={12} className="bxheightmain">
                  <Box boxShadow={2} className={classes.inputMargin}>
                    <Grid container>
                      <Grid lg={12}>
                        <Typography variant="h5" className="predictMargin">
                          {ResultHeading2}
                        </Typography>
                      </Grid>
                    </Grid>
                    <hr/>
                    <Grid container className="resulalign">
                      <Grid lg={5}>
                        <b> Media </b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            5%
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid lg={5} className="spaceBetween">
                            NSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            4%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Spend
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            $2.5M
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            ROI
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            1.9
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Trade Rate
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            0.5
                          </Grid>
                        </Grid>
                      </Grid>
                      {/*<Grid lg={1}></Grid>*/}
                      <Grid lg={1} className="vl">
                      </Grid>
                      <Grid lg={5}>
                        <b> Shopper</b>
                        <hr className="hl"/>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            GSV
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            4.5%
                          </Grid>
                        </Grid>
                        <Grid container className="spaceBetween">
                          <Grid lg={5}>
                            Sales
                          </Grid>
                          <Grid lg={2}>
                            :
                          </Grid>
                          <Grid lg={5}>
                            3.8%
                          </Grid>
                        </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          Trade Spend
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          $2.9M
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          ROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          2.34
                        </Grid>
                      </Grid><Grid container className="spaceBetween">
                        <Grid lg={5}>
                          MROI
                        </Grid>
                        <Grid lg={2}>
                          :
                        </Grid>
                        <Grid lg={5}>
                          1.8
                        </Grid>
                      </Grid>

                      </Grid>
                    </Grid>
                  </Box>


                </Grid>
                }
              </Grid>

            </Grid>

          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      {/*</Paper>*/}



    </React.Fragment>
  );
}

ScenarioList.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  scenarioList: makeSelectScenarioList()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(ScenarioList);
