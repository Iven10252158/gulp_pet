"use strict";

$(document).ready(function () {
  // Navbar按鈕
  $('span').click(function (event) {
    event.preventDefault();
    $('.navBar-list').toggleClass('navBar-active');
  }); // 固定navbar

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var navbarH = $('nav').height();

    if (scrollTop >= 1) {
      $('nav').addClass('fixed');
      $('body').css('paddingTop', navbarH);
    } else {
      $('nav').removeClass('fixed');
      $('body').css('paddingTop', 0);
    }
  }); // 取消線上訂位的a預設事件

  $('.online-reservation a').click(function () {
    event.preventDefault();
  }); // 往下滑的箭頭按鈕

  $('.arrowBtn a').click(function () {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 1485
    }, 100);
  }); // QA折疊選單

  $('.question li .answer ').click(function (e) {
    e.preventDefault();
    $(this).parent().find('a').toggleClass('active');
    $(this).parent().find('p').slideToggle();
    $(this).parent().siblings().find('p').slideUp();
    $(this).parent().siblings().find('a').removeClass('active');
  });
});
//# sourceMappingURL=all.js.map
