$(function () {
var myScroll,
    pullDownEl,
    pullDownOffset,
    pullUpEl,
    pullUpOffset,
    generatedCount = 0,
    foo;
//    todo:重新封装jquery的ajax
function Ajax(url, successCallback, errorCallback) {
    $.ajax({
        url: url,
        success: successCallback,
        error: errorCallback
    })
}
//    todo:下拉刷新
function pullDownAction() {
    setTimeout(function () {
        myScroll.refresh();
    }, 500);
}
//    todo:上拉加载
function pullUpAction() {
    setTimeout(function () {
        var el, li, i;
        el = document.getElementById('thelist');
        // for (i = 0; i < 3; i++) {
        //     li = document.createElement('li');
        //     li.innerText = '新增数据 ' + (++generatedCount);
        //     el.appendChild(li, el.childNodes[0]);
        // }
        // todo:上拉的时候将新的数据合并到之前的数据上 data.list?????????
        Ajax('test.json',function (res) {
            foo.push(res.list);
        })
        console.log(foo);
        myScroll.refresh();
    }, 500);
}
//    todo:初始化iscroll实例
function init() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;
    myScroll = new iScroll('wrapper', {
        scrollbarClass: 'myScrollbar',
        useTransition: true,
        topOffset: pullDownOffset,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                this.minScrollY = -pullDownOffset;
            } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                pullDownAction();
            } else if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                pullUpAction();
            }
        }
    });
    setTimeout(function () {
        document.getElementById('wrapper').style.left = '0';
    }, 800);
}

    Ajax('test.json', function (res) {
        foo=res;
        app=new Vue({
            el: '#scroller',
            data: res
        });
        //不起作用???????????????????????/
        document.addEventListener('touchmove', function (e) {
            console.log(e);
            e.preventDefault();
        }, false);
        // window.addEventListener('load', loaded,false);
        init()
    });

})