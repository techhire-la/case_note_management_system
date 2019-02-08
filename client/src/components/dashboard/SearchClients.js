import React, { Component } from "react";
import axios from "axios";
import {Button} from "semantic-ui-react";

class SearchClients extends Component {

        state = {
            clients: []
        };


        handleClick = e => {
            e.preventDefault();
            console.log("hello");
        };




    render() {
        // var clients = this.state.clients;

        return (
            <div>
                <Button onClick={this.handleClick}> Hello </Button>
            </div>
        );
    }
}


export default SearchClients