import * as AC from '@bacons/apple-colors';
import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { MediaCard } from './media-card';

export function MoviesSection({ query }: { query: string }) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    getMovies(query).then((newMovies) => {
      setMovies(newMovies);
    });
  }, [query]);

  if (!movies.length) return null;

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: AC.label,
          marginBottom: 12,
          paddingHorizontal: 16,
        }}
      >
        Movies
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {movies.map((movie: any) => (
          <MediaCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            posterPath={movie.poster_path}
            type="movie"
          />
        ))}
      </ScrollView>
    </View>
  );
}

async function getMovies(query = '') {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}
