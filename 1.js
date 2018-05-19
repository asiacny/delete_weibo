// ==UserScript==
// @name         批量删除微博(刷新首页即删除，每次4条，重复刷新即可）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://weibo.com/p/*
// @grant        none
// @require http://libs.baidu.com/jquery/2.1.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(function($){
        $('body').find('script').each(function(kn,obj){
            var html = $(obj).html();
            if(html.indexOf('WB_feed_v4') > 0){
                var m = html.match(/mid=\\\"(\d+)?/g);
                if(m.length > 0){
                    $.each(m, function(k,v){
                        if(parseInt(k) === 4){
                            setTimeout(function(){
                                location.reload();
                            },10000);
                        }else if(parseInt(k) > 4){
                            return;
                        }else{
                            v = $.trim(v);
                            var mid = v.replace('"', '').replace('\\', '').replace('mid=','').replace('\"','').replace('\"', '');
                            $.post('https://weibo.com/aj/mblog/del?ajwvr=6', {mid:mid}, function(response){
                                console.log(response);
                            });
                        }
                    });
                }
            }
        });
    });
})();
