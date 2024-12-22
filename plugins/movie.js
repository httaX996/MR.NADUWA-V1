const axios = require('axios');

module.exports = {
  commands: [
    {
      pattern: "movie",
      alias: ["moviedl", "download"],
      description: "Get movie download link",
      usage: ".movie <movie name>",
      react: "🎥",
      on: "text",
      async function(conn, mek, m, options) {
        const { args, reply } = options;
        if (!args.length) {
          return reply("❌ Please provide the movie name!\nExample: .movie Inception");
        }

        const movieName = args.join(" ");
        reply(`🔍 Searching for *${movieName}*...`);

        try {
          // Replace the URL below with an actual movie database API or scraping target
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: "YOUR_TMDB_API_KEY",
              query: movieName
            }
          });

          if (response.data.results.length === 0) {
            return reply("❌ No results found! Please try a different movie name.");
          }

          const movie = response.data.results[0];
          const movieDetails = `🎬 *Title*: ${movie.title}\n📅 *Release Date*: ${movie.release_date}\n⭐ *Rating*: ${movie.vote_average}\n\n🔗 Download: https://example.com/download/${encodeURIComponent(movie.title)}`;

          await conn.sendMessage(
            m.from,
            { text: movieDetails },
            { quoted: mek }
          );
        } catch (error) {
          console.error(error);
          reply("❌ Failed to fetch movie details! Please try again later.");
        }
      },
    },
  ],
};
