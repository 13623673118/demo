// var x = require( '../../utils/api.js' );
// console.log(x)
//noinspection JSUnresolvedFunction
var date = new Date();
Page( {
  data: {
    tipsHidden: true,
    showLoading: false,
    showSide: false,
  },
  showSide: function() {
    this.setData( {
      showSide: !this.data.showSide
    })
  },
  // 下拉刷新的提示
  hide: function() {
    this.setData( {
      tipsHidden: true
    })
  },

  // 加载提示 上拉加载

  refresh: function( e ) {
    // 显示加载提示
    this.setData( {
      showLoading: false
    });
    var that = this;
    // 如果正在加载 就不用再发起请求
    if( !this.data.showLoading ) {
      wx.request( {
        url: 'https://zhihuapi.duapp.com/getnewsbydate',
        // 20161025
        data: {
          date: '' + date.getFullYear() + ( date.getMonth() + 1 ) + date.getDate()
        },
        header: {
          'Content-Type': 'application/json'
        },
        // 成功之后更新数据
        success: function( r ) {
          date = new Date( date.getFullYear(), date.getMonth(), ( date.getDate() - 1 ) );
          r.data.stories.forEach( function( v, i ) {
            v.images[ 0 ] = 'https://images.weserv.nl/?url=' + v.images[ 0 ].slice( 7 );
            that.data.news.push( v )
          });
          that.setData( {
            showLoading: true,
            news: that.data.news
          })
        },
        // 最终都让加载提示消失
        complete: function() {
          that.setData( {
            showLoading: true
          })
        }
      })
    }
  },

  // 导航到show页面
  show: function( e ) {
    wx.navigateTo( {
      url: '/pages/show/show?id=' + e.target.dataset.id
    })
  },




  // 点击列表弹出底部窗口
  showAction: function( e ) {
    // console.log( e );
    this.setData( {
      id: e.currentTarget.dataset.id
    });
    wx.navigateTo( {
        url: '/pages/show/show?id=' + this.data.id
      })

  },


  // 生命周期函数
  onLoad: function() {
   
  },
  onShow: function() {
    var that=this;
    wx.request({
      url:'http://zhihuapi.duapp.com/getlist',
      header:{
        "Content-Type": 'application/json'        
      },
      success:function(s){
        // s.data.others.forEach(function(v){
        //   v.id=v.id
        //   console.log(v.name)
        // })
        // that.setData({
        //   id:s.data.others.id,
        //   len:s.data.others.length,
        //   title:s.data.others.name
        // })
        console.log(s)
      }
    })
  },
  // // 获取轮播图的数据 获取新闻列表数据 记录当天新闻条目
  // onReady: function() {
  //   var that = this;
  //   wx.request( {
  //     url: 'http://zhihuapi.duapp.com/getnews',
  //     header: {
  //       "Content-Type": 'application/json'
  //     },
  //     success: function( r ) {
  //       r.data.top_stories.forEach( function( v ) {
  //         v.image = 'https://images.weserv.nl/?url=' + v.image.slice( 7 );
  //       });
  //       r.data.stories.forEach( function( v ) {
  //         v.images[ 0 ] = 'https://images.weserv.nl/?url=' + v.images[ 0 ].slice( 7 );
  //       });
  //       that.setData( {
  //         showLoading: true,
  //         imgs: r.data.top_stories,
  //         news: r.data.stories,
  //         length: r.data.stories.length
  //       });
  //     }
  //   })
  // },
  // onHide: function() {

  // },
  // onUnload: function() {

  // },
  // // 重新获取当天数据 和记录的条目做对比 有偏差就更新
  // onPullDownRefresh: function() {
  //   var that = this;
  //   wx.request( {
  //     url: 'http://zhihuapi.duapp.com/getnews',
  //     success: function( r ) {
  //       var len = r.data.stories.length;
  //       if( len !== that.data.length ) {
  //         for( var i = 0;i < len - that.data.length;i++ ) {
  //           that.data.news.unshift( r.data.stories[ i ] );
  //         }
  //         that.setData( {
  //           length: len,
  //           news: that.data.news
  //         });
  //         that.update();
  //       }
  //       wx.stopPullDownRefresh();
  //       that.setData( {
  //         tipsHidden: false
  //       })
  //     }
  //   })
  // }
});