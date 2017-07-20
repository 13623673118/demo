$(function () {
    var number = [];
    for (var i = 0; i <= 200; i++) {
        number.push(i);
    }
    var num;
    var time;
    var sta;
    var flag = false;
    var index;
    function cha() {
        sta = setInterval(function () {
            index = Math.floor(Math.random() * number.length);
            num = number[index];
            if (num < 10) {
                num = '00' + num;
            } else if (num < 100) {
                num = '0' + num;
            }
            $(".content li").html(num);
            return num;
        }, 100);
        number.splice(index,1);
    }


    $('.start').on('click', function (e) {
        flag = !flag;
        if (flag == true) {
            $(this).html('暂停');
            cha();
        } else {
            $(this).html('开始');
            clearInterval(sta);
            if (num < 10) {
                num = '00' + num;
            } else if (num < 100) {
                num = '0' + num;
            }
            str = '';
            str = $(".content li").eq(0).html();
            $("<li>" + str + "</li>").prependTo(".word");
        }
        if(num=='000'){
            cha();
        }
        console.log(number)
    })
});