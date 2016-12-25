/**
 * Created by xuqingfeng on 16/12/16.
 * 买彩票页面，买彩票入口item
 */
import React,{Component,PropTypes}from 'react';
import {AppRegistry,StyleSheet,View,Text,TouchableOpacity,Image,Platform,Dimensions}from 'react-native';
const deviceWidthDp=Dimensions.get('window').width;

var BuyLotteryBallCell=React.createClass({

    //定义控件内容
    getDefaultProps(){
        return{
            iconUri:'',
            ballType:'',
            ballDes:''

        }
    },

    render(){
        return(
            <View style={styles.container}>
                {/*图片， 球类别， 类别描述 */}
                <View style={styles.leftViewStyle}>
                    <Image style={{width:60,height:60, borderRadius:30,} } source={ {uri:this.props.iconUri}}></Image>
                </View>
                <View style={{flex:1,flexDirection:'column',marginLeft:4}}>

                    <Text style={{color:'black',fontSize:20,marginLeft:5}}>{this.props.ballType}</Text>
                    <Text  style={{color:'gray',fontSize:13,marginLeft:8}}>{this.props.ballDes}</Text>
                </View>

            </View>
        );

    },

});
const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        backgroundColor: 'white',
        alignItems:'center',
        height:Platform.OS=='ios'?90:100,
        width:deviceWidthDp/2,
    },
    leftViewStyle: {

        //主轴方向
        flexDirection:'row',
        //侧轴方向
        alignItems:'center',
        marginLeft:4
    },

    rightViewStyle: {
        //主轴方向
        flexDirection:'row',
    }
});


module.exports=BuyLotteryBallCell;

