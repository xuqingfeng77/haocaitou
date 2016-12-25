/**
 * Created by wangdi on 4/11/16.
 * image inputtext image
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image,TextInput} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../config/theme';

export default class ImageWithInputText extends Component{

    static propTypes = {

        image: PropTypes.string,
        hintText: PropTypes.string,
        onChangeText: PropTypes.func,
        btnText:PropTypes.string,
        btnPress:PropTypes.func,

        imgSize: PropTypes.number,
        fontSize: PropTypes.number,
        color: PropTypes.string,
        btnStyle: View.propTypes.style
    };

    static defaultProps = {
        imgSize: px2dp(40),
        fontSize: px2dp(13)
    };

    render() {
        const {hintText, image, icon, onPress, color, imgSize, fontSize, btnStyle} = this.props;

        if (Platform.OS === 'ios') {

        } else if (Platform.OS === 'android') {
            if (image) {
                return (
                    <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                        <View style={[styles.view, btnStyle]}>
                            <Image source={{uri:image}} style={{width: imgSize, height: imgSize}}/>
                            <TextInput style={[styles.text, {fontSize: fontSize, color: color}]}></TextInput>

                        </View>
                    </TouchableOpacity>
                );
            } else if (icon) {
                return (
                    <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                        <View style={[styles.view, btnStyle]}>
                            <Icon name={icon} size={imgSize} color={color}/>
                            {text ?
                                <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
                                :
                                null
                            }
                        </View>
                    </TouchableOpacity>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        marginTop: px2dp(4)
    }
});