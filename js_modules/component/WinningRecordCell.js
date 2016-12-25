/**
 * Created by xuqingfeng on 16/12/16.
 * 中奖记录item
 */
import React,{Component,PropTypes}from 'react';
import {AppRegistry,StyleSheet,View,Text,TouchableOpacity,Image,Platform}from 'react-native';
var WinningRecordBallCell=require('./WinningRecordBallCell')
var WinningRecordCell=React.createClass({

    //定义控件内容
    getDefaultProps(){
        return{
            redBall:[],
            blueBall:[],
            iconUri:'',
            typeName:'',
            qiNo:'',
            date:'',

        }
    },

    render(){
        return(
                <View style={styles.container}>
                    {/*图片， 种类， 期数， 球*/}
                    <View style={styles.leftViewStyle}>
                        <Image style={{width:60,height:60, borderRadius:30,} } source={ {uri:this.props.iconUri}}></Image>
                    </View>
                    <View style={{flex:1,flexDirection:'column',marginLeft:4}}>
                        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between',marginBottom:10}}>
                            <Text style={{color:'black',fontSize:20,marginLeft:5}}>{this.props.typeName}</Text>
                            <Text  style={{color:'gray',fontSize:15,marginLeft:8}}>{this.props.qiNo}</Text>
                            <Text style={{fontSize:15,color:'gray',marginLeft:30}}>{this.props.date}</Text>

                        </View>

                        <WinningRecordBallCell
                            redBall={this.props.redBall}
                            blueBall={this.props.blueBall}
                        ></WinningRecordBallCell>
                    </View>
                    {/*日期，箭头*/}
                    <View style={styles.rightViewStyle}>

                        <Image style={{width:8,height:13,marginRight:8,marginLeft:5}} source={{uri:'icon_cell_rightArrow'}}>
                        </Image>
                    </View>

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
        backgroundColor: 'white',
        alignItems:'center',
        height:Platform.OS=='ios'?70:80,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
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


module.exports=WinningRecordCell;

