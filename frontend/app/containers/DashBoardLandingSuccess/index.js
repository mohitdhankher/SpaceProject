/**
 *
 * DashBoardLandingSuccess
 *
 */

import React, {memo, useEffect, useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectDashBoardLandingSuccess from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import FilterSpac from "../../components/FilterSpac";
import SpacCenterPage from "../../components/SpacCenterPage";
import Card from "@material-ui/core/Card";
import RoiNavBar from "../../components/RoiNavBar";
import './style.css'
export function DashBoardLandingSuccess(props) {
  useInjectReducer({ key: "dashBoardLandingSuccess", reducer });
  useInjectSaga({ key: "dashBoardLandingSuccess", saga });
  const [data, setData] = useState({
        dataall:[],
        datayr:[],
        datainitial:[], dataNotification:null,LandfromNotifications:true
      }
  );
 
  let fetchDatasLanding = async () => {

    let ApiUrl ; //
    if(props.location.state) {
      if (props.location.state.LandfromNotifications === true) {
        ApiUrl = true
      } else if (props.location.state.LandfromNotifications === false) {
        ApiUrl = false
      }
    }
    const responses = await fetch(

        `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${ApiUrl}`
    );
  
    const datas = await responses.json();
    setData({...data,datainitial: datas,dataall: datas});
    // setData({...data,dataall: data});

  };;
  if(props.location.state) {
    const {LandfromNotifications} = props.location.state;
    fetchDatasLanding();
    // setData({...data,dataNotification: fromNotifications})
  }

  useEffect(() => {
    fetchDatasLanding();
  }, []);

  let filteryears = (e)=>{

    let year = e.target.innerText ;
    let years;
    if(data) {
      years = data.dataall.filter(
          city=> `${city.land_success}` === year);
    }
    setData({...data,datainitial: years});
  }
  return (
    <Card className="maincard">

    <h1>SpaceX Launch Program</h1>
    <Grid container>
        <Grid lg={2} md={6} sm={12} container className="aligns">
           <Card className="maincard2">
            <RoiNavBar filteryear = {filteryears}/>
            </Card>
        </Grid>

      <Grid lg={10} md={6} sm={12} container className="col-container">
          <Card className="maincard2">
          <SpacCenterPage data = {data.datainitial}/>
          </Card>
      </Grid>

    </Grid>

  </Card>
  );
}

DashBoardLandingSuccess.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  dashBoardLandingSuccess: makeSelectDashBoardLandingSuccess()
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
)(DashBoardLandingSuccess);
