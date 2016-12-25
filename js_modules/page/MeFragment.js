/**
 * Created by xuqingfeng on 16/12/15.
 * 我的模块
 * 布局结构:
 */
import React,{Component}from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Platform,ScrollView}from 'react-native';

var MineCell=require('../component/MineCell');
var MainHeadCell=require('../component/MainHeadCell');
var BuyLotterRecord=require('./BuyLotteryRecord');
var MeFragment=React.createClass({


    getInitialState(){
        return{
        }
    },
    _buyRecord(){
        this.props.navigator.push({
            component:BuyLotterRecord,
        })
    },
    _showAlert(){
      alert("i am good");
    },

    render(){
        return(
        <ScrollView style={styles.container}>

            <MainHeadCell title="我的" />
            <View style={styles.topViewStyle}>
                <View style={styles.topLeftView} >
                    <Text style={{fontSize:20,color:'black',marginLeft:10}}>135****655</Text>
                    <Text style={{fontSize:20,color:'red'}}>(未认证)</Text>
                </View>
                <Image style={{width:8,height:13,marginRight:8,marginLeft:5}} source={{uri:'icon_cell_rightArrow'}}>
                </Image>
            </View>
            <View style={{marginTop:20}}>
                <MineCell
                    leftIconName="xckc"
                    leftTitle="投注记录"
                    onPress={this._buyRecord}
                    />
            </View>
            <View style={styles.middleOneStyle}>
                <MineCell
                    leftIconName="xckc"
                    leftTitle="账户余额"
                    rightTitle='0.00元'
                    onPress={this._showAlert}
                />
                <MineCell
                    leftIconName="xckc"
                    leftTitle="充值"
                    onPress={this._showAlert}
                />
                <MineCell
                    leftIconName="xckc"
                    leftTitle="提现"
                    onPress={this._showAlert}
                />
            </View>
            <View style={styles.middleOneStyle}>
                <MineCell
                    leftIconName="xckc"
                    leftTitle="消息"
                    onPress={this._showAlert}
                />
                <MineCell
                    leftIconName="xckc"
                    leftTitle="设置"
                    onPress={this._showAlert}
                />
            </View>
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


module.exports=MeFragment;