import React, { Component } from 'react';
import { Container, Header, Form, Input, Radio, Label, Button } from 'semantic-ui-react';

class Question extends Component {
  render() {
    return (
      <Form.Field>
        <Header as='h4'>{this.props.text}</Header>
      </Form.Field>
    );
  }
}

class ApplyingToJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyingToJobs: undefined,

    };
    this.handleApplyingToJobsChange = (e, { value }) => this.setState({ value });
  }

  render() {
    return (
      <div>
        <Question text='Are you currently applying to jobs?' />
        <Form.Field>
          <Radio name="applygroup" label='Yes'
            value='yes' checked={this.state.value === 'yes'}
            onChange={this.handleApplyingToJobsChange} />
        </Form.Field>
        <Form.Field>
          <Radio name="applygroup" label='No'
            value='no' checked={this.state.value === 'no'}
            onChange={this.handleApplyingToJobsChange} />
        </Form.Field>
        <br />
      </div>
    );
  }
}

class JobsPerWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = (e, { value }) => this.setState({ value });
  }

  render() {
    return (
      <div>
        <Question text='How many a week?' />
        <Form.Field>
          <Radio name="jpwgroup" label='Less than 10'
            value='<10' checked={this.state.value === '<10'}
            onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Radio name="jpwgroup" label='Less than 20'
            value='<20' checked={this.state.value === '<20'}
            onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Radio name="jpwgroup" label='Less than 30'
            value='<30' checked={this.state.value === '<30'}
            onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Radio name="jpwgroup" label='More than 30'
            value='>30' checked={this.state.value === '>30'}
            onChange={this.handleChange} />
        </Form.Field>
        <br />
      </div>
    );
  }
}

class UploadResume extends Component {
  render() {
    return (
      <span>
        <Form.Field>
          <Question text='Upload your resume' />
        </Form.Field>
        <Form.Field>
          <Input type="file" id="resume" name="resume" />
        </Form.Field>
        <br />
      </span>
    );
  }
}

class AttendingDevelopment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = (e, { value }) => this.setState({ value });
  }

  render() {
    return (
      <div>
        <Question text='Have you been attending professional development training or advice?' />
        <Form.Field>
          <Radio name="developmentgroup" label='Yes'
            value='yes' checked={this.state.value === 'yes'}
            onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Radio name="developmentgroup" label='No'
            value='no' checked={this.state.value === 'no'}
            onChange={this.handleChange} />
        </Form.Field>
        <br />
      </div>
    );
  }
}

class MeetWithRep extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = (e, { value }) => this.setState({ value });
  }

  render() {
    return (
      <div>
        <Question text='Would you like to meet with someone from TechHire?' />
        <Form.Field>
          <Radio name="meetgroup" label='Yes'
            value='yes' checked={this.state.value === 'yes'}
            onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Radio name="meetgroup" label='No'
            value='no' checked={this.state.value === 'no'}
            onChange={this.handleChange} />
        </Form.Field>
        <br />
      </div>
    );
  }
}

class MoreJobInquiries extends Component {
  render() {
    return (
      <div>
        <ApplyingToJobs />
        <JobsPerWeek />
        <UploadResume />
        <AttendingDevelopment />
        <MeetWithRep />
      </div>
    );
  }
}

class JobFoundRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = (e, { value }) => {
       this.setState({ value });
     };
  }

  moreJobInquiries() {
    if (this.state.value === 'no')
      return (<MoreJobInquiries />);
    else
      return (<div></div>);
  }

  render() {
    return (
      <div>
        <Form.Field>
          <Radio name="jobgroup" label='Yes'
            value='yes' checked={this.state.value === 'yes'}
            onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Radio name="jobgroup" label='No'
            value='no' checked={this.state.value === 'no'}
            onChange={this.handleChange} />
        </Form.Field>
        <br />
        {this.moreJobInquiries()}
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

          <Question text='When did you complete training?' />
          <Form.Field>
            <input type="date" name="training" />
          </Form.Field><br />

          <Question text='Did you find a job?' />
          <JobFoundRadioGroup />

          <Button primary type='submit'>Submit</Button><br /><br /><br />
        </Form>
      </Container>
    );
  }
}

export default Answers;
