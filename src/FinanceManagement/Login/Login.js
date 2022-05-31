import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import IconAweSome5 from 'react-native-vector-icons/FontAwesome5';
import {imageLink} from '../../constant';

export default class Login extends Component {
  state = {
    showPassword: false,
    keyboardOpen: false
  };

  componentDidMount() {
    this.keyboardDidShowEmitter = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState({
          keyboardOpen: true,
        });
      },
    );
    this.keyboardDidHideEmitter = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState({
          keyboardOpen: false,
        });
      },
    );
  }

  componentWillUnmount() {
    this.keyboardDidHideEmitter.remove()
    this.keyboardDidShowEmitter.remove()
  }

  handleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={{uri: imageLink}} style={styles.logoImage} />
        </View>

        <View style={styles.formGroup}>
          <View style={styles.formControl}>
            <Text style={styles.formLabel}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <Icon name="email" size={16} color={'#848585'} />
              <TextInput
                placeholder="Eg: example@domain.com"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.formControl}>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <Icon name="locked" size={16} color={'#848585'} />
              <TextInput
                placeholder="Enter password...."
                secureTextEntry={this.state.showPassword ? false : true}
                style={styles.input}
              />
              <TouchableOpacity onPress={this.handleShowPassword}>
                <IconAweSome5
                  name={this.state.showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  color={'#848585'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableHighlight 
            style={styles.btnLogin} 
            onPress={() => this.props.handleLogin()}
          >
            <Text style={styles.textBtnLogin}>Login</Text>
          </TouchableHighlight>

          <View style={styles.labelHelpWrapper}>
            <TouchableOpacity>
              <Text style={styles.labelHelp}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.labelHelp}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  formGroup: {
    flex: 2,
    justifyContent: 'flex-start',
    marginHorizontal: 24,
  },
  formControl: {
    backgroundColor: '#fff',
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    shadowColor: '#E0E7F6',
    shadowOpacity: 4,
    shadowRadius: 12,
  },
  formLabel: {
    fontSize: 16,
    color: '#848585',
    fontWeight: '600',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    flex: 2,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 16,
  },
  btnLogin: {
    backgroundColor: '#333474',
    marginTop: 16,
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnLogin: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  labelHelpWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  labelHelp: {
    color: '#848585',
    fontSize: 14,
    fontWeight: '700',
  },
});
