import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Host from "./components/Host";
import Network from "./components/Network";
import Nat from "./components/Nat";
import Vlan from "./components/Vlan";
import Home from "./components/Home";
import {Route, Router, Switch} from "react-router-dom";
import store from './store';
import {Provider} from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import history from "./utils/history";
import Sidebar from "./components/Sidebar";

const items = [
    ["Home", "Home", <HomeIcon/>],
    [
        "Host", "Host", <SettingsIcon/>
    ],
    [
        "Network", "Network", <NetworkWifiIcon/>
    ],
    [
        "Vlan", "VLAN", <DesktopWindowsIcon/>
    ],
    [
        "Nat", "NAT", <ReceiptIcon/>
    ]
];

function App() {
    console.log(items[0][0]);
    return (
        <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <div style={{padding: 15}}>
                        <Sidebar names={items}/>
                        <Switch>
                            <Route path="/Home" exact component={Home}/>
                            <Route path="/Host" component={Host}/>
                            <Route path="/NAT" component={Nat}/>
                            <Route path="/Network" component={Network}/>
                            <Route path="/VLAN" component={Vlan}/>
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
}

export default App;
