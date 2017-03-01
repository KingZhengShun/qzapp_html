/*
 author:dushaobin
 email:shaobin.du@3g2win.com
 description:appcan常用插件
 created:2014,08.18
 update:chenxue:xue.chen3g2win.com

 */
/*global appcan,window */
appcan.use("detect", function($, detect) {
    if (detect.os.ios) {
        var viewport = document.getElementsByName("viewport");
        var scale = window.devicePixelRatio ? (1 / window.devicePixelRatio) : 1;
        $("[name='viewport']").attr("content", "width=device-width,target-densitydpi=device-dpi,initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale);
        var fontsize = $("body").css("font-size");
        $("body").css("font-size", parseInt(fontsize) * window.devicePixelRatio + "px");
    }
})
