/**
 * Created by xuqingfeng on 16/12/19.
 * 选号界面
 * ES5写法
 */
'use strict';
import React,{Component,PropTypes}from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Platform,BackAndroid,Dimensions}from 'react-native';
import ViewPager from 'react-native-viewpager';
var BuyLotteryBallCell=require('../component/BuyLotteryBallCell');
const deviceWidthDp = Dimensions.get('window').width;
var BuyLotteryChoiceBall=React.createClass({
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

                <BuyLotteryBallCell
                    ballNum={33}
                    ballColor="red"
                    ballType="ssq"
                    choiceBall={[2,3,4,5,6]}
                    onPress={this._AlertShow}
                />


            </View>


        );

    },



});
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'white',
    },
    bannerStyle: {
        height:151,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    page: {
        flex: 1,
        height: 150,
        resizeMode: 'stretch'
    },
    touchStyle:{
        height:Platform.OS=='ios'?90:100,
        width:deviceWidthDp/2,
    },
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:deviceWidthDp,
    },

});


module.exports=BuyLotteryChoiceBall;