$(function () {
    var list=$('.list');
    var add=$('.add');
    var todos=[];
    var delLists=[];
    var edit=$('.edit');
    var inputText=$('.inputText');
    var ensure=$('.ensure');
    var weixuanzhong=$('.icon-weixuanzhong');
    var btnChoose=$('#btn-choose');
    var btnYC=$('.btn-yc');
    edit.text('编辑');
    inputText.on('focus',function () {
        edit.addClass('ensure').text('完成');
    });
    inputText.on('blur',function () {
        writing=inputText.val();
        if (writing){
            inputText.val('')
        }
    });
    if(localStorage.todo_data){
        todos=JSON.parse(localStorage.todo_data);
        render();
    }else{
        localStorage.todo_data=JSON.stringify(todos);
    }
    $('.top').on('click','.ensure',function () {
        if (writing.length>0){
            todos.push({title:writing,state:0,isDel:0});
            localStorage.todo_data=JSON.stringify(todos);
            render();
            edit.removeClass('ensure').text('编辑');
        }else{
            edit.removeClass('ensure').text('编辑');
        }
    });
    function render() {
        list.empty();
        $.each(todos,function (i,v) {
            $('<li class="do-thing"><span id="xuanzhebtn" class="iconfont icon-weixuanzhong"></span><span id="doThing" class="thing">'+v.title+'</span><span id="xingbiao" class="iconfont icon-xingbiao"></span><span class="panAndDel"><span class="iconfontbi icon-bi"></span><span class="iconfont icon-shanchu"></span></span></li>').appendTo('.list');
        });
    }
    list.on('touchstart','.icon-weixuanzhong',function () {
        $('#xuanzhebtn').removeClass('icon-weixuanzhong').addClass('icon-xuanzhong');
        var i=$(this).closest('li').index();
        if(localStorage.delList_data){
            delLists=JSON.parse(localStorage.delList_data);
        }else{
            localStorage.delList_data=JSON.stringify(delLists);
        }
        delLists.push({title:todos[i].title});
        localStorage.delList_data=JSON.stringify(delLists);
        renderdel();
        btnChoose.css('display','block').text('显示已完成任务');
        todos.splice(i,1);
        localStorage.todo_data=JSON.stringify(todos);
        $('this').closest('li').remove();
        render();
    });
    if(localStorage.delList_data){
        delLists=JSON.parse(localStorage.delList_data);
    }else{
        localStorage.delList_data=JSON.stringify(delLists);
    }
    function renderdel() {
        $('.del-list').empty();
        $.each(delLists,function (i,v) {
            $('<li class="del-thing"><span class="iconfont icon-xuanzhong"></span><span class="thing"><s>'+v.title+'</s></span><span class="iconfont icon-xingbiao"></span><span id="delicon" class="iconfont icon-shanchu"></span></li>').appendTo('.del-list');
        });
    }
    if (delLists.length>0){
        btnChoose.css('display','block').text('显示已完成任务');
    }
    var ss=true;
    btnChoose.on('click',function () {
        if (ss){
            btnChoose.text('隐藏已完成任务');
            renderdel();
            $('.del-list').css('opacity',1)}else{
            $(this).text('显示已完成任务');
            $('.del-list').css('opacity',0);
        }
        ss=!ss;
    });
    console.log(delLists.length);
    if (delLists.length==0){
        btnChoose.css('display','none')
    }

    var left=null;
    var now=null;
    var flag=true;
    list.on('touchstart','.do-thing',function (e) {
        left=e.originalEvent.changedTouches[0].pageX;
    });
    list.on('touchmove','.do-thing',function (e) {
        now=e.originalEvent.changedTouches[0].pageX;
        var x=now-left;
        if(x>0){
            $(this).css('transform','translate3d('+x+'px,0,0)');
            flag=false;
        }
        if(x<0){
            $(this).css('transform','translate3d('+x+'px,0,0)');
            flag=true;
        }
    });
    list.on('touchend','.do-thing',function(e){
        if(!flag){
            $(this).css('transition','transform ease .3s');
            $(this).css('transform','translate3d(0,0,0)');
            $(this).addClass('done');
            $(this).delay(800).queue(function(){
                $(this).css('transition','none').dequeue();
            });
            $('.panAndDel').eq($(this).index()).css('opacity',0);
        }
        if(flag){
            $(this).css('transition','transform ease .3s');
            $(this).css('transform','translate3d(-2rem,0,0)');
            $(this).addClass('delete');
            $(this).delay(800).queue(function(){
                $(this).css('transition','none').dequeue();
            });
            $('.panAndDel').eq($(this).index()).css('opacity',1);
        }
    });
    list.on('touchstart','.icon-shanchu',function () {
        var i=$(this).closest('li').index();
        todos.splice(i,1);
        localStorage.todo_data=JSON.stringify(todos);
        $('this').closest('li').remove();
        render();
    });
    var xiabiao;
    list.on('touchstart','.icon-bi',function () {
        xiabiao=$(this).index();
        $('.xiugai').css('display','block');
        $('.do-title').text($(this).closest('li').text());
    });
    $('#move-right').on('touchstart',function () {
        $('.xiugai').css('display','none');

    });
    $('.textArea').on('blur',function () {
        var valll=$('.textArea').val();
        console.log(valll);
        $('#doThing').eq(xiabiao).text(valll);
        todos.push({title:valll,state:0,isDel:0});
        todos.splice(xiabiao,1);
        localStorage.todo_data=JSON.stringify(todos);
        render();
    });



    $('.del-list').on('touchstart','.del-thing',function (e) {
        left=e.originalEvent.changedTouches[0].pageX;
    });
    $('.del-list').on('touchmove','.del-thing',function (e) {
        now=e.originalEvent.changedTouches[0].pageX;
        var x=now-left;
        if(x>0){
            $(this).css('transform','translate3d('+x+'px,0,0)');
            flag=false;
        }
        if(x<0){
            $(this).css('transform','translate3d('+x+'px,0,0)');
            flag=true;
        }
    });
    $('.del-list').on('touchend','.del-thing',function(e){
        if(!flag){
            $(this).css('transition','transform ease .3s');
            $(this).css('transform','translate3d(0,0,0)');
            $(this).addClass('done');
            $(this).delay(800).queue(function(){
                $(this).css('transition','none').dequeue();
            });
            $('#delicon').eq($(this).index()).css('opacity',0);
        }
        if(flag){
            $(this).css('transition','transform ease .3s');
            $(this).css('transform','translate3d(-1rem,0,0)');
            $(this).addClass('delete');
            $(this).delay(800).queue(function(){
                $(this).css('transition','none').dequeue();
            });
            $('#delicon').eq($(this).index()).css('opacity',1);
        }
    });
    $('.del-list').on('touchstart','#delicon',function () {
        var ii=$(this).closest('li').index();
        delLists.splice(ii,1);
        localStorage.delList_data=JSON.stringify(delLists);
        $('this').closest('li').remove();
        renderdel();
    });
});