import React from 'react';

import Table from "./Table";


function NetworkHook(props) {

    return (
        <div>
            <Table name="Network" type="network" operationName="/getNetworks" firstField="ip" secondField="addressMask"
                   thirdField="description"/>
        </div>
    );
}

export default NetworkHook;
