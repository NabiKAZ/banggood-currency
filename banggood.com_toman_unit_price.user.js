// ==UserScript==
// @name         Banggood.com toman unit price
// @namespace    Banggood.com-toman-unit-price
// @version      0.1
// @date         2017-02-20
// @author       Nabi KaramAlizadeh <nabikaz@gmail.com>
// @homepage     http://www.nabi.ir/
// @match        *://www.banggood.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var selectors = 'div>.now, li>.price, .selected_total>strong';

    $('body').on('DOMSubtreeModified', selectors, function(){
        var unit = 4000;
        var price = $(this).text();
        price = price.replace('US$', '');
        price = price * unit;
        price = Math.round(price);
        price = isNaN(price)?'':price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        var priceUnit = price + ' تومان';
        var priceTomanEl = $(this).parent().find('.priceToman').first();
        if (priceTomanEl.length === 0) {
            priceTomanEl = $('<div/>');
            priceTomanEl.addClass('priceToman');
            priceTomanEl.css({
                'color': '#f60', 'font-size': '33px', 'font-weight': 'bold', 'direction': 'rtl',
                'text-align': 'left', 'font-family': 'nazanin, bnazanin, "b nazanin"', 'display': 'inline-block',
            });
            priceTomanEl.text(priceUnit);
            $(this).after(priceTomanEl);
            $(this).css({'color': '#c7c7c7', 'font-size': '16px'});
        } else {
            priceTomanEl.text(priceUnit);
        }

    });

    var tId = setInterval(function() {
        if (document.readyState == 'complete') onComplete();
    }, 11);
    function onComplete(){
        clearInterval(tId);
        $(selectors).trigger('DOMSubtreeModified');
        $('.goods_together_all .scroll_box').css('height', '285px');
    }

})();
