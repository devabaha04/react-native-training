import React, {useMemo, useContext} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {STATUS} from '../../constant';
import Context from '../../Context';

const widthWindow = Math.floor(Dimensions.get('window').width / 10 + 21);
const heightWindow = Math.floor(Dimensions.get('window').height / 22 + 22);

function Block({letter, status}) {
  const {styleTheme} = useContext(Context);

  const stylesStatus = useMemo(() => {
    switch (status) {
      case STATUS.TYPING:
        return {
          borderColor: styleTheme.onSurface,
          color: styleTheme.color,
        };
      case STATUS.GREEN:
        return {
          backgroundColor: styleTheme.primary,
          color: styleTheme.white,
          borderColor: styleTheme.primary,
        };
      case STATUS.YELLOW:
        return {
          backgroundColor: styleTheme.secondary,
          color: styleTheme.white,
          borderColor: styleTheme.secondary,
        };
      case STATUS.GRAY:
        return {
          backgroundColor: styleTheme.grey,
          color: styleTheme.white,
          borderColor: styleTheme.grey,
        };
      default:
        return {
          color: styleTheme.color,
          borderColor: styleTheme.surface,
        };
    }
  }, [status, styleTheme]);

  const blockStyle = useMemo(
    () => ({
      backgroundColor: stylesStatus.backgroundColor,
      borderColor: stylesStatus.borderColor,
    }),
    [stylesStatus],
  );

  const textStyle = useMemo(
    () => ({color: stylesStatus.color}),
    [stylesStatus],
  );

  return (
    <View style={[styles.container, blockStyle]}>
      <Text style={[styles.contentBlock, textStyle]}>{letter}</Text>
    </View>
  );
}

export default React.memo(Block);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: widthWindow,
    height: heightWindow,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    overflow: 'hidden',
  },
  contentBlock: {
    fontSize: 22,
    fontWeight: '700',
  },
});
