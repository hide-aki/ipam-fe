import React from 'react';
import Home from "./components/Home";
import {Route, Router, Switch} from "react-router-dom";
import store from './store';
import {Provider} from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {makeStyles} from '@material-ui/core/styles';

import history from "./utils/history";
import Sidebar from "./components/Sidebar";
import NetworkHook from "./components/NetworkHook";
import HostHook from "./components/HostHook";
import VlanHook from "./components/VlanHook";
import NatHook from "./components/NatHook";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Router history={history}>
                        <Sidebar/>
                        <main className={classes.content}>
                            <div className={classes.toolbar}/>
                            <Switch>
                                <Route path="/Home" exact component={Home}/>
                                <Route path="/Host" component={HostHook}/>
                                <Route path="/Nat" component={NatHook}/>
                                <Route path="/Network" component={NetworkHook}/>
                                <Route path="/Vlan" component={VlanHook}/>
                            </Switch>
                        </main>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        </div>
    );
}

export default App;
