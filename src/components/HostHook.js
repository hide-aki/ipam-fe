import React from "react";
import Table from './Table'

function HostHook(props) {
    return (
        <div>
            <Table name="Host" type="host" operationName="/getHosts" firstField="ip" secondField="hostname"
                   thirdField="description"/>
        </div>
    );
}

export default HostHook;
