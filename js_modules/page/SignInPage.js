/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackAndroid,Navigator,Dimensions,Alert} from 'react-native';
import ImageButton from '../component/ImageButtonWithText';
import Button from '../component/Button';
import px2dp from '../util/px2dp';
import MainPage from './MainPage'
import NetUtil from '../net/NetUtil'
import SignUpPage from './SignUpPage';
import ForPwdPage from './ForPwdPage';
import theme from '../config/theme';

const deviceWidthDp = Dimensions.get('window').width;
export default class SignInPage extends Component {
    constructor(props){
        super(props);
        this.handleBack = this._handleBack.bind(this);
        this.state={phoneNo:"",
                    pwd:""};
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);

    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true;
        }
        return false;
    }

    _signInCallback(){
     console.log("You tapped the login button!");
//         var map={"mobile":"13538124147","appType":"81"};
//         NetUtil.get("http://bag.eeepay.cn:9807/weixin/checkMerchantIsBind.do?",map,this._callBackAler);
        /////////
        this.setState({
            pwd:this.state.phoneNo,
        });
        // alert(this.state.phoneNo+"\npwd="+this.state.pwd)
         this.props.navigator.push({
                   component: MainPage
               });
    }
    _forgPwdIntent(){
         this.props.navigator.push(
          {
                   component:ForPwdPage
          });
    }
    _signUpCallback(){
     console.log("You tapped the login button!");
         this.props.navigator.push({
                   component: SignUpPage
               });
    }

    _callBackAler(result) {
        alert(result);
    }

    _userPressConfirm() {
        Alert.alert(
            '哎呀',
            '确认登录么',
            [
                {text:'确定',onPress:this._signInCallback},
                {text:'取消',onPress:this._signInCallback},
                {text:'额外选项一',onPress:this._signInCallback},
                {text:'额外选项二',onPress:this._signInCallback}
            ],
            {
                cancelable: false
            }
        );
    }

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.actionBar}>
                    <ImageButton
                        onPress={this._handleBack.bind(this)}
                        icon="md-arrow-back"
                        color="white"
                        imgSize={px2dp(25)}
                        btnStyle={{width: px2dp(55), height: px2dp(60)}}
                    />
                </View>
                 <View   style={{alignItems:'center'}}>
                     <Image
                         style={styles.imageViewLogo}
                         resizeMode="contain"
                        source={{uri:'nsj'}}
                     />
                </View>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="手机号"
                            placeholderTextColor="#c4c4c4"
                            value={this.state.phoneNo}
                            onChangeText={(phoneNo)=>{
                                this.setState({phoneNo})
                            }}
                        />
                    </View>
                    {/* secureTextEntry={true}*/}
                    <View style={{height: 1/PixelRatio.get(), backgroundColor:'#c4c4c4'}}/>
                    <View style={styles.editView3}>
                        <TextInput
                            style={styles.edit}
                            underlineColorAndroid="transparent"
                            placeholder="密码"
                            placeholderTextColor="#c4c4c4"
                            value={this.state.pwd}
                            onChangeText={(pwd)=>{
                                this.setState({pwd})
                            }}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <View style={styles.btnContainStyle}>
                            <Button text="登录" onPress={this._signInCallback.bind(this)}/>
                        </View>
                    </View>

                </View>
                <View style={styles.textRegForgView}>
                     <Text style={styles.textRegForgStyle } onPress={this._forgPwdIntent.bind(this)}
                     >无法登陆？</Text>
                     <Text style={styles.textRegForgStyle} onPress={this._signUpCallback.bind(this)}
                     >新用户注册</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    actionBar:{
        marginTop: (Platform.OS === 'ios') ? px2dp(10) : 0,
    },
    imageViewLogo:{
        width:200,
        height:150,
        justifyContent:"center"

    },
    editGroup:{
        marginTop: px2dp(30),
        padding: px2dp(20)
    },
    edit:{
        height: px2dp(40),
        fontSize: px2dp(13),
        backgroundColor: 'white',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15),
    },
    editView1:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3

    },
    editView2:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center'
    },
    editView3:{
        height: px2dp(48),
        backgroundColor:'white',
        justifyContent: 'center',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    btnContainStyle:{
        marginTop: px2dp(15),
        height:46,
        width:deviceWidthDp*0.8,
    },
    textRegForgView:{
     padding: px2dp(20),
     flexDirection: 'row',
     justifyContent:'space-between',
     alignItems: 'flex-end'
    },
    textRegForgStyle:{

        color:theme.themeColor,
         fontSize: px2dp(13),
    },
});