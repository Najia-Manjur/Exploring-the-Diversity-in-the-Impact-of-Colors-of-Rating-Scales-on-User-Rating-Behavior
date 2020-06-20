import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import survey from "../../Data/survey";
import Rating from "react-rating";
import "../survey.css";
import symbols from "../symbols.json";
import ProgressBar from 'react-bootstrap/ProgressBar';

class ReviewoverallPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "choice": null
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: parseInt(value)
      });
    }

    this.handleNext = () => {
      survey.get().reviewOverall = this.state.choice;
      this.props.history.replace(`/commonratingscalepage`);
    }
  }

  render() {

    const progressInstance = (
      <div className={"bottomPad"}>
        <div className={"progressBarContainer"}>
          <ProgressBar variant="info" now={100} label={`Section 1`} />
          <ProgressBar variant="info" now={100} label={`Section 2`} />
          <ProgressBar variant="info" now={100} label={`Section 3`} />
          <ProgressBar variant="info" now={100} label={`Section 4`} />
          <ProgressBar variant="info" now={100} label={`Section 5`} />
          <ProgressBar variant="info" now={100} label={`Section 6`} />
        </div>
        <div className={"progressBarContainer"}>
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={0} label={`0%`} />
        </div>
      </div>
    );

    return (
      <div>
        <Container>
          {progressInstance}
          <h6>Your ratings will be considered very helpful into the final ratings of the product, would you like to re-rate it again ? If so, which one of the rating scales would you use?</h6>
          {
            symbols.allRatingStyles.map((r, i) =>
              <div key={i}>
                <Row className="justify-content-md-center">
                  <Col xs lg="1">
                    <input type="radio" name="choice" value={i} checked={this.state.choice === i} onChange={this.handleChange} />
                  </Col>
                  <Col xs lg="2">
                    {
                      <Rating
                        style={{width: "100%"}}
                        readonly
                        stop={5}
                        initialRating={5}
                        fullSymbol={symbols[r].full}
                      />
                    }
                  </Col>
                </Row>
                <br/>
              </div>
            )
          }
          <Button style={{"float":"right"}} onClick={this.handleNext}>Submit</Button>
        </Container>
      </div>
    );
  }
}

export default ReviewoverallPage;
