import React from 'react'
import NatForm from "./NatForm";

export default class NatPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const data = new FormData(event.target);
        console.log(data);
        fetch("https://fathomless-escarpment-92247.herokuapp.com/nat/create", {
            method: 'POST',
            body: data,
        }).then((response) => (response.json()))
            .then((responseJson) => {
                console.log(responseJson)
            });
    }

    render() {
        return <NatForm handleSubmit={this.handleSubmit} />
    }
}