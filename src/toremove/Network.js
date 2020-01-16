import React from 'react';
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { FormGroup } from '@material-ui/core';


class Network extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            network: {},
            vlan: {},
            nameServers: {},
            location: {}
        }
    }

    componentDidMount() {
        let url = 'https://fathomless-escarpment-92247.herokuapp.com/network/get/testip'; //TODO PROVE IP HERE
        return fetch(url)
            .then((response) => (response.json()))
            .then((responseJson) => {
                this.setState({
                    network: responseJson,
                    vlan: responseJson["vlan"],
                    nameServers: responseJson["nameServers"],
                    location: responseJson["location"]
                });
            })
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>IP address: </Form.Label>
                            <Form.Control name="ip" id="ip" readOnly value={this.state.network["ip"] || ''}/>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>Mask: </Form.Label>
                            <Form.Control name="addressMask" id="addressMask" readOnly
                                          value={this.state.network["addressMask"] || ''}/>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.network["description"] || ''}/>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>VLAN: </Form.Label>
                            <Form.Label>Id: </Form.Label>
                            <Form.Control name="id" id="id" readOnly value={this.state.vlan["id"] || ''}/>
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.vlan["description"] || ''}/>
                            {/*<Form.Label>Relevant IP Networks: </Form.Label>*/}
                            {/*<Form.Control name="relevantIPNetworks" id="relevantIPNetworks" readOnly*/}
                            {/*              value={this.state.vlan["relevantIPNetworks"] || ''}/>*/}
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>Name Servers: </Form.Label>
                            <Form.Control name="nameServers" id="nameServers" readOnly
                                          value={this.state.nameServers || ''}/>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>Location: </Form.Label>
                            <Form.Label>Physical Location: </Form.Label>
                            <Form.Control name="physicalLocation" id="physicalLocation" readOnly
                                          value={this.state.location["physicalLocation"] || ''}/>
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.location["description"] || ''}/>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>Is Routable: </Form.Label>
                            <Form.Control name="isRoutable" id="isRoutable" readOnly
                                          value={this.state.network["isRoutable"] ? 'Yes' : 'No'}/>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>Firewall Type: </Form.Label>
                            <Form.Control name="firewallType" id="firewallType" readOnly
                                          value={this.state.network["firewallType"] || ''}/>
                        </FormGroup>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup as={Col} md="4">
                            <Form.Label>IP Type: </Form.Label>
                            <Form.Control name="ipType" id="ipType" readOnly
                                          value={this.state.network["ipType"] || ''}/>
                        </FormGroup>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default Network;