import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";

export default {
  page: 1,
  perPage: 12,
  myKey: "15726077-dbace57dc9a0145b34752406d",
  queryArticles(query = "react") {
    const requestParams = `q=${query}&page=${this.page}&key=${this.myKey}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`;
    return axios.get(`${BASE_URL}?${requestParams}`).then((response) => {
      const hits = this.formatData(response);
      this.incrementPage();
      return hits;
    });
  },

  formatData(response) {
    return [...response.data.hits].map(
      ({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      })
    );
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
