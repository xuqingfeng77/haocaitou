/**
 * Created by xuqingfeng on 16/12/18.
 */
/**
 * NetUitl 网络请求的实现
 * @author xqf
 * @date 2016-12-18
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
} from 'react';

class NetUitl extends React.Component {

    //post请求
    /**
     *url :请求地址
     *data:参数
     *callback:回调函数
     */
    static  postFrom(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'data=' + data + ''//这里我参数只有一个data,大家可以还有更多的参数
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            }).catch((error) => {
            console.warn(error);
        }).done();
    }

    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    static postJson(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //json形式
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            })
            .catch((error) => {
                console.warn(error);
            }).done();
    }
    // 调用方法：let data = new FormData();
    // data.append("loginName",this.userName);
    // data.append("pwd",this.password);
    // static postJson(url, data, callback) {
    //     var fetchOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             //json形式
    //             'Content-Type': 'application/json'
    //         },
    //         body:data
    //     };
    //
    //     fetch(url, fetchOptions)
    //         .then((response) => response.text())
    //         .then((responseText) => {
    //             callback(JSON.parse(responseText));
    //         })
    //         .catch((error) => {
    //             console.warn(error);
    //         }).done();
    // }


    //get请求
    /**
     *url :请求地址
     *callback:回调函数
     * 示例：  var map={"mobile":"13538124147","appType":"81"};
     NetUtil.get("http://bag.eeepay.cn:9807/weixin/checkMerchantIsBind.do?",map,this._callBackAler);
     设置mobile方法  map.mobile="xxxx";
     */
    static  get(url, params, callback) {

        if (params) {
            for(var key in params){
                url+='&'+key+'='+ params[key]
            }
        }
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                callback(responseText);
            }).catch((error) => {
            // console.warn(error);
            callback("error");
        }).done();
    }

}

module.exports = NetUitl;