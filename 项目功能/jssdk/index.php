
<div style="">
    <?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx6db8c3d3d91c868e", "ed78f20b59ce911cd240dd07126cc29c");
$signPackage = $jssdk->GetSignPackage();
    ?>
</div>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="shortcut icon" href="img/headlogo.jpg">
    <meta name="keywords" content="用视频展示你眼中的西安">
    <title>陕西广电丝路征集令</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/drag.js"></script>
    <script>
	var _hmt = _hmt || [];
	(function() {
	  	var hm = document.createElement("script");
	  	hm.src = "https://hm.baidu.com/hm.js?4f83e5ad5c2787fdfec4625dd6b5764b";
	  	var s = document.getElementsByTagName("script")[0]; 
	  	s.parentNode.insertBefore(hm, s);
	})();
</script>
</head>
<body>
<div style="width:0;height:0;overflow: hidden;">
	<img src="img/headlogo.jpg" width='500' alt="">
</div>
<div class="inner">
    <h1 class="title"></h1>
    <p class="introduce">
        即日起，视频拍摄爱好者可将自己的作品发送给陕西广电网络，视频格式、视频大小、拍摄设备不限，我们将会选取优秀视频放置在“高清互动平台-爱陕西”栏目，给你一个万众瞩目的平台展示才华。
    </p>
    <p class="red">征集时间：长期 </p>
    <p class="red">咨询电话：029-87992642</p>
    <p class="red">咨询时间：工作日 8:30-10:30 13:30-15:30</p>
    <h1 class="title two"></h1>
    <p class="introduce">
        请将您的视频以邮件附件的形式投稿给陕西广电网络活动征集邮箱。
    </p>
    <p class="red">邮件主题：视频名称+投稿人+联系方式</p>
    <p class="red">投稿邮箱：slzjl@sxbctv.com</p>
    <h1 class="video-title">
        <span class="left"></span>
        <p class="title"></p>
        <span class="right"></span>
    </h1>
    <ul class="video-box">
        <li><a href="https://v.qq.com/iframe/player.html?vid=n03693kizq3&tiny=0&auto=0">
            <img src="img/1.jpg" alt="">
        </a></li>
        <li><a href="https://v.qq.com/iframe/player.html?vid=w0369vj4ysf&tiny=0&auto=0">
        <img src="img/2.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=w0369vj4ysf&tiny=0&auto=0"
                   poster="img/2.jpg"></video> -->
        </a></li>
        <li><a href="https://v.qq.com/iframe/player.html?vid=b03692khayw&tiny=0&auto=0">
        	<img src="img/3.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=b03692khayw&tiny=0&auto=0"
                   poster="img/3.jpg"></video> -->
        </a></li>
        <li><a href="https://v.qq.com/iframe/player.html?vid=m0369qzkbo9&tiny=0&auto=0">
        	<img src="img/4.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=m0369qzkbo9&tiny=0&auto=0"
                   poster="img/4.jpg"></video> -->
        </a></li>
        <li><a href="https://v.qq.com/iframe/player.html?vid=b036928fu2t&tiny=0&auto=0">
        	<img src="img/5.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=b036928fu2t&tiny=0&auto=0"
                   poster="img/5.jpg"></video> -->
        </a></li>
        <li ><a href="https://v.qq.com/iframe/player.html?vid=k03692mmbqh&tiny=0&auto=0">
        <img src="img/6.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=k03692mmbqh&tiny=0&auto=0"
                   poster="img/6.jpg"></video> -->
        </a></li>
        <li><a href="https://v.qq.com/iframe/player.html?vid=d0369xnqe15&tiny=0&auto=0">
        	<img src="img/7.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=d0369xnqe15&tiny=0&auto=0"
                   poster="img/7.jpg"></video> -->
        </a></li>
        <li><a href="https://v.qq.com/iframe/player.html?vid=i0369ypkwhi&tiny=0&auto=0">
        	<img src="img/8.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=i0369ypkwhi&tiny=0&auto=0"
                   poster="img/8.jpg"></video> -->
        </a></li>
        <li ><a href="https://v.qq.com/iframe/player.html?vid=x0369u5yf1h&tiny=0&auto=0">
        	<img src="img/9.jpg" alt="">
            <!-- <video preload="preload" src="https://v.qq.com/iframe/player.html?vid=x0369u5yf1h&tiny=0&auto=0"
                   poster="img/9.jpg"></video> -->
        </a></li>
        <li ><a href="javascript:;">
            <img src="img/10.jpg" alt=""/>
        </a></li>
    </ul>
</div>

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
        title = "陕西广电丝路征集令";
        desc = "用视频展示你眼中的西安！";
        link = "http://www.bozhiyingxiao.com/etv/index.php";
        imgUrl = "http://www.bozhiyingxiao.com/etv/img/headlogo.jpg";

        var shareDataMessage = {};
        var shareDataTimeline = {};

        function BuildShareData(){
            shareDataMessage = {
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl
            };
            shareDataTimeline = {
                title: desc,
                desc: title,
                link: link,
                imgUrl: imgUrl
            };

        }
        wx.ready(function () {
            BuildShareData();
            wx.onMenuShareAppMessage(shareDataMessage);
            wx.onMenuShareTimeline(shareDataTimeline);
        });
    </script>

</body>
</html>