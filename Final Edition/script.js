$('.tab').hide();
$('.homePage').show();
let id;
let open = false;
let gallery = document.getElementById('gallery');

function showImage(id){
  $('.galleryImage').fadeOut(200);
  $('.' + id).delay(200).fadeIn(200);
}
function reset(){
  $('.galleryImage').fadeIn(200);
}

function openNav(){
  console.log('opening nav');
  if($(window).width() > 1023){
    $('.nav').removeClass('fullscreen');
    open = true;
  }
  else{
    $('.nav').addClass('fullscreen');
    open = true;
  }
  $('body').addClass('noscroll');
};

function closeNav(){
  console.log('closing nav');
  if($(window).width() > 1023){
    $('.nav').removeClass('fullscreen');
    open = false;
  }
  else{
    $('.nav').removeClass('fullscreen');
    open = false;
  };
  $('body').removeClass('noscroll');
}

$(document).ready(function(){
  $('#reset').addClass('highlight');
  if($(window).width() > 1024){
    $('i').hide();
  }
});

$('.navbar-item').on('click touchstart', function(e){
  e.preventDefault();
  if ($(window).width() < 1024){
    if(open === true){
      closeNav();
    }
  }
  let id = this.id;
  $('.tab').fadeOut();
  $('.' + id + 'Page').fadeIn();
  if ($(window).width() < 1024){
    if (id === 'contact'){
      $('.footer').addClass('sticky');
    }
    else {
      $('.footer').removeClass('sticky');
    }
  }
  $(window).scrollTop(0);
})

$('.aboutContainer').mouseover(function(){
  $('.' + this.id + 'Overlay').css({
    'opacity' : '0.7'
  });
}).mouseleave(function(){
  $('.' + this.id + 'Overlay').css({
    'opacity' : '0'
  });
})

$('button').on('click', function(){
  $('button').removeClass('highlight');
  $(this).addClass('highlight');
  if (id === this.id){
    return;
  }
  if (this.id === 'reset'){
    console.log("resetting");
    reset();
  }
  else{
  showImage(this.id);
  }
  id = this.id;
});

$('i').on('click touchstart', function(e){
  e.preventDefault();
  if(open === false){
    openNav();
  }
  else{
    closeNav();
  }
})

$('#gallery').on('click',function(){
  if($(window).width() < 1024){
    gallery.href = './galleryMobile.html';
  }
  else{
    gallery.href = './gallery.html';
  }
})






//$('.tab').hide();
//$('.homePage').show();

//$('.navbar-item').on('click', function(){
  //$('.tab').hide();
  //$('.' + this.id + "Page").show();
//})
