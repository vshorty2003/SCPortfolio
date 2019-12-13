$(document).ready(function(){
$("button").click(function(){
  $("button").removeClass("btn active");

  $(this).addClass("btn active");

  var dataFilter = $(this).data('filter');

  if(dataFilter == "all") {
      $(".filter ul").show();
  }
  else
  {
    $(".filter ul").hide();
    $("." + dataFilter).show();
  }
});
});
