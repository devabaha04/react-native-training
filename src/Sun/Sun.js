import React, {useCallback, useState, useMemo, useEffect} from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const r = 50;
const totalSunRays = Array.from({length: (2 * Math.PI * r) / 20});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: r * 2,
    height: r * 2,
    marginBottom: 80,
  },
  innerSunContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSun: {
    width: '80%',
    height: '80%',
    backgroundColor: 'yellow',
    borderRadius: r,
  },
  sunTitle: {
    fontWeight: '700',
    color: 'purple',
    position: 'absolute',
  },
  sunRayContainer: {
    position: 'absolute',
    width: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Sun = () => {
  const [animatedRotate] = useState(
    totalSunRays.map((_, i) => new Animated.Value(0)),
  );
  const [animatedTranslate] = useState(
    totalSunRays.map((_, i) => new Animated.Value(0)),
  );
  const [animatedSpin] = useState(new Animated.Value(0));
  const [isShow, setIsShow] = useState(false)

  const handleToggle = useCallback(() => {
    setIsShow(prevValue => !prevValue)
  }, [])


  const renderSunRay = useCallback(() => {
    return totalSunRays.map((_, index) => {
      const alpha = (2 * Math.PI * index) / totalSunRays.length;

      return (
        <Animated.View
          key={index}
          style={[
            styles.sunRayContainer,
            {
              transform: [
                {translateX: r + Math.sin(alpha) * r - 10 },
                {translateY: r - Math.cos(alpha) * r - 20},
                {
                  rotate: animatedRotate[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      (360 * index) / totalSunRays.length  + 'deg',
                      (360 * index) / totalSunRays.length + 180 + 'deg',
                    ],
                  }),
                },
                {translateY: 20}
              ],
            },
          ]}>
          <View
            style={{
              borderLeftWidth: 10,
              borderRightWidth: 10,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderTopWidth: 40,
              borderTopColor: 'red',
              borderTopLeftRadius: r / 2,
              borderTopRightRadius: r / 2,
            }}></View>
        </Animated.View>
      );
    });
  }, [totalSunRays, r, animatedRotate]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {renderSunRay()}

        <View style={styles.innerSunContainer}>
          <View style={styles.innerSun}></View>
          <Text style={styles.sunTitle}>Sun</Text>
        </View>
      </View>

      <Button title="toggle" onPress={handleToggle} />
    </SafeAreaView>
  );
};

export default Sun;
