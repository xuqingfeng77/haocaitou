/**
 * Created by xuqingfeng on 16/12/16.
 * 选号的红球和蓝球
 */
import React,{Component,PropTypes}from 'react';
import {AppRegistry,StyleSheet,View,Text,TouchableOpacity,Image,Platform,ListView,Dimensions}from 'react-native';
const deviceWidthDp = Dimensions.get('window').width;
var BuyLotteryBallCell=React.createClass({

    //定义控件内容
    getDefaultProps(){
        return{
            ballNum:1,//默认显示1个球
            ballColor:'red',//球颜色，红球或是蓝球
            ballType:'',//双色球、大乐透等等
            choiceBall:[],//选中的号码数
            onPress: PropTypes.func,


        }
    },
    getInitialState(){
        return{


            ballArr:[],//球编号
            choiceBallArr:[],//选择中的球
            ds:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!=r2,
            })
        }
    },
    //获取网络数据或是做一些耗时操作
    componentDidMount(){
        this._setBallArr();

    },

    _setBallArr(){
        for(var i=0;i<this.props.ballNum;i++){
            console.log("_setBallArr >>>>>>>>>"+i);
           this.state.ballArr.push({i});
        }
        // console.dir(this.state.ballArr);
        // console.dir(this.state.ballArr);
        this.setState({

            ds:this.state.ds.cloneWithRows(this.state.ballArr)
        });

    },
    _onPressBall(choiceBall){
        this.state.choiceBallArr.push(choiceBall);
        this.props.onPress(this.state.choiceBallArr);
    },
    _renderRow(rowData){
        console.log("_renderRow >>>>>>>>>rowData="+rowData.i);
        return(
            <TouchableOpacity activeOpacity={0.2} style={{ width:40, height:40}} onPress={()=>this._onPressBall(rowData.i)}>
                <Text style={styles.blueBallStyle}>{rowData.i}</Text>
            </TouchableOpacity>
        );
    },

    render(){
        return(
                <View style={styles.container}>
                   <ListView dataSource={this.state.ds}
                             renderRow={this._renderRow}
                             contentContainerStyle={styles.contentContainerStyle}
                             initialListSize={40}
                   />
                </View>
        );

    },

    //红球布局
    _ballView(rowData){
        var ballArr=[];

        ballArr.push(<Text style={styles.blueBallStyle}>{rowData[0]}</Text>)

        return ballArr
    },
    //蓝色球布局
    _blueView(){
        var blueArr=[];
        var blueSize=this.props.blueBall.length;
        for(var i=0;i<blueSize;i++){
            blueArr.push(<Text key={i} style={styles.blueBallStyle}>{this.props.blueBall[i]}</Text>)

        }
        return blueArr
    },


});
const styles = StyleSheet.create({

    container: {
    },
    leftViewStyle: {

        //主轴方向
        flexDirection:'row',
        //侧轴方向
        alignItems:'center',
        marginLeft:8
    },
    redBallStyle:{

        color:'red',
        backgroundColor:'#ffffff',
        width:25,
        height:25,
        marginLeft:5,
        borderRadius:13,
        borderColor:'red',
        borderWidth:1,
        textAlign:'center'
    },
    blueBallStyle:{

        color:'blue',
        backgroundColor:'#ffffff',
        width:30,
        height:30,
        marginLeft:5,
        borderRadius:15,
        borderColor:'blue',
        borderWidth:1,
        textAlign:'center'
    },
    rightViewStyle: {

    },
    contentContainerStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:deviceWidthDp,
    }
});


module.exports=BuyLotteryBallCell;

