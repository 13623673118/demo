$(function() {
    $('.xzoom-thumbs div').on('click', function() {
        $('.xzoom').attr({
            src: $(this).find('img').attr('src'),
            xoriginal: $(this).find('img').attr('src')
        })
    })
    $('.xzoom').xzoom(/* {} */);

/*
{
    position: '#top-right',
    图片放大窗口的位置。可用值有："top", "left", "right", "bottom", "inside", "lens", "#ID"
    top left right bottom :相对于展示窗口的上下左右方
    inside:展示在展示窗口中全部放大
    lens:展示在展示窗口中局部放大
    #ID:将放大窗口呈现在规定id的dom容器中。

    rootOutput: true,
    该参数可以将输出的放大窗口设置在任何位置。

    Xoffset: 0,
    图片放大窗口水平位置的偏移。

    Yoffset: 0,
    图片放大窗口垂直位置的偏移。

    fadeIn: true,
    显示放大图片是否使用淡入效果。

    fadeTrans: true,
    淡入淡出效果的过渡时间。

    fadeOut: false,
    关闭放大图片是否使用淡出效果。

    smoothZoomMove: 3,
    在大窗口中图片的平滑移动级别，数值越大越平滑。

    smoothLensMove: 1,
    圆形镜片的平滑移动级别。

    smoothScale: 6,
    放大缩小的平滑级别。

    defaultScale: 0,
    放大图片打开时的默认放大级别。-1表示-100%，1表示100%。

    scroll: true,
    是否在滚动鼠标滚轮时放大缩小图片。

    tint: '#ace',
    背景颜色。建议使用十六进制的颜色值。

    tintOpacity: 0.6,
    背景的透明度，值在0-1之间。

    lens: '#fff',
    放大镜的颜色，建议使用十六进制的颜色值。

    lensOpacity: 0,
    放大镜的透明度。

    lensShape: 'circle',
    放大镜的的形状，"box" 或 "circle"。

    zoomWidth: 'auto',
    放大镜的宽度，单位像素。

    zoomHeight: 'auto',
    放大镜的高度，单位像素。

    sourceClass: 'xzoom - source',
    原图div的class名称。

    loadingClass: 'xzoom - loading',
    预加载div的class名称。

    lensClass: 'xzoom - lens',
    放大镜div的class名称。

    zoomClass: 'xzoom - preview',
    放大窗口div的class名称。

    activeClass: 'xactive',
    当前缩略图的class名称。

    adaptive: true,
    是否开启自适应功能。

    lensReverse: false,
    当旋转内部放大镜并且该选项为true时，放大镜的移动和显示方向相反。

    adaptiveReverse: false,
    和lensReverse相同，但是只有在adaptive选项为true是有效。

    title: true,
    是否在输出窗口中显示图片标题。

    titleClass: 'xzoom - caption',
    图片标题div的class名称。

    bg: false
    放大图片作为背景输出。
    });
*/
})
