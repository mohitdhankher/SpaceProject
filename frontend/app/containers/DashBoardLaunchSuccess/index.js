/**
 *
 * DashBoardLaunchSuccess
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
import makeSelectDashBoardLaunchSuccess from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import FilterSpac from "../../components/FilterSpac";
import SpacCard from "../../components/SpacCard";
import SpacCenterPage from "../../components/SpacCenterPage";
import Typography from "@material-ui/core/Typography";
import {makeSelectSpaceXdata} from "../DashBoardSpac/selectors";
import RoiNavBar from "../../components/RoiNavBar";
import Card from "@material-ui/core/Card";
import './style.css'
export function DashBoardLaunchSuccess(props,{spaceselector}) {
  console.log(spaceselector)
  useInjectReducer({ key: "dashBoardLaunchSuccess", reducer });
  useInjectSaga({ key: "dashBoardLaunchSuccess", saga });
  const [data, setData] = useState({
    dataall:[],
    datayr:[],
    datainitial:[], dataNotification:null,LandfromNotifications:null
  }
      );
  
  if(props.location.state) {
    const {fromNotifications} = props.location.state;
    let fetchDatas = async () => {
    
      let ApiUrl ; // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
      if(props.location.state) {
        if (props.location.state.fromNotifications === true) {
          ApiUrl = true

        } else if (props.location.state.fromNotifications === false) {
          ApiUrl = false
        } else
          ApiUrl = ''
      }
      const responses = await fetch(

          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${ApiUrl}`
      );
     
      const datas = await responses.json();
      setData({...data,datainitial: datas,dataall: datas});
      // setData({...data,dataall: data});

    };
    fetchDatas();
    // setData({...data,dataNotification: fromNotifications})
  }

  useEffect(() => {

    let fetchDatas = async () => {
      
      let ApiUrl ; // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
      if(props.location.state) {
        if (props.location.state.fromNotifications === true) {
          ApiUrl = true

        } else if (props.location.state.fromNotifications === false) {
          ApiUrl = false
        } else
          ApiUrl = ''
      }
      const responses = await fetch(

          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${ApiUrl}`
      );
      
      const datas = await responses.json();
      setData({...data,datainitial: datas,dataall: datas});
      // setData({...data,dataall: data});

    };


    fetchDatas();

  }, []);

  let filteryears = (e)=>{
    
    let year = e.target.innerText ;
    let years;
    if(data) {
      years = data.dataall.filter(
          city=> `${city.launch_success}` === year);
    }
    setDatas({...data,datainitial: years});
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

DashBoardLaunchSuccess.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  dashBoardLaunchSuccess: makeSelectDashBoardLaunchSuccess(),
  spaceselector:makeSelectSpaceXdata()
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
)(DashBoardLaunchSuccess);
