// ==UserScript==
// @name                新浪微博我的收藏一键清空
// @namespace           https://crane-yuan.github.io
// @version             0.4
// @description         清空您发过的所有微博
// @author              crane-yuan
// @match               https://weibo.com/fav?*
// @require             http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.7.2.js
// @grant               none
// @compatible         firefox 测试通过
// @compatible         chrome 测试通过
// @compatible         opera 未测试
// @compatible         safari 未测试
// ==/UserScript==

window.setInterval(function(){
    $('a[action-type="fl_favorite"]')[0].click();
    $('a[action-type="ok"]')[0].click();
},2000)
