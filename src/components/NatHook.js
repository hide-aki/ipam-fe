import React from "react";
import Table from './Table'

function NatHook(props) {
    return (
        <div>
            <Table name="Nat" type="nat" operationName="/getNats" firstField="name" secondField="description"
                   thirdField="externalIP"/>
        </div>
    );
}

export default NatHook;
