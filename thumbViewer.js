$(function () {
    var div = $('div.thumbs');
    div.mousemove(function (e) {
        ul = $('.thumbs ul');
        ulPadding = 0;// unordered list's left margin
        var divWidth = div.width();
        var lastLi = ul.find('li:last-child');
        var offset = 0;
        if (lastLi.length > 0) offset = lastLi[0].offsetLeft;
        var ulWidth = offset + lastLi.outerWidth();
        var left = (e.pageX - div.offset().left) * (ulWidth - divWidth) / divWidth;
        div.scrollLeft(left);
    });
});