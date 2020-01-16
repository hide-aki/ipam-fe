import React from "react";
import Table from './Table'

function VlanHook(props) {
    return (
        <div>
            <Table name="Vlan" type="vlan" operationName="/getVlans" firstField="serialId" secondField="description"
                   thirdField="standard"/>
        </div>
    );
}

export default VlanHook;
