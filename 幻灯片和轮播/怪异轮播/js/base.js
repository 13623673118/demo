fx = {
    buffer: function (obj, cur, target, fnDo, fnEnd, fs) {
        console.log(1)
        if (!fs)fs = 6;
        var now = {};
        var x = 0;
        var v = 0;
        if (!obj.__last_timer)obj.__last_timer = 0;
        var t = new Date().getTime();
        if (t - obj.__last_timer > 20) {
            fnMove();
            obj.__last_timer = t;
        }
        clearInterval(obj.timer);
        obj.timer = setInterval(fnMove, 20);
        function fnMove() {
            v = Math.ceil((100 - x) / fs);
            x += v;
            for (var i in cur) {
                now[i] = (target[i] - cur[i]) * x / 100 + cur[i];
            }
            if (fnDo)fnDo.call(obj, now);
            if (Math.abs(v) < 1 && Math.abs(100 - x) < 1) {
                clearInterval(obj.timer);
                if (fnEnd)fnEnd.call(obj, target);
            }
        }
    },
    flex: function (obj, cur, target, fnDo, fnEnd, fs, ms) {
        var MAX_SPEED = 16;
        if (!fs)fs = 6;
        if (!ms)ms = 0.75;
        var now = {};
        var x = 0;	//0-100
        if (!obj.__flex_v)obj.__flex_v = 0;
        if (!obj.__last_timer)obj.__last_timer = 0;
        var t = new Date().getTime();
        if (t - obj.__last_timer > 20) {
            fnMove();
            obj.__last_timer = t;
        }
        clearInterval(obj.timer);
        obj.timer = setInterval(fnMove, 20);
        function fnMove() {
            obj.__flex_v += (100 - x) / fs;
            obj.__flex_v *= ms;
            if (Math.abs(obj.__flex_v) > MAX_SPEED)obj.__flex_v = obj.__flex_v > 0 ? MAX_SPEED : -MAX_SPEED;
            x += obj.__flex_v;
            for (var i in cur) {
                now[i] = (target[i] - cur[i]) * x / 100 + cur[i];
            }
            if (fnDo)fnDo.call(obj, now);
            if (Math.abs(obj.__flex_v) < 1 && Math.abs(100 - x) < 1) {
                clearInterval(obj.timer);
                if (fnEnd)fnEnd.call(obj, target);
                obj.__flex_v = 0;
            }
        }
    },
    linear: function (obj, cur, target, fnDo, fnEnd, fs) {
        if (!fs)fs = 50;
        var now = {};
        var x = 0;
        var v = 0;
        if (!obj.__last_timer)obj.__last_timer = 0;
        var t = new Date().getTime();
        if (t - obj.__last_timer > 20) {
            fnMove();
            obj.__last_timer = t;
        }
        clearInterval(obj.timer);
        obj.timer = setInterval(fnMove, 20);
        v = 100 / fs;
        function fnMove() {
            x += v;
            for (var i in cur) {
                now[i] = (target[i] - cur[i]) * x / 100 + cur[i];
            }
            if (fnDo)fnDo.call(obj, now);
            if (Math.abs(100 - x) < 1) {
                clearInterval(obj.timer);
                if (fnEnd)fnEnd.call(obj, target);
            }
        }
    },
    stop: function (obj) {
        clearInterval(obj.timer);
    },
    move3: function (obj, json, fnEnd, fTime, sType) {
        var addEnd = fx.addEnd;
        fTime || (fTime = 1);
        sType || (sType = 'ease');
        setTimeout(function () {
            Utils.setStyle3(obj, 'transition', sprintf('%1s all %2', fTime, sType));
            addEnd(obj, function () {
                Utils.setStyle3(obj, 'transition', 'none');
                if (fnEnd)fnEnd.apply(obj, arguments);
            }, json);
            setTimeout(function () {
                if (typeof json == 'function')
                    json.call(obj);
                else
                    Utils.setStyle(obj, json);
            }, 0);
        }, 0);
    }
};
Utils = {
    setStyle: function (obj, json) {
        if (obj.length)
            for (var i = 0; i < obj.length; i++) Utils.setStyle(obj[i], json);
        else {
            if (arguments.length == 2)
                for (var i in json) obj.style[i] = json[i];
            else
                obj.style[arguments[1]] = arguments[2];
        }
    },
    setStyle3: function (obj, name, value) {
        obj.style['Webkit' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
        obj.style['Moz' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
        obj.style['ms' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
        obj.style['O' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
        obj.style[name] = value;
    },
    rnd: function (n, m) {
        return Math.random() * (m - n) + n;
    }
};
