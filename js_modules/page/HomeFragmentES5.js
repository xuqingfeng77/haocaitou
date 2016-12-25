/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackAndroid,ListView} from 'react-native';
var px2dp=require('../util/px2dp');
import PageComponent from './BackPageComponent';
import ViewPager from 'react-native-viewpager';
var NewsDetail=require('../page/NewsDetail');
const BANNER_IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024'
];
var LocalData=require('../localdata/LocalData.json');
//首页
var HomeFragmentReact =React.createClass({
    getDefaultProps(){
        return{
            url_api: "http://c1.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore",
            key_word: 'T1348647853363'
        }
    },
    getInitialState(){
        return{
            bannerDatas:[],
            dataSource:new ViewPager.DataSource({
                pageHasChanged:(p1,p2)=>p1!=p2,
            }),
            ds:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!=r2,
            })
        }
    },
    //获取网络数据或是做一些耗时操作
    componentDidMount(){
        this._loadDataForNet();

    },
    _loadDataForNet(){
        var jsonData=LocalData[this.props.key_word];
        this._dealWithData(jsonData)
    },
    _dealWithData(jsonData){

        var headArr=[],headUrl=[],listDataArr=[];
        for(var i=0;i<jsonData.length;i++){
            var data=jsonData[i];
            if(data.hasAD==1){
                headArr=data.ads;
                for(var j=0;j<headArr.length;j++){
                    headUrl.push(headArr[j].imgsrc)
                }
            }else {
                listDataArr.push(data);

            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithPages(headUrl),
            ds:this.state.ds.cloneWithRows(listDataArr)
        });
    },
    _pushToNewsDetail(rowData){

        this.props.navigator.push({
               component:NewsDetail,
            params:{rowData:rowData}

        })
    },

    //获取行数据
    _getListRows(){
        const  dataBlob=[];
        for(let i=0;i<20;i++){
            dataBlob.push("xqf"+i);
        }
        return dataBlob;
    },

    _renderPage(data, pageID) {
        return (
            <Image
                source={{uri:data}}
                style={styles.page}
                />

        );
    },

    _renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this._pushToNewsDetail(rowData)}>
                <View style={styles.ItemViewStyle}>
                    <Image source={{uri:rowData.imgsrc}}style={styles.itemImageStyle}>

                    </Image>
                    <View style={styles.itemInnerViewSyle}>
                        <Text style={styles.itemTitleStyle}>
                            {rowData.title}
                        </Text>
                        <Text style={styles.itemSubTitleStyle}>
                            {rowData.digest}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },


    render(){
        return(
            <View style={styles.view}>
                <View style={styles.view2}>
                    <ViewPager
                        style={{height:150}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}
                    />
                </View>
                <View style={styles.editGroup}>
                    <ListView
                        dataSource={this.state.ds}
                        renderRow={this._renderRow}
                    />
                </View>
            </View>
        );
    }
});



const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'rgb(208, 218, 227)'

    },
    view2: {
        height:151,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    editGroup:{
        flex:1,
    },
    page: {
            flex: 1,
            height: 150,
            resizeMode: 'stretch'
        },
    ItemViewStyle:{
        flexDirection:'row',
        padding:10,
        borderBottomColor:"#e8e8e8",
        borderBottomWidth:0.5
    },
    itemImageStyle:{
      width:100,
        height:100
    },
    itemInnerViewSyle:{
       width:260,
        marginLeft:8
    },
    itemTitleStyle:{
        fontSize:16,
        marginBottom:5

    },
    itemSubTitleStyle:{

        color:'gray'
    }

});
module.exports=HomeFragmentReact;