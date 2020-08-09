$(document).ready(function() {
  $('.block_title')click(function(event){
    $(this).toggelClass('active').next().slideToggle(300);
  });
});
