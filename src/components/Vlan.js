import React from 'react';
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class Vlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            vlan: {},
            networks: {}
        }
    }

    componentDidMount() {
        let url = 'https://fathomless-escarpment-92247.herokuapp.com/vlan/get/12312312312'; //TODO PROVE ID HERE
        return fetch(url)
            .then((response) => (response.json()))
            .then((responseJson) => {
                this.setState({
                    vlan: responseJson,
                    networks: responseJson["relevantIPNetworks"]
                });
            })
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Id: </Form.Label>
                            <Form.Control name="id" id="id" readOnly value={this.state.vlan["id"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Description: </Form.Label>
                            <Form.Control name="description" id="description" readOnly
                                          value={this.state.vlan["description"] || ''}/>
                        </Form.Group>
                    </Form.Row>
                    {/*TODO forEach for networks generate*/}
                    {/*<Form.Row>*/}
                    {/*    <Form.Group as={Col} md="4">*/}
                    {/*        <Form.Label>Relevant Ip Networks: </Form.Label>*/}
                    {/*        <Form.Control name="networks" id="networks" readOnly*/}
                    {/*                      value={this.state.networks || ''}/>*/}
                    {/*    </Form.Group>*/}
                    {/*</Form.Row>*/}
                </Form>
            </div>
        );
    }
}

export default Vlan;