import React, {useCallback, useState, useMemo, useEffect} from 'react';
import {
  Animated,
  Button,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const r = 50;
const sunRays = Array.from({length: (2 * Math.PI * r) / 20});

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
    color: 'red',
    position: 'absolute',
  },
  sunRayContainer: {
    position: 'absolute',
    width: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunRay: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopWidth: 40,
    borderTopColor: 'red',
    borderTopLeftRadius: r / 2,
    borderTopRightRadius: r / 2,
  },
  lineSunRay: {
    width: 2,
    height: '100%',
    backgroundColor: '#F48604',
    position: 'absolute',
  },
});

const Sun = () => {
  const [animatedRotateArr] = useState(
    sunRays.map((_, i) => new Animated.Value(0)),
  );
  const [animatedTranslateArr] = useState(
    sunRays.map((_, i) => new Animated.Value(0)),
  );
  const [fadeAnim] = useState(new Animated.Value(0));
  const [animatedSpin] = useState(new Animated.Value(0));
  const [isShow, setIsShow] = useState(undefined);

  const rotateAnimation = useCallback((toValue) => {
    let animations = []
    if (isShow){
      animatedRotateArr.map((animation, index) => {
          animations.push(Animated.timing(animation, {
            toValue: toValue,
            duration: 40,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animatedTranslateArr[index], {
            toValue: 1,
            duration: 40,
            useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 40,
              useNativeDriver: true
            })
          )
      });
      return Animated.stagger(100 ,animations).start(({finished}) => {
        animations = []
      });
    } else {
      animatedTranslateArr.map((animation, index) => {
        animations.push(
          Animated.timing(animatedRotateArr[index], {
            toValue: toValue,
            duration: 40,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 2,
            duration: 200,
            useNativeDriver: true,
            }),
        )
      })
      return Animated.stagger(400, animations).start(({finished}) => {

      })
    }

    
  }, [animatedRotateArr, isShow, animatedTranslateArr]);

  // const translateAnimation = useCallback(() => {
  //    const animatedTranslateCopy = [...animatedTranslateArr]
  //     const animations = animatedTranslateCopy.map((animation, index) => {
  //        return Animated.timing(animation, {
  //        toValue: 1,
  //        duration: 200,
  //        useNativeDriver: true,
  //        })
  //    })
  //   return Animated.sequence(animations).start()
  // }, [fadeAnim, animatedTranslateArr])

  useEffect(() => {
    if (isShow === undefined) return;
    if (isShow) {
      rotateAnimation(1);
      // translateAnimation()
    } else {
      rotateAnimation(0);
    }
  }, [isShow, rotateAnimation]);

  const handleToggle = useCallback(() => {
    setIsShow((prevValue) => !prevValue);
  }, []);

  const renderSunRay = useCallback(
    (index) => {
      const alpha = (2 * Math.PI * index) / sunRays.length;

      return (
        <Animated.View
          key={index}
          style={[
            styles.sunRayContainer,
            {
              transform: [
                {translateX: r + Math.sin(alpha) * r - 10},
                {translateY: r - Math.cos(alpha) * r - 20},
                {
                  rotate: animatedRotateArr[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      `${(360 * index) / sunRays.length}deg`,
                      `${(360 * index) / sunRays.length + 180}deg`,
                    ],
                  }),
                },
                {translateY: 20},
              ],
            },
          ]}>
          <View style={styles.sunRay}></View>
          <Animated.View
            style={[
              styles.lineSunRay,
              {
                transform: [
                  {
                    translateY: animatedTranslateArr[index].interpolate({
                      inputRange: [0, 1, 2],
                      outputRange: [12, 60, 600]
                    })
                  }
                ],
                opacity: fadeAnim,
              },
            ]}></Animated.View>
        </Animated.View>
      );
    },
    [r, animatedRotateArr, animatedTranslateArr, fadeAnim, sunRays],
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {sunRays.map((_, index) => renderSunRay(index))}

        <View style={styles.innerSunContainer}>
          <View style={styles.innerSun}></View>
          <Text style={styles.sunTitle}>Sun</Text>
        </View>
      </View>

      <Button title="Click me!" onPress={handleToggle} />
    </SafeAreaView>
  );
};

export default Sun;
