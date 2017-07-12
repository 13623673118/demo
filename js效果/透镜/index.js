(function($) {
    $.fn.perspective = function(options) {
        var defaults = {
            key_val: [39, 37],
            type: 'keydown',
            types: 'mousemove',
            targets: '.wrap',
            shape: 'circular'
        }
        var set = $.extend({}, defaults, options)
        $(set.targets).find('img').css({
            width: $(set.targets).outerWidth(),
            height: $(set.targets).outerHeight()
        })
        if (set.shape == 'circular') {
            $(set.targets).children('div').css('border-radius', '50%')
        } else if (set.shape == 'cube') {
            $(set.targets).children('div').css('border-radius', '0')
        }
        $(set.targets).on(set.types, function(e) {
            var x = e.pageX - $(this).offset().left - $(this).children('div').width() / 2
            var y = e.pageY - $(this).offset().top - $(this).children('div').height() / 2
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x > $(this).width() - $(this).children('div').width()) x = $(this).width() - $(this).children('div').width()
            if (y > $(this).height() - $(this).children('div').height()) y = $(this).height() - $(this).children('div').height()
            $(this).children('div').css({
                top: y,
                left: x,
                cursor: 'none'
            }).show()
            $(this).find('div img').css({
                top: -y,
                left: -x
            })
            var that = $(this);
            var sum = $(this).children('div').width();
            $(document).on(set.type, function(e) {
                if (e.keyCode == set.key_val[0]) {
                    sum++;
                    that.children('div').width(sum);
                    that.children('div').height(sum);
                }
                if (e.keyCode == set.key_val[1]) {
                    sum--;
                    that.children('div').width(sum);
                    that.children('div').height(sum);
                }
            })
        }).trigger(set.types)
    }
})($)
