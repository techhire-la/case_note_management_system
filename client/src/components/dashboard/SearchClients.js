import React, { Component } from "react";
import axios from "axios";
import _ from 'lodash';
import Client from "./Client";
import { Search, Grid, Header, Segment, Button, Input, Item } from 'semantic-ui-react'


class SearchClients extends Component {

    constructor(props) {
        super(props);
    }

        componentWillMount() {
          this.resetComponent()
        }
      
        resetComponent = () => {
            this.props.handleSearchReset()
        }
            
      
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
