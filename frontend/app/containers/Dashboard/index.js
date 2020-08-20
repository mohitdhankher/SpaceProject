/**
 *
 * Dashboard
 *
 */

import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectDashboard from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import Table1 from "../../components/Table1";
import Grid from "@material-ui/core/Grid";
import ScenarioTable from "../../components/ScenarioTable";
import RiskCharts from "../../components/RiskCharts";
import MultipleSelectFilter from "../../components/TopFilter";
import Paper from "@material-ui/core/Paper";
import Chart from "../../components/Chart";
import OverviewTopFilter from "../../components/OverviewTopFilter"
import Button from "@material-ui/core/Button";

export function Dashboard() {
  useInjectReducer({ key: "dashboard", reducer });
  useInjectSaga({ key: "dashboard", saga });
    useEffect(() => {
        // const head = document.getElementsByTagName('head');
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
    }, []);

  return (

      <div style={{ height:'100%', backgroundColor:'rgb(0,0,255)'}} >
          <Grid style={{height:'100%'}} container spacing={1}>
              <Grid style={{height:'100%'}} item md={2} sm = {2} xs={12} >
                  <div style={{ height:'100%', backgroundColor:'rgb(255,0,0)'}}>

                  </div>
              </Grid>
              <Grid item md={10} sm = {10}>
                  <div style={ {height:'50%', backgroundColor:'rgb(0,255,0)', margin:'5px'}}>

                  </div>
              </Grid>
          </Grid>
      </div>

              );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard()
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
)(Dashboard);
