import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import base64 from 'react-native-base64';
import ListFruits from './ListFruits';
import {colors, linkImages} from './constant';

export default class App extends Component {
  state = {
    fruits: [],
    isLoading: true,
    keyboardStatus: false,
    fruitValue: '',
    isDisable: true,
  };
  isUnmounted = false;

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min));
  }

  getData() {
    fetch('https://api.github.com/repos/minhnguyenit14/mockend/readme')
      .then((res) => res.json())
      .then((data) => {
        let contentData = base64.decode(data.content.split('\n').join(''));
        this.setState({
          fruits: JSON.parse(contentData).fruits,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    !this.isUnmounted && this.getData();

    this.keyboardDidShowSubscription = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState({
          keyboardStatus: true,
        });
      },
    );
    this.keyboardDidHideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState({
          keyboardStatus: false,
        });
      },
    );
  }

  getRandomColor() {
    return colors.find((item, index) => {
      if (index === this.getRandomNumber(0, 7)) return item;
    });
  }

  getImageRandom() {
    return linkImages.find((item, index) => {
      if (index === this.getRandomNumber(0, 4)) return item;
    });
  }

  handleChangeInput = (value) => {
    if (value.length > 0) {
      this.setState({
        fruitValue: value,
        isDisable: false,
      });
    } else {
      this.setState({
        fruitValue: '',
        isDisable: true,
      });
    }
  };

  handleAddFruit = () => {
    !this.state.isDisable &&
      this.setState({
        fruits: [
          {
            name: this.state.fruitValue,
            color: this.getRandomColor(),
            imageUrl: this.getImageRandom(),
          },
          ...this.state.fruits,
        ],
        fruitValue: '',
        isDisable: true,
      });
  };

  handleDeleteFruit = (indexDelete) => {
    let newFruits = this.state.fruits;
    newFruits = newFruits.filter((item, index) => index !== indexDelete);
    this.setState({
      fruits: newFruits,
    });
  };

  componentWillUnmount() {
    this.isUnmounted = true;
    this.keyboardDidShowSubscription.remove();
    this.keyboardDidHideSubscription.remove();
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.title}>Project Training 01</Text>
        <View style={[styles.inputWrapper]}>
          <TextInput
            placeholder="Enter fruits..."
            style={styles.inputForm}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={this.handleChangeInput}
            value={this.state.fruitValue}
          />
          <TouchableOpacity
            style={[
              styles.addBtn,
              {
                backgroundColor: this.state.isDisable ? '#ccc' : '#3d7bff',
              },
            ]}
            onPress={this.handleAddFruit}>
            <Text style={styles.textBtn}>Add</Text>
          </TouchableOpacity>
        </View>
        {!this.state.isLoading ? (
          <ListFruits
            fruits={this.state.fruits}
            keyboardStatus={this.state.keyboardStatus}
            handleDeleteFruit={this.handleDeleteFruit}
          />
        ) : (
          <ActivityIndicator size={'large'} />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    paddingVertical: 14,
  },
  inputWrapper: {
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 12,
    marginVertical: 12,
    paddingVertical: 6,
  },
  inputForm: {
    width: '80%',
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 18,
  },
  addBtn: {
    width: '20%',
    position: 'absolute',
    right: 3,
    top: 3,
    bottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
