import React from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';

import { MovieSections } from '@/components/movie-sections';

const cardWidth = 140;
const cardHeight = 210;
const gap = 8;

export default function Movie() {
  const { width } = useWindowDimensions();

  const numCards = Math.floor((width * 2) / (cardWidth + gap));

  function SkeletonRow() {
    return (
      <View style={{ paddingLeft: 16 }}>
        <View
          style={{
            width: 200,
            height: 24,
            backgroundColor: 'rgba(120,120,128,0.12)',
            borderRadius: 4,
            marginBottom: 12,
          }}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(numCards)].map((_, i) => (
            <View
              key={i}
              style={{
                width: cardWidth,
                marginRight: gap,
              }}
            >
              <View
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  backgroundColor: 'rgba(120,120,128,0.12)',
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: 16,
                  backgroundColor: 'rgba(120,120,128,0.12)',
                  borderRadius: 4,
                  marginBottom: 4,
                }}
              />
              <View
                style={{
                  width: '30%',
                  height: 14,
                  backgroundColor: 'rgba(120,120,128,0.12)',
                  borderRadius: 4,
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <React.Suspense fallback={<SkeletonRow />}>
      <MovieSections query="hello" />
    </React.Suspense>
  );
}
