$(function(){
    $('.modal').on('hidden.bs.modal', function (e) {
      $iframe = $(this).find("iframe");
      $iframe.attr("src", $iframe.attr("src"));

      if(e.which == 27&&$('body').hasClass('modal-header')){
        window.location = "index.html";
      }
    });
  });
  
