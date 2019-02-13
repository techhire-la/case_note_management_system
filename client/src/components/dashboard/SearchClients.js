import React, { Component } from "react";
import axios from "axios";
import _ from 'lodash';
import Client from "./Client";
import { Search, Grid, Header, Segment, Button, Input, Item } from 'semantic-ui-react'

// class SearchClients extends Component {

//         state = {
//             clients: []
//         };


//         handleClick = e => {
//             e.preventDefault();
//             console.log("hello");
//         };




//     render() {
//         // var clients = this.state.clients;

//         return (
//             <div>
//                 <Button onClick={this.handleClick}> Hello </Button>
//             </div>
//         );
//     }
// }


// export default SearchClients


export default class SearchClients extends Component {
    
        // componentWillMount() {
        //   this.resetComponent()
        // }
      
        // resetComponent = () => this.setState({ results: this.props.clients , value: ''})
        resetComponent = () => {

            this.props.handleSearchReset()
        }
            
        // handleResultSelect = (e, { result }) => this.setState({ value: (result.first_name || result.last_name), full_val: result })
      
        handleSearchChange = (e, { value }) => {

            this.props.handleSearchValue(value)
        //   this.setState({ value })
        //   const res = this.state.results
      
          setTimeout(() => {
            if (this.props.value.length < 1) return this.resetComponent()

      
            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => (re.test(result.first_name) || re.test(result.last_name))
            const client_list = _.filter(this.props.results, isMatch)
            this.props.handleClientSearch(client_list)
        //     this.setState({
              
        //       results: _.filter(this.props.clients, isMatch),
        //     })
          }, 300)

          
        }
  
    render() {
    //   const clients = this.props.results
      const { value, results, clients} = this.props
      
  
      return (
        <Grid>
          <Grid.Column width={12}>

            <Input placeholder='Search...'  
                onChange={_.debounce(this.handleSearchChange, 100, { leading: true })}
                results={results}
                value={value}
            />
          </Grid.Column>

        </Grid>
      )
    }
  }

//   <Search
              
//   onResultSelect={this.handleResultSelect}

// />

{/* <Grid.Column width={10}>
<Segment>
  <Header>State</Header>
  <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
  <Item.Group>
    {clients.map((client, index) => (
    <Client
        key={index}
        first_name={client.first_name}
        last_name={client.last_name}
        email={client.email}
        phone={client.phone}
        count={index + 1}
    />
    ))}
</Item.Group>
</Segment>
</Grid.Column> */}

// {...this.props}  