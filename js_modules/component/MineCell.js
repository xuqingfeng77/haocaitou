/**
 * Created by xuqingfeng on 16/12/15.
 * '我的'模块，item的统一封装
 * 布局结构:
 * image  text  image/text  iamge
 */
import React,{Component,PropTypes}from 'react';
import {AppRegistry,StyleSheet,View,Text,TouchableOpacity,Image,Platform}from 'react-native';

var MineCell=React.createClass({

    //定义控件内容
    getDefaultProps(){
        return{
            leftIconName:'',
            leftTitle:'',
            rightIconName:'',
            rightTitle:'',
            onPress: PropTypes.func,

        }
    },

    render(){
        return(
        <TouchableOpacity activeOpacity={0.5} onPress={this.props.onPress}>
            <View style={styles.container}>
                {/*左边布局*/}
                <View style={styles.leftViewStyle}>
                    <Image style={styles.leftImageStyle} source={{uri:this.props.leftIconName}}></Image>

                    <Text style={styles.leftTextStyle} >{this.props.leftTitle}</Text>
                </View>

                {/*右边*/}
                <View style={styles.rightViewStyle}>
                    {this._rightSubView()}
                </View>
            </View>
        </TouchableOpacity>


        );

    },
    //右边内容
    _rightSubView(){

            return (<View style={{flexDirection:'row',alignItems:'center'}}>
                {this._rightDetailView()}
                <Image style={{width:8,height:13,marginRight:8,marginLeft:5}} source={{uri:'icon_cell_rightArrow'}}>
                </Image>
            </View>)


    },
    _rightDetailView(){

        if(this.props.rightIconName.length==0&&this.props.rightTitle.length!=0){//显示文字，不用显示右边图片
                return(
                    <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                )
        }else if(this.props.rightIconName.length!=0&&this.props.rightTitle.length==0){//显示图片，不用显示文字
                return(
                    <Image style={{width:24,height:13}} source={{uri:this.props.rightIconName}}/>
                )
        }
    },


});
const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems:'center',
        height:Platform.OS=='ios'?40:36,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle: {

        //主轴方向
        flexDirection:'row',
        //侧轴方向
        alignItems:'center',
        marginLeft:8
    },
    leftImageStyle:{

        width:24,
        height:24,
        marginRight:6,
        borderRadius:12
    },
    leftTextStyle:{

        fontSize:16
    },
    rightViewStyle: {

    }
});


module.exports=MineCell;