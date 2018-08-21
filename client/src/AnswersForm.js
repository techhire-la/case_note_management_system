import React, { Component } from 'react';
import { Container, Header, Form, Input, Radio, Label, Button } from 'semantic-ui-react';



class AnswersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            dateOfCompletion: undefined,
            applyingToJobs: undefined,

        };

        this.handleDateOfCompletion = (e, { value }) => this.setState({ dateOfCompletion: value });

        this.handleApplyingToJobsChange = (e, { value }) => this.setState({ applyingToJobs: value });




    }

    render() {
        return(
            <Container text className='questionnaire-style'>
                <Form>
                    <Header as='h1'>Questionnaire</Header><br />

                    <Form.Field>
                        <Header as='h4'>'When did you complete training?'</Header>
                    </Form.Field>

                    <Form.Field>
                        <input type="date" name="training" id="date_of_completion" onChange={this.handleDateOfCompletion}/>
                    </Form.Field><br />

                    <Form.Field>
                        <Header as='h4'>Did you find a job?</Header>
                    </Form.Field>

                    <div id="question_subsets">
                        <Form.Field>
                            <Header as='h4'>'Are you currently applying to jobs?'</Header>
                        </Form.Field>

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





                    <Button primary type='submit'>Submit</Button><br /><br /><br />
                </Form>
            </Container>
        );
    }
}











export default AnswersForm;
