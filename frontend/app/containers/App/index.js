/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';

import DashBoardSpac from "../DashBoardSpac";
import DashBoardLaunchSuccess from "../DashBoardLaunchSuccess";
import DashBoardLandingSuccess from "../DashBoardLandingSuccess";



export default function App() {
    return (
        <div >
            <Switch>
                <Route exact path="/spac" component={DashBoardSpac}/>
                <Route exact path="/LaunchSuccess" component={DashBoardLaunchSuccess}/>
                <Route exact path="/LandingSuccess" component={DashBoardLandingSuccess}/>
            </Switch>
        </div>
    );
}
