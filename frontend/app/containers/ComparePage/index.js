/**
 *
 * ComparePage
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
import makeSelectComparePage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import RoiNavBar from "../../components/RoiNavBar";
import RoiRevenueGraph from "../../components/RoiRevenueGraph";
import RoiProfitGraph from "../../components/RoiProfitGraph";
import DropView1 from "../../components/DropView1";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import './style.css';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import NavBar from "../../components/NavBar";
import CurveLine from "../../components/CurveLine";
import CurveProfit from "../../components/CurveProfit";


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    customWidth: {
        maxWidth: 500,
    },
    noMaxWidth: {
        maxWidth: 'none',
    },
}));

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

const longText1 = `
Excessive Spend : $300K 
ROI : 1.1
Emails Spreads distribution: 
Snickers - $450K 
Twix - $500K 
Dove - $150K

Snickers Spreads distribution:
Emails - $450K
TV - 
Radio - 
Direct Market - 
Social Media - 

`;

export function ComparePage() {
  useInjectReducer({ key: "comparePage", reducer });
  useInjectSaga({ key: "comparePage", saga });

    const classes = useStyles();

    return (
    <React.Fragment>
        <RoiNavBar/>
        {/*<NavBar/>*/}
      <DropView1/>
      <Grid container>
          <Grid xs={5} className="revenuMargin">
              <tooltipPlacementBottom title={longText}>
              <Box eleavtion={2} boxShadow={3}>
                  <RoiRevenueGraph/>
              </Box>
              </tooltipPlacementBottom>
          </Grid>
          <Grid xs={5} className="profitMargin">
              <tooltipPlacementBottom title={longText1}>
              <Box eleavtion={2} boxShadow={3}>
                  <RoiProfitGraph/>
              </Box></tooltipPlacementBottom>
          </Grid>
      </Grid>
        <CurveProfit/>
    </React.Fragment>
  );
}

ComparePage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  comparePage: makeSelectComparePage()
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
)(ComparePage);
