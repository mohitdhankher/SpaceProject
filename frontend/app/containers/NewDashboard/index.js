/**
 *
 * NewDashboard
 *
 */

import React, {memo, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import {FormattedMessage} from "react-intl";
import {createStructuredSelector} from "reselect";
import {compose} from "redux";

import {useInjectSaga} from "utils/injectSaga";
import {useInjectReducer} from "utils/injectReducer";
import makeSelectNewDashboard, {makeSelectDashboardTabledata} from "./selectors";
import reducer from "./reducer";
import saga, { saveScenario } from "./saga";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import RiskCharts from "../../components/RiskCharts";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SideFilter from "../../components/ControlPanel";
import Table1 from "../../components/Table1";
import Card from "@material-ui/core/Card";
import CardGraph from "../../components/CardGraph";
import Spinner from "react-bootstrap/Spinner";
import {fetch_TableData, save_Scenario, save_ScenarioKassandra, toggle_Tabledata, getUserInfo} from "./actions";
import Paper from "@material-ui/core/Paper";
import NavigationTabs from "../../components/NavigationTabs";
import Header from "../../components/Header";
import NavLinks from "../../components/NavLinks";
import '../NewDashboard/style.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    filterContainer: {
        maxWidth: '100%',
    },
    cardContainer: {
        margin: '0px 10px 10px 10px',
        width: '80%',
        height: '50%',
    },
    card: {
        width: '100%',
        height: '32%',
    },
    graph: {
        width: '30%'
    },
    recard: {
        width: '10%',
        margin: '2px'
    },
    heading: {
        margin: '10px',
        fontSize: 14,
        paddingTop: '11px',
        fontFamily: 'MarsCentra-Bold'
    }
}));


export function NewDashboard({Load_TableData, tableData, Save_Scenario , Save_ScenarioKassandra, Toglle_TableData, GetUserInfo}) {
    useInjectReducer({key: "newDashboard", reducer});
    useInjectSaga({key: "newDashboard", saga});
    const classes = useStyles();

    function getCookie(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    }
 const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const[SceneName,setSceneName] = React.useState("");

  const handleScenarioNameInput = (evt)=>{
setSceneName(evt.target.value);
};
    useEffect(() => {
        let user = JSON.parse(getCookie("UserInfo")) ;
        GetUserInfo(user);

        let paramArray =  getCookie("scenarioString").split('_').map(x=>x.replace("\"",""));
        console.table(paramArray);
        Load_TableData(paramArray[0] , paramArray[1] );

        

        const script = document.createElement('script');

        script.innerHTML = 'var _paq = window._paq || [];\n' +
            '/* tracker methods like "setCustomDimension" should be called before "trackPageView" */\n' +
            '_paq.push([\'trackPageView\']);\n' +
            '_paq.push([\'enableLinkTracking\']);\n' +
            '(function() {\n' +
            '    var u="http://vmwl5879:81/";\n' +
            '    _paq.push([\'setTrackerUrl\', u+\'matomo.php\']);\n' +
            '    _paq.push([\'setSiteId\', \'1\']);\n' +
            '    var d=document, g=d.createElement(\'script\'), s=d.getElementsByTagName(\'script\')[0];\n' +
            '    g.type=\'text/javascript\'; g.async=true; g.defer=true; g.src=u+\'matomo.js\'; s.parentNode.insertBefore(g,s);\n' +
            '})();';
        script.type = 'text/javascript';
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        }
    }, [])

    const handleSaveScenario = ()=>{
        handleClose();
        Save_Scenario();
        Save_ScenarioKassandra(SceneName);
    }

    const handleTableselection = (row, isSelect, rowIndex)=>{
        Toglle_TableData({
row:row,
isSelect:isSelect,
rowIndex:rowIndex
        })
    };

    return (
            <React.Fragment>
                <Header/>
                <NavLinks/>
            <Helmet>
                <title>NewDashboard</title>
                <meta name="description" content="Description of NewDashboard"/>
            </Helmet>
            <Grid container >
                <Grid item md={2} sm={2} xs={12} sm={4}>
                    <NavigationTabs getdata={Load_TableData}/>
                </Grid>
                <Grid item md={10} sm={10} xs={12} sm={8} style={{padding: '10px'}} >
                    <div>
                        <Paper elevation={10} square={true} >
                            <h4 className={classes.heading}>Item count by Risk category</h4>
                            <React.Fragment>
                                <Grid container >
                                    <Grid item md={7} xs={12} sm={12}>
                                        <Grid container>
                                            <Grid item md={2} xs={12} sm={3} style={{margin: '10px'}}>
                                                <CardGraph Risk='OOS Risk' Value='586' message={'Controlled at 0%'}/>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={3} style={{margin: '10px'}}>
                                                <CardGraph Risk='No Risk' Value='210' message={'NA'}/>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={3} style={{margin: '10px'}}>
                                                <CardGraph Risk='Low Risk' Value='90' message={'Controlled at 40%'}/>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={3} style={{margin: '10px'}}>
                                                <CardGraph Risk='Medium Risk' Value='60' message={'Controlled at 70%'}/>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={3} style={{margin: '10px'}}>
                                                <CardGraph Risk='HS Risk' Value='596'
                                                           message={'Controlled at 250%'}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={5} xs={12} sm={12}>
                                        <RiskCharts/>
                                    </Grid>
                                </Grid>

                            </React.Fragment>
                        </Paper>
                    </div>
                    <div style={{margin:'10px'}} >
                        {(() => {
                            if (tableData.length === 0) {
                                return (
                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'300px' }} >
                                        <Spinner  variant="primary" animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    </div>

                                )
                            } else {
                                return( <Table1 saveScene={handleClickOpen} onSelectingTableData={handleTableselection} data={tableData}/>)
                            }
                        })()}
                    </div>
                </Grid>
                <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Save Scenario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give name to your Scenario
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Scenario Name"
            type="text"
            value={SceneName}
            onChange={handleScenarioNameInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveScenario} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
                </div>
            </Grid>
            </React.Fragment>
    );
}

NewDashboard.propTypes = {
    Load_TableData: PropTypes.func,
    Save_Scenario: PropTypes.func,
    Save_ScenarioKassandra: PropTypes.func,
    Toglle_TableData:PropTypes.func,
    GetUserInfo:PropTypes.func,
    
};

const mapStateToProps = createStructuredSelector({
    newDashboard: makeSelectNewDashboard(),
    tableData: makeSelectDashboardTabledata(),
});

function mapDispatchToProps(dispatch) {
    return {
        Load_TableData: (H, R) => {
            const data = {High: H, Low: R};
            console.log("at map to dispatch" + data);
            dispatch(fetch_TableData(data))
        },
        Save_Scenario: () => dispatch(save_Scenario()),
        Save_ScenarioKassandra: (data)=> dispatch(save_ScenarioKassandra(data)),
        Toglle_TableData:(data)=> dispatch(toggle_Tabledata(data)),
        GetUserInfo:(data)=>dispatch(getUserInfo(data))
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect,
    memo
)(NewDashboard);


