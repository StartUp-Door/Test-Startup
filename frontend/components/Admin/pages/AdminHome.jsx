import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';
import Infocard from '../components/infocard/Infocard';
import SalesAnalytics from '../components/charts/SalesAnalytics';
import Approvals from '../components/approval/Approvals';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Statistics from './Statistics'

const useStyles = makeStyles({
    flexBox: {
        display: "flex",
    },
});

function AdminHome() {
    const classes = useStyles();
    return (
        <Router>
            <Topbar name="Dashboard" />
            <div className={classes.flexBox}>
                <Sidebar />
                <div>
                    <Infocard />
                    <SalesAnalytics />
                    <Approvals />
                </div>
            </div>

            <Switch>
                <Route path="/stats"> 
                    <Statistics/>
                </Route>
            </Switch>
         </Router>
    )
}

export default AdminHome
