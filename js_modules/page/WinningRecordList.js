/**
 * Created by xuqingfeng on 16/12/16.
 * 中奖记录模块
 */
import React,{Component}from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Platform,ScrollView,ListView,BackAndroid,RefreshControl}from 'react-native';

var MainHeadCell=require('../component/MainHeadCell');
var WinningRecordCell=require('../component/WinningRecordCell');
var NetUtil =require('../net/NetUtil');
var NetURL =require('../net/NetURL');
var  theme=require('../config/theme');
var WinningRecordData=require('../localdata/WinningRecordData.json');
//页码
const moreText = "加载完毕";    //foot显示的文案
var pageNum = 1;
var WinningRecordList=React.createClass({

    getDefaultProps(){
        return{
            key_word: 'T1348647853363'
        }
    },

    getInitialState(){
        return{
            listDataArr:[],
            refreshing: true,
            loadedData: false,
            moreText: "加载完毕",  //foot显示的文案
            loaded: false,//控制Request请求是否加载完毕
            foot:0,// 控制foot， 0：隐藏foot  1：已加载完成   2 ：显示加载中
            error:false,
             ds:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!=r2,
            }),

        }
    },
    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true;
        }
        return false;
    },

    componentWillUnmount(){
        //添加了就需要remove掉
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    },
    componentDidMount(){
        //添加back监听，后面一定要remove
        BackAndroid.addEventListener('hardwareBackPress', this._handleBack);

        NetUtil.get(NetURL.winning_record_url,"",this._parseData);

    },
    _onRefresh() {
        this.setState({refreshing: true});
        NetUtil.get(NetURL.winning_record_url,"",this._parseData);
    },
    //解析网络返回数据
    _parseData(data){
        console.log("data="+data);
        var jsonData=WinningRecordData[this.props.key_word];
        var headArr=[],headUrl=[],templistDataArr=[];
        for(var i=0;i<jsonData.length;i++){
            var data=jsonData[i];
            if(data.hasAD==1){
                headArr=data.ads;
                for(var j=0;j<headArr.length;j++){
                    headUrl.push(headArr[j].imgsrc)
                }
            }else {
                this.state.listDataArr.push(data);

            }
        }
        // alert('ddd'),
        this.setState({

            listDataArr: this.state.listDataArr,
            loadedData: true,//下拉刷新状态控制
            refreshing: false,//下拉刷新
            loaded:true,//上拉刷新
            // foot:1,
            // moreText:moreText,
            ds:this.state.ds.cloneWithRows(this.state.listDataArr),
        });
    },

    _pushToNewsDetail(rowData){
        // this.props.navigator.push({
        //     component:NewsDetail,
        //     // title:rowData.title,
        //     // params:{rowData:rowData}
        //     params:{title:"过去了没",
        //         rowData:rowData}
        // })
    },
    _renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this._pushToNewsDetail(rowData)}>
                <View style={{marginTop:1}}>
                <WinningRecordCell
                    redBall={rowData.redBall}
                    blueBall={rowData.blueBall}
                    iconUri={rowData.imgsrc}
                    typeName={rowData.title}
                    qiNo={rowData.qiNo}
                    date={rowData.date}
                />
                </View>
            </TouchableOpacity>
        );
    },
    _renderFooter() {
        if(this.state.foot === 1){//加载完毕
            return (
                <View style={{height:40,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:12,marginTop:10}}>
                        {this.state.moreText}
                    </Text>
                </View>);
        }else if(this.state.foot === 2) {//加载中
            return (
                <View style={{height:40,alignItems:'center',justifyContent:'center',}}>
                    <Image source={{uri:'icon_shop_search'}} style={{width:20,height:20}}/>
                </View>);
        }
    },
    _endReached(){
        if(this.state.foot != 0 ){
            return ;
        }
        this.setState({
            foot:2,
        });
        this.timer = setTimeout(
            () => {
                pageNum ++;
                if(pageNum > 1){
                    this.setState({loaded:true});
                }
                NetUtil.get(NetURL.winning_record_url,"",this._parseData);
            },500);
    },

    render(){
        return(
            <View style={styles.container}>
                <MainHeadCell title="test" />
                <ScrollView
                    style={{}}
                    refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        colors={['red','#ffd500','#0080ff','#99e600']}
                        tintColor={theme.themeColor}
                        title="Loading..."
                        titleColor={theme.themeColor}
                    />
                }>
                    {/*listview放在scrollview中，onEndReached事件无效*/}
                    <ListView
                        dataSource={this.state.ds}
                        renderRow={this._renderRow}
                        renderFooter={this._renderFooter}
                        onEndReached={this._endReached}
                        onEndReachedThreshold={0}
                    />
                </ScrollView>


            </View>

        );

    },
});
const styles = StyleSheet.create({

    container: {
        flex:1
    },
    topViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginTop:10,
        height:Platform.OS=='ios'?45:40,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    topLeftView:{
        flexDirection:'row',

    },
    middleOneStyle:{
        marginTop:20,
    },

});


module.exports=WinningRecordList;