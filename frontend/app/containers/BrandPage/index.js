/**
 *
 * BrandPage
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
import makeSelectBrandPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import './style.css'
import RoiNavBar from "../../components/RoiNavBar";
import Grid from "@material-ui/core/Grid";
import img1 from "../../images/juicy.png";
import img2 from "../../images/winterfresh.png";
import img3 from "../../images/galaxy1.png";
import img4 from "../../images/dove.png";
import img5 from "../../images/starburst.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/mm1.png";
import img8 from "../../images/hubba.png";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import mu from "../../images/circle.png";
import logo from "../../images/mars.png";
import Toolbar from "@material-ui/core/Toolbar";
import {Link, NavLink} from "react-router-dom";


export function BrandPage() {
  useInjectReducer({ key: "brandPage", reducer });
  useInjectSaga({ key: "brandPage", saga });

  return (
    <React.Fragment>
        <Grid >
            <div>
                <AppBar position="static" className="appStyleB">
                    <Toolbar>
                        <Grid container className="headalignB">
                            <Grid md={3} lg={3}>
                                <img src={mu} alt='mu'
                                     width={50} height={50}/>
                                <img src={logo} alt='logo'
                                     width={130} height={60}/>
                            </Grid>
                            {/*<Grid md={1} />*/}

                            <Grid md={6} lg={6} className="imgtextB">
                                MW SPEND 360 PLATFORM
                            </Grid>
                            <Grid md={3} lg={3}/>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </Grid>
        <Grid container className="marginbot">
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">
                    <Link exact to="/reporting">
                        <img src={img7} alt='img7' width={200} height={200}/>
                    </Link>
                </Box>
            </Grid>
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">
                    <img src={img2} alt='img2' width={220} height={220}/>
                </Box>
            </Grid>
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">
                    <img src={img3} alt='img3' width={220} height={220}/>
                </Box>

            </Grid>
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">
                    <img src={img4} alt='img4' width={200} height={200}/>
                </Box>

            </Grid>
        </Grid>
        <Grid container className="margin2">
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">
                    <img src={img5} alt='img5' width={200} height={200}/>
                </Box>

            </Grid>
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">
                    <img src={img6} alt='img6' width={210} height={200}/>
                </Box>

            </Grid>
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">

                <img src={img1} alt='img1' width={200} height={200}/></Box>
            </Grid>
            <Grid xs={3}>
                <Box border={10} className="circle icon-wrapper-bgL">

                <img src={img8} alt='img8' width={200} height={200}/></Box>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

BrandPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  brandPage: makeSelectBrandPage()
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
)(BrandPage);
