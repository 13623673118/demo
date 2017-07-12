$(function () {
    $.ajax({
        url: 'index.json',
        type: 'get',
        beforeSend: function () {
            console.log("beforeSend")
        },
        success: function (e) {
            var lists = e.lists;
            console.log(e.lists)
            var vm = new Vue({
                el: "#app",
                data: {
                    lists: lists
                }
            });
            console.log("success")
            $('#one').css({display:'none'})
        },
        complete: function () {
            console.log("complete")
        },
        error: function () {
            console.log("error")
        }
    });
});
