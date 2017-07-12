<?php
require_once "jssdk.php"; //表示主机根目录下jssdk文件夹内jssdk.php文件
$jssdk = new JSSDK("wxa6600e45b2c3121b", "6f131b562e7c2ce0446c382219e2ceef");//填写开发者中心你的开发者ID
$signPackage = $jssdk->GetSignPackage();
?>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>  
   <script>
 wx.config({
   debug:  false,  //调式模式，设置为ture后会直接在网页上弹出调试信息，用于排查问题
   appId: '<?php echo $signPackage["appId"];?>',
   timestamp: <?php echo $signPackage["timestamp"];?>,
   nonceStr: '<?php echo $signPackage["nonceStr"];?>',
   signature: '<?php echo $signPackage["signature"];?>',
   jsApiList: [  //需要使用的网页服务接口
       'checkJsApi',  //判断当前客户端版本是否支持指定JS接口
       'onMenuShareTimeline', //分享给好友
       'onMenuShareAppMessage', //分享到朋友圈
       'onMenuShareQQ',  //分享到QQ
       'onMenuShareWeibo' //分享到微博
   ]
 });
 wx.ready(function () {   //ready函数用于调用API，如果你的网页在加载后就需要自定义分享和回调功能，需要在此调用分享函数。//如果是微信游戏结束后，需要点击按钮触发得到分值后分享，这里就不需要调用API了，可以在按钮上绑定事件直接调用。因此，微信游戏由于大多需要用户先触发获取分值，此处请不要填写如下所示的分享API
wx.onMenuShareTimeline({  //例如分享到朋友圈的API  
   title: 'aa', // 分享标题
   link: 'vv', // 分享链接
   imgUrl: '', // 分享图标
   success: function () {
       // 用户确认分享后执行的回调函数
   },
   cancel: function () {
       // 用户取消分享后执行的回调函数
   }
});
});	
wx.error(function (res) {
 alert(res.errMsg);  //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示
});
</script>
