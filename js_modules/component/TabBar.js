/**
 * Created by xqf on 20161207.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, Image,Navigator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import HomeFragment from '../page/HomeFragment';
import HomeFragmentES5 from '../page/HomeFragmentES5';
import SearchFragment from '../page/SearchFragment';
import BuyLottery from '../page/BuyLottery';
import CartFragment from '../page/CartFragment';
import MeFragment from '../page/MeFragment';
import NotifyFragment from '../page/NotificationFragment';
import WinningRecordFragment from '../page/WinningRecordFragment';
import px2dp from '../util/px2dp';
import theme from '../config/theme';


export default class TabBar extends Component{
    static defaultProps = {
        selectedColor: 'rgb(245,3,3)',
        normalColor: '#a9a9a9'
    };

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            tabName: ['首页','发现','购物车','我']
        }
    }

    render(){
        const {selectedColor} = this.props;
        const {tabName} = this.state;
        return(
            <TabNavigator
                tabBarStyle={styles.tabbar}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[0]}
                    selected={this.state.selectedTab === 'home'}
                    titleStyle={{color: this.props.normalColor, fontSize: px2dp(10)}}
                    selectedTitleStyle={{color: this.props.selectedColor, fontSize: px2dp(10)}}
                    renderIcon={() => <Image style={styles.tab} source={require('../image/tabs/home_normal.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/tabs/home_focus.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>

                    {<HomeFragmentES5 navigator={this.props.navigator}/>}

                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[1]}
                    selected={this.state.selectedTab === 'search'}
                    titleStyle={{color: this.props.normalColor, fontSize: px2dp(10)}}
                    selectedTitleStyle={{color: this.props.selectedColor, fontSize: px2dp(10)}}
                    renderIcon={() => <Image style={styles.tab} source={require('../image/tabs/category_normal.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/tabs/category_focus.png')} />}
                    onPress={() => this.setState({ selectedTab: 'search' })}>
                    {<BuyLottery navigator={this.props.navigator}/>}

                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[2]}
                    selected={this.state.selectedTab === 'cart'}
                    titleStyle={{color: this.props.normalColor, fontSize: px2dp(10)}}
                    selectedTitleStyle={{color: this.props.selectedColor, fontSize: px2dp(10)}}
                    renderIcon={() => <Image style={styles.tab} source={require('../image/tabs/cart_normal.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/tabs/cart_focus.png')} />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    {<WinningRecordFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={tabName[3]}
                    selected={this.state.selectedTab === 'personal'}
                    titleStyle={{color: this.props.normalColor, fontSize: px2dp(10)}}
                    selectedTitleStyle={{color: this.props.selectedColor, fontSize: px2dp(10)}}
                    renderIcon={() => <Image style={styles.tab} source={require('../image/tabs/personal_normal.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={require('../image/tabs/personal_focus.png')} />}
                    onPress={() => this.setState({ selectedTab: 'personal' })}>
                    {<MeFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>


            </TabNavigator>
        );
    }

//    componentWillMount() {
//        const {selectedColor, normalColor} = this.props;
//        Icon.getImageSource('md-notifications', 50, normalColor).then((source) => this.setState({ notificationNormal: source }));
//        Icon.getImageSource('md-notifications', 50, selectedColor).then((source) => this.setState({ notificationSelected: source }));
//        Icon.getImageSource('md-home', 50, normalColor).then((source) => this.setState({ homeNormal: source }));
//        Icon.getImageSource('md-home', 50, selectedColor).then((source) => this.setState({ homeSelected: source }));
//        Icon.getImageSource('md-person', 50, normalColor).then((source) => this.setState({ meNormal: source }));
//        Icon.getImageSource('md-person', 50, selectedColor).then((source) => this.setState({ meSelected: source }));
//        Icon.getImageSource('md-compass', 50, normalColor).then((source) => this.setState({ compassNormal: source }));
//        Icon.getImageSource('md-compass', 50, selectedColor).then((source) => this.setState({ compassSelected: source }));
//    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: px2dp(59),
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabStyle:{
        padding: px2dp(8)
    },
    tab: {
        width: px2dp(22),
        height: px2dp(22)
    }
});