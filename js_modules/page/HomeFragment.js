/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, PixelRatio, Platform, TouchableOpacity, Image, TextInput, BackAndroid,ListView} from 'react-native';
import px2dp from '../util/px2dp';
import PageComponent from './BackPageComponent';
import ViewPager from 'react-native-viewpager';
const BANNER_IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024'
];
const LIST_DATA= ['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'];

//首页
export default  class  HomeFragmentReact extends PageComponent
    {
        constructor(props){
            super(props);
            //banner
            var dataSource=new ViewPager.DataSource({
                pageHasChanged:(p1,p2)=>p1!=p2,
            });
            //listview
            const ds=new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!=r2,
            });

            this.state = {
                dataSource: dataSource.cloneWithPages(BANNER_IMGS),
                listDataSource:ds.cloneWithRows(this._getListRows())
            }
        }
        //获取行数据
        _getListRows(){
            const  dataBlob=[];
            for(let i=0;i<20;i++){
                dataBlob.push("xqf"+i);
            }
            return dataBlob;
        }
        //
        _pressRow(rowID){
            alert ("hell"+rowID);
        }


        _renderPage(data, pageID) {
            return (
                <Image
                    source={{uri:data}}
                    style={styles.page}/>
            );
        }
        _renderRow(rowData,sectionID,rowID) {
            return (
                <TouchableOpacity onPress={()=>this._pressRow(rowID)}>
                    <View style={styles.ItemViewStyle}>
                        <Text>{"rowData:" + rowData + "   rowId:" + rowID}</Text>
                    </View>
                </TouchableOpacity>
            );
        }


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
                            dataSource={this.state.listDataSource}
                            renderRow={this._renderRow.bind(this)}
                        />
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
    view2: {
        height:151,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    editGroup:{

        padding: px2dp(20),
        marginBottom:px2dp(100)
    },
    page: {
            flex: 1,
            height: 150,
            resizeMode: 'stretch'
        },
    ItemViewStyle:{
        height:60,
        justifyContent:'center'
    }

});