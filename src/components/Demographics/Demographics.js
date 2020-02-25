import React from "react";
import { Button, Container } from "react-bootstrap";
import FormRow from "../FormRow";
import survey from "../../Data/survey";
import api from "../../Data/api";

class Demographics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      country: "",
      gender: null
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleNext = async () => {
      try {

        let {age, country, gender} = this.state;

        if (!age || !country || !gender)
          alert("Please fill up all the fields.");
        else {
          survey.get().personality.age = age;
          survey.get().personality.country = country;
          survey.get().personality.gender = gender;

          this.props.history.replace("/info");
        }
      } catch (error) {
        alert(error.message);
      } finally {
        if (!this.componentUnmounted)
          this.setState({loading: undefined});
      }
    }
  }

  componentWillUnmount() {
    this.componentUnmounted = true;
  }

  render() {
    return (
      <div>
        <Container>
          <h6> Please provide the following information: </h6>
          <br/>
          
          <p>Age:</p>
          <input type="number" id="age" name="age" value={this.state.age} onChange={this.handleChange} />
          <br/>
          <pre></pre><pre></pre>
          <p>Please select your gender:</p>
          <input type="radio" id="male" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} />
          <label>Male</label>
          <br/>
          <input type="radio" id="female" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} />
          <label>Female</label>
          <br/>
          <input type="radio" id="other" name="gender" value="other" checked={this.state.gender === "other"} onChange={this.handleChange} />
          <label>Other</label>
          <pre></pre><pre></pre>
          
          <p>Home Country: (The country where you were born and usually raised in, regardless of the present country of your residence and citizenship.)</p>
          <input type="text" id="country" name="country" value={this.state.country} onChange={this.handleChange} />
          <br/>
          
          
          <Button style={{"float":"right"}} onClick={this.handleNext}>Next</Button>
        </Container>
      </div>
    );
  }
}

export default Demographics;