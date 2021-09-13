$(document).ready(function(){
  // Navbar按鈕
  $('.bar').click(function(event){
    event.preventDefault();
    $('.navBar-list').toggleClass('navBar-active');
  });
  // QA折疊選單
  $('.question li .answer ').click(function(e){
    e.preventDefault();
    $(this).parent().find('span').toggleClass('active');
    $(this).parent().find('p').slideToggle();
    $(this).parent().siblings().find('p').slideUp();
    $(this).parent().siblings().find('span').removeClass('active');
  })
});
