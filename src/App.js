import React from 'react';
import './App.css';
import Host from "./components/Host";
import Network from "./components/Network";
import Nat from "./components/Nat";
import Vlan from "./components/Vlan";
import {Link, Route, Router, Switch} from "react-router-dom";
import Home from "./components/Home";

import history from "./utils/history";

function App() {
    return (
        <Router history={history}>
            <div id="app" className="d-flex flex-column h-100">
                <div className="flex-grow-1 mt-5">
                    <ul className="list-group">
                        <li className="list-group-item"><Link to="/host">Show Host</Link></li>
                        <li className="list-group-item"><Link to="/nat">Show Nat</Link></li>
                        <li className="list-group-item"><Link to="/network">Show Network</Link></li>
                        <li className="list-group-item"><Link to="/vlan">Show Vlan</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/host" component={Host}/>
                        <Route path="/nat" component={Nat}/>
                        <Route path="/network" component={Network}/>
                        <Route path="/vlan" component={Vlan}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
