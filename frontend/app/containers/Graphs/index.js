/**
 *
 * Graphs
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
import makeSelectGraphs from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import Grid from "@material-ui/core/Grid";
import RiskCharts from "../../components/RiskCharts";

export function Graphs() {
  useInjectReducer({ key: "graphs", reducer });
  useInjectSaga({ key: "graphs", saga });

  return (
    <div>
      <Helmet>
        <title>Graphs</title>
        <meta name="description" content="Description of Graphs" />
      </Helmet>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4}>
            <RiskCharts/>
        </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Chartjs/>
          </Grid>
        </Grid>
    </div>
  );
}

Graphs.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  graphs: makeSelectGraphs()
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
)(Graphs);
