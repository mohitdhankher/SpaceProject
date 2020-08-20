/**
 *
 * SimulationPage
 *
 */

import React, {memo, useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectSimulationPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import './style.css';
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LaunchIcon from '@material-ui/icons/Launch';
import RoiNavBar from "../../components/RoiNavBar";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './style.css';
import BootstrapTable from 'react-bootstrap-table-next';
import data from "./savedData.json";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {FormControl, InputLabel, TextField} from "@material-ui/core";
import NativeSelect from "@material-ui/core/NativeSelect";
import {makeStyles} from "@material-ui/core/styles";
// import filterFactory, { multiSelectFilter } from'react-bootstrap-table2-filter';


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
    margin: {
        margin: theme.spacing(1),
    },
}));


function rankFormatter(cell, row, rowIndex, formatExtraData) {
    return (
        < div
            style={{ textAlign: "center",
                cursor: "pointer",
                lineHeight: "normal" }}>
            <IconButton className="noPad">
                <AddCircleIcon className="buttonColor" />
            </IconButton>
        </div>
    ); }






const _defaultCosts = [
    {
        name: 10,
        priceTo: 40,
        PPG:10,
        CTA:10,
        priceCTA: 40,
        pricePPG: 40,
        id:'0'
    },
    // {
    //     name: "Noodle",
    //     price: 20
    // }
];
export function SimulationPage() {
  useInjectReducer({ key: "simulationPage", reducer });
  useInjectSaga({ key: "simulationPage", saga });
    const classes = useStyles();

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
        values4:20,
        valuebrand:"grapefruit",
        valuesPpg:"coconut",
        values3: "lime",
        country:[],
        From:'Trade Promo',
        To:"Media",
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
                    { id: "3", country: "US" }] }]});
        const [costs, setCosts] = useState(_defaultCosts);

    const addNewCost = (event) => {
        let index=parseInt(event.target.id)+1;
        let ind= index.toString();
        setCosts(prevCosts => [...prevCosts, { name: 10, price: 0,PPG:10,CTA:10,id:ind }]);
    };
    const DeleteNewCost = (event) => {
        // const name = e.target.getAttribute("name");

        if(event.target.id !=='0') {
            setCosts(costs.filter(
                item => item.id !== event.target.id))
        }
        // setCosts(prevCosts => [...prevCosts, { name: 10, price: 0,PPG:10,CTA:10 }]);
    };

    const handleCostsChange = event => {
        const _tempCosts = [...costs];
        _tempCosts[event.target.id][event.target.name] = event.target.value;

        setCosts(_tempCosts);
    };

    // });


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



    const columns = [
        {
            dataField: 'Ranking',
            text: 'Ranking',
            // filter: multiSelectFilter({
            //     background:"#000"
            // }),

            headerStyle: {
                width:'11vh',
                textAlign:'center',
                paddingBottom: '2%'
            }

        },
        {
            dataField: 'name',
            text: 'Name',
            headerStyle:
                {
                textAlign:"center",
            },
        },
        {
            dataField: 'ownership',
            text: 'Ownership',
            headerStyle: {
                textAlign:'center'
            }

        },
        // {
        //     dataField: 'stakeholders',
        //     text: 'Stakeholders',
        //     headerStyle: {
        //         textAlign:'left'
        //     },
        //
        // },
        {
            dataField: 'action',
            text: 'Add to Compare',
            headerStyle: {
                textAlign:"center",
                width:'12vh'

            },
            formatter: rankFormatter
        }];
    const rowStyle2 = (row, rowIndex) => {
        const style = {};
        style.fontSize = '14px';
        style.backgroundColor = '#f0f0f0',
        style.color ='black';
        // style.padding = '15px 15px 15px 15px';
        style.textAlign = "center";
        return style;

    };

    const tableData = data.product;
  return (
   <React.Fragment>
       <RoiNavBar/>
       <Grid container className="colorBack">
           <Grid lg={3}>
               <Card className="simuCard">
                   <Grid container className="marg centera">
                       <Grid lg={4} className="fontWeight">
                          Simulation
                       </Grid>
                       <Grid lg={5} className="MWCText">
                          MWC_Test_Sim_v10
                       </Grid>
                       <Grid lg={3} container className="centera just">
                           <Grid className="fontWeight">
                              New
                           </Grid>
                           <Grid>
                               <button className="buttonNew">+</button>
                           </Grid>
                       </Grid>
                   </Grid>
                   <Grid container  className="marg margTop">
                       <Grid lg={4}>

                       </Grid>
                       <Grid lg={4}>

                       </Grid>
                       <Grid lg={4} className="fontWeight">
                           Investment
                       </Grid>
                   </Grid>
                   <Grid container>
                       <Grid container lg={4} className="frommarg">
                           <Grid lg={2}/>
                           <Grid className="fontWeight">From:</Grid>

                       </Grid>
                       <Grid lg={4}>
                           <FormControl className={classes.margin}>
                               <InputLabel shrink htmlFor="age-native-label-placeholder">
                                   From
                               </InputLabel>
                               {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                               <NativeSelect
                                   className = "dropSize"
                                   id="demo-customized-select-native"
                                   value={selecteddrop.values2}
                                   onChange={handleChangeD}
                                   // input={<BootstrapInput />}
                               >
                                   <option value={10}>Trade Promo</option>
                                   <option value={20}>Media</option>
                                   <option value={30}>Consumer</option>
                                   <option value={40}>Shopper</option>
                                   {/*<option value="mango">Shopper</option>*/}
                               </NativeSelect>
                           </FormControl>
                       </Grid>
                       <Grid lg={4}>
                           <TextField
                               id="standard-multiline-flexible"
                               label="Investment"
                               className={classes.margin}
                               multiline
                               rowsMax={4}
                               // value={value}
                               // onChange={handleChange}
                           />
                       </Grid>
                   </Grid>
                   <Grid container>
                       <Grid container lg={4} className="frommarg">
                           <Grid lg={2}/>
                           <Grid lg={10} className="fontWeight">CTA:</Grid>

                       </Grid>
                       <Grid lg={4}>
                           <FormControl className={classes.margin}>
                               <InputLabel shrink htmlFor="age-native-label-placeholder">
                                   CTA
                               </InputLabel>
                               {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                               <NativeSelect
                                   className = "dropSizeA"
                                   id="demo-customized-select-native"
                                   // value={selecteddrop.valuebrand}
                                   // onChange={handleChangeD}
                                   // input={<BootstrapInput />}
                               >
                                   <option value="grapefruit">CTA123</option>
                                   <option value="lime">CTA234</option>
                                   <option value="coconut">CTA345</option>
                                   {/*<option value="mango">Shopper</option>*/}
                               </NativeSelect>
                           </FormControl>
                       </Grid>
                       <Grid lg={4}>
                           <TextField
                               id="standard-multiline-flexible"
                               label="Investment"
                               className={classes.margin}
                               multiline
                               rowsMax={4}
                               // value={value}
                               // onChange={handleChange}
                           />
                       </Grid>
                   </Grid>
                   <Grid container>

                       <Grid container lg={4} className="frommarg">
                           <Grid lg={2}/>
                           <Grid lg={10} className="fontWeight">PPG:</Grid>

                       </Grid>
                       <Grid lg={4}>
                           <FormControl className={classes.margin}>
                               <InputLabel shrink htmlFor="age-native-label-placeholder">
                                   PPG
                               </InputLabel>
                               {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                               <NativeSelect
                                   className = "dropSizeA"
                                   id="demo-customized-select-native"
                                   // value={selecteddrop.valuebrand}
                                   // onChange={handleChangeD}
                                   // input={<BootstrapInput />}
                               >
                                   <option value="grapefruit">PPG1</option>
                                   <option value="lime">PPG2</option>
                                   <option value="coconut">PPG3</option>
                                   {/*<option value="mango">Shopper</option>*/}
                               </NativeSelect>
                           </FormControl>
                       </Grid>
                       <Grid lg={4}>
                           <TextField
                               id="standard-multiline-flexible"
                               label="Investment"
                               className={classes.margin}
                               multiline
                               rowsMax={4}
                               // value={value}
                               // onChange={handleChange}
                           />
                       </Grid>
                   </Grid>
                   <hr/>
                   {/*<Grid container>*/}
                   {/*    <Grid container lg={4} className="frommarg">*/}
                   {/*        <Grid lg={2}/>*/}
                   {/*        <Grid lg={10} className="fontWeight">To:</Grid>*/}

                   {/*    </Grid>*/}
                   {/*    <Grid lg={4}>*/}
                   {/*        <FormControl className={classes.margin}>*/}
                   {/*            <InputLabel shrink htmlFor="age-native-label-placeholder">*/}
                   {/*                To*/}
                   {/*            </InputLabel>*/}
                   {/*            /!*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*!/*/}
                   {/*            <NativeSelect*/}
                   {/*                className = "dropSize"*/}
                   {/*                id="demo-customized-select-native"*/}
                   {/*                // value={selecteddrop.valuebrand}*/}
                   {/*                // onChange={handleChangeD}*/}
                   {/*                // input={<BootstrapInput />}*/}
                   {/*            >*/}
                   {/*                <option value={10}>Trade Promo</option>*/}
                   {/*                <option value={20}>Media</option>*/}
                   {/*                <option value={30}>Consumer</option>*/}
                   {/*                <option value={40}>Shopper</option>*/}
                   {/*                /!*<option value="mango">Shopper</option>*!/*/}
                   {/*            </NativeSelect>*/}
                   {/*        </FormControl>*/}
                   {/*    </Grid>*/}
                   {/*    <Grid lg={4}>*/}
                   {/*        <TextField*/}
                   {/*            id="standard-multiline-flexible"*/}
                   {/*            label="Investment*/}
                   {/*            className={classes.margin}*/}
                   {/*            multiline*/}
                   {/*            rowsMax={4}*/}
                   {/*            // value={value}*/}
                   {/*            // onChange={handleChange}*/}
                   {/*        />*/}
                   {/*    </Grid>*/}
                   {/*</Grid>*/}
                   {/*<Grid container>*/}
                   {/*    <Grid container lg={4} className="frommarg">*/}
                   {/*        <Grid lg={2}/>*/}
                   {/*        <Grid lg={10} className="fontWeight">CTA:</Grid>*/}

                   {/*    </Grid>*/}
                   {/*    <Grid lg={4}>*/}
                   {/*        <FormControl className={classes.margin}>*/}
                   {/*            <InputLabel shrink htmlFor="age-native-label-placeholder">*/}
                   {/*                CTA*/}
                   {/*            </InputLabel>*/}
                   {/*            /!*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*!/*/}
                   {/*            <NativeSelect*/}
                   {/*                className = "dropSize"*/}
                   {/*                id="demo-customized-select-native"*/}
                   {/*                // value={selecteddrop.valuebrand}*/}
                   {/*                // onChange={handleChangeD}*/}
                   {/*                // input={<BootstrapInput />}*/}
                   {/*            >*/}
                   {/*                <option value="grapefruit">PPG1</option>*/}
                   {/*                <option value="lime">PPG2</option>*/}
                   {/*                <option value="coconut">PPG3</option>*/}
                   {/*                /!*<option value="mango">Shopper</option>*!/*/}
                   {/*            </NativeSelect>*/}
                   {/*        </FormControl>*/}
                   {/*    </Grid>*/}
                   {/*    <Grid lg={4}>*/}
                   {/*        <TextField*/}
                   {/*            id="standard-multiline-flexible"*/}
                   {/*            label="Investment*/}
                   {/*            className={classes.margin}*/}
                   {/*            multiline*/}
                   {/*            rowsMax={4}*/}
                   {/*            // value={value}*/}
                   {/*            // onChange={handleChange}*/}
                   {/*        />*/}
                   {/*    </Grid>*/}
                   {/*</Grid>*/}
                   {/*<Grid container>*/}

                   {/*    <Grid container lg={4} className="frommarg">*/}
                   {/*        <Grid lg={2}/>*/}
                   {/*        <Grid lg={10} className="fontWeight">PPG:</Grid>*/}

                   {/*    </Grid>*/}
                   {/*    <Grid lg={4}>*/}
                   {/*        <FormControl className={classes.margin}>*/}
                   {/*            <InputLabel shrink htmlFor="age-native-label-placeholder">*/}
                   {/*                PPG*/}
                   {/*            </InputLabel>*/}
                   {/*            /!*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*!/*/}
                   {/*            <NativeSelect*/}
                   {/*                className = "dropSize"*/}
                   {/*                id="demo-customized-select-native"*/}
                   {/*                // value={selecteddrop.valuebrand}*/}
                   {/*                // onChange={handleChangeD}*/}
                   {/*                // input={<BootstrapInput />}*/}
                   {/*            >*/}
                   {/*                <option value="grapefruit">PPG1</option>*/}
                   {/*                <option value="lime">PPG2</option>*/}
                   {/*                <option value="coconut">PPG3</option>*/}
                   {/*                /!*<option value="mango">Shopper</option>*!/*/}
                   {/*            </NativeSelect>*/}
                   {/*        </FormControl>*/}
                   {/*    </Grid>*/}
                   {/*    <Grid lg={4}>*/}
                   {/*        <TextField*/}
                   {/*            id="standard-multiline-flexible"*/}
                   {/*            label="Investment*/}
                   {/*            className={classes.margin}*/}
                   {/*            multiline*/}
                   {/*            rowsMax={4}*/}
                   {/*            // value={value}*/}
                   {/*            // onChange={handleChange}*/}
                   {/*        />*/}
                   {/*    </Grid>*/}
                   {/*</Grid>*/}
                   <hr/>
                   {costs.map((item, index) => (
                       <Grid key={index}>
                            <Grid container>
                       <Grid container lg={4} className="frommarg">
                           <Grid lg={2}/>
                           <Grid lg={10} className="fontWeight">To:</Grid>

                       </Grid>
                       <Grid lg={4}>
                           <FormControl className={classes.margin}>
                               <InputLabel shrink htmlFor="age-native-label-placeholder">
                                   To
                               </InputLabel>
                               {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                               <NativeSelect
                                   className = "dropSize"
                                   // id="demo-customized-select-native"
                                   value={item.name}
                                   name="name"
                                   id={index}
                                   onChange={handleChangeTo}
                                   data-id={index}
                                   // value={selecteddrop.valuebrand}
                                   // onChange={handleChangeD}
                                   // input={<BootstrapInput />}
                               >
                                   <option value={10}>Media</option>
                                   <option value={20}>Trade Promo</option>
                                   <option value={30}>Consumer</option>
                                   <option value={40}>Shopper</option>
                                   {/*<option value="mango">Shopper</option>*/}
                               </NativeSelect>
                           </FormControl>
                       </Grid>
                       <Grid lg={4}>
                           <TextField
                               id="standard-multiline-flexible"
                               label="Investment"
                               className={classes.margin}
                               multiline
                               rowsMax={4}
                               // value={value}
                               // onChange={handleChange}
                           />
                       </Grid>
                   </Grid>
                            <Grid container>
                       <Grid container lg={4} className="frommarg">
                           <Grid lg={2}/>
                           <Grid lg={10} className="fontWeight">CTA:</Grid>

                       </Grid>
                       <Grid lg={4}>
                           <FormControl className={classes.margin}>
                               <InputLabel shrink htmlFor="age-native-label-placeholder">
                                   CTA
                               </InputLabel>
                               {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                               <NativeSelect
                                   className = "dropSizeA"
                                   id="demo-customized-select-native"
                                   value={item.CTA}
                                   name="CTA"
                                   id={index}
                                   data-id={index}
                                   // value={selecteddrop.valuebrand}
                                   onChange={handleCostsChange}
                                   // input={<BootstrapInput />}
                               >
                                   <option value={10}>CTA123</option>
                                   <option value={20}>CTA234</option>
                                   <option value={30}>CTA345</option>
                                   {/*<option value="mango">Shopper</option>*/}
                               </NativeSelect>
                           </FormControl>
                       </Grid>
                       <Grid lg={4}>
                           <TextField
                               id="standard-multiline-flexible"
                               label="Investment"
                               className={classes.margin}
                               multiline
                               rowsMax={4}
                               // value={value}
                               // onChange={handleChange}
                           />
                       </Grid>
                   </Grid>
                            <Grid container>

                       <Grid container lg={4} className="frommarg">
                           <Grid lg={2}/>
                           <Grid lg={10} className="fontWeight">PPG:</Grid>

                       </Grid>
                       <Grid lg={4}>
                           <FormControl className={classes.margin}>
                               <InputLabel shrink htmlFor="age-native-label-placeholder">
                                   PPG
                               </InputLabel>
                               {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                               <NativeSelect
                                   className = "dropSizeA"
                                   id="demo-customized-select-native"
                                   value={item.PPG}
                                   name="PPG"
                                   id={index}
                                   data-id={index}
                                   onChange={handleCostsChange}
                                   // value={selecteddrop.valuebrand}
                                   // onChange={handleChangeD}
                                   // input={<BootstrapInput />}
                               >
                                   <option value={10}>PPG1</option>
                                   <option value={20}>PPG2</option>
                                   <option value={20}>PPG3</option>
                                   {/*<option value="mango">Shopper</option>*/}
                               </NativeSelect>
                           </FormControl>
                       </Grid>
                       <Grid lg={4}>
                           <TextField
                               id="standard-multiline-flexible"
                               label="Investment"
                               className={classes.margin}
                               multiline
                               rowsMax={4}
                               // value={value}
                               // onChange={handleChange}
                           />
                       </Grid>
                                <Grid>
                                    <button id={index} className="buttonNew" onClick={addNewCost}>+</button>
                                </Grid>
                                <Grid>

                                    <button  id={index} className="buttonNew" onClick={DeleteNewCost}>- </button>
                                </Grid>
                   </Grid>


                            <hr/>

                       </Grid>
                       ))}

                   {/*<hr/>*/}
                   <Grid className="simulate">
                       <button   className="simuButton" >SIMULATE</button>
                   </Grid>
               </Card>

           </Grid>
           <Grid lg={9}>
               <Grid container>
                   <Grid lg={6}>
                       <Card className="cardSize">
                           <CardContent>
                               <Grid container>
                                   <Grid lg={10}>
                                       Simulation Results
                                   </Grid>
                                   <Grid lg={2} className="iconAlign">
                                       <Tooltip title="Save">
                                           <IconButton className="noPad">
                                               <SaveIcon/>
                                           </IconButton>
                                       </Tooltip>
                                       {/*</Grid>*/}
                                       {/*<Grid lg={1} className="iconAlign">*/}
                                       <Tooltip title="Export">
                                           <IconButton className="noPad">
                                               <LaunchIcon/>
                                           </IconButton>
                                       </Tooltip>
                                   </Grid>
                               </Grid>
                               <Grid container className="marginCard">
                                   <Grid lg={3}>
                                   </Grid>
                                   <Grid lg={1}>
                                   </Grid>
                                   <Grid lg={6}>
                                       <Card className="headerCard smallCardC">
                                           <Grid container>
                                               <Grid lg={6}>
                                                   <b> {selecteddrop.From} </b>
                                               </Grid>
                                               <Grid lg={6}>
                                                   <b> {selecteddrop.To}</b>
                                               </Grid>
                                           </Grid>
                                       </Card>
                                   </Grid>
                               </Grid>
                               <Grid container className="marginCard">
                                   <Grid lg={3}>
                                       GSV
                                   </Grid>
                                   <Grid lg={1}>
                                       :
                                   </Grid>
                                   <Grid lg={6}>
                                       <Grid container>
                                           <Grid lg={6}>
                                               <Card className="firstHalfColor smallCardC">
                                                   3%
                                               </Card>
                                           </Grid>
                                           <Grid lg={6}>
                                               <Card className="secondHalfColor smallCardC">
                                                   3.5%
                                               </Card>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                               <Grid container className="marginCard">
                                   <Grid lg={3}>
                                       NSV
                                   </Grid>
                                   <Grid lg={1}>
                                       :
                                   </Grid>
                                   <Grid lg={6}>
                                       <Grid container>
                                           <Grid lg={6}>
                                               <Card className="firstHalfColor smallCardC">
                                                   2%
                                               </Card>
                                           </Grid>
                                           <Grid lg={6}>
                                               <Card className="secondHalfColor smallCardC">
                                                   2.8%
                                               </Card>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                               <Grid container  className="marginCard">
                                   <Grid lg={3}>
                                       Trade Spend
                                   </Grid>
                                   <Grid lg={1}>
                                       :
                                   </Grid>
                                   <Grid lg={6}>
                                       <Grid container>
                                           <Grid lg={6}>
                                               <Card className="firstHalfColor smallCardC">
                                                   $1.5M
                                               </Card>
                                           </Grid>
                                           <Grid lg={6}>
                                               <Card className="secondHalfColor smallCardC">
                                                   $1.9M
                                               </Card>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                               <Grid container  className="marginCard">
                                   <Grid lg={3}>
                                       ROI
                                   </Grid>
                                   <Grid lg={1}>
                                       :
                                   </Grid>
                                   <Grid lg={6}>
                                       <Grid container>
                                           <Grid lg={6}>
                                               <Card className="firstHalfColor smallCardC">
                                                   1.2
                                               </Card>
                                           </Grid>
                                           <Grid lg={6}>
                                               <Card className="secondHalfColor smallCardC">
                                                   1.34
                                               </Card>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                               <Grid container className="marginCard">
                                   <Grid lg={3}>
                                       Trade Rate
                                   </Grid>
                                   <Grid lg={1}>
                                       :
                                   </Grid>
                                   <Grid lg={6}>
                                       <Grid container>
                                           <Grid lg={6}>
                                               <Card className="firstHalfColor smallCardC">
                                                   0.3
                                               </Card>
                                           </Grid>
                                           <Grid lg={6}>
                                               <Card className="secondHalfColor smallCardC">
                                                   0.8
                                               </Card>
                                           </Grid>
                                       </Grid>
                                   </Grid>
                               </Grid>
                           </CardContent>
                       </Card>
                   </Grid>
                   <Grid lg={6}>
                       <Card className="cardSize">
                           <CardContent>
                               <Grid container>
                                   <Grid lg={10}>
                                       Saved Scenarios
                                   </Grid>
                                   <Grid lg={2} className="iconAlign">
                                       <Tooltip title="Save">
                                           <IconButton className="noPad">
                                               <SaveIcon/>
                                           </IconButton>
                                       </Tooltip>
                                       {/*</Grid>*/}
                                       {/*<Grid lg={1} className="iconAlign">*/}
                                       <Tooltip title="Export">
                                           <IconButton className="noPad">
                                               <LaunchIcon/>
                                           </IconButton>
                                       </Tooltip>
                                   </Grid>
                               </Grid>
                               <Grid className="bootMargin">
                                   <BootstrapTable keyField="id" headerClasses="boxHead" classes={'lowPad'} data={tableData} columns={columns}
                                                   rowStyle={rowStyle2}
                                   />
                               </Grid>

                           </CardContent>
                       </Card>
                   </Grid>
               </Grid>
               <Grid lg={12}>
                       <Card className="cardSize1">
                           <Grid>
                               <CardContent>
                                   <Grid container>
                                       <Grid lg={10}>
                                           Compare Scenarios
                                       </Grid>
                                       <Grid lg={2} className="iconAlign">
                                           <Tooltip title="Save">
                                               <IconButton className="noPad">
                                                   <SaveIcon/>
                                               </IconButton>
                                           </Tooltip>
                                       {/*</Grid>*/}
                                       {/*<Grid lg={1} className="iconAlign">*/}
                                           <Tooltip title="Export">
                                               <IconButton className="noPad">
                                                   <LaunchIcon/>
                                               </IconButton>
                                           </Tooltip>
                                       </Grid>
                                   </Grid>
                               </CardContent>
                           </Grid>
                           <Grid container>
                               <Grid lg={6}>
                                       <CardContent>
                                           {/*<Grid container>*/}
                                           {/*    <Grid lg={10}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={1}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={1}>*/}
                                           {/*    </Grid>*/}
                                           {/*</Grid>*/}
                                           <Grid container className="alignSc">
                                               <Grid lg={4} className="dropP">
                                                   <FormControl className={classes.margin}>
                                                       <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                                                           Scenario
                                                       </InputLabel>
                                                       <NativeSelect
                                                           className = "dropSizeA"
                                                           id="demo-customized-select-native"
                                                           value={selecteddrop.valueScenario} onChange={handleChangeScenario}
                                                           // input={<BootstrapInput />}
                                                       >
                                                           <option value={10}>Scenario</option>
                                                           <option value={20}>Scenario1</option>

                                                       </NativeSelect>
                                                   </FormControl>
                                               </Grid>
                                               <Grid lg={8}>
                                                   <Grid container className="gap alignSc">
                                                       <Grid lg={6}>
                                                           {ResultHeading1}
                                                           <ArrowUpwardIcon className="green"/>
                                                       </Grid>
                                                       <Grid lg={1}>
                                                           {/*<ArrowUpwardIcon className="green"/>*/}
                                                       </Grid>
                                                       <Grid lg={5}/>
                                                   </Grid>
                                               </Grid>
                                               {/*<Grid lg={1}>*/}
                                                   {/*<Grid lg={3}>*/}
                                                   {/*    <FormControl className={classes.margin}>*/}
                                                   {/*        <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">*/}
                                                   {/*            Scenario*/}
                                                   {/*        </InputLabel>*/}
                                                   {/*        <NativeSelect*/}
                                                   {/*            className = "dropSizeA"*/}
                                                   {/*            id="demo-customized-select-native"*/}
                                                   {/*            value={selecteddrop.valueScenario} onChange={handleChangeScenario}*/}
                                                   {/*            // input={<BootstrapInput />}*/}
                                                   {/*        >*/}
                                                   {/*            <option value={10}>Scenario</option>*/}
                                                   {/*            <option value={20}>Scenario1</option>*/}

                                                   {/*        </NativeSelect>*/}
                                                   {/*    </FormControl>*/}
                                                   {/*</Grid>*/}
                                               {/*</Grid>*/}
                                           </Grid>
                                           {/*<Grid container>*/}
                                           {/*    <Grid lg={3}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={1}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={6} >*/}
                                           {/*        /!*<Grid container className="gap">*!/*/}
                                           {/*        /!*    <Grid lg={4}>*!/*/}
                                           {/*        /!*        {ResultHeading1}*!/*/}
                                           {/*        /!*    </Grid>*!/*/}
                                           {/*        /!*    <Grid lg={1}>*!/*/}
                                           {/*        /!*        <ArrowUpwardIcon className="green"/>*!/*/}
                                           {/*        /!*    </Grid>*!/*/}
                                           {/*        /!*</Grid>*!/*/}
                                           {/*    </Grid>*/}
                                           {/*</Grid>*/}
                                           {Scenario &&
                                           <Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                   </Grid>
                                                   <Grid lg={1}>
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className=" smallCard1 smallCardC headerCard">
                                                           <Grid container>
                                                               <Grid lg={6} className="headerCard">
                                                                   Trade Promo
                                                               </Grid>
                                                               <Grid lg={6} className="headerCard">
                                                                   Shopper
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       GSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   3%
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   4%
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       NSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   2%
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   3%
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       Trade Spends
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $1.5
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $1.2
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       ROI
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   1.2
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   1.2
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       Trade Rate
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   0.3
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   0.2
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       Investment
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $1.2M
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $1.1M
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>

                                           </Grid>
                                           }
                                           {Scenario1 &&
                                           <Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                   </Grid>
                                                   <Grid lg={1}>
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard1 headerCard">
                                                           <Grid container>
                                                               <Grid lg={6} className="headerCard">
                                                                   Trade Promo
                                                               </Grid>
                                                               <Grid lg={6} className="headerCard">
                                                                   Shopper
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       GSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   2%
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   3%
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       NSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   1%
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   2%
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       Trade Spends
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $1.3
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $1.1
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       ROI
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   1.3
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   1.3
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       Trade Rate
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   0.2
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   0.1
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>
                                               <Grid container className="marginCard1">
                                                   <Grid lg={3}>
                                                       Investment
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6}>
                                                       <Grid container>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $1.1M
                                                               </Card>
                                                           </Grid>
                                                           <Grid lg={6}>
                                                               <Card className="firstHalfColor smallCardC txtclr">
                                                                   $0.8M
                                                               </Card>
                                                           </Grid>
                                                       </Grid>
                                                   </Grid>
                                               </Grid>

                                           </Grid>
                                           }
                                       </CardContent>
                               </Grid>
                               <Grid lg={6}>
                                       <CardContent>
                                           {/*<Grid container>*/}
                                           {/*    <Grid lg={10}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={1}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={1}>*/}
                                           {/*    </Grid>*/}
                                           {/*</Grid>*/}
                                           <Grid container className="alignSc">
                                               <Grid lg={4}>
                                                   <FormControl className={classes.margin}>
                                                       <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                                                           Scenario
                                                       </InputLabel>
                                                       <NativeSelect
                                                           className = "dropSizeA"
                                                           id="demo-customized-select-native"
                                                           value={selecteddrop.valueScenarioSecond} onChange={handleChangeScenarioSecond}
                                                           // input={<BootstrapInput />}
                                                       >
                                                           <option value={10}>Scenario2</option>
                                                           <option value={20}>Scenario3</option>

                                                       </NativeSelect>
                                                   </FormControl>
                                               </Grid>
                                               <Grid lg={8}>
                                                   <Grid container className="gap">
                                                       <Grid lg={6}>
                                                           {ResultHeading2}
                                                           <ArrowDownwardIcon className="red"/>
                                                       </Grid>
                                                       <Grid lg={1}>
                                                           {/*<ArrowDownwardIcon className="red"/>*/}
                                                       </Grid>
                                                       <Grid lg={5}/>
                                                   </Grid>
                                               </Grid>
                                               {/*<Grid lg={6} >*/}
                                                   {/*<Grid lg={3}>*/}
                                                       {/*<FormControl className={classes.margin}>*/}
                                                       {/*    <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">*/}
                                                       {/*        Scenario*/}
                                                       {/*    </InputLabel>*/}
                                                       {/*    <NativeSelect*/}
                                                       {/*        className = "dropSizeA"*/}
                                                       {/*        id="demo-customized-select-native"*/}
                                                       {/*        value={selecteddrop.valueScenarioSecond} onChange={handleChangeScenarioSecond}*/}
                                                       {/*        // input={<BootstrapInput />}*/}
                                                       {/*    >*/}
                                                       {/*        <option value={10}>Scenario2</option>*/}
                                                       {/*        <option value={20}>Scenario3</option>*/}

                                                       {/*    </NativeSelect>*/}
                                                       {/*</FormControl>*/}
                                                   {/*</Grid>*/}
                                               {/*</Grid>*/}
                                           </Grid>
                                           {/*<Grid container>*/}
                                           {/*    <Grid lg={3}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={1}>*/}
                                           {/*    </Grid>*/}
                                           {/*    <Grid lg={6} >*/}
                                           {/*        <Grid container className="gap">*/}
                                           {/*            <Grid lg={5}>*/}
                                           {/*                {ResultHeading2}*/}
                                           {/*            </Grid>*/}
                                           {/*            <Grid lg={2}>*/}
                                           {/*                <ArrowDownwardIcon className="red"/>*/}
                                           {/*            </Grid>*/}
                                           {/*        </Grid>*/}
                                           {/*    </Grid>*/}
                                           {/*</Grid>*/}
                                           {Scenario2 &&
                                           <Grid className="down">
                                               <Grid container>
                                                   <Grid lg={3}>
                                                   </Grid>
                                                   <Grid lg={1}>
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard headerCard">
                                                           <Grid container className="headerCard">
                                                               <Grid lg={5} >
                                                                   Trade Promo
                                                               </Grid>
                                                               <Grid lg={3}>
                                                                   Shopper
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   Consumer
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container >
                                                   <Grid lg={3}>
                                                       GSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       3%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       4%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       3%
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       NSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       2%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       2%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       2%
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       Trade Spend
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.1
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.5
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       $1.1
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       ROI
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.3
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.8
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       1.2
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       Trade Rate
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.3
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.1
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       0.3
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       Investment
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.4
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.3
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       $1.4
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                           </Grid>
                                           }
                                           {Scenario3 &&
                                           <Grid className="down">
                                               <Grid container>
                                                   <Grid lg={3}>
                                                   </Grid>
                                                   <Grid lg={1}>
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard headerCard">
                                                           <Grid container className="headerCard">
                                                               <Grid lg={5}>
                                                                   Trade Promo
                                                               </Grid>
                                                               <Grid lg={3}>
                                                                   Shopper
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   Consumer
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container >
                                                   <Grid lg={3}>
                                                       GSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       2%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       4%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       2%
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       NSV
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       1%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       2%
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       1%
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       Trade Spend
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.3
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.6
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       $1.3
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       ROI
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.2
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.7
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       1.3
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       Trade Rate
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.2
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       0.2
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       0.5
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                               <Grid container>
                                                   <Grid lg={3}>
                                                       Investment
                                                   </Grid>
                                                   <Grid lg={1}>
                                                       :
                                                   </Grid>
                                                   <Grid lg={6} className="padSmallCard">
                                                       <Card className="smallCard">
                                                           <Grid container>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.3
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr1">
                                                                       $1.2
                                                                   </Card>
                                                               </Grid>
                                                               <Grid lg={4}>
                                                                   <Card className="firstHalfColor smallCard txtclr">
                                                                       $1.6
                                                                   </Card>
                                                               </Grid>
                                                           </Grid>
                                                       </Card>
                                                   </Grid>
                                               </Grid>
                                           </Grid>
                                           }

                                       </CardContent>
                               </Grid>
                           </Grid>
                       </Card>
               </Grid>
           </Grid>
       </Grid>

   </React.Fragment>
  );
}

SimulationPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  simulationPage: makeSelectSimulationPage()
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
)(SimulationPage);
