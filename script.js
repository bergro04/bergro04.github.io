console.log("0");

$( document ).ready(function() {
  $('#content').fadeIn(500);
});

function redirect(href){
  $('#content').fadeOut(500, function(){
    window.location.href = "http://robertberger5.github.io/"+href;
  });
}

$('td')
  .mouseover(function() {
    $(this).animate({backgroundColor: "#f00"}, 100);
  })
  .mouseout(function() {
    $(this).animate({backgroundColor:"#3a3"},100);
  });
