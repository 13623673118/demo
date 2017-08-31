function slideBar(options) {
    this.defaults = {
        outerContent: '.board-cont',
        innerContent: '.textArea',
        scrollBar: '.board-bar',
        scrollItem: '.bar'
    };
    this.opts = $.extend({}, this.defaults, options);
    var oBox = $(opts.outerContent),
        barWrapper = $(opts.scrollBar),
        bar = barWrapper.find(opts.scrollItem),
        cont = $(opts.innerContent),
        oBox_h = oBox.outerHeight(),
        barWrapper_h = barWrapper.outerHeight(),
        cont_h = cont.outerHeight(),
        disY = 0,
        scale = cont_h / oBox_h,
        barHeight = barWrapper_h / scale;
    if (scale <= 1) {
        barWrapper.css({display: 'none'});
    }
    $(bar).animate({height: barHeight});
    bar.on('mousedown', function (ev) {
        disY = ev.clientY - this.offsetTop;
        $(document).on('mousemove', function (ev) {
            var T = ev.clientY - disY;
            moving(T);
        });
        $(document).on('mouseup', function () {
            $(document).unbind('mousemove');
            $(document).unbind('mouseup');
        });
        return false;
    });
    mouseWheel(oBox, function () {
        disY -= 20;
        moving(disY);
    }, function () {
        disY += 20;
        moving(disY);
    });
    barWrapper.on('click', function (ev) {
        moving(ev.offsetY);
    });
    function moving(val) {
        scale = cont.outerHeight() / oBox.outerHeight();
        if (scale > 1) {
            val <= 0 && (val = 0);
            val >= barWrapper_h - bar.outerHeight() && (val = barWrapper_h - bar.outerHeight());
            bar.css({top: val});
            cont.css({marginTop: -val * scale});
        }
    }
    function mouseWheel(obj, upFn, downFn) {
        obj.onmousewheel = fn;
        if (obj.addEventListener) {
            obj.addEventListener("DOMMouseScroll", fn, false);
        }

        function fn(ev) {
            var oEvent = ev || window.event;
            if (oEvent.wheelDelta) {
                oEvent.wheelDelta > 0 ? upFn() : downFn();
            } else {
                oEvent.detail < 0 ? upFn() : downFn();
            }
            if (oEvent.preventDefault) {
                oEvent.preventDefault();
            } else {
                oEvent.returnValue = false;
            }
        }
    }
}