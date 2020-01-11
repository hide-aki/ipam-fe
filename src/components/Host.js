import React from 'react';
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class Host extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            host: {},
            device: {},
            location: {}
        }
    }

    componentDidMount() {
        let url = 'http://fathomless-escarpment-92247.herokuapp.com/host/get/testip'; //TODO PROVE IP HERE
        return fetch(url)
            .then((response) => (response.json()))
            .then((responseJson) => {
                this.setState({
                    host: responseJson,
                    device: responseJson["device"],
                    location: responseJson["device"]["location"]
                });
            })
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>IP address:</Form.Label>
                            <Form.Control name="ip" id="ip" readOnly value={this.state.host["ip"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Hostname:</Form.Label>
                            <Form.Control name="hostname" id="hostname"
                                          readOnly value={this.state.host["hostname"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">

                            <Form.Label>Description:</Form.Label>
                            <Form.Control name="description" id="description"
                                          readOnly value={this.state.host["description"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">

                            <Form.Label>MAC Address:</Form.Label>
                            <Form.Control name="macAddress" id="macAddress"
                                          readOnly value={this.state.host["macAddress"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">

                            <Form.Label>Is gateaway:</Form.Label>
                            <Form.Control name="isGateaway" id="isGateaway"
                                          readOnly value={this.state.host["isGateaway"] ? 'Yes' : 'No'}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">

                            <Form.Label>Owner:</Form.Label>
                            <Form.Control name="owner" id="owner" readOnly value={this.state.host["owner"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Device: </Form.Label>
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.device["description"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Location: </Form.Label>
                            <Form.Label>Physical Location: </Form.Label>
                            <Form.Control name="physicalLocation" id="physicalLocation" readOnly
                                          value={this.state.location["physicalLocation"] || ''}/>
                            <Form.Label>Description : </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.location["description"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default Host;