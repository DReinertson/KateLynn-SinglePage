$('.tab').hide();
$('.homePage').show();

$('.navbar-item').on('click', function(){
  $('.tab').hide();
  $('.' + this.id + "Page").show();
})
