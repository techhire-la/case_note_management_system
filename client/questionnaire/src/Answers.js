import React, { Component } from 'react';
import { Container, Header, Radio, Form, Button } from 'semantic-ui-react';

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

          <Question text='Question 1. What is your age group?'>
            <Radio label='10-14 (Middle School)' />
            <Radio label='14-18 (High School)' />
            <Radio label='18-65 (Adult)' />
          </Question>

          <Question text='Question 2. Do you have any children?'>
            <Radio label='Yes' />
            <Radio label='No' />
          </Question>

          <Question text='Question 3. Are you currently working?'>
            <Radio label='Yes' />
            <Radio label='No' />
          </Question>

          <Question text='Question 4. Are you facing housing hardships?'>
            <Radio label='Yes' />
            <Radio label='No' />
          </Question>

          <Question text='Question 5. Are you facing financial hardships?'>
            <Radio label='Yes' />
            <Radio label='No' />
          </Question>

          <Question text='Question 6. Do you or any of the adults in your immediate family have a disability?'>
            <Radio label='Yes' />
            <Radio label='No' />
            <Radio label='Prefer not to disclose' />
          </Question>

          <Question text='Question 7. Are you or someone in your immediate family a senior citizen?'>
            <Radio label='Yes' />
            <Radio label='No' />
          </Question>

          <Question text='Question 8. Are you or someone in your immediate family a teacher?'>
            <Radio label='Yes' />
            <Radio label='No' />
          </Question>

          <Question text='Question 9. Would you like to include organizations that offer services to the LGBTQIA community?'>
            <Radio label='Yes' />
            <Radio label='No' />
          </Question>

          <Button primary type='submit'>Submit</Button><br /><br /><br />
        </Form>
      </Container>
    );
  }
}

export default Answers;
