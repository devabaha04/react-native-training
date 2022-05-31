import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {imageLink} from '../../constant';

const Tabs = ['All', 'Income', 'Expense'];

export default class RecentTransactions extends Component {
  state = {
    indexActive: 0,
  };

  handleSelected = (index) => {
    this.setState({indexActive: index});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navWrapper}>
          <TouchableOpacity onPress={() => this.props.handleNavigate()} >
            <IconFontAwesome5 name={'chevron-left'} style={styles.iconNav} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconFontAwesome5 name={'search'} style={styles.iconNav} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Recent Transactions</Text>
          <Text style={styles.txtHelper}>See all</Text>
        </View>
        <View style={styles.tabsWrapper}>
          {Tabs.map((item, index) => (
            <TouchableHighlight
              underlayColor={'#454981'}
              key={index}
              style={[
                styles.tabBtn,
                {
                  backgroundColor:
                    index === this.state.indexActive ? '#454981' : '#fff',
                },
              ]}
              onPress={() => this.handleSelected(index)}>
              <Text
                style={[
                  styles.txtBtn,
                  {color: index === this.state.indexActive ? '#fff' : '#000'},
                ]}>
                {item}
              </Text>
            </TouchableHighlight>
          ))}
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Today</Text>

          <ScrollView style={styles.listTrans}>
            <TouchableOpacity style={styles.transItem}>
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                  <IconAntDesign name="mail" color={'#454981'} size={30} />
                </View>
                <View style={styles.infoRecent}>
                  <Text style={styles.statusText}>Payment</Text>
                  <Text style={styles.description}>Payment from Andrea</Text>
                </View>
              </View>
              <View style={styles.moneyWrapper}>
                <Text style={styles.moneyText}>$30.00</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.layer1}>
            <Image
              source={{uri: imageLink}}
              style={[styles.secondaryImg, { 
                top: Platform.OS === 'ios' ? 20 : -10
              }]}
            />
            <Image
              source={{uri: imageLink}}
              style={[styles.secondaryImg, {
                top: Platform.OS === 'ios' ? 120 : 88,
                left: Platform.OS === 'ios' ? 44 : 18,
              }]}
            />
            <Image
              source={{uri: imageLink}}
              style={[styles.secondaryImg, {
                top: Platform.OS === 'ios' ? 120 : 88,
                right: Platform.OS === 'ios' ? 44 : 18,
              }]}
            />
            <View style={styles.layer2}>
              <View style={styles.layer3}>
                <Image source={{uri: imageLink}} style={styles.primaryImg} />
              </View>
            </View>
            <Image
              source={{uri: imageLink}}
              style={[styles.secondaryImg, {
                bottom: Platform.OS === 'ios' ? 50 : 20,
                left: Platform.OS === 'ios' ? 80 : 60,
              }]}
            />
            <Image
              source={{uri: imageLink}}
              style={[styles.secondaryImg, {
                bottom: Platform.OS === 'ios' ? 50 : 20,
                right:  Platform.OS === 'ios' ? 80 : 60,
              }]}
            />
          </View>

          <TouchableHighlight style={styles.detailBtn}>
            <Text style={styles.textDetail}>See Details</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    flex: 1,
  },
  navWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
    paddingHorizontal: 12
  },
  iconNav: {
    color: '#333',
    fontSize: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#454981',
  },
  txtHelper: {
    fontSize: 16,
    color: '#888',
  },
  tabsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 26,
  },
  tabBtn: {
    marginRight: 16,
    borderRadius: 14,
    shadowColor: '#C7CCDB',
    shadowOpacity: 20,
    shadowRadius: 4,
  },
  txtBtn: {
    fontSize: 13,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  content: {
    flex: 2,
    marginTop: 6,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#454981',
    paddingVertical: 16,
  },
  listTrans: {},
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 12,
  },
  infoRecent: {
    marginLeft: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: '#888',
  },
  moneyText: {
    fontSize: 15,
    color: '#454981',
    fontWeight: 'bold',
  },
  detailBtn: {
    backgroundColor: '#333474',
    paddingVertical: 16,
    borderRadius: 24,
    marginTop: 18,
    marginBottom: 8,
  },
  textDetail: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  layer1: {
    position: 'relative',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer2: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    borderWidth: 1,
    borderColor: '#E3E5FF',
    borderRadius: 300,
  },
  layer3: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderWidth: 20,
    borderColor: '#CFE0FE',
    borderRadius: 300,
  },
  primaryImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#363977',
  },
  secondaryImg: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 999,
    borderRadius: 40,
  },
});
