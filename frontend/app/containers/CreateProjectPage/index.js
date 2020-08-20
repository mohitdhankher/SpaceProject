/**
 *
 * CreateProjectPage
 *
 */

import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import makeSelectCreateProjectPage, {
    makeSelectCreatedSuccessfully, makeSelectIsCreated,
    makeSelectProjectDetails
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import './style.css';
import NavBar from "../../components/NavBar/Loadable";
import {useInjectReducer} from "../../utils/injectReducer";
import {useInjectSaga} from "../../utils/injectSaga";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    FormControl, InputLabel, MenuItem, Select,
    TextareaAutosize,
    TextField,
    Typography
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';


import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import {
    create_Project,
    project_Details,
} from "./actions";

import { withStyles } from '@material-ui/core/styles';

import RoiNavBar from "../../components/RoiNavBar";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        backgroundColor: 'ghostwhite',
        minHeight: '52vh',
        height: '100%'
    },
    outerPaper: {
        margin: theme.spacing(4),
    },
    innerPaper: {
        marginTop: theme.spacing(2)
    },
    formLabel: {
        marginTop: '12px'
    },
    formControl: {
        margin: theme.spacing(1),
        width: "96%"
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
    textLabel: {
        fontWeight : 'bold',
        color : 'black'
    },
    params: {
        color : 'black',
        fontWeight : '400'
    },
    textBold: {
        fontSize: 'x-large',
        fontWeight: 'bold',
        paddingBottom: '4vh'
    },
    button: {
        margin: theme.spacing(1),
    },
    inputMargin: {
        borderRadius: "7px",
        margin:"1%",
        minHeight: "96%"
    },
    marginSize:{
        width:"20vh",
        margin: theme.spacing(1),
    }
}));

export function CreateProjectPage({ CreateProject, ProjectDetails, storeProjectDetails, isCreated}) {
    useInjectReducer({ key: "createProjectPage", reducer });
    useInjectSaga({ key: "createProjectPage", saga });

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit");
        CreateProject({...storeProjectDetails});
    }

    const handleProjectTitleChange = (e) => {
        ProjectDetails({...storeProjectDetails, projectTitle : e.target.value});
    }

    const handleDescriptionChange =  (e) => {
        ProjectDetails({...storeProjectDetails, description : e.target.value});
    }

    const handleDateChange = (e) => {
        ProjectDetails({...storeProjectDetails, startDate : e});
    };

    const handleRunPeriodChange =  (e) => {
        ProjectDetails({...storeProjectDetails, runPeriod : e.target.value});
    }

    const handleDeadPeriodChange =  (e) => {
        ProjectDetails({...storeProjectDetails, deadPeriod : e.target.value});
    }

    const handleStoreChange =  (e) => {
        ProjectDetails({...storeProjectDetails, stores : e.target.value});
    }

    const handleDivisionChange =  (e) => {
        ProjectDetails({...storeProjectDetails, division : e.target.value});
    }

    const handleTerritoryChange =  (e) => {
        ProjectDetails({...storeProjectDetails, territory : e.target.value});
    }

    const handleChannelChange =  (e) => {
        ProjectDetails({...storeProjectDetails, channel : e.target.value});
    }

    const handleSubChannelChange =  (e) => {
        ProjectDetails({...storeProjectDetails, subChannel : e.target.value});
    }

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
        debugger;
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
            <Grid lg={12}>
                <Box boxShadow={2} className={classes.inputMargin}>
                    <Grid container>
                        <Grid lg={11}>
                            <Typography variant="h5" className="headerMargin">
                                Create a Scenario
                            </Typography>
                        </Grid>
                        {/*<Grid lg={1}/>*/}
                        <Grid lg={1}>
                            <IconButton
                                color="Primary"
                            >
                                <CloudUploadIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container className="boxText">
                        <Grid lg={6}>
                            <Grid container>
                                <Grid lg={5}>
                                    <FormControl className={classes.margin}>
                                        <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                                            FROM
                                        </InputLabel>
                                        <NativeSelect
                                            className = "dropSize"
                                            id="demo-customized-select-native"
                                            value={selecteddrop.values2} onChange={handleChangeD}
                                            // input={<BootstrapInput />}
                                        >
                                            <option value={10}>Trade Promo</option>
                                            <option value={20}>Marketing</option>
                                            <option value={30}>Consumer</option>
                                            <option value={40}>Shopper</option>
                                        </NativeSelect>
                                    </FormControl>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                                            CTA
                                        </InputLabel>
                                        {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                                        <NativeSelect
                                            className = "dropSize"
                                            id="demo-customized-select-native"
                                            value={selecteddrop.valuebrand}
                                            // onChange={handleChangeD}
                                            // input={<BootstrapInput />}
                                        >
                                            <option value="grapefruit">CTA1</option>
                                            <option value="lime">CTA2</option>
                                            <option value="coconut">CTA3</option>
                                            {/*<option value="mango">Shopper</option>*/}
                                        </NativeSelect>
                                    </FormControl>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                                            PPG
                                        </InputLabel>
                                        {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            className = "dropSize"
                                            value={selecteddrop.values} onChange={handleChangeD}
                                            // input={<BootstrapInput />}
                                        >

                                            <option value="grapefruit">PPG1</option>
                                            <option value="lime">PPG2</option>
                                            <option value="coconut">PPG3</option>
                                            {/*<option value="mango">Shopper</option>*/}
                                        </NativeSelect>
                                    </FormControl>
                                </Grid>
                                <Grid lg={5} className="reInvestMargin">
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Investment"
                                        className={classes.margin}
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        // onChange={handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Investment"
                                        className={classes.margin}
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        // onChange={handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Investment"
                                        className={classes.margin}
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        // onChange={handleChange}
                                    />

                                </Grid>
                            </Grid>

                        </Grid>


                        <Grid lg={6}>
                            <Grid container>
                                <Grid lg={5}>
                                    <FormControl className={classes.margin}>
                                        <InputLabel className={classes.textBold} shrink htmlFor="age-native-label-placeholder">
                                            TO
                                        </InputLabel>
                                        <NativeSelect
                                            className = "dropSize"
                                            id="demo-customized-select-native"
                                            value={selecteddrop.values3} onChange={handleChangeTo}
                                            // input={<BootstrapInput />}
                                        >
                                            <option value={10}>Trade Promo</option>
                                            <option value={20}>Marketing</option>
                                            <option value={30}>Consumer</option>
                                            <option value={40}>Shopper</option>
                                        </NativeSelect>
                                    </FormControl>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                                            CTA
                                        </InputLabel>
                                        <NativeSelect
                                            className = "dropSize"
                                            id="demo-customized-select-native"
                                            // value={selecteddrop.valuebrand}
                                            // onChange={handleChangeD}
                                            // input={<BootstrapInput />}
                                        >
                                            <option value="grapefruit">CTA1</option>
                                            <option value="lime">CTA2</option>
                                            <option value="coconut">CTA3</option>
                                            {/*<option value="mango">Shopper</option>*/}
                                        </NativeSelect>
                                    </FormControl>
                                    <FormControl className={classes.margin}>
                                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                                            PPG
                                        </InputLabel>
                                        {/*<InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>*/}
                                        <NativeSelect
                                            className = "dropSize"
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
                                <Grid lg={5} className="reInvestMargin">
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Re-Investment"
                                        className={classes.margin}
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        // onChange={handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Re-Investment"
                                        className={classes.margin}
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        // onChange={handleChange}
                                    />
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="Re-Investment"
                                        className={classes.margin}
                                        multiline
                                        rowsMax={4}
                                        value={value}
                                        // onChange={handleChange}
                                    />

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid lg={12}>
                <Box boxShadow={2} className={classes.inputMargin}>
                    <Grid container>
                        <Grid lg={12}>
                            <Typography variant="h5" className="predictMargin">
                                Predicted Results
                            </Typography>
                        </Grid>
                    </Grid>
                    <hr/>
                    <Grid container className="resulalign">
                        <Grid lg={4}>
                            <b> {selecteddrop.From} </b>
                            <hr className="hl"/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    GSV
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    3%
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    NSV
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    2%
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    Trade Spend
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    $1.5M
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    ROI
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    1.2
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    Trade Rate
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    0.3
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                        </Grid>
                        <Grid lg={1}/>
                        {/*<Grid lg={1}/>*/}
                        <Grid lg={1} className="vl"/>
                        {/*<Grid lg={1}/>*/}
                        <Grid lg={4}>
                            <b> {selecteddrop.To}</b>
                            <hr className="hl"/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    GSV
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    3.5%
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    Sales
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    2.8%
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    Trade Spend
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    $1.9M
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    ROI
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    1.34
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                            <Grid container className="spaceBetween1">
                                <Grid lg={5}>
                                    MROI
                                </Grid>
                                <Grid lg={2}>
                                    :
                                </Grid>
                                <Grid lg={4}>
                                    1.5
                                </Grid>
                                <Grid lg={1}>
                                    <ExpandLessIcon style={{color:"green", fontSize:"xx-large"}}/>
                                </Grid>
                            </Grid>
                            <hr/>
                        </Grid>
                    </Grid>


                </Box>
                <Grid lg={12} className="saveButton">
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}

CreateProjectPage.propTypes = {
    CreateProject : PropTypes.func,
    ProjectDetails : PropTypes.func,
    storeProjectDetails : PropTypes.object,
    isCreated : PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
    createProjectPage: makeSelectCreateProjectPage(),
    storeProjectDetails: makeSelectProjectDetails(),
    isCreated: makeSelectIsCreated()
});

function mapDispatchToProps(dispatch) {
    return {
        CreateProject : (project)=> {
            dispatch(create_Project(project))
        },
        ProjectDetails : (project) => {
            dispatch(project_Details(project))
        }
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect,
    memo
)(CreateProjectPage);