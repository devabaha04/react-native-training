import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import base64 from 'react-native-base64';
import ListFruits from './ListFruits';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    fruits: [],
    isLoading: true,
  };
  isUnmounted = false;

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
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.title}>Project Training 01</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Enter fruits..." style={styles.inputForm} />
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.textBtn}>Add</Text>
          </TouchableOpacity>
        </View>
        {!this.state.isLoading ? (
          <ListFruits fruits={this.state.fruits} />
        ) : (
          <ActivityIndicator size={'large'} color="#00ff00" />
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
    backgroundColor: '#3d7bff',
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
