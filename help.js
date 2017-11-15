(function(){
    var width= document.documentElement.clientWidth/12;
    var styleN = document.createElement('style');
    styleN.innerHTML = 'html{font-size: '+ width +'px !important;}'
    document.head.appendChild(styleN);
})();
$(function(){
    //锚点跳转滑动效果
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 0.96 * document.documentElement.clientWidth/12;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
})

window.onload = function(){
    //点击汉堡菜单
    document.querySelector(".ham").addEventListener("touchstart",function(){
        var list = document.querySelector("#list")
        if(list.className === 'list') {
            list.className = 'listhide';
        }else{
            list.className = 'list';
        }
    },false);
    //点击列表项
    var items = document.querySelectorAll(".item")
    for (var i = 0, len = items.length; i < len; i++) {
        items[i].addEventListener("click",function(){
            var list = document.querySelector("#list")
            if(list.className === 'list') {
                list.className = 'listhide';
            }else{
                list.className = 'list';
            }
        },false);
    }
    //点击空白处隐藏列表
    document.getElementsByClassName('content')[0].addEventListener('touchstart', function () {
        var list = document.querySelector("#list")
        list.className = 'listhide';
    }, false)

}