import React from 'react'
import HostForm from "./HostForm";

export default class HostPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const data = new FormData(event.target);
        console.log(data);
        fetch("https://fathomless-escarpment-92247.herokuapp.com/host/create", {
            method: 'POST',
            body: data,
        }).then((response) => (response.json()))
            .then((responseJson) => {
                console.log(responseJson)
            });
    }

    render() {
        return <HostForm handleSubmit={this.handleSubmit} />
    }
}