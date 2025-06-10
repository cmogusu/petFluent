import * as AC from '@bacons/apple-colors';
import { Link } from 'expo-router';
import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity as TouchableBounce } from 'react-native';

import { Image } from '@/components/ui';

const POSTER_WIDTH = 140;
const POSTER_HEIGHT = 210;

export const MediaCard = ({
  id,
  title,
  rating,
  posterPath,
  type,
}: {
  id: number;
  title: string;
  rating: number;
  posterPath: string | null;
  type: 'movie' | 'show' | 'person';
}) => (
  <Link key={id} href={`/${type}/${id}`} asChild>
    <TouchableBounce style={{ marginHorizontal: 4 }}>
      <View
        style={{
          width: POSTER_WIDTH,

          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            width: POSTER_WIDTH,
            height: POSTER_HEIGHT,
            backgroundColor: AC.systemGray5,
            borderRadius: 12,
          }}
        >
          {posterPath && (
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w300${posterPath}` }}
              style={{ borderRadius: 12, width: '100%', height: '100%' }}
              transition={200}
            />
          )}
        </View>
        <View style={{ padding: 8 }}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: AC.label,
              marginBottom: 4,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: AC.systemBlue,
            }}
          >
            ★ {(rating || 0).toFixed(1)}
          </Text>
        </View>
      </View>
    </TouchableBounce>
  </Link>
);
