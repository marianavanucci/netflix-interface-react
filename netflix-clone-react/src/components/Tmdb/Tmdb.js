const API_KEY = "95fb512c5c5b9d17f7b35b8afb3204ae";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originals",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      // {
      //     slug: 'trending',
      //     title: 'Trending' ,
      //     items: []
      //  },
      //  {
      //     slug: 'toprated',
      //     title: 'Top Rated' ,
      //     items: []
      //  },
    ];
  },
};

export default Tmdb;
