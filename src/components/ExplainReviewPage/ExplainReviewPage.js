import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import survey from "../../Data/survey";
import utils from "../utils";
import ProgressBar from 'react-bootstrap/ProgressBar';

class ExplainReviewPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleNext = () => {
      survey.get().reviewSequence = utils.numberList(survey.get().selectedMovies.length);
      this.props.history.replace(`/review/${survey.get().reviewSequence.shift()}`);
    }
  }

  render() {
    let listLen = survey.get().selectedMovies.length;
    let now = parseInt(200/(listLen + 3));

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
          <ProgressBar striped animated variant="success" now={now} label={`${now}%`} />
        </div>
      </div>
    );

    return (
      <div className="vertical-center">
        <Container>
          {progressInstance}
          <h6>For the products that you rated so far using 5 different scales, all the 5 numeric values of your ratings will appear
          for each product.If the ratings appear different for different scales, please select the value you think is best suited for the product.</h6>
          <h6>For example, let us assume you have given the KFC the following 6 different values for 5 rating scales: </h6>
          <img src={"https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg"} alt="Poster" height="240" width="240" />
          {
            [3,3,4,3,4,4].map((r, i) =>
              <div key={i}>
                <Row className="justify-content-md-center">
                  <Col xs lg="1">
                    <input type="checkbox" />
                  </Col>
                  <Col xs lg="1">
                    <h5>{r}</h5>
                  </Col>
                </Row>
                <br/>
              </div>
            )
          }
          <h6>If you think out of these values, 4 is the best rate for this product, then please select any one of the 3 rd, 5 th and last check boxes since they have the value 4. You just have to select any one of them and the rest will be automatically selected.If you have provided same value for a product, i.e.all 5 boxes are same, then kindly select any one of all boxes.Please be careful select only one value, which means
          if you select value 4, you can not select any other number.</h6>
          <Button style={{"float":"right"}} onClick={this.handleNext}>Next</Button>
        </Container>
      </div>
    );
  }
}

export default ExplainReviewPage;
