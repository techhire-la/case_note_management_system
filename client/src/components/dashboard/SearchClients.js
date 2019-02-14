import React, { Component } from "react";
import axios from "axios";
import _ from 'lodash';
import Client from "./Client";
import { Search, Grid, Header, Segment, Button, Input, Item } from 'semantic-ui-react'


class SearchClients extends Component {

    constructor(props) {
        super(props);
        // this.resetComponent = this.resetComponent(this);
        // this.handleSearchChange = this.handleSearchChange(this);
    }
    
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

      
          setTimeout(() => {
            if (this.props.value.length < 1) return this.resetComponent()

      
            const re = new RegExp(_.escapeRegExp(this.props.value), 'i')
            const isMatch = result => (re.test(result.first_name) || re.test(result.last_name))
            const client_list = _.filter(this.props.results, isMatch)
            this.props.handleClientSearch(client_list)
          }, 300)

          
        }
  
    render() {
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

export default SearchClients

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