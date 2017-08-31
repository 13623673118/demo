;(function ($, window, document) {
    var Board = function (elem, options) {
        this.defaults = {
            width: 200,
            height: 200,
            limitedWidth: 200,
            limitedHeight: 200,
            dragLimited: true
        };
        this.opts = $.extend({}, this.defaults, options);
        this.$board = elem;
        this.$boardTitle = this.$board.find('.board-title');
        this.$boardT = this.$board.find('.T');
        this.$boardR = this.$board.find('.R');
        this.$boardB = this.$board.find('.B');
        this.$boardL = this.$board.find('.L');
        this.$boardTR = this.$board.find('.TR');
        this.$boardBR = this.$board.find('.BR');
        this.$boardBL = this.$board.find('.BL');
        this.$boardLT = this.$board.find('.LT');
        this.$boardCont = this.$board.find('.board-cont');
        this.$boardBar = this.$board.find('.board-bar');
        this.$bar = this.$boardBar.find('.bar');
        this.limitedWidth = this.opts.width < this.opts.limitedWidth ? this.opts.width : this.opts.limitedWidth;
        this.limitedHeight = this.opts.height < this.opts.limitedHeight ? this.opts.height : this.opts.limitedHeight;
    };
    Board.prototype = {
        moveResize: function (handle, setLeft, setTop, lockX, lockY) {
            var self = this;
            handle.bind('mousedown', function (ev) {
                var offsetW = self.$board.width();
                var offsetH = self.$board.height();
                var offsetL = self.$board.offset().left;
                var offsetT = self.$board.offset().top;
                var disX = ev.clientX;
                var disY = ev.clientY;
                var viewWidth = $(document).width();
                var viewHeight = $(document).height();
                var maxL = viewWidth - offsetW - offsetL;
                var maxT = viewHeight - offsetH - offsetT;
                this.setCapture && this.setCapture();
                $(document).bind('mousemove', function (ev) {
                    var boardCont_h = self.$boardCont.height();
                    var boardTextarea_h = $('.textArea').height();
                    var scale = 0;
                    if (setLeft) {
                        self.$board.css({width: offsetW - (ev.clientX - disX)});
                    } else {
                        lockY || self.$board.css({width: offsetW + (ev.clientX - disX)});
                    }
                    if (setTop) {
                        self.$board.css({height: offsetH - (ev.clientY - disY)});
                        barDisplay();
                    } else {
                        lockX || self.$board.css({height: offsetH + (ev.clientY - disY)});
                        barDisplay();
                    }
                    function barDisplay() {
                        self.$boardCont.css({height: self.$board.height() - self.$boardTitle.height() - 20});
                        self.$boardBar.css({height: self.$boardCont.height()});
                        scale = boardTextarea_h / boardCont_h;
                        if (scale <= 1) {
                            self.$boardBar.hide()
                        } else {
                            self.$boardBar.show();
                            self.$bar.css({height: self.$boardBar.height() / scale});
                        }
                    }
                    setLeft && (self.$board.css({left: offsetL + (ev.clientX - disX)}));
                    setTop && (self.$board.css({top: offsetT + (ev.clientY - disY)}));
                    if (self.$board.width() <= self.limitedWidth) {
                        self.$board.css({width: self.limitedWidth});
                        setLeft && (self.$board.css({left: viewWidth - maxL - self.limitedWidth}));
                    }
                    if (self.$board.height() <= self.limitedHeight) {
                        self.$board.css({height: self.limitedHeight});
                        self.$boardCont.css({height: self.limitedHeight - self.$boardTitle.height() - 20});
                        setTop && (self.$board.css({top: viewHeight - maxT - self.limitedHeight}));
                        self.$boardBar.css({height: self.$boardCont.height()});
                        scale = boardTextarea_h / boardCont_h;
                        self.$bar.css({height: self.$boardBar.height() / scale});
                    }
                });
                $(document).on('mouseup', function () {
                    $(this).unbind('mousemove');
                    $(this).unbind('mouseup');
                    this.releaseCapture && this.releaseCapture();
                });
                return false;
            });
        },
        drag: function () {
            var self = this;
            this.$boardTitle.bind('mousedown', function (ev) {
                var disX = ev.clientX - self.$board.offset().left;
                var disY = ev.clientY - self.$board.offset().top;
                this.setCapture && this.setCapture();
                $(document).bind('mousemove', function (ev) {
                    var maxL = $(this).width() - self.$board.width();
                    var maxT = $(this).height() - self.$board.height();
                    var iL = ev.clientX - disX;
                    var iT = ev.clientY - disY;
                    if (self.opts.dragLimited) {
                        iL <= 0 && (iL = 0);
                        iL >= maxL && (iL = maxL);
                        iT <= 0 && (iT = 0);
                        iT >= maxT && (iT = maxT);
                    }
                    self.$board.css({left: iL, top: iT});
                });
                $(document).on('mouseup', function () {
                    $(this).unbind('mousemove');
                    $(this).unbind('mouseup');

                    this.releaseCapture && this.releaseCapture();
                });

                return false;
            });
        },
        initalPad: function () {
            this.$board.css({width: this.opts.width, height: this.opts.height});
            this.$boardCont.css({height: this.opts.height - this.$boardTitle.height() - 20});
            this.$boardBar.css({height: this.$boardCont.height()});
        },
        inital: function () {
            this.initalPad();
            this.drag();
            this.moveResize(this.$boardT, false, true, false, true);
            this.moveResize(this.$boardR, false, false, true, false);
            this.moveResize(this.$boardB, false, false, false, true);
            this.moveResize(this.$boardL, true, false, true, false);
            this.moveResize(this.$boardTR, false, true, false, false);
            this.moveResize(this.$boardBR, false, false, false, false);
            this.moveResize(this.$boardBL, true, false, false, false);
            this.moveResize(this.$boardLT, true, true, false, false);
        },
        constructor: Board
    };
    $.fn.board = function (options) {
        var board = new Board(this, options);
        return board.inital();
    }
})(jQuery, window, document);