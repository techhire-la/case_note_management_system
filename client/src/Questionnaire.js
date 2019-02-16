import React, { Component } from "react";
import {
  Container,
  Header,
  Form,
  Input,
  Radio,
  Label,
  Button,
  Dropdown
} from "semantic-ui-react";

import { connect } from "react-redux";
import { getClients } from "./actions/dashboardActions";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateOfCompletion: undefined,
      foundJob: undefined,
      applyingToJobs: undefined,
      jobsPerWeek: undefined,
      currentResume: undefined,
      attendingDevelopment: undefined,
      meetWithRep: undefined
    };

    this.handleFoundJob = (e, { value }) => {
      this.setState({
        foundJob: value,
        applyingToJobs: undefined,
        jobsPerWeek: undefined,
        currentResume: undefined,
        attendingDevelopment: undefined,
        meetWithRep: undefined
      });
    };

    this.handleApplyingToJobs = (e, { value }) =>
      this.setState({ applyingToJobs: value });
    this.handleJobsPerWeek = (e, { value }) =>
      this.setState({ jobsPerWeek: value });
    this.handleAttendingDevelopment = (e, { value }) =>
      this.setState({ attendingDevelopment: value });
    this.handleMeetWithRep = (e, { value }) =>
      this.setState({ meetWithRep: value });

    // this.handleSubmit = (e) => {
    //     debugger
    //     console.log(this.refs.value)
    // }

    this.handleDate = e => {
      var date = e.target.value.split("-");
      var modified_date = `${date[1]}/${date[2]}/${date[0]}`;
      this.setState({ dateOfCompletion: modified_date });
    };

    this.handleResume = e => this.setState({ currentResume: e.target.value });
  }

  componentDidMount() {
    this.props.getClients(); // populate store
  }

  moreJobInquiries() {
    if (this.state.foundJob === "no") {
      return (
        <div>
          <Form.Field>
            <Header as="h4">Are you currently applying to jobs?</Header>
          </Form.Field>
          <Form.Field>
            <Radio
              name="applygroup"
              label="Yes"
              value="yes"
              checked={this.state.applyingToJobs === "yes"}
              onChange={this.handleApplyingToJobs}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              name="applygroup"
              label="No"
              value="no"
              checked={this.state.applyingToJobs === "no"}
              onChange={this.handleApplyingToJobs}
            />
          </Form.Field>
          <br />

          <Form.Field>
            <Header as="h4">How many a week?</Header>
          </Form.Field>
          <Form.Field>
            <Radio
              name="jpwgroup"
              label="Less than 10"
              value="<10"
              checked={this.state.jobsPerWeek === "<10"}
              onChange={this.handleJobsPerWeek}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              name="jpwgroup"
              label="Less than 20"
              value="<20"
              checked={this.state.jobsPerWeek === "<20"}
              onChange={this.handleJobsPerWeek}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              name="jpwgroup"
              label="Less than 30"
              value="<30"
              checked={this.state.jobsPerWeek === "<30"}
              onChange={this.handleJobsPerWeek}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              name="jpwgroup"
              label="More than 30"
              value=">30"
              checked={this.state.jobsPerWeek === ">30"}
              onChange={this.handleJobsPerWeek}
            />
          </Form.Field>
          <br />

          <Form.Field>
            <Header as="h4">Upload your resume</Header>
          </Form.Field>
          <Form.Field>
            <Input
              type="file"
              id="resume"
              name="resume"
              onChange={this.handleResume}
            />
          </Form.Field>
          <br />

          <Form.Field>
            <Header as="h4">
              Have you been attending professional development training or
              advice?
            </Header>
          </Form.Field>
          <Form.Field>
            <Radio
              name="developmentgroup"
              label="Yes"
              value="yes"
              checked={this.state.attendingDevelopment === "yes"}
              onChange={this.handleAttendingDevelopment}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              name="developmentgroup"
              label="No"
              value="no"
              checked={this.state.attendingDevelopment === "no"}
              onChange={this.handleAttendingDevelopment}
            />
          </Form.Field>
          <br />

          <Form.Field>
            <Header as="h4">
              Would you like to meet with someone from TechHire?
            </Header>
          </Form.Field>
          <Form.Field>
            <Radio
              name="meetgroup"
              label="Yes"
              value="yes"
              checked={this.state.meetWithRep === "yes"}
              onChange={this.handleMeetWithRep}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              name="meetgroup"
              label="No"
              value="no"
              checked={this.state.meetWithRep === "no"}
              onChange={this.handleMeetWithRep}
            />
          </Form.Field>
          <br />
        </div>
      );
    } else {
      return <div> </div>;
    }
  }

  render() {
    let clientNameDropdown = this.props.allClients
      .sort(function(a, b) {
        if (a.last_name > b.last_name) {
          return 1;
        } else if (a.last_name < b.last_name) {
          return -1;
        }
        return 0;
      })
      .map(client => {
        return {
          text: `${client.first_name} ${client.last_name}`,
          value: `${client.first_name}_${client.last_name}_${client._id}`
        };
      });

    return (
      <Container text className="questionnaire-style">
        <p>
          {" "}
          YPI Employee? Login <a onClick={() => this.props.history.push('/login')} style={{cursor: 'pointer'}}>here</a>
        </p>
        <Form>
          <Header as="h1">Questionnaire</Header>
          <br />

          <Form.Field>
            <Header as="h4">What is your name?</Header>
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Select your name"
              fluid
              search
              selection
              options={clientNameDropdown}
            />
          </Form.Field>
          <br />

          <Form.Field>
            <Header as="h4">When did you complete training?</Header>
          </Form.Field>
          <Form.Field>
            <Input
              type="date"
              name="training"
              ref="date-of-completion"
              onChange={this.handleDate}
            />
          </Form.Field>
          <br />

          <Form.Field>
            <Header as="h4">Did you find a job?</Header>
          </Form.Field>
          <Form.Field>
            <Radio
              name="jobgroup"
              label="Yes"
              value="yes"
              checked={this.state.foundJob === "yes"}
              onChange={this.handleFoundJob}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              name="jobgroup"
              label="No"
              value="no"
              checked={this.state.foundJob === "no"}
              onChange={this.handleFoundJob}
            />
          </Form.Field>
          <br />
          {this.moreJobInquiries()}

          <Button primary type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
          <br />
          <br />
          <br />
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    allClients: state.dashboard.allClients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClients: () => dispatch(getClients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questionnaire);
