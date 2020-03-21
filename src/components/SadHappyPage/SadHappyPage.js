// import React from "react";
// import { Button, Jumbotron } from "react-bootstrap";
// import survey from "../../Data/survey";

// class SadHappyPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       "choice": 0
//     };

//     this.handleChange = event => {
//       const { value } = event.target;
//       this.setState({
//         choice: parseInt(value)
//       });
//     }

//     this.handleNext = () => {
//       survey.get()[this.props.saveAs] = this.state.choice;
//       // this.props.history.replace(this.props.nextRoute);

//       let isEmo = true;
//       console.log(this.state.choice);
//       // Object.values(survey.get().personality).forEach((value) => {
//       if (survey.get()[this.props.saveAs] == 0)    
//         isEmo = false;
//       // });

//       if (isEmo)  
//         this.props.history.replace(this.props.nextRoute);
//       else
//         alert("Please select a radio button to express your emotional state");
//     }
//   }

//   render() {
//     const radioRow = () =>
//       [1,2,3,4,5].map((v, i) =>
//         <td key={i}>
//           <input type="radio" value={v} checked={this.state.choice === v} onChange={this.handleChange} />
//         </td>
//       )
//     return (
//       <div className="text-center">
//         <div>
//           <h5>On a scale of 1 to 5, how sad or happy are you feeling right now?</h5>
//           <table style={{
//             marginLeft: "auto",
//             marginRight: "auto",
//           }} border="0" cellPadding="10">
//             <tbody>
//               <tr>
//                 <th></th>
//                 <th>1</th>
//                 <th>2</th>
//                 <th>3</th>
//                 <th>4</th>
//                 <th>5</th>
//                 <th></th>
//               </tr>
//               <tr>
//                 <td>Sad</td>
//                 {radioRow()}
//                 <td>Happy</td>
//               </tr>
//             </tbody>
//           </table>
//           <Button style={{"float":"right"}} onClick={this.handleNext}>Next</Button>
//         </div>
//       </div>
//     );
//   }
// }

// export default SadHappyPage;