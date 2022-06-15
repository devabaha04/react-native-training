import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Keyboard from './components/Keyboard';
import GuessRow from './components/Guess';
import {initArr2D} from './helper';
import {
  ENTER,
  CLEAR,
  WORDS_LIST,
  DARK_THEME,
  LIGHT_THEME,
  STATUS,
} from './constant';
import Context from './Context';

export default function App() {
  const [guessData, setGuessData] = useState(initArr2D());
  const [indexRowActive, setIndexRowActive] = useState(0);
  const [indexColActive, setIndexColActive] = useState(0);
  const [greenCap, setGreenCap] = useState([]);
  const [yellowCap, setYellowCap] = useState([]);
  const [grayCap, setGrayCap] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [styleTheme, setStyleTheme] = useState({});

  const getRandomWord = useMemo(() => {
    return WORDS_LIST[Math.floor(Math.random() * 12)].split('');
  }, []);

  const handleSwitchTheme = useCallback(() => {
    setDarkTheme((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (darkTheme) {
      setStyleTheme(DARK_THEME);
    } else {
      setStyleTheme(LIGHT_THEME);
    }
  }, [darkTheme]);

  const styleContainer = useMemo(
    () => ({
      backgroundColor: styleTheme.backgroundColor,
    }),
    [styleTheme],
  );

  const styleText = useMemo(
    () => ({
      color: styleTheme.color,
    }),
    [styleTheme],
  );

  const handleTypingKey = useCallback(
    (key) => {
      const guessDataClone = [...guessData];

      if (key !== ENTER && key !== CLEAR) {
        guessDataClone.map((row, indexRow) => {
          return row.map((col, indexCol) => {
            if (indexRow === indexRowActive) {
              if (indexCol === indexColActive) {
                setIndexColActive((prevState) =>
                  prevState <= 4 ? prevState + 1 : prevState,
                );
                return {
                  value: (guessDataClone[indexRow][indexCol].value = key),
                  status: (guessDataClone[indexRow][indexCol].status =
                    STATUS.TYPING),
                };
              }
            }
          });
        });
      }

      if (key === CLEAR) {
        let indexColTemp = indexColActive > 0 ? indexColActive - 1 : 0;
        if (guessDataClone[indexRowActive][indexColTemp].value.length > 0) {
          guessDataClone[indexRowActive][indexColTemp].value = '';
          guessDataClone[indexRowActive][indexColTemp].status = STATUS.NORMAL;
          setIndexColActive(indexColTemp);
        }
      }

      if (key === ENTER) {
        let wordGuessed = '';
        for (let i = 0; i < 5; i++) {
          wordGuessed = wordGuessed.concat('', guessDataClone[indexRowActive][i].value);
        }
        if (
          indexColActive === guessDataClone[indexRowActive].length &&
          WORDS_LIST.includes(wordGuessed)
        ) {
          checkingWord(guessDataClone);
          if (wordGuessed !== getRandomWord.join('')) {
            setIndexRowActive((prevState) =>
              prevState <= 5 ? prevState + 1 : 0,
            );
            setIndexColActive(0);
          } else {
            alert('You guessed the word correctly!');
          }
        } else {
          alert('Not in word list');
        }
      }

      setGuessData(guessDataClone);
    },
    [indexRowActive, indexColActive, getRandomWord],
  );

  const checkingWord = useCallback(
    (guessDataClone) => {
      for (let col = 0; col < 5; col++) {
        if (getRandomWord.includes(guessDataClone[indexRowActive][col].value)) {
          guessDataClone[indexRowActive][col].status = STATUS.YELLOW;
          setYellowCap((prevState) => [
            ...prevState,
            guessDataClone[indexRowActive][col].value,
          ]);
        }
        if (
          getRandomWord.includes(guessDataClone[indexRowActive][col].value) &&
          getRandomWord[col] === guessDataClone[indexRowActive][col].value
        ) {
          guessDataClone[indexRowActive][col].status = STATUS.GREEN;
          setGreenCap((prevState) => [
            ...prevState,
            guessDataClone[indexRowActive][col].value,
          ]);
        }
        if (
          !getRandomWord.includes(guessDataClone[indexRowActive][col].value) &&
          getRandomWord[col] !== guessDataClone[indexRowActive][col].value
        ) {
          guessDataClone[indexRowActive][col].status = STATUS.GRAY;
          setGrayCap((prevState) => [
            ...prevState,
            guessDataClone[indexRowActive][col].value,
          ]);
        }
      }
    },
    [getRandomWord, indexRowActive],
  );

  const renderGuessRow = (row, indexRow) => (
    <GuessRow key={indexRow} row={row} />
  );

  const value = {
    styleTheme,
  };

  return (
    <Context.Provider value={value}>
      <SafeAreaView style={[styles.container, styleContainer]}>
        <View style={styles.headerContainer}>
          <Text style={[styles.header, styleText]}>Wordle</Text>

          <TouchableOpacity onPress={handleSwitchTheme}>
            {darkTheme ? (
              <Icon
                name="weather-night"
                style={[styles.iconTheme, styleText]}
              />
            ) : (
              <Icon
                name="weather-sunny"
                style={[styles.iconTheme, styleText]}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.guessContainer}>
          {guessData.map((item, index) => renderGuessRow(item, index))}
        </View>

        <Keyboard
          onTypingKey={handleTypingKey}
          greenCap={greenCap}
          yellowCap={yellowCap}
          grayCap={grayCap}
        />
      </SafeAreaView>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 32,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  guessContainer: {
    flex: 2,
  },
  iconTheme: {
    fontSize: 26,
  },
});
