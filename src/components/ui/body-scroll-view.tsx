import { forwardRef } from 'react';
import { type ScrollViewProps } from 'react-native';
import Animated from 'react-native-reanimated';

export const BodyScrollView = forwardRef(function (
  props: ScrollViewProps,
  ref: React.Ref<Animated.ScrollView>
) {
  return (
    <Animated.ScrollView
      scrollToOverflowEnabled
      automaticallyAdjustsScrollIndicatorInsets
      contentInsetAdjustmentBehavior="automatic"
      {...props}
      ref={ref}
      style={props.style}
    />
  );
});
