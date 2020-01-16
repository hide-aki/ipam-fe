import React from 'react'
import HostForm from "./HostForm";

export default class HostPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        const json = JSON.stringify(object);

        console.log(json);
        fetch("https://fathomless-escarpment-92247.herokuapp.com/host/create", {
            method: 'POST',
            headers:{ "Content-Type": 'application/json' },
            body: json,
        }).then((response) => (response.json()))
            .then((responseJson) => {
                console.log(responseJson)
            });
    }

    render() {
        return <HostForm handleSubmit={this.handleSubmit} />
    }
}