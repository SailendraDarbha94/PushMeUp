import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';

export function HelloFlex() {
  const scaleAnimation = useSharedValue(1);

  useEffect(() => {
    scaleAnimation.value = withRepeat(
      withSequence(
        withTiming(1.3, { duration: 150 }),
        withTiming(1, { duration: 150 })
      ),
      4 // Run the animation 4 times
    );
  }, [scaleAnimation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleAnimation.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText style={styles.text}>💪</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
      },
});