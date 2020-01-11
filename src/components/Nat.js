import React from 'react';
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class Nat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            nat: {},
            network: {},
            device: {},
            location: {}
        }
    }

    componentDidMount() {
        let url = 'https://fathomless-escarpment-92247.herokuapp.com/nat/get/testName'; //TODO PROVE NAME HERE
        return fetch(url)
            .then((response) => (response.json()))
            .then((responseJson) => {
                this.setState({
                    nat: responseJson,
                    device: responseJson["device"],
                    location: responseJson["device"]["location"],
                    network: responseJson["innerIPNetwork"]
                });
            })
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control name="name" id="name" readOnly value={this.state.nat["name"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Device: </Form.Label>
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.device["description"] || ''}/>
                            <Form.Label>Location: </Form.Label>
                            <Form.Label>Physical Location: </Form.Label>
                            <Form.Control name="physicalLocation" id="physicalLocation" readOnly
                                          value={this.state.location["physicalLocation"] || ''}/>
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.location["description"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.nat["description"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>External IP: </Form.Label>
                            <Form.Control name="externalIP" id="externalIP" readOnly
                                          value={this.state.nat["externalIP"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>IP Network: </Form.Label>
                            <Form.Label>IP: </Form.Label>
                            <Form.Control name="ip" id="ip" readOnly value={this.state.network["ip"] || ''}/>
                            <Form.Label>Mask: </Form.Label>
                            <Form.Control name="addressMask" id="addressMask" readOnly
                                          value={this.state.network["addressMask"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default Nat;