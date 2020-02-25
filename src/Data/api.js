import axios from "axios";
import survey from "./survey"

const API = "https://movie-survey.herokuapp.com";
// const API = "localhost:5000";

export default {
  submit: async () => {
    await axios.post(`${API}/submit`, survey.get());
  }
};