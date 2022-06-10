import React, {useState, useCallback} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Keyboard from './components/Keyboard';
import GuessRow from './components/Guess';
import {initArr2D} from './helper';
import {ENTER, CLEAR, WORDS_LIST} from './constant';

export default function App() {
  const wordsList = [...WORDS_LIST]
  const [guessData, setGuessData] = useState(initArr2D());
  const [indexRowActive, setIndexRowActive] = useState(0);
  const [indexColActive, setIndexColActive] = useState(0);
  
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
                  status: (guessDataClone[indexRow][indexCol].status = 2),
                };
              }
            }
          });
        });
      }

      if (key === CLEAR) {
        let indexColTemp = indexColActive > 0 ? indexColActive - 1 : 0;
        if (indexColActive <= guessDataClone[indexRowActive].length) {
          if (guessDataClone[indexRowActive][indexColTemp].value.length > 0) {
            guessDataClone[indexRowActive][indexColTemp].value = '';
            guessDataClone[indexRowActive][indexColTemp].status = 1;
            setIndexColActive((prevState) => prevState > 0 ? prevState - 1 : 0);
          } else {
            guessDataClone[indexRowActive][indexColTemp].value = '';
            guessDataClone[indexRowActive][indexColTemp].status = 1;
            setIndexColActive((prevState) => prevState > 0 ? prevState - 1 : 0);
          }
        }
      }

      if (key === ENTER) {
        console.log(guessDataClone[indexRowActive])
        let result = ''
        let isInValid = true
        guessDataClone[indexRowActive].map((item, index) => {
          result = result.concat('', item.value)
          wordsList.map((item, index) => {
            if (item === result) {
              isInValid = false
            }
          })
        })

        if (isInValid) {
          alert('Not in word list')
        }

        // setIndexRowActive((prevState) => prevState + 1);
        //     setIndexColActive(0);
      }

      setGuessData(guessDataClone);
    },
    [indexRowActive, indexColActive, wordsList],
  );

  const renderGuessRow = (row, indexRow) => (
    <GuessRow key={indexRow} row={row} indexRow={indexRow} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wordle</Text>
      </View>

      <View style={styles.guessContainer}>
        {guessData.map((item, index) => renderGuessRow(item, index))}
      </View>

      <Keyboard onTypingKey={handleTypingKey} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  guessContainer: {
    flex: 2,
  },
});
