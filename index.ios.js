/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import SignInPage from './js_modules/page/SignInPage';

export default class untitled extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component:SignInPage}}
                configureScene={()=>{
        return Navigator.SceneConfigs.PushFromRight;}
       }
                renderScene={(route,navigator)=>{
        return <route.component navigator={navigator}{...route.args}/>
        }
        }/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('untitled', () => untitled);
