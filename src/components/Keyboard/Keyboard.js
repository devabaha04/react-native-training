import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {KEYS} from '../../constant';

const widthWindow = Math.floor(Dimensions.get('window').width / 20 + 14);
const heightWindow = Math.floor(Dimensions.get('window').height / 20 + 14);

export default function Keyboard({onTypingKey}) {

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
      <TouchableOpacity
        key={index}
        style={[styles.keyBtn, widthEnterKey]}
        onPress={() => onTypingKey(key)}>
        <Text style={[styles.keyText]}>{key}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {KEYS.map((item, index) => renderKeyboardRow(item, index))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 15,
    marginHorizontal: 15,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  keyBtn: {
    backgroundColor: '#d7dadc',
    width: widthWindow,
    height: heightWindow,
    marginHorizontal: 3,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    color: '#121214',
    fontSize: 16,
    fontWeight: '500',
  },
});
