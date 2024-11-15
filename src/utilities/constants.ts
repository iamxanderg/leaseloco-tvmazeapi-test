const baseEndpoint = 'https://api.tvmaze.com';

const urlConstants = {
  fetchShows: `${baseEndpoint}/shows`,
  searchShows: `${baseEndpoint}/search/shows?q=`,
  castEpisodesSeasonsEmbed: `?embed[]=cast&embed[]=episodes&embed[]=seasons`,
};

export default urlConstants;
