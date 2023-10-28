import axios from "axios";

export default class FakeApiClient {
  async search({ params }) {
    return axios.get(
      `../../public/data/${
        params.channelId ? "ChannelOtherVideos" : "SearchByKeyword"
      }.json`
    );
  }
  async videos() {
    return axios.get("../../public/data/MostPopular.json");
  }
  async channels() {
    return axios.get("../../public/data/ChannelInfo.json");
  }
}
