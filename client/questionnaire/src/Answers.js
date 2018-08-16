import React, { Component } from 'react';
import { Container, Header, Form, Radio, Button } from 'semantic-ui-react';

class Question extends Component {
  render() {
    return (
      <div>
        <Form.Field>
          <Header as='h4'>{this.props.text}</Header>
        </Form.Field>

        {
          React.Children.map(this.props.children, (child, i) => {
            return (
              <Form.Field>
                {child}
              </Form.Field>
            );
          })
        }

        <br />
      </div>
    );
  }
}

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Container text className='questionnaire-style'>
        <Form>
          <Header as='h1'>Questionnaire</Header><br />

          <Question text='When did you complete training?'>
            <input type="date" name="training" />
          </Question>

          <Question text='Did you find a job?'>
            <Radio name="jobgroup" label='Yes' />
            <Radio name="jobgroup" label='No' />
          </Question>

          <Button primary type='submit'>Submit</Button><br /><br /><br />
        </Form>
      </Container>
    );
  }
}

export default Answers;
