var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
Page({
    data: {
        markers: [],
        latitude: '',
        longitude: '',
        placeData: {},
        value:'',
        sugData: ''
    },
    makertap: function (e) {
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
        that.changeMarkerColor(wxMarkerData, id);
    },
    confirm:function(e){
        var value = e.detail.value;
        console.log(e.detail)
        this.setData({
            value:value
        })
        var that = this;
        var BMap = new bmap.BMapWX({
            ak: 'hF389fc5d0lyQSgAqlTkHj4ELLGynHXR'
        });
        var fail = function (data) {
            console.log(data)
        };
        var success = function (data) {
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
        }
        BMap.search({
            "query": value,
            fail: fail,
            success: success,
            iconPath: '../../img/marker_red.png',
            iconTapPath: '../../img/marker_red.png'
        });
       this.setData({
           value:'',
           sugData:'',
       })
    },
    onLoad: function () {
        var that = this;
        var BMap = new bmap.BMapWX({
            ak: 'hF389fc5d0lyQSgAqlTkHj4ELLGynHXR'
        });
        var fail = function (data) {
            console.log(data)
        };
        var success = function (data) {
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
        }
        BMap.search({
            "query": '',
            fail: fail,
            success: success,
            iconPath: '../../img/marker_red.png',
            iconTapPath: '../../img/marker_red.png'
        });

        
    },
    showSearchInfo: function (data, i) {
        var that = this;
        that.setData({
            placeData: {
                title: '名称：' + data[i].title + '\n',
                address: '地址：' + data[i].address + '\n',
                telephone: '电话：' + data[i].telephone
            }
        });
    },
    changeMarkerColor: function (data, id) {
        var that = this;
        var markersTemp = [];
        for (var i = 0; i < data.length; i++) {
            if (i === id) {
                data[i].iconPath = "../../img/marker_yellow.png";
            } else {
                data[i].iconPath = "../../img/marker_red.png";
            }
            markersTemp[i] = data[i];
        }
        that.setData({
            markers: markersTemp
        });
    },
    bindKeyInput: function (e) {
        var that = this;
        if (e.detail.value === '') {
            that.setData({
                sugData: ''
            });
            return;
        }
        var BMap = new bmap.BMapWX({
            ak: 'hF389fc5d0lyQSgAqlTkHj4ELLGynHXR'
        });
        var fail = function (data) {
            console.log(data)
        };
        var success = function (data) {
            var sugData = '';
            for (var i = 0; i < data.result.length; i++) {
                sugData = sugData + data.result[i].name + '\n';
            }
            that.setData({
                sugData: sugData
            });
        }
        BMap.suggestion({
            query: e.detail.value,
            region: '天津',
            city_limit: true,
            fail: fail,
            success: success
        });
    }
})