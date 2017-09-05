$(function () {
    var wrapper;
    function initScroll() {
        wrapper = new iScroll('wrapper', {
            onBeforeScrollStart: function () {
                wrapper.refresh()
            }
        })
    }
    new Vue({
        el: '#app',
        data: {
            title: 'todo list',
            items: [],
            newText: ''
        },
        methods: {
            toggleFinish: function (item) {
                item.isFinished = !item.isFinished;
            },
            addNewlist: function () {
                var self = this;
                if (self.newText) {
                    self.items.unshift({
                        text: self.newText,
                        isFinished: false
                    });
                }
                self.newText = '';
                initScroll()
            }
        }
    });
    initScroll()
});