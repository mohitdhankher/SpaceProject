/**
 *
 * Landing
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
import makeSelectLanding from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import mu from "../../images/circle.png";
import logo from '../../images/mars.png';
import logo1 from '../../images/Picture1.png';
import logo2 from '../../images/Picture2.png';
import logo3 from '../../images/Picture3.png';
import './style.css';
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import NavLink from "react-bootstrap/NavLink";

export function Landing() {
  useInjectReducer({ key: "landing", reducer });
  useInjectSaga({ key: "landing", saga });

  return (
    <React.Fragment>
        <Grid className="bakground">
            <Grid >
                <div>
                    <AppBar position="static" className="appStyleJ">
                        <Toolbar>
                            <Grid container className="headalign">
                                <Grid md={3} lg={3}>
                                    <img src={mu} alt='mu'
                                         width={50} height={50}/>
                                    <img src={logo} alt='logo'
                                         width={130} height={60}/>
                                </Grid>
                                <Grid md={3} lg={2}/>

                                <Grid md={3} lg={7} className="imgtext">
                                    ROI
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
            <Grid container justify="center" style={{marginTop: '15vh'}}>
                <Grid xs={4} sm={5} lg={3} style={{textAlign:'-webkit-center'}}>
                    <Box  boxShadow={4} elevation={4} className="Landingcar">

                        <Grid className="iconCla">
                            {/*<DashboardIcon/>*/}
                            <NavLink to="/createproject">
                                <img src={logo1} alt='logo'
                                     width={230} height={200}/>
                            </NavLink>
                        </Grid>

                        <Grid className="textfon">
                            Create a Scenario
                        </Grid>
                        <Grid className="substext">
                            Create a Scenario for running a simulation
                        </Grid>
                    </Box>
                </Grid>
                <Grid xs={4} sm={5} lg={3} style={{textAlign:'-webkit-center'}}>
                    <Box  boxShadow={4} elevation={4} className="Landingcar">
                        <Grid className="iconCla">
                            {/*<DashboardIcon/>*/}
                            <NavLink to="/scenario">
                                <img src={logo2} alt='logo'
                                     width={230} height={200}/>
                            </NavLink>
                        </Grid>
                        <Grid className="textfon">
                            Open a Scenario
                        </Grid>
                        <Grid className="substext">
                            Open an existing Scenario which is either running or completed
                        </Grid>
                    </Box>

                </Grid>
                <Grid xs={4} sm={5} lg={3} style={{textAlign:'-webkit-center'}}>
                    <Box  boxShadow={4} elevation={4} className="Landingcar">
                        <Grid className="iconCla">
                            {/*<DashboardIcon/>*/}
                            <NavLink exact to = "/compare">

                                <img src={logo3} alt='logo'
                                     width={210} height={200}/>
                            </NavLink>
                        </Grid>

                        <Grid className="textfon">
                            Compare Scenario
                        </Grid>
                        <Grid className="substext">
                            Compare existing Scenarios
                        </Grid>

                    </Box>
                </Grid>




            </Grid>
        </Grid>
    </React.Fragment>
  );
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  landing: makeSelectLanding()
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
)(Landing);
