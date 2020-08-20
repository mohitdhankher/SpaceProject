/**
 *
 * Scenarios
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
import makeSelectScenarios, {makeSelectScenariosGetScenarioTableData} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import ScenarioTable from "../../components/ScenarioTable";
import Grid from "@material-ui/core/Grid";
import NavigationTabs from "../../components/NavigationTabs";
import {get_Scenarios} from './actions';
import Header from "../../components/Header";
import NavLinks from "../../components/NavLinks";
import Spinner from "react-bootstrap/Spinner";
import Table1 from "../../components/Table1";

export function Scenarios({Get_Scenarios, scenarioTableData}) {
    useInjectReducer({key: "scenarios", reducer});
    useInjectSaga({key: "scenarios", saga});
    useEffect(() => {
        // const head = document.getElementsByTagName('head');
        const script = document.createElement('script');
        Get_Scenarios();
        script.innerHTML = 'var _paq = window._paq || [];\n' +
            '/* tracker methods like "setCustomDimension" should be called before "trackPageView" */\n' +
            '_paq.push([\'trackPageView\']);\n' +
            '_paq.push([\'enableLinkTracking\']);\n' +
            '(function() {\n' +
            '    var u="http://vmwl5879:81/";\n' +
            '    _paq.push([\'setTrackerUrl\', u+\'matomo.php\']);\n' +
            '    _paq.push([\'setSiteId\', \'2\']);\n' +
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
        <React.Fragment>
            <Header/>
            <NavLinks/>
            <div style={{margin:'10px'}} >
                {(() => {
                    if (scenarioTableData.length === 0) {
                        return (
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'300px' }} >
                                <Spinner  variant="primary" animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>

                        )
                    } else {
                        return( <ScenarioTable tableData = { scenarioTableData } />)
                    }
                })()}
            </div>

        </React.Fragment>
    );
}

Scenarios.propTypes = {
    Get_Scenarios: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
    scenarios: makeSelectScenarios(),
    scenarioTableData: makeSelectScenariosGetScenarioTableData(),
});

function mapDispatchToProps(dispatch) {
    return {
        Get_Scenarios: () => dispatch(get_Scenarios()),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect,
    memo
)(Scenarios);
