import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './Login';
import Profile from './Profile';
import RecentTransactions from './RecentTransactions';

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
            <RecentTransactions handleNavigate={this.handleNavigate} />
          ) : (
            <Profile handleNavigate={this.handleNavigate} />
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
    flex: 1,
    backgroundColor: '#F1F6FE',
  },
});

export default FinanceManagement;
