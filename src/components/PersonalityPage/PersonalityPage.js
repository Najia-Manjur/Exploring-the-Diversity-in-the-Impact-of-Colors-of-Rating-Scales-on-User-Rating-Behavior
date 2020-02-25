import React from "react";
import { Button, Container } from "react-bootstrap";
import utils from "../utils";
import survey from "../../Data/survey";
import dot from "dot-prop";

class PersonalityPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      talkative: dot.get(survey.get(), 'personality.talkative', 0),
      faultWithOthers: dot.get(survey.get(), 'personality.faultWithOthers', 0),
      thoroughJob: dot.get(survey.get(), 'personality.thoroughJob', 0),
      depressed: dot.get(survey.get(), 'personality.depressed', 0),
      original: dot.get(survey.get(), 'personality.original', 0),
      reserved: dot.get(survey.get(), 'personality.reserved', 0),
      helpful: dot.get(survey.get(), 'personality.helpful', 0),
      careless: dot.get(survey.get(), 'personality.careless', 0),
      relaxed: dot.get(survey.get(), 'personality.relaxed', 0),
      curious: dot.get(survey.get(), 'personality.curious', 0),
      energy: dot.get(survey.get(), 'personality.energy', 0),
      quarrels: dot.get(survey.get(), 'personality.quarrels', 0),
      reliable: dot.get(survey.get(), 'personality.reliable', 0),
      tense: dot.get(survey.get(), 'personality.tense', 0),
      deepThinker: dot.get(survey.get(), 'personality.deepThinker', 0),
      enthusiasm: dot.get(survey.get(), 'personality.enthusiasm', 0),
      forgiving: dot.get(survey.get(), 'personality.forgiving', 0),
      disorganized: dot.get(survey.get(), 'personality.disorganized', 0),
      worried: dot.get(survey.get(), 'personality.worried', 0),
      activeImagination: dot.get(survey.get(), 'personality.activeImagination', 0),
      quiet: dot.get(survey.get(), 'personality.quiet', 0),
      trusting: dot.get(survey.get(), 'personality.trusting', 0),
      lazy: dot.get(survey.get(), 'personality.lazy', 0),
      upset: dot.get(survey.get(), 'personality.upset', 0),
      inventive: dot.get(survey.get(), 'personality.inventive', 0),
      assertive: dot.get(survey.get(), 'personality.assertive', 0),
      coldAloof: dot.get(survey.get(), 'personality.coldAloof', 0),
      perseverence: dot.get(survey.get(), 'personality.perseverence', 0),
      moody: dot.get(survey.get(), 'personality.moody', 0),
      artistic: dot.get(survey.get(), 'personality.artistic', 0),
      shy: dot.get(survey.get(), 'personality.shy', 0),
      kind: dot.get(survey.get(), 'personality.kind', 0),
      efficient: dot.get(survey.get(), 'personality.efficient', 0),
      calm: dot.get(survey.get(), 'personality.calm', 0),
      routineWork: dot.get(survey.get(), 'personality.routineWork', 0),
      outgoing: dot.get(survey.get(), 'personality.outgoing', 0),
      rude: dot.get(survey.get(), 'personality.rude', 0),
      makePlans: dot.get(survey.get(), 'personality.makePlans', 0),
      nervous: dot.get(survey.get(), 'personality.nervous', 0),
      reflective: dot.get(survey.get(), 'personality.reflective', 0),
      fewArtInterest: dot.get(survey.get(), 'personality.fewArtInterest', 0),
      cooperative: dot.get(survey.get(), 'personality.cooperative', 0),
      distracted: dot.get(survey.get(), 'personality.distracted', 0),
      sophisticatedInArt: dot.get(survey.get(), 'personality.sophisticatedInArt', 0),
      age: survey.get().personality.age,
      gender: survey.get().personality.gender,
      country: survey.get().personality.country
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: parseInt(value)
      });
    }

    this.handleNext = () => {
      survey.get().personality = utils.clone(this.state);
      console.log(survey.get().personality)
      //this.props.history.replace("/sadhappy1"); //

      let isAll = true;
      Object.values(survey.get().personality).forEach((value) => {
        if (value == 0)    
          isAll = false;
      });

      if (isAll)  
        this.props.history.replace("/sadhappy1");
      else
        alert("Please answer all questions");
    }
  }

  render() {
    // debugger;
    const radioRow = (option) => {
      return [1,2,3,4,5].map((v, i) =>
        <td key={i}>
          <input type="radio" name={option} value={v} checked={this.state[option] === v} onChange={this.handleChange} />
        </td>
      )
    }
    return (
      <div className="vertical-center">
        <Container>
          <p> Here are a number of characteristics that may or may not apply to you. For example, do you agree that you are someone who likes to spend time with others? Please select a box next to each statement to indicate the extent to which you agree or disagree with that statement. </p>
          <br/>
          <p> I see myself as someone who… </p>
          <table border="0" cellPadding="10">
            <tbody>
              <tr>
                <th></th>
                <th>Disagree Strongly</th>
                <th>Disagree a little</th>
                <th>Neither agree nor disagree</th>
                <th>Agree a little</th>
                <th>Agree Strongly</th>
              </tr>
              <tr>
                <td>Is talkative</td>
                { radioRow("talkative") }
              </tr>
              <tr>
                <td>Tends to find fault with others</td>
                { radioRow("faultWithOthers") }
              </tr>
              <tr>
                <td>Does a thorough job</td>
                { radioRow("thoroughJob") }
              </tr>
              <tr>
                <td>Is depressed, blue</td>
                { radioRow("depressed") }
              </tr>
              <tr>
                <td>Is original, comes up with new ideas</td>
                { radioRow("original") }
              </tr>
              <tr>
                <td>Is reserved</td>
                { radioRow("reserved") }
              </tr>
              <tr>
                <td>Is helpful and unselfish with others</td>
                { radioRow("helpful") }
              </tr>
              <tr>
                <td>Can be somewhat careless</td>
                { radioRow("careless") }
              </tr>
              <tr>
                <td>Is relaxed, handles stress well</td>
                { radioRow("relaxed") }
              </tr>
              <tr>
                <td>Is curious about many different things</td>
                { radioRow("curious") }
              </tr>
              <tr>
                <td>Is full of energy</td>
                { radioRow("energy") }
              </tr>
              <tr>
                <td>Starts quarrels with others</td>
                { radioRow("quarrels") }
              </tr>
              <tr>
                <td>Is a reliable worker</td>
                { radioRow("reliable") }
              </tr>
              <tr>
                <td>Can be tense</td>
                { radioRow("tense") }
              </tr>
              <tr>
                <td>Is ingenious, a deep thinker</td>
                { radioRow("deepThinker") }
              </tr>
              <tr>
                <td>Generates a lot of enthusiasm</td>
                { radioRow("enthusiasm") }
              </tr>
              <tr>
                <td>Has a forgiving nature</td>
                { radioRow("forgiving") }
              </tr>
              <tr>
                <td>Tends to be disorganized</td>
                { radioRow("disorganized") }
              </tr>
              <tr>
                <td>Worries a lot</td>
                { radioRow("worried") }
              </tr>
              <tr>
                <td>Has an active imagination</td>
                { radioRow("activeImagination") }
              </tr>
              <tr>
                <td>Tends to be quiet</td>
                { radioRow("quiet") }
              </tr>
              <tr>
                <td>Is generally trusting</td>
                { radioRow("trusting") }
              </tr>
              <tr>
                <td>Tends to be lazy</td>
                { radioRow("lazy") }
              </tr>
              <tr>
                <td>Is emotionally stable, not easily upset</td>
                { radioRow("upset") }
              </tr>
              <tr>
                <td>Is inventive</td>
                { radioRow("inventive") }
              </tr>
              <tr>
                <td>Has an assertive personality</td>
                { radioRow("assertive") }
              </tr>
              <tr>
                <td>Can be cold and aloof</td>
                { radioRow("coldAloof") }
              </tr>
              <tr>
                <td>Perseveres until the task is finished</td>
                { radioRow("perseverence") }
              </tr>
              <tr>
                <td>Can be moody</td>
                { radioRow("moody") }
              </tr>
              <tr>
                <td>Values artistic, aesthetic experiences</td>
                { radioRow("artistic") }
              </tr>
              <tr>
                <td>Is sometimes shy, inhibited</td>
                { radioRow("shy") }
              </tr>
              <tr>
                <td>Is considerate and kind to almost everyone</td>
                { radioRow("kind") }
              </tr>
              <tr>
                <td>Does things efficiently</td>
                { radioRow("efficient") }
              </tr>
              <tr>
                <td>Remains calm in tense situations</td>
                { radioRow("calm") }
              </tr>
              <tr>
                <td>Prefers work that is routine</td>
                { radioRow("routineWork") }
              </tr>
              <tr>
                <td>Is outgoing, sociable</td>
                { radioRow("outgoing") }
              </tr>
              <tr>
                <td>Is sometimes rude to others</td>
                { radioRow("rude") }
              </tr>
              <tr>
                <td>Makes plans and follows through with them</td>
                { radioRow("makePlans") }
              </tr>
              <tr>
                <td>Gets nervous easily</td>
                { radioRow("nervous") }
              </tr>
              <tr>
                <td>Likes to reflect, play with ideas</td>
                { radioRow("reflective") }
              </tr>
              <tr>
                <td>Has few artistic interests</td>
                { radioRow("fewArtInterest") }
              </tr>
              <tr>
                <td>Likes to cooperate with others</td>
                { radioRow("cooperative") }
              </tr>
              <tr>
                <td>Is easily distracted</td>
                { radioRow("distracted") }
              </tr>
              <tr>
                <td>Is sophisticated in art, music, or literature</td>
                { radioRow("sophisticatedInArt") }
              </tr>
            </tbody>
          </table>
          <Button style={{"float":"right"}} onClick={this.handleNext}>Next</Button>
        </Container>
      </div>
    );
  }
}

export default PersonalityPage;