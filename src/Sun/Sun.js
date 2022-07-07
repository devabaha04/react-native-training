import React, {useCallback, useState, useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Button,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const r = 60;
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
    marginBottom: 100,
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

  const rotationAnimation = useRef();
  const translationAnimation = useRef();

  useEffect(() => {
    if (isShow === undefined) return;
    if (isShow) {
      rotateAnimation(1);
    } else {
      rotateAnimation(0);
    }
  }, [isShow, rotateAnimation]);

  const rotateAnimation = useCallback(
    (toValue) => {
      const duration = 200;
      const delay = 100;
      if(rotationAnimation.current){
        rotationAnimation.current.stop();
      }

      let animations = [];
      if (isShow) {
        animatedRotateArr.map((animation, index) => {
          animations.push(
            Animated.parallel(
              [
                Animated.timing(animation, {
                  toValue: toValue,
                  duration,
                  easing: Easing.linear,
                  useNativeDriver: true,
                }),
                Animated.timing(animatedTranslateArr[index], {
                  toValue: toValue,
                  duration,
                  useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                  toValue: toValue,
                  duration,
                  useNativeDriver: true,
                }),
              ],
              {
                stopTogether: false,
              },
            ),
          );
        });
        rotationAnimation.current = Animated.stagger(delay, animations);

        rotationAnimation.current.start(({finished}) => {
          animations = [];
          if (finished) {
            Animated.spring(animatedSpin, {
              toValue: 2,
              mass: 6,
              useNativeDriver: true,
              easing: Easing.bounce,
            }).start(({finished}) => {
              if (finished) {
                animatedSpin.setValue(0);
              }
            });
          }
        });
      } else {
        [...animatedTranslateArr].reverse().map((animation, index) => {
          animations.push(
            Animated.parallel([
              Animated.timing(animatedRotateArr[(animatedRotateArr.length - 1) - index], {
                toValue: toValue,
                duration,
                easing: Easing.linear,
                useNativeDriver: true,
              }),
              Animated.timing(animation, {
                toValue: 2,
                duration,
                useNativeDriver: true,
              }),
            ]),
          );
        });
        rotationAnimation.current = Animated.stagger(delay, animations);
        rotationAnimation.current.start(({finished}) => {
          if (finished) {
            animatedTranslateArr.map((animation, index) => {
              Animated.timing(animation, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
              }).start();
              fadeAnim.setValue(0);
            });
          }
        });
      }
    },
    [animatedRotateArr, isShow, animatedTranslateArr, fadeAnim, animatedSpin],
  );

  const handleToggle = useCallback(() => {
    setIsShow((prevValue) => !prevValue);
  }, []);

  const wrapperStyles = useMemo(
    () => [
      styles.wrapper,
      {
        backgroundColor: isShow ? '#fff' : '#333',
      },
    ],
    [isShow],
  );

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
                      outputRange: [12, 60, 600],
                    }),
                  },
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
    <SafeAreaView style={wrapperStyles}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                scale: animatedSpin.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [1, 1.2, 1],
                }),
              },
              {
                rotate: animatedSpin.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: ['0deg', '180deg', '0deg'],
                }),
              },
            ],
          },
        ]}>
        {sunRays.map((_, index) => renderSunRay(index))}

        <View style={styles.innerSunContainer}>
          <View style={styles.innerSun}></View>
          <Text style={styles.sunTitle}>Sun</Text>
        </View>
      </Animated.View>

      <Button
        title={isShow ? 'Go to sleep!' : 'Wake Up'}
        onPress={handleToggle}
      />
    </SafeAreaView>
  );
};

export default Sun;
