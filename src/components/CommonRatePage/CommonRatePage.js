import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import survey from "../../Data/survey";
import Rating from "react-rating";
import "../survey.css";
import symbols from "../symbols.json";

class CommonRatePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changeCounter: 0 // just using to refresh the state
      // watched: null
    };

    this.handleChange = (mi) => r => {
      survey.get().selectedMovies[mi].commonRate = r;
    }

    this.handleChangeWatched = (mi, event) => {
      const { name, value } = event.target;
      survey.get().selectedMovies[mi].watched = value;
      // console.log(survey.get().selectedMovies[mi]);
      this.setState({
        changeCounter: this.changeCounter + 1
      });
    }

    this.handleNext = () => {
      // if (survey.get().selectedMovies.filter(m => typeof m.commonRate !== 'number' || typeof m.watched !== 'string').length > 0) {
      //   return alert("Please rate all the movies");
      // }

      let selectedMovies = survey.get().selectedMovies.filter(m => m.watched == "yes")
      survey.loadMovies(selectedMovies);

      const { movieid, ratingstyle} = survey.get().navSequence.pop();
      this.props.history.replace(`/rate/${movieid}/${ratingstyle}`);
    }

    this.handleBack = () => {
      if (window.confirm('Are you sure? All selected products will be cleared')) {
        survey.retain("personality");
        this.props.history.replace(`/`);
      }
    }
  }

  render() {
    return (
      <div>
        <Container>
          <h6>A list of 15 products is shown here.You can see all the products in the list by moving the horizontal bar.</h6> 
          <ul>
            <li>For the prodcuts you have used before, select the option "Yes" and rate the product based on how much you like it or not.</li>
            <li>For the prodcuts you have not had an experience with, select the option "No" and skip rating.</li>
          </ul> 
          <ListGroup 
            style={{
              overflow: "auto"
            }}
            horizontal
          >
            {
              survey.get()
                .selectedMovies
                .map((m, i) => {
                  const {name, img, commonRate, watched} = m;
                  // console.log(commonRate);
                  // console.log("watched " + watched);
                  return <ListGroup.Item key={i}>
                    <img src={img} alt="Poster" height="240" width="240" /> <br/>
                    <h6> {name} </h6>
                      <Rating
                        initialRating={commonRate}
                        stop={5}
                        emptySymbol={symbols.commonRate.empty}
                        fullSymbol={symbols.commonRate.full}
                        onChange={this.handleChange(i)}
                      />
                      <p></p>
                      <p>Have you used this product?</p>
                      <input type="radio" id="yes" name={"watched-" + name} value="yes" checked={watched === "yes"} onChange={this.handleChangeWatched.bind(this, i)} />
                      <label>Yes</label>
                      <br/>
                      <input type="radio" id="no" name={"watched-" + name} value="no" checked={watched === "no"} onChange={this.handleChangeWatched.bind(this, i)} />
                      <label>No</label>
                      <br/>
                  </ListGroup.Item> 
                })
            }
          </ListGroup>
          <br/>
          <p>From the next page onwards, you will be asked to rate the selected products again. You do not have to
          remember the exact rating you gave here for every product, just go with the flow and rate what you feel like!</p>
          <Button style={{"float":"right"}} onClick={this.handleNext}>Next</Button>
        </Container>
      </div>
    );
  }
}

export default CommonRatePage;