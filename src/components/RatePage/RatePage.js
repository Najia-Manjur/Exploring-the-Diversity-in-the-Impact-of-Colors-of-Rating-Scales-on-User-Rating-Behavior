import React from "react";
import { Button, Container } from "react-bootstrap";
import survey from "../../Data/survey";
import Rating from "react-rating";
import "../survey.css";
import symbols from "../symbols.json";

class RatePage extends React.Component {
  constructor(props) {
    super(props);

    // do NOT do this or the router stops working, WTF?
    // const movieid = parseInt(this.props.match.params.movieid);
    // const ratingstyle = this.props.match.params.ratingstyle;

    this.parse = () => {
      const m = parseInt(this.props.match.params.movieid);
      const r = this.props.match.params.ratingstyle;
       return { m, r };
    }

    this.handleChange = rating => {
      const { m, r } = this.parse();
      survey.get().selectedMovies[m][r] = rating;
    }

    this.handleNav = () => {
      const { m, r } = this.parse();
      if (typeof survey.get().selectedMovies[m][r] !== 'number') {
        return alert("Please rate the movie");
      }

      // if (survey.get().navSequence.length ===
      //     (survey.get().selectedMovies.length * symbols.ratingStyles.length) / 2) {
      //     return this.props.history.replace(`/sadhappy2`);
      //   }

      var ln = survey.get().navSequence.length;
      var curNum = 60 - ln;
      console.log(curNum);
      console.log(curNum%15);

      if (curNum%15 == 0) {
        var pageNo = parseInt((curNum-1)/15) + 3;
        return this.props.history.replace(`/info/${pageNo}`);
      } else {
        const { movieid, ratingstyle } = survey.get().navSequence.pop();
        return this.props.history.replace(`/rate/${movieid}/${ratingstyle}`);
      }  
    }
  }

  render() {
    const {m, r} = this.parse();
    const {name, img} = survey.get().selectedMovies[m];
    const rated = survey.get().selectedMovies[m][r];

    console.log(survey.get().navSequence.length);
    let movie_number = 60 - survey.get().navSequence.length;
    // let movie_number = 0
    let sectionNo = parseInt((movie_number-1)/15) + 1;

    return (
      <div className="text-center">
        <Container>
          <h6></h6>
          <p>{"Section " + sectionNo + " of 4" }</p>
         
          <p>Please rate the movie: </p>
          <img src={img} alt="Poster" height="400" width="240" />
          <h6>{name}</h6>
          {
            <Rating
              stop={5}
              emptySymbol={symbols[r].empty}
              fullSymbol={symbols[r].full}
              onChange={this.handleChange}
              initialRating={rated}
            />
          }
          <br/>
          <p></p>
          <span>
            <Button style={{"float":"center"}} onClick={this.handleNav}>Next</Button>
          </span>
        </Container>
      </div>
    );
  }
}

export default RatePage;