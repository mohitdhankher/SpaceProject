/**
 *
 * MarketingPage
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectMarketingPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import './style.css';
import PieChart from '../../components/PieChart';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import RoiNavBar from "../../components/RoiNavBar";
import RoiProfitGraph from "../../components/RoiProfitGraph";
import RoiRevenueGraph from "../../components/RoiRevenueGraph";
import DropView1 from "../../components/DropView1";
import RadarExp from "../../components/RadarExp";
import RadarRoi from "../../components/RadarRoi";
import LineChart from "../../components/LineChart";
import {withStyles} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import CurveProfit from "../../components/CurveProfit";
import CurveLine from "../../components/CurveLine";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";

const text = `
ROI (PY) : $45M
Spends (PY) : $15M
ROI (CY) : $35M
Spends (CY) : $10M
`;

const AntSwitch = withStyles(theme => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);

const longText = `
Excessive Spend : $300K 
ROI : 1.1
Emails Spreads distribution: 
M&M - $450K 
Twix - $500K 
Dove - $150K

M&M Spreads distribution:
Emails - $450K
TV - 
Radio - 
Direct Market - 
Social Media - 

`;

export function MarketingPage() {
  useInjectReducer({ key: "marketingPage", reducer });
  useInjectSaga({ key: "marketingPage", saga });
    const [state, setState] = React.useState({

        checkedP:true,
        checkedQ:true,
    });
    const [changePie, setchangePie] = React.useState('Media');
    const handleChangeP = event => {
        setState({ ...state, [event.target.name]: event.target.checked });

    };
    const handleChangeQ = event => {
        setState({ ...state, [event.target.name]: event.target.checked });

    };
    const handlePie=(langValue) =>{

        setchangePie(langValue);
    }


    return (
    <React.Fragment>
        <RoiNavBar/>
        <Card className="colorBackb">
            <Grid>
                <Card className="title">
                        <Typography className="head"><h2>
                            Understanding Market Spend For M&M Brand - "Market Spend Across Channels"
                        </h2></Typography>
                </Card>
            </Grid>
            <Card className="roundb">
                <Grid container>
                    <Grid xs={6}>
                        <Box className="vlm">
                            <tooltipPlacementBottom title={text}>
                                <PieChart handlePie={handlePie}/>
                            </tooltipPlacementBottom>
                        </Box>

                    </Grid>
                    <Grid xs={6}>
                        <LineChart/>
                    </Grid>
                </Grid>
            </Card>
            <Card className="roundb">
                <Grid container>
                    <Grid lg={6}>
                        <Grid lg={12}>
                            <Box className='BoxHeightQ'>
                                <Typography alignItems="center" component="div">
                                    <Grid component="label" lg={12} container >
                                        <Grid md={5} lg={5} className="rev">Distribution of {changePie} Spends</Grid>
                                        <Grid  md={1} lg={1} className="toggle">
                                            <AntSwitch checked={state.checkedQ} onChange={handleChangeQ} name="checkedQ" />
                                        </Grid>
                                        <Grid lg={5} md={5} className="rad1">Distribution of {changePie} ROI</Grid>
                                    </Grid>
                                </Typography>
                            </Box>
                            {state.checkedQ ?
                                <RadarExp title={changePie}/>:
                                <RadarRoi title={changePie}/>
                            }
                        </Grid>
                        {/*<Grid xs={3}>*/}
                        {/*    <RadarExp title={changePie}/>*/}
                        {/*</Grid>*/}
                        {/*<Grid xs={3}>*/}
                        {/*    <RadarRoi title={changePie}/>*/}
                        {/*</Grid>*/}
                    </Grid>
                    {/*<Grid xs={1}></Grid>*/}
                    {/*<Grid xs={1} className="vlm">*/}
                    {/*</Grid>*/}

                    <Grid xs={6} className="padbot vlr">
                        <Grid className="drop">
                            <DropView1/>
                        </Grid>
                        <Box className='BoxHeightP'>
                            <Typography alignItems="center" component="div">
                                <Grid component="label" container >
                                    <Grid md={5} lg={5} className="rev">Revenue</Grid>
                                    <Grid  md={1} lg={1} className="toggle">
                                        <AntSwitch checked={state.checkedP} onChange={handleChangeP} name="checkedP" />
                                    </Grid>
                                    <Grid lg={4} md={4} className="rev1">Profit</Grid>
                                </Grid>
                            </Typography>
                        </Box>
                        {/*{state.checkedP ?*/}
                        {/*    <RoiProfitGraph/>:*/}
                        {/*    <RoiRevenueGraph/>*/}
                        {/*}*/}
                        <tooltipPlacementBottom title={longText}>
                            {state.checkedP ?
                                <CurveLine/>:
                                <CurveProfit/>
                            }</tooltipPlacementBottom>

                    </Grid>
                </Grid>
            </Card>


            {/*<Grid container>*/}
            {/*    <Grid xs={6}>*/}
            {/*        <Box boxShadow={2} elevation={2} className="roundb">*/}
            {/*            <tooltipPlacementBottom title={text}>*/}
            {/*                <PieChart/>*/}
            {/*            </tooltipPlacementBottom>*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid xs={6}>*/}
            {/*        <Box boxShadow={2} elevation={2} className="roundb">*/}
            {/*        <Grid container>*/}
            {/*            <Grid lg={6} md={12}>*/}
            {/*                <RadarExp/>*/}
            {/*            </Grid>*/}
            {/*            <Grid lg={6} md={12}>*/}
            {/*                <RadarRoi/>*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
            {/*<Grid container>*/}
            {/*    <Grid xs={6}>*/}
            {/*        <Box boxShadow={2} elevation={2} className="roundb">*/}
            {/*        <LineChart/>*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*    <Grid xs={6}>*/}
            {/*        <Box boxShadow={2} elevation={2} className="roundb">*/}
            {/*            <Grid container>*/}
            {/*                <DropView1/>*/}
            {/*                <Grid xs={6} lg={6}>*/}
            {/*                    <RoiRevenueGraph/>*/}
            {/*                </Grid>*/}
            {/*                <Grid xs={6} lg={6}>*/}
            {/*                    <RoiProfitGraph/>*/}
            {/*                </Grid>*/}
            {/*            </Grid>*/}
            {/*        </Box>*/}

            {/*    </Grid>*/}
            {/*</Grid>*/}
        </Card>

    </React.Fragment>
  );
}

MarketingPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  marketingPage: makeSelectMarketingPage()
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
)(MarketingPage);
