import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './Login';
import Profile from './Profile';
import RecentTransactions from './RecentTransactions';

const navigate = (key, props = {}) => {
  switch (key) {
    case 'LOGIN':
      return <Login />;
    case 'PROFILE':
      return <Profile handleNavigate={props} />;
    case 'RECENT_TRANS':
      return <RecentTransactions handleNavigate={props} />;
  }
};

class FinanceManagement extends Component {
  state = {
    isLogged: false,
    isNavigate: false,
  };

  handleLogin = () => {
    this.setState({
      isLogged: true,
    });
  };

  handleNavigate = () => {
    this.setState((prevState) => ({
      isNavigate: !prevState.isNavigate,
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLogged ? (
          this.state.isNavigate ? (
            navigate('RECENT_TRANS', this.handleNavigate)
          ) : (
            navigate('PROFILE', this.handleNavigate)
          )
        ) : (
          <Login handleLogin={this.handleLogin} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F1F6FE',
  },
});

export default FinanceManagement;
