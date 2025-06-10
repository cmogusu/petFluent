import * as AC from '@bacons/apple-colors';
import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { FadeIn } from '@/components/ui/fade-in';
import { TRENDING_MEDIA_FIXTURE } from '@/lib/search-fixtures';

import { MediaCard } from './media-card';
import { MoviesSection } from './movie-section';

type MovieType = {
  id: number;
  title: string;
  rating: number;
  posterPath: string | null;
  type: 'movie' | 'show' | 'person';
};

export function MovieSections({ query }: { query: string }) {
  const [shows, setShows] = React.useState<MovieType[]>([]);

  React.useEffect(() => {
    const localShows: MovieType[] = TRENDING_MEDIA_FIXTURE.results.map(
      (data) => ({
        id: data.id,
        title: data.name,
        rating: data.vote_average,
        posterPath: data.poster_path,
        type: 'movie',
      })
    );

    setShows(localShows);
  }, []);

  return (
    <View style={{ gap: 24 }}>
      <MoviesSection query={query} />
      <TrendingSection title="Movies" items={shows} />
    </View>
  );
}

function TrendingSection({ title, items }: { title: string; items: any[] }) {
  return (
    <FadeIn>
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: AC.label,
            }}
          >
            Trending {title}
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        >
          {items.map((item) => (
            <MediaCard
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              rating={item.vote_average}
              posterPath={item.poster_path}
              type={title === 'Movies' ? 'movie' : 'show'}
            />
          ))}
        </ScrollView>
      </>
    </FadeIn>
  );
}
