export interface Movie {
  id: number;
  title: string;
  genres: string[];
  posterUrl: string;
  description: string;
  rating: number;
  year: number;
}

// Sample movie data
export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genres: ["Sci-Fi", "Action", "Thriller"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    rating: 8.8,
    year: 2010
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 9.3,
    year: 1994
  },
  {
    id: 3,
    title: "The Dark Knight",
    genres: ["Action", "Crime", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 9.0,
    year: 2008
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genres: ["Crime", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: 8.9,
    year: 1994
  },
  {
    id: 5,
    title: "The Lord of the Rings: The Return of the King",
    genres: ["Adventure", "Drama", "Fantasy"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    rating: 8.9,
    year: 2003
  },
  {
    id: 6,
    title: "Forrest Gump",
    genres: ["Drama", "Romance"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    rating: 8.8,
    year: 1994
  },
  {
    id: 7,
    title: "Fight Club",
    genres: ["Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    rating: 8.8,
    year: 1999
  },
  {
    id: 8,
    title: "The Matrix",
    genres: ["Action", "Sci-Fi"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    year: 1999
  },
  {
    id: 9,
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    rating: 8.6,
    year: 2014
  },
  {
    id: 10,
    title: "Parasite",
    genres: ["Drama", "Thriller"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    rating: 8.6,
    year: 2019
  },
  {
    id: 11,
    title: "The Godfather",
    genres: ["Crime", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    rating: 9.2,
    year: 1972
  },
  {
    id: 12,
    title: "Goodfellas",
    genres: ["Biography", "Crime", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    rating: 8.7,
    year: 1990
  },
  // Adding more movies below
  {
    id: 13,
    title: "Stranger Things",
    genres: ["Horror", "Sci-Fi", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    rating: 8.7,
    year: 2016
  },
  {
    id: 14,
    title: "Breaking Bad",
    genres: ["Crime", "Drama", "Thriller"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    rating: 9.5,
    year: 2008
  },
  {
    id: 15,
    title: "The Queen's Gambit",
    genres: ["Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
    description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
    rating: 8.6,
    year: 2020
  },
  {
    id: 16,
    title: "The Witcher",
    genres: ["Action", "Adventure", "Fantasy"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    rating: 8.2,
    year: 2019
  },
  {
    id: 17,
    title: "Money Heist",
    genres: ["Action", "Crime", "Mystery"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    rating: 8.2,
    year: 2017
  },
  {
    id: 18,
    title: "Black Mirror",
    genres: ["Drama", "Sci-Fi", "Thriller"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    rating: 8.8,
    year: 2011
  },
  {
    id: 19,
    title: "The Crown",
    genres: ["Biography", "Drama", "History"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    rating: 8.7,
    year: 2016
  },
  {
    id: 20,
    title: "Ozark",
    genres: ["Crime", "Drama", "Thriller"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjktOTU1ODZjYzBhMTk0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    rating: 8.5,
    year: 2017
  },
  {
    id: 21,
    title: "Dune",
    genres: ["Action", "Adventure", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
    rating: 8.0,
    year: 2021
  },
  {
    id: 22,
    title: "Squid Game",
    genres: ["Action", "Drama", "Mystery"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    rating: 8.0,
    year: 2021
  },
  {
    id: 23,
    title: "The Mandalorian",
    genres: ["Action", "Adventure", "Fantasy"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMWI0OTJlYTItNzMwZi00YzRiLWJhMjItMWRlMDNhZjNiMzJkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    rating: 8.7,
    year: 2019
  },
  {
    id: 24,
    title: "Joker",
    genres: ["Crime", "Drama", "Thriller"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    rating: 8.4,
    year: 2019
  },
  {
    id: 25,
    title: "The Irishman",
    genres: ["Biography", "Crime", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
    description: "An old man recalls his time painting houses for his friend, Jimmy Hoffa, through the 1950-70s.",
    rating: 7.8,
    year: 2019
  },
  {
    id: 26,
    title: "Mindhunter",
    genres: ["Crime", "Drama", "Thriller"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
    description: "Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.",
    rating: 8.6,
    year: 2017
  },
  {
    id: 27,
    title: "The Umbrella Academy",
    genres: ["Action", "Adventure", "Comedy"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA5MjkwYzMtNGY2MS00YWRjLThkNTktOTNmMzdlZjE3Y2IxXkEyXkFqcGdeQXVyMjkwMzMxODg@._V1_.jpg",
    description: "A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
    rating: 7.9,
    year: 2019
  },
  {
    id: 28,
    title: "Dark",
    genres: ["Crime", "Drama", "Mystery"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
    description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
    rating: 8.7,
    year: 2017
  },
  {
    id: 29,
    title: "Peaky Blinders",
    genres: ["Crime", "Drama"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg",
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    rating: 8.8,
    year: 2013
  },
  {
    id: 30,
    title: "1917",
    genres: ["Action", "Drama", "War"],
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
    description: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    rating: 8.3,
    year: 2019
  }
];

// Get all unique genres from our movie collection
export const getAllGenres = (): string[] => {
  const genreSet = new Set<string>();
  
  movies.forEach(movie => {
    movie.genres.forEach(genre => {
      genreSet.add(genre);
    });
  });
  
  return Array.from(genreSet).sort();
};

// Get a movie by ID
export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

// Filter movies by genre
export const getMoviesByGenre = (genre: string): Movie[] => {
  return movies.filter(movie => movie.genres.includes(genre));
};

// Get recommendations based on a user's favorite movies
export const getRecommendations = (favoriteIds: number[], count: number = 5): Movie[] => {
  // If no favorites, return top-rated movies
  if (!favoriteIds.length) {
    return [...movies]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count);
  }
  
  // Get the favorites
  const favorites = favoriteIds.map(id => getMovieById(id)).filter(Boolean) as Movie[];
  
  // Extract favorite genres
  const favoriteGenres = new Map<string, number>();
  favorites.forEach(movie => {
    movie.genres.forEach(genre => {
      favoriteGenres.set(genre, (favoriteGenres.get(genre) || 0) + 1);
    });
  });
  
  // Score other movies based on genre similarity
  const scoredMovies = movies
    .filter(movie => !favoriteIds.includes(movie.id))
    .map(movie => {
      let score = 0;
      movie.genres.forEach(genre => {
        score += favoriteGenres.get(genre) || 0;
      });
      // Add a small factor of the movie rating
      score += movie.rating / 20;
      return { movie, score };
    })
    .sort((a, b) => b.score - a.score);
  
  // Return top recommendations
  return scoredMovies.slice(0, count).map(item => item.movie);
};
