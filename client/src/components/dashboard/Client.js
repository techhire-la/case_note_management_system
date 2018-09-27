import React from 'react';
import ReactDOM from 'react-dom';

import { Image, Item, Responsive, Segment, Form, Radio, Checkbox } from 'semantic-ui-react'



const Client = (props) => (

    <div className="row">
        <Responsive as={Segment}>
            <Item.Content>
                <h2><Item.Header as='a'>{props.first_name} {props.last_name}</Item.Header></h2>

                <Form>
                    <Form.Field>
                        <Form.Checkbox label={{ children: props.email }} value={props.programEmail} className="check-box-spacing"/>
                    </Form.Field>
                </Form>

                <Item.Extra> {props.address} </Item.Extra>

                <Item.Extra> {props.phone} </Item.Extra>

            </Item.Content>
        </Responsive>
        <hr/>
    </div>


);



export default Client;