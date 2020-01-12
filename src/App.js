import React from 'react';
import './App.css';
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Host from "./components/Host";
import Network from "./components/Network";
import Nat from "./components/Nat";
import Vlan from "./components/Vlan";
import Sidebar from "./components/Sidebar";

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
}

const items = [
    { name: "home", label: "Home", Icon: HomeIcon, onClick },
    {
        name: "hosts", label: "Host", Icon: SettingsIcon, onClick
    },
    {
        name: "network",  label: "Network", Icon: NetworkWifiIcon, onClick
    },
    {
        name: "vlan",  label: "VLAN", Icon: DesktopWindowsIcon, onClick
    },
    {
        name: "nat", label: "NAT", Icon: ReceiptIcon, onClick
    }
];


function App() {
    return (
        <div className="container">
            <div className="sidebar">
            <Sidebar items={items}/>
            </div>
            <div className="main">
                <h1>Host</h1>
                <Host/>
                <h1>Network</h1>
                <Network/>
                <h1>NAT</h1>
                <Nat/>
                <h1>VLAN</h1>
                <Vlan/>
            </div>
        </div>
    );
}

export default App;
