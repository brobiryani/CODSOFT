import React from 'react';
import { getAllGenres } from '../data/movies';
import { Button } from "@/components/ui/button";

interface GenreFilterProps {
  selectedGenre: string | null;
  onSelectGenre: (genre: string | null) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ selectedGenre, onSelectGenre }) => {
  const genres = getAllGenres();
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        key="all"
        onClick={() => onSelectGenre(null)}
        variant={selectedGenre === null ? "default" : "outline"}
        className={`rounded-md text-sm ${selectedGenre === null ? 'bg-movie-accent hover:bg-movie-accent/90' : 'border-gray-600 hover:border-white'}`}
      >
        All
      </Button>
      
      {genres.map((genre) => (
        <Button
          key={genre}
          onClick={() => onSelectGenre(genre)}
          variant={selectedGenre === genre ? "default" : "outline"}
          className={`rounded-md text-sm ${selectedGenre === genre ? 'bg-movie-accent hover:bg-movie-accent/90' : 'border-gray-600 hover:border-white'}`}
        >
          {genre}
        </Button>
      ))}
    </div>
  );
};

export default GenreFilter;
