import React, {useCallback, useContext, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {KEYS} from '../../constant';
import Context from '../../Context';

const widthWindow = Math.floor(Dimensions.get('window').width / 20 + 12);
const heightWindow = Math.floor(Dimensions.get('window').height / 20 + 16);

function Keyboard({onTypingKey, greenCap, yellowCap, grayCap}) {
  const {styleTheme} = useContext(Context);

  console.log(widthWindow)
  console.log(heightWindow)

  const styleKeyboardStatus = useCallback(
    (key) => {
      if (greenCap.includes(key)) {
        return {
          backgroundColor: styleTheme.primary,
          color: styleTheme.white,
        };
      }
      if (yellowCap.includes(key)) {
        return {
          backgroundColor: styleTheme.secondary,
          color: styleTheme.white,
        };
      }
      if (grayCap.includes(key)) {
        return {
          backgroundColor: styleTheme.grey,
          color: styleTheme.white,
        };
      }
      return {
        backgroundColor: styleTheme.surface,
      };
    },
    [greenCap, yellowCap, grayCap, styleTheme],
  );

  const keyboardStyle = useCallback(
    (key) => ({
      backgroundColor: styleKeyboardStatus(key).backgroundColor,
    }),
    [styleKeyboardStatus],
  );

  const keyboardTextStyle = useCallback(
    (key) => ({
      color: styleKeyboardStatus(key).color,
    }),
    [styleKeyboardStatus],
  );

  const styleKeyText = useMemo(
    () => ({
      color: styleTheme.color,
    }),
    [styleTheme],
  );

  const renderKeyboardRow = (row, index) => {
    return (
      <View style={styles.keyboardRow} key={index}>
        {row.map((item, index) => renderKeyboardItem(item, index))}
      </View>
    );
  };

  const renderKeyboardItem = (key, index) => {
    const widthEnterKey = key === 'Enter' && {
      width: widthWindow + 20,
    };
    return (
      <TouchableHighlight
        underlayColor={'#ddd'}
        key={index}
        style={[styles.keyBtn, widthEnterKey, keyboardStyle(key)]}
        onPress={() => onTypingKey(key)}>
        <Text style={[styles.keyText, keyboardTextStyle(key), styleKeyText]}>
          {key}
        </Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {KEYS.map((item, index) => renderKeyboardRow(item, index))}
    </View>
  );
}

export default React.memo(Keyboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 22,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  keyBtn: {
    width: widthWindow,
    height: heightWindow,
    marginHorizontal: 3,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
