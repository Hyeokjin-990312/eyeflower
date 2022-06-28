$(function(){
    $('.nav1> li').mouseover(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav1> li').mouseout(function(){
        $(this).children('.sub').stop().slideUp();
    });
});