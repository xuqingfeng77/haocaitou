/**
 * Created by xuqingfeng on 16/12/15.
 * '我的'模块，item的统一封装
 * 布局结构:
 * image  text  image/text  iamge
 */
import React, {Component}from 'react';
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity, Image, Platform}from 'react-native';
var theme = require('../config/theme')
var MainHeadCell = React.createClass({

    //定义控件内容
    getDefaultProps(){
        return {
            title: '',

        }
    },

    render(){
        return (
            <View style={styles.container}>
                {/*布局*/}

                <Text style={styles.middleTextStyle}>{this.props.title}</Text>

            </View>

        );

    },

});
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.themeRedColor,
        alignItems: 'center',
        height: Platform.OS == 'ios' ? 45 : 55,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5
    },
    middleTextStyle: {
        fontSize: 20,
        color: 'white'
    }

});


module.exports = MainHeadCell;