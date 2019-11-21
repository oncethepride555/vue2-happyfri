// 这个方法用来根据document和window的大小来改变html标签的font-size值
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', // 用户将设备由横向查看切换为纵向查看模式，在设备旋转的时候，会触发orientationchange这个事件
        // 当调整浏览器窗口大小时会触发resize事件。
        recalc = function () {
            var clientWidth = docEl.clientWidth; // 获取浏览器窗口文档显示区域的宽度，不包括滚动条。
            if (!clientWidth) return; // 如果clientWidth为0，写直接返回。（非0为true）
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'; // html元素的font-size 大小
        };
    if (!doc.addEventListener) return; // 当document没有addEventListener方法时，直接返回，ie浏览器没有document.addEventListener方法，用的是 window.attachEvent
    win.addEventListener(resizeEvt, recalc, false); //这个控制的是页面打开的情况下，调整窗口时，设置html元素的font-size大小
    doc.addEventListener('DOMContentLoaded', recalc, false); // 事件名称，函数，事件执行的顺序，，，，，从页面空白到展示出页面内容，会触发DOMContentLoaded事件
    // true - 事件句柄在捕获阶段执行
    // false- 默认, 事件句柄在冒泡阶段执行
    // 这个控制一开始打开页面时，给html元素的设置font-size大小
})(document, window);