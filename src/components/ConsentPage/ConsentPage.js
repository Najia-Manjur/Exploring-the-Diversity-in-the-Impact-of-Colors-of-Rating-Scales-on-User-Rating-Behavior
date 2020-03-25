import React from "react";
import { Button, Container } from "react-bootstrap";

class ConsentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      consent: false
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        name: value
      });
    }

    this.handleNext = () => {
      // if (this.state.consent)
      this.props.history.replace("/demographics"); 
      // else
      //   alert("Please agree :P");
    }
  }

  render() {
    // debugger;
    
    return (
      <div className="vertical-center">
        <Container>
          <div>
            <center><h4>Survey nam_usask</h4></center>
            
            <h5>Researchers</h5>
            <ul>
              <li>Najia Manjur, Graduate Student, Department of Computer Science, University of Saskatchewan, email: <a href="mailto: nam907@usask.ca">nam907@usask.ca</a></li>
              <li>Maliha Mahbub, Graduate Student, Department of Computer Science, University of Saskatchewan, email: <a href="mailto: mam789@usask.ca">mam789@usask.ca</a></li>
            </ul>
            <h5>Supervisor</h5>
            
            <p>Julita Vassileva, Department of Computer Science, University of Saskatchewan, email: <a href="mailto: jiv@cs.usask.ca"> jiv@cs.usask.ca</a></p>
            
            <h5>Purpose and Objective of the Study</h5>
            <p>The goal of this research is to find out if users’ demographics, personality, mood and the design of
            rating scales have an impact on their rating behavior. The study may contribute to the general
            research area of Human Computer Interaction (HCI), Recommender Systems and
            Personalization. We have designed a survey that will take approximately 20 minutes and we
            invite you to respond to it by using our system interface. The questionnaire will be presented to
            you after giving your consent to participate in the study.</p>
            <h5>Procedure</h5>
            <p>An online experiment platform is implemented to conduct the user study. The study will
            start with a survey to collect the participants’ demographic data including gender, age and
            home country. In the study, the participants will respond
            to the questionnaire from the Big Five Inventory (BFI, 44 items) and PANAS X in order to assess their
            personality traits and mood on a 5-point Likert scale. Then they will be asked to rate 10 movies using different
            rating scale interfaces. The study will conclude with a survey to collect feedback on the design of the rating scales.</p>
            <h5>Confidentiality</h5>
            <p>
              To protect the anonymity and confidentiality of a participant, all the collected information
              will be stored against a unique, system-generated ID. Thus, the identity of the participant will
              remain unknown. Only the researchers will have access to the ID and the information collected in the study.
            </p>
            <p></p>
            <h5>Potential Risk</h5>
            <p>
              There are no known or anticipated risks to you by participating in this study.
            </p>
            <p></p>
            <h5>Right to Withdraw </h5>
            <p>
              Your participation is voluntary and you may decide not to participate in this study. After 
              submitting 'I Agree' button, we won’t be able to identify your data and therefore, withdrawal 
              is not possible.
            </p>
            <h5>Follow Up</h5>
            <p>To obtain summary of the results from the study, please contact the researchers.</p>
            <h5>Questions or Concerns</h5>
            <ul>
              <li>Contact the researcher(s) using the information at the top of this page.</li>
              <li>This research project has been approved on ethical grounds by the University of Saskatchewan Research Ethics Board. 
              Any questions regarding your rights as a participant may be addressed to that committee through the Research Ethics Office 
              <a href="mailto: ethics.office@usask.ca"> ethics.office@usask.ca</a> (306) 966-2975. Out of town participants may call toll 
              free (888)966-2975.</li>
            </ul> 
            <p>By completing and submitting the questionnaire, YOUR FREE AND INFORMED CONSENT IS IMPLIED and indicates that 
            you understand the above conditions of participation in this study.</p>

            <p>By pressing the 'I Agree' button below indicates that you have read and understood the
            descriptions provided. You have had an opportunity to ask questions and your questions have been answered.
            You consent to participate in this survey. 
            </p>
           
          </div>
          
          <div>
            <Button style={{"float":"right", "background": "#28a745", "border": "0"}} onClick={this.handleNext}>I Agree</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default ConsentPage;


