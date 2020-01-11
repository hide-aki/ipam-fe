import React from 'react';
import './App.css';
import Host from "./components/Host";
import Network from "./components/Network";
import Nat from "./components/Nat";
import Vlan from "./components/Vlan";

function App() {
    return (
        <div className="container">
            <h1>Host</h1>
            <Host/>
            <h1>Network</h1>
            <Network/>
            <h1>NAT</h1>
            <Nat/>
            <h1>VLAN</h1>
            <Vlan/>
        </div>
    );
}

export default App;
