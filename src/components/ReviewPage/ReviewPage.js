import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import survey from "../../Data/survey";
import symbols from "../symbols.json";
import ProgressBar from 'react-bootstrap/ProgressBar';

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {}
    };

    this.getMovie = () => survey.get().selectedMovies[parseInt(this.props.match.params.movieid)]

    this.getSelected = () => Object.keys(this.state.selected).map(i => parseInt(i))

    this.handleChange = event => {
      const { name, checked } = event.target;
      const selected = this.state.selected;

      if (!checked) {
        delete selected[name];
      } else {
        selected[name] = true;
      }

      this.setState({
        selected
      });
    }

    this.handleNext = () => {
      if (Object.keys(this.state.selected).length === 0) {
        return alert("Please select");
      }

      const movie = this.getMovie();
      const selectedScores = this.getSelected();
      const chosenScores = [];
      symbols.allRatingStyles
        .forEach((r, i) => selectedScores.indexOf(movie[r]) > -1 && chosenScores.push(i));
      this.getMovie().chosenRatings = chosenScores;

      if (survey.get().reviewSequence.length > 0) {
        this.props.history.replace(`/review/${survey.get().reviewSequence.shift()}`);
        return this.setState({selected: {}});
      }
      this.props.history.replace(`/askemail`);
    }
  }

  render() {
    const movie = this.getMovie();

    let listLen = survey.get().selectedMovies.length;
    let now = parseInt(100*((listLen + 2) - survey.get().reviewSequence.length)/(listLen + 3));

    const progressInstance = (
      <div className={"bottomPad"}>
        <div className={"progressBarContainer"}>
          <ProgressBar variant="info" now={100} label={`Section 1`} />
          <ProgressBar variant="info" now={100} label={`Section 2`} />
          <ProgressBar variant="info" now={100} label={`Section 3`} />
          <ProgressBar variant="info" now={100} label={`Section 4`} />
          <ProgressBar variant="info" now={100} label={`Section 5`} />
          <ProgressBar variant="info" now={100} label={`Section 5`} />
        </div>
        <div className={"progressBarContainer"}>
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={100} label={`100%`} />
          <ProgressBar striped animated variant="success" now={now} label={`${now}%`} />
        </div>
      </div>
    );

    return (
      <div className="text-center">
        <Container>
          {progressInstance}
          <h6>For the products that you rated so far using 5 different scales, all the 5 numeric values of your ratings will appear for each product.please select any one of the boxes which have the value you think is best suited
          for the product:</h6>
          <img src={movie.img} alt="Poster" height="240" width="240" />
          <h6>{movie.name}</h6>
          {
            symbols.allRatingStyles.map((r, i) =>
              <div key={i}>
                <Row className="justify-content-md-center">
                  <Col xs lg="1">
                    <input type="checkbox" name={movie[r]} checked={this.getSelected().indexOf(movie[r]) > -1} onChange={this.handleChange} />
                  </Col>
                  <Col xs lg="1">
                    <h5>{movie[r]}</h5>
                  </Col>
                </Row>
                <br/>
              </div>
            )
          }
          <Button style={{"float":"right"}} onClick={this.handleNext}>Next</Button>
        </Container>
      </div>
    );
  }
}

export default ReviewPage;
