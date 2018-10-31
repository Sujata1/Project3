import axios from "axios";

export default {
  getArticles: function (q) {
    return axios.get("/api/articles/" + q);
  },

};
