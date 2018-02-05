$(document).ready(function(){
    $(".btn").each(function(){
       $(this).click(function(){
          $(this).toggleClass("active");

       });
    });
});