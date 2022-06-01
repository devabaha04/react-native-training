import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {imageLink} from '../../constant';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.bars}>
            <IconIonicons name="menu" size={20} />
            <IconSimpleLineIcons name="options-vertical" size={16} />
          </View>

          <View style={styles.info}>
            <Image source={{uri: imageLink}} style={styles.avatar} />
            <Text style={styles.nameUser}>Hira Riaz</Text>
            <Text style={styles.positionCareer}>UI/UX Designer</Text>
          </View>

          <View style={styles.analyst}>
            <View style={styles.analystItem}>
              <Text style={styles.price}>$8900</Text>
              <Text style={styles.label}>Income</Text>
            </View>
            <View style={styles.analystItem}>
              <Text style={styles.price}>$5500</Text>
              <Text style={styles.label}>Expenses</Text>
            </View>
            <View style={[styles.analystItem, styles.itemLast]}>
              <Text style={styles.price}>$890</Text>
              <Text style={styles.label}>Loan</Text>
            </View>
          </View>
        </View>

        <View style={styles.recent}>
          <View style={styles.header}>
            <View style={styles.header_left}>
              <Text style={styles.title}>Overview</Text>
              <TouchableOpacity style={{ position: 'relative' }}>
                <IconMaterialCommunity
                  name="bell-outline"
                  size={21}
                  color={'#484B84'}
                />
                <View style={styles.dot}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.header_right}>
              <Text style={styles.timestamp}>Sept 13, 2020</Text>
            </View>
          </View>

          <ScrollView style={styles.listTrans}>
            <TouchableOpacity
              style={styles.transItem}
              onPress={() => this.props.handleNavigate()}>
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                  <IconIonicons name="arrow-up" color={'#000'} size={30} />
                </View>
                <View style={styles.infoRecent}>
                  <Text style={styles.statusText}>Sent</Text>
                  <Text style={styles.description}>
                    Sending Payment to Client
                  </Text>
                </View>
              </View>
              <View style={styles.moneyWrapper}>
                <Text style={styles.moneyText}>$150</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transItem}
              onPress={() => this.props.handleNavigate()}>
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                  <IconIonicons name="arrow-down" color={'#000'} size={30} />
                </View>
                <View style={styles.infoRecent}>
                  <Text style={styles.statusText}>Receive</Text>
                  <Text style={styles.description}>
                    Receive Salary from company
                  </Text>
                </View>
              </View>
              <View style={styles.moneyWrapper}>
                <Text style={styles.moneyText}>$250</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transItem}
              onPress={() => this.props.handleNavigate()}>
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                  <IconIonicons name="arrow-up" color={'#000'} size={30} />
                </View>
                <View style={styles.infoRecent}>
                  <Text style={styles.statusText}>Loan</Text>
                  <Text style={styles.description}>Loan for the Car</Text>
                </View>
              </View>
              <View style={styles.moneyWrapper}>
                <Text style={styles.moneyText}>$400</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.navWrapper}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IconAntDesign name="home" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IconAntDesign name="creditcard" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ backgroundColor: '#323473', padding: 12, borderRadius: 12 }} >
              <IconAntDesign name="plus" size={18} color={'#fff'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IconFontAwesome5 name="dollar-sign" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IconAntDesign name="user" size={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#fff',
    marginHorizontal: 26,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 24,
    flex: 0.8,
    shadowColor: '#E0E7F6',
    shadowOpacity: 34,
    shadowRadius: 10,
    shadowOffset: {
      width: 1,
      height: 28
    },
    elevation: 3
  },
  bars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameUser: {
    color: '#484B84',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  positionCareer: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    paddingTop: 10,
  },
  analyst: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 36,
  },
  analystItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  itemLast: {
    borderRightWidth: 0,
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: '#484B84',
    paddingBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
  },
  recent: {
    flex: 1,
    marginTop: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  header_left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#3A3E7A',
    fontWeight: '700',
    marginRight: 8,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#E50002',
    borderRadius: 15,
    position: 'absolute',
    top: 3,
    right: 2
  },
  timestamp: {
    color: '#3A3E7A',
    fontSize: 14,
    fontWeight: '600',
  },
  listTrans: {
    marginTop: 18,
    marginBottom: 14,
    paddingHorizontal: 24
  },
  transItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 18,
    marginVertical: 10,
    borderRadius: 28,
    shadowColor: '#E0E7F6',
    shadowOpacity: 8,
    shadowRadius: 16,
    shadowOffset: {
      width: 1,
      height: 20
    },
    elevation: 3
  },
  imageWrapper: {
    backgroundColor: '#E0E2F9',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  infoRecent: {
    paddingLeft: 14,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    fontSize: 12,
    color: '#A8A8A8',
    marginTop: 6,
  },
  moneyText: {
    fontSize: 16,
    fontWeight: '800',
  },
  navWrapper: {
    flexDirection: 'row',
  },
});
