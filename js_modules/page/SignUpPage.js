/**
 * Created by wangdi on 4/11/16.
 * 注册
 */
'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    PixelRatio,
    Platform,
    TouchableOpacity,
    Image,
    TextInput,
    BackAndroid,
    Dimensions
} from 'react-native';
import Button from '../component/Button';
import px2dp from '../util/px2dp';
import Toast2Android from '../config/Toast2Android';
import theme from '../config/theme';
import PageComponent from './BackPageComponent';
import NavigationBar from '../component/SimpleNavigationBar';
const deviceWidthDp = Dimensions.get('window').width;
var codeTime =60;
export default class SignUpPage extends PageComponent {

    constructor(props) {
        super(props);
        this.handleBack = this._handleBack.bind(this);
        // 初始状态

        this.state= {

            timerCount:60,

            timerTitle:"获取验证码",

        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.interval&&clearInterval(this.interval);
        // this.timer&&clearTimeout(this.timer);
    }
    _signupCallback() {
        Toast2Android.show('点击了注册按钮', Toast2Android.SHORT);
        console.log("You tapped the button!");

    }
    _getMsgCode(){
        // alert("ddd");

       if(this.state.timerCount===codeTime){
           this.setState({
               timerTitle:codeTime+"s",

           })
           this.interval=setInterval(() =>{

               var timer=this.state.timerCount-1
               if(timer===0){

                   this.interval&&clearInterval(this.interval);

                   this.setState({

                       timerCount:codeTime,

                       timerTitle:'重新获取'

                   })

               }else{

                   this.setState({

                       timerCount:timer,
                       timerTitle:timer+"s",


                   })

               }


           },1000);
       }else{
           alert("已经在倒计时，点了额没用");
       }


    }

    render() {
        return (

            <View style={styles.container}>
                <NavigationBar title="注册" backOnPress={this._handleBack.bind(this)}/>
                <View style={{marginTop:20}}></View>
                <View style={styles.itemLayoutTop}>
                    <Image source={{uri:'avatar_enterprise_vip'}} style={{width:30,height:30,marginLeft:10,marginRight:10}}/>

                    <View style={{backgroundColor:'#c4c4c4',width:0.5,height:20}} ></View>
                    <TextInput style={{height: 40, width:300}}
                               underlineColorAndroid="transparent"
                               placeholder={"请输入手机号"}
                               keyboardType='numeric'
                               maxLength={11}></TextInput>
                </View>
                <View style={styles.itemLayout}>
                    <Image source={{uri:'avatar_vip'}} style={{width:30,height:30,marginLeft:10,marginRight:10}}/>

                    <View style={{backgroundColor:'#c4c4c4',width:0.5,height:20}} ></View>
                    <TextInput style={{height: 40, flex:1}}
                               underlineColorAndroid="transparent"
                               placeholder={"请输入验证码"}
                               maxLength={6}></TextInput>
                    <TouchableOpacity activeOpacity={0.5} onPress={this._getMsgCode.bind(this)}>
                    <View style={{alignItems:'center',padding:8,width:100,backgroundColor:'red',borderRadius:5,marginRight:10}} >
                        <Text style={{color:'white'}}>{this.state.timerTitle}</Text>
                    </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.itemLayout}>
                    <Image source={{uri:'avatar_vgirl'}} style={{width:30,height:30,marginLeft:10,marginRight:10}}/>

                    <View style={{backgroundColor:'#c4c4c4',width:0.5,height:20}} ></View>
                    <TextInput style={{height: 40, width:300}}
                               underlineColorAndroid="transparent"
                               placeholder={"请输入密码"}
                               secureTextEntry={true}
                               maxLength={50}></TextInput>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View style={styles.btnContainStyle}>
                        <Button text="确认" />
                    </View>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    itemLayoutTop: {
        flexDirection: 'row',
        alignItems:'center',
        height:45,
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderTopWidth:0.5,
        borderBottomColor:'#c4c4c4',
        borderTopColor:'#c4c4c4',
    },
    itemLayout: {
        flexDirection: 'row',
        alignItems:'center',
        height:45,
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderBottomColor:'#c4c4c4',
    },
    btnContainStyle:{
        marginTop: px2dp(15),
        height:46,
        width:deviceWidthDp*0.8,
    },
});