/**
 * Created by xuqingfeng on 16/12/16.
 * 中奖记录模块
 */
import React,{Component}from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image,Platform,ScrollView,ListView}from 'react-native';
var MainHeadCell=require('../component/MainHeadCell');
var WinningRecordCell=require('../component/WinningRecordCell');
var WinningRecordList=require('./WinningRecordList');

var WinningRecordData=require('../localdata/WinningRecordData.json');

var WinningRecordFragment=React.createClass({

    getDefaultProps(){
        return{
            key_word: 'T1348647853363'
        }
    },

    getInitialState(){
        return{
            ds:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!=r2,
            })
        }
    },

    componentDidMount(){
        var jsonData=WinningRecordData[this.props.key_word];
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
            ds:this.state.ds.cloneWithRows(listDataArr)
        });
    },
    _pushToNewsDetail(rowData){
        this.props.navigator.push({
            component:WinningRecordList,
            params:{title:"过去了没",
                rowData:rowData}
        })
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
    render(){
        return(
            <View style={styles.container}>
                <MainHeadCell title="开奖大厅" />
                <ScrollView >

                    <View style={{marginTop:2}}>
                        <ListView
                            dataSource={this.state.ds}
                            renderRow={this._renderRow}
                        />

                    </View>

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


module.exports=WinningRecordFragment;