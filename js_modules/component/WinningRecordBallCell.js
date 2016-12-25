/**
 * Created by xuqingfeng on 16/12/16.
 * 开奖记录展示的号码,红球和篮球
 */
import React,{Component,PropTypes}from 'react';
import {AppRegistry,StyleSheet,View,Text,TouchableOpacity,Image,Platform}from 'react-native';

var WinningRecordCell=React.createClass({

    //定义控件内容
    getDefaultProps(){
        return{
            redBall:[],
            blueBall:[],

        }
    },

    render(){
        return(
                <View style={styles.container}>
                    {/*红球*/}
                    {this._redView()}
                    {/*蓝球*/}
                    {this._blueView()}

                </View>
        );

    },
    //红球布局
    _redView(){
        var redArr=[];
            var redSize=this.props.redBall.length;
            for(var i=0;i<redSize;i++){
                redArr.push(<Text key={i} style={styles.redBallStyle}>{this.props.redBall[i]}</Text>)

            }
        return redArr
    },
    //蓝色球布局
    _blueView(){
        var blueArr=[];
        var blueSize=this.props.blueBall.length;
        for(var i=0;i<blueSize;i++){
            blueArr.push(<Text key={i} style={styles.blueBallStyle}>{this.props.blueBall[i]}</Text>)

        }
        return blueArr
    },


});
const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        alignItems:'center',
    },
    leftViewStyle: {

        //主轴方向
        flexDirection:'row',
        //侧轴方向
        alignItems:'center',
        marginLeft:8
    },
    redBallStyle:{

        color:'white',
        backgroundColor:'red',
        width:25,
        height:25,
        marginLeft:5,
        borderRadius:13,
        textAlign:'center'
    },
    blueBallStyle:{

        color:'white',
        backgroundColor:'#218cff',
        width:25,
        height:25,
        marginLeft:5,
        borderRadius:13,
        textAlign:'center'
    },
    rightViewStyle: {

    }
});


module.exports=WinningRecordCell;

