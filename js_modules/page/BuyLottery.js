/**
 * Created by xuqingfeng on 16/12/19.
 * '买彩票'模块
 * ES5写法
 */
'use strict';
import React,{Component,PropTypes}from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Platform,ListView,Dimensions}from 'react-native';
import ViewPager from 'react-native-viewpager';
var  BuyLotteryTypeCell=require('../component/BuyLotteryBallTypeCell')
const BANNER_IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024'
];
var LocalData=require('../localdata/LocalData.json');
var BuyData=require('../localdata/BuyLotteryTypeData.json');
var BuyLotteryChoiceBall=require('./BuyLotteryChoiceBall');
var MainHeadCell=require('../component/MainHeadCell')
const deviceWidthDp = Dimensions.get('window').width;
var BuyLottery=React.createClass({
    getDefaultProps(){
        return{
            key_word: 'T1348647853363'
        }
    },

    getInitialState(){
      return{
          bannerDatas:[],
          dataSource:new ViewPager.DataSource({
              pageHasChanged:(p1,p2)=>p1!=p2,
          }),
          lstSource:new ListView.DataSource({
              rowHasChanged:(r1,r2)=>r1!=r2,
          }),
      }
    },
    //获取网络数据或是做一些耗时操作
    componentDidMount(){
        var jsonData=LocalData[this.props.key_word];
        var buyData=BuyData['ballType'];
        this._loadDataForNet(jsonData,buyData);

    },
    //解析数据
    _loadDataForNet(jsonData,buyData){

        var headArr=[],headUrl=[],listDataArr=[];
        for(var i=0;i<jsonData.length;i++){
            var data=jsonData[i];
            if(data.hasAD==1){
                headArr=data.ads;
                for(var j=0;j<headArr.length;j++){
                    headUrl.push(headArr[j].imgsrc)
                }
            }else {


            }
        }
        for(var i=0;i<buyData.length;i++){
            listDataArr.push(buyData[i]);
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithPages(BANNER_IMGS),
            lstSource:this.state.lstSource.cloneWithRows(listDataArr)
        });
    },
    _AlertShow(rowData){
        alert("haha="+rowData.title);

    },
    _choiceBall(rowData){
        this.props.navigator.push({
            component:BuyLotteryChoiceBall,
            // title:rowData.title,
            // params:{rowData:rowData}
            params:{
                rowData:rowData}
        })
    },
    //banner页面
    _renderPage(data, pageID) {
        return (
            <Image
                source={{uri:data}}
                style={styles.page}
                />

        );
    },
    _renderRow(rowData){
        return(
        <TouchableOpacity style={styles.touchStyle}  activeOpacity={0.5} onPress={()=>this._choiceBall(rowData)}>
           < BuyLotteryTypeCell
               iconUri={rowData.imgsrc}
               ballType={rowData.title}
               ballDes={rowData.des}
           />
        </TouchableOpacity>
        );

    },

    render(){
        return(
            <View style={styles.container}>
                <MainHeadCell title="好彩头" />
                <View style={styles.bannerStyle}>
                    <ViewPager
                        style={{height:150}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}
                    />
                </View>
                <ListView dataSource={this.state.lstSource}
                          renderRow={this._renderRow}
                          contentContainerStyle={styles.contentViewStyle}
                />


            </View>


        );

    },



});
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'white',
    },
    bannerStyle: {
        height:151,
        backgroundColor: 'rgb(208, 218, 227)'
    },
    page: {
        flex: 1,
        height: 150,
        resizeMode: 'stretch'
    },
    touchStyle:{
        height:Platform.OS=='ios'?90:100,
        width:deviceWidthDp/2,
    },
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:deviceWidthDp
    },

});


module.exports=BuyLottery;