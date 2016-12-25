/**
 * Created by xuqingfeng on 16/12/19.
 * 投注记录
 * ES5写法
 */
'use strict';
import React,{Component,PropTypes}from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Platform,BackAndroid,Dimensions}from 'react-native';
import ViewPager from 'react-native-viewpager';
var BuyLotteryBallCell=require('../component/BuyLotteryBallCell');
var MainHeadCell=require('../component/MainHeadCell');
import theme from '../config/theme';
import px2dp from '../util/px2dp';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SimpleTabBar from '../component/SimpleTabBar';
const deviceWidthDp = Dimensions.get('window').width;
var BuyLotteryRecord=React.createClass({
    getDefaultProps(){
        return{
            key_word: 'T1348647853363'
        }
    },

    getInitialState(){
      return{

      }
    },
    //获取网络数据或是做一些耗时操作
    componentDidMount(){
        //添加back监听，后面一定要remove
        BackAndroid.addEventListener('hardwareBackPress', this._handleBack);

    },
    componentWillUnmount(){
        //添加了就需要remove掉
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    },
    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true;
        }
        return false;
    },
    _AlertShow(rowData){
        var temp="";
        for(let i=0;i<rowData.length;i++){
            temp+=rowData[i]+";";
        }
        alert("haha="+temp);
    },


    render(){
        return(
            <View style={styles.container}>
                <MainHeadCell title="投注记录" />
                <ScrollableTabView
                    renderTabBar={() => <SimpleTabBar />}
                    tabBarBackgroundColor="white"
                    tabBarActiveTextColor="red"
                    tabBarInactiveTextColor="black"
                    tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
                    tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
                    <View tabLabel="最近" style={styles.content}>
                        <Text style={{marginBottom: px2dp(10)}}>最近</Text>

                    </View>
                    <View tabLabel="待开奖" style={styles.content}>
                        <Text style={{marginBottom: px2dp(10)}}>待开奖</Text>

                    </View>
                    <View tabLabel="已中奖" style={styles.content}><Text>已中奖</Text></View>
                    <View tabLabel="全部订单" style={styles.content}><Text>全部订单</Text></View>
                </ScrollableTabView>
            </View>


        );

    },



});
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});


module.exports=BuyLotteryRecord;