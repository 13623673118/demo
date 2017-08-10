$(function(){
    var preHours,preMinutes,preSeconds;
    var width=$(window).innerWidth();
    var height=$(window).innerHeight();
    var top=height/2-80;
    var left=width/2-500;
    var balls=[];
    var colors=["#33B5E5","#0099CC","#AA66CC","#669900","#FFBB33","#FF8800","#FF4444","CC0000"];
    var r=8;
    //存放彩色小球
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
    canvas.width=width;

    canvas.height=height;
    window.setInterval(function(){
        var curr=new Date();
        var curHours=curr.getHours();
        var curMinutes=curr.getMinutes();
        var curSeconds=curr.getSeconds();
        // 当时间的秒数改变时添加彩色小球
        if(preSeconds!=curSeconds){
            if(parseInt(curHours/10)!=parseInt(preHours/10)){
                addBall(left,top,parseInt(curHours/10));
            }
            if(parseInt(curHours%10)!=parseInt(preHours%10)){
                addBall(left+15*(r+1),top,parseInt(curHours%10));
            }
            if(parseInt(curMinutes/10)!=parseInt(preMinutes/10)){
                addBall(left+39*(r+1),top,parseInt(curMinutes/10));
            }
            if(parseInt(curMinutes%10)!=parseInt(preMinutes%10)){
                addBall(left+54*(r+1),top,parseInt(curMinutes%10));
            }
            if(parseInt(curSeconds/10)!=parseInt(preSeconds/10)){
                addBall(left+78*(r+1),top,parseInt(curSeconds/10));
            }
            if(parseInt(curSeconds%10)!=parseInt(preSeconds%10)){
                addBall(left+93*(r+1),top,parseInt(curSeconds%10));
            }
        }
        render(context);
    },50);
    //添加小球(数字num上的彩色小球，x，y:数字方块容器的左上角顶点坐标)
    function addBall(x,y,num){
        for (var i=0;i<digit[num].length ;i++ ){
            for (var j=0;j<digit[num][i].length ;j++ ){
                if(digit[num][i][j]==1){
                    var ball={
                        x:x+j*2*(r+1)+r+1,
                        y:y+i*2*(r+1)+r+1,
                        g:1.5+Math.random(),
                        vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,//结果为-4/4
                        vy:-5,
                        color:colors[Math.floor(Math.random()*colors.length)]
                        };
                    balls.push(ball);
                }
            }
        }
    }
    //画彩色小球
    function renderBalls(context){
        for (var i=0;i<balls.length ;i++ ){
            context.beginPath();
            context.arc(balls[i].x,balls[i].y,r,0,2*Math.PI,false);
            context.fillStyle=balls[i].color;
            context.fill();
            context.closePath();
        }
    }
    //更新彩色小球位置
    function UpdateBalls(){
        for (var i=0;i<balls.length ;i++ ){
            balls[i].x+=balls[i].vx;
            balls[i].y+=balls[i].vy;
            balls[i].vy+=balls[i].g;
            if(balls[i].y+r>=height){
                balls[i].y=height-r;
                balls[i].vy=-balls[i].vy*0.6;
            }
        }
    }
    //渲染整个画布
    function render(context){
        context.clearRect(0,0,width,height)
        var now=new Date();
        var hours=now.getHours();
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
        preHours=hours;
        preMinutes=minutes;
        preSeconds=seconds;
        //时
        renderDigit(left,top,parseInt(hours/10),context);
        renderDigit(left+15*(r+1),top,hours%10,context);
        renderDigit(left+30*(r+1),top,10,context);
        //分
        renderDigit(left+39*(r+1),top,parseInt(minutes/10),context);
        renderDigit(left+54*(r+1),top,minutes%10,context);
        renderDigit(left+69*(r+1),top,10,context);
        //秒
        renderDigit(left+78*(r+1),top,parseInt(seconds/10),context);
        renderDigit(left+93*(r+1),top,seconds%10,context);
        //画小球
        renderBalls(context);
        //改变小球路径
        UpdateBalls();
    }
    //渲染每个数字
    function renderDigit(x,y,num,context){
        context.fillStyle="green";
        for (var i=0;i<digit[num].length ; i++){
            for (var j=0;j<digit[num][i].length ;j++ ){
                if(digit[num][i][j]==1){
                    context.beginPath();
                    context.arc(x+j*2*(r+1)+r+1,y+i*2*(r+1)+r+1,r,0,2*Math.PI,false);
                    context.closePath();
                    context.fill();
                }
            }
        }
    }

})
