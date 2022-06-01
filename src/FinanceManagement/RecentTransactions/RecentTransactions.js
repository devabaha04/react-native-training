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

  imageData = [
    'https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png',
    'https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png',
    'https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png',
  ];

  renderImage = ({item, index}) => {
    let startX, startY;
    startX = Math.floor(((Math.PI * (index - 1)) *  -32) / 2);
    startY = Math.floor(((Math.PI * index) * 8) * 2);
    return (
      <View
        style={[
          styles.layer7,
          {
            top: startY,
            left: startX,
          },
        ]}>
        <Image source={{uri: item}} style={[styles.secondImg]} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navWrapper}>
          <TouchableOpacity
            style={styles.iconNav}
            onPress={() => this.props.handleNavigate()}>
            <IconFontAwesome5 name={'chevron-left'} size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconNav}>
            <IconFontAwesome5 name={'search'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.txtHelper}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabsWrapper}>
          {Tabs.map((item, index) => (
            <TouchableHighlight
              underlayColor={'#C7CCDB'}
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
          <Text style={[styles.contentTitle, {paddingHorizontal: 18}]}>
            Today
          </Text>

          <View style={[styles.listTrans, {paddingHorizontal: 18}]}>
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
          </View>

          <View style={[styles.layer1, {paddingHorizontal: 18}]}>
            <Image source={{uri: imageLink}} style={styles.primaryImg} />
            <View style={styles.layer2}></View>
            <View style={styles.layer3}></View>
            <View style={styles.layer4}></View>
            <View style={styles.layer5}></View>
            <View style={styles.layer6}>
              {this.imageData.map((item, index) =>
                this.renderImage({item, index}),
              )}
            </View>
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
    flex: 1,
  },
  navWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 18,
  },
  iconNav: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 18,
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
    paddingHorizontal: 18,
  },
  tabBtn: {
    marginRight: 16,
    borderRadius: 14,
    shadowColor: '#E3E9F6',
    shadowOpacity: 30,
    shadowRadius: 16,
  },
  txtBtn: {
    fontSize: 13,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  content: {
    flex: 1,
    marginTop: 8,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#454981',
    paddingVertical: 18,
  },
  listTrans: {
    marginBottom: 12,
  },
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
    shadowColor: '#E3E9F6',
    shadowOpacity: 30,
    shadowRadius: 16,
    shadowOffset: {
      width: 1,
      height: 24,
    },
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
    paddingVertical: 20,
    borderRadius: 28,
    marginTop: 18,
    marginBottom: 8,
    marginHorizontal: 18,
  },
  textDetail: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  primaryImg: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#fff',
  },
  layer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  layer2: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: '#363977',
    borderRadius: 120,
    padding: 45,
  },
  layer3: {
    position: 'absolute',
    borderWidth: 20,
    borderColor: '#D0DFFE',
    borderRadius: 120,
    padding: 80,
  },
  layer4: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 120,
    padding: 100,
  },
  layer5: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#E2E4FE',
    borderRadius: 140,
    padding: 138,
  },
  layer6: {
    position: 'absolute',
    padding: 138,
    borderRadius: 138,
  },
  layer7: {
    position: 'absolute',
  },
  secondImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
