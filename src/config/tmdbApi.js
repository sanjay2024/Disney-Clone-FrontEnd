import api from "./api";

export const category={
        movie:'movie',
        tv:'tv'
}
export const movieType = {
  popular: "popular",
  top_rated: "top_rated",
  upcoming:"upcoming",
  now_playing:"now_playing"
};
export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
}; 

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = "movie/" + movieType[type];
    return api.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return api.get(url, params);
  },
  getVideos: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/videos";
    return api.get(url, params);
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return api.get(url, params);
  },
  details: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return api.get(url, params);
  },
  credits: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/credits";
    return api.get(url, params);
  },
  similars: (cate, id, params) => {
    const url = category[cate] + "/" + id + "/similars";
    return api.get(url, params);
  },
};
export default tmdbApi;