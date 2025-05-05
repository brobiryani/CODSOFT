import React from 'react';
import { Movie } from '../data/movies';
import { Card } from "@/components/ui/card";
import { useMovieContext } from '../context/MovieContext';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
  showHeart?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, showHeart = true }) => {
  const { favorites, toggleFavorite } = useMovieContext();
  const isFavorite = favorites.includes(movie.id);

  return (
    <Card className="movie-card overflow-hidden bg-movie-primary border-none h-full flex flex-col rounded-md">
      <Link to={`/movie/${movie.id}`} className="flex-grow">
        <div className="relative">
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            className="w-full h-64 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x450?text=No+Image";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-white line-clamp-1">{movie.title}</h3>
                  <p className="text-xs text-gray-300">{movie.year} • {movie.rating.toFixed(1)}★</p>
                </div>
                {showHeart && (
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(movie.id);
                    }}
                    className={`p-1 rounded-full transition-all ${isFavorite ? 'text-movie-accent' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Heart fill={isFavorite ? "currentColor" : "none"} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-3">
        <div className="flex flex-wrap gap-1">
          {movie.genres.slice(0, 3).map(genre => (
            <span key={genre} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
