/**
 * Created by xuqingfeng on 16/12/15.
 * 我的模块，item的统一封装
 * 布局结构:
 * image  text  image/text  iamge
 */
import React,{Component}from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Platform,ScrollView}from 'react-native';

var MineCell=require('../component/MineCell')
var MainHeadCell=require('../component/MainHeadCell')
var CartFragment=React.createClass({


    getInitialState(){
        return{
        }
    },

    render(){
        return(
            <ScrollView style={styles.container}>

                <MainHeadCell title="购物车" />

            </ScrollView>
        );

    },
});
const styles = StyleSheet.create({

    container: {
        borderBottomColor:'#e8e8e8',
    },
    topViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginTop:10,
        height:Platform.OS=='ios'?45:40,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    topLeftView:{
        flexDirection:'row',

    },
    middleOneStyle:{
        marginTop:20,
    },

});


module.exports=CartFragment;