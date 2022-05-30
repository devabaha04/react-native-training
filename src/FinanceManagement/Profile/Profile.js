import React, {Component} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
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
              <IconMaterialCommunity
                name="bell-outline"
                size={21}
                color={'#484B84'}
              />
            </View>
            <View style={styles.header_right}>
              <Text style={styles.timestamp}>Sept 13, 2020</Text>
            </View>
          </View>

          <ScrollView style={styles.listTrans}>
            <View style={styles.transItem}>
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                  <IconIonicons name="arrow-up" color={'#000'} size={30} />
                </View>
                <View style={styles.infoRecent}>
                  <Text style={styles.statusText}>Sent</Text>
                  <Text style={styles.description} >Sending Payment to Client</Text>
                </View>
              </View>
              <View style={styles.moneyWrapper} >
                <Text style={styles.moneyText} >$150</Text>
              </View>
            </View>
            <View style={styles.transItem}>
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                  <IconIonicons name="arrow-down" color={'#000'} size={30} />
                </View>
                <View style={styles.infoRecent}>
                  <Text style={styles.statusText}>Receive</Text>
                  <Text style={styles.description} >Receive Salary from company</Text>
                </View>
              </View>
              <View style={styles.moneyWrapper} >
                <Text style={styles.moneyText} >$250</Text>
              </View>
            </View>
            <View style={styles.transItem}>
              <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                  <IconIonicons name="arrow-up" color={'#000'} size={30} />
                </View>
                <View style={styles.infoRecent}>
                  <Text style={styles.statusText}>Loan</Text>
                  <Text style={styles.description} >Loan for the Car</Text>
                </View>
              </View>
              <View style={styles.moneyWrapper} >
                <Text style={styles.moneyText} >$400</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.navWrapper} >
          <TouchableOpacity>
            <IconAntDesign name='home' size={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAntDesign name='creditcard' size={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAntDesign name='plussquare' size={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconFontAwesome5 name='dollar-sign' size={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAntDesign name='user' size={26} />
          </TouchableOpacity>
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
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profile: {
    backgroundColor: '#fff',
    marginHorizontal: 26,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 24,
    shadowColor: '#C7CCDB',
    shadowOpacity: 19,
    shadowRadius: 20,
    flex: 1,
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
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 8,
  },
  positionCareer: {
    fontSize: 14,
    color: '#000',
    paddingTop: 10,
  },
  analyst: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 26,
  },
  analystItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  itemLast: {
    borderRightWidth: 0,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#484B84',
    paddingBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
  },
  recent: {
    flex: 1.5,
    marginHorizontal: 28,
    marginTop: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  timestamp: {
    color: '#3A3E7A',
    fontSize: 14,
    fontWeight: '600',
  },
  listTrans: {
    marginTop: 18,
    marginBottom: 14,
    marginHorizontal: 0
  },
  transItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginVertical: 10,
    borderRadius: 18,
    shadowColor: '#C7CCDB',
    shadowOpacity: 18,
    shadowRadius: 4,
  },
  imageWrapper: {
    backgroundColor: '#E0E2F9',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  infoRecent: {
    paddingLeft: 14
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700'
  },
  description: {
    fontSize: 14,
    color: '#BABABA',
    marginTop: 6
  },
  moneyWrapper: {
  },
  moneyText: {
    fontSize: 16,
    fontWeight: '800',
  },
  navWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});
