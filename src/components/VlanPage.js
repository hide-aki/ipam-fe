import React from 'react'
import VlanForm from "./VlanForm";

export default class VlanPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const data = new FormData(event.target);
        console.log(data);
        fetch("https://fathomless-escarpment-92247.herokuapp.com/vlan/create", {
            method: 'POST',
            body: data,
        }).then((response) => (response.json()))
            .then((responseJson) => {
                console.log(responseJson)
            });
    }

    render() {
        return <VlanForm handleSubmit={this.handleSubmit} />
    }
}