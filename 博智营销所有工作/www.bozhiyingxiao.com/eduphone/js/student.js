window.onload = function () {
    function rander(dom){
        var ali = dom.getElementsByTagName('li');
        var aHeight = {L: [], C: []};
        for (var i = 0; i < ali.length; i++) {
            var iNow = i % 2;
            switch (iNow) {
                case 0:
                    ali[i].style.left = '0.24rem';
                    aHeight.L.push(ali[i].offsetHeight);
                    var step = Math.floor(i / 2);
                    if (!step) {
                        ali[i].style.top = 0;
                    } else {
                        var sum = 0;
                        for (var j = 0; j < step; j++) {
                            sum += aHeight.L[j] + 10;
                        }
                        ali[i].style.top = sum + 'px';
                    }
                    break;
                case 1:
                    ali[i].style.right = '0.24rem';
                    aHeight.C.push(ali[i].offsetHeight);
                    var step = Math.floor(i / 2);
                    if (!step) {
                        ali[i].style.top = 0;
                    } else {
                        var sum = 0;
                        for (var j = 0; j < step; j++) {
                            sum += aHeight.C[j] + 10;
                        }
                        ali[i].style.top = sum + 'px';
                    }
                    break;
            }
        }
    }
    var box=document.getElementsByClassName('news');
    for(var i=0; i<box.length; i++){
        rander(box[i])
    }
}