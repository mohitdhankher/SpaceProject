/**
 *
 * FilterSpac
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RoiNavBar from "../RoiNavBar";
import Box from "@material-ui/core/Box";

function FilterSpac(props) {
    // let arrayyear = props.arrayyear;
    let arrayyear = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019']
    let filteryear = (e)=>{
        props.filteryear(e);
    }
  return (
      <Box>



          <RoiNavBar />
          {/*<Grid container>*/}
          {/*<Grid lg={5}>*/}
          {/*    <NavLink exact to="LaunchSuccess" className="alignHome" activeClassName="active">*/}
          {/*    <Button> True </Button>*/}
          {/*    </NavLink>*/}
          {/*</Grid>*/}
          {/*<Grid lg={5}>*/}
          {/*    <Button onClick={filteryear} > False </Button>*/}
          {/*</Grid>*/}
          {/*</Grid>*/}
      </Box>
  );
}

FilterSpac.propTypes = {};

export default memo(FilterSpac);
