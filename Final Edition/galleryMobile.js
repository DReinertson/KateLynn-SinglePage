let x, y, left, down;
let modal = document.getElementById('myModal');
let img = document.getElementById('myImg');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');
let span = document.getElementsByClassName('close')[0];
let drag;


$('.imageContainer').mousedown(function(e){
  e.preventDefault();
  down = true;
  x = e.pageX;
  left = $(this).scrollLeft();
});

$('body').mousemove(function(e){
  if(down){
    let newX = e.pageX;
    $(e.target).closest('.imageContainer').scrollLeft(left-newX+x);
  }
  drag = true;
});

$('body').mouseup(function(e){
  e.preventDefault();
  down=false;
  if (drag){
    $('img').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
    });
  }
  drag=false;
});

$('img').on('click', function(e){
  e.preventDefault();
  if (drag === false){
  modal.style.display = 'flex';
  modalImg.src = this.src;
  // console.log(this.alt);
  captionText.innerHTML = this.alt;
  $('body').addClass('noscroll');
}
});

//For fullscreen, need to create rules for clicking on the overlay
$('.overlay').on('click', function(e){
  let img = $(this).prev().get();
  // console.log(img[0]);
  // console.log(img[0].src);
  // console.log(img[0].alt)
  modal.style.display = 'flex';
  modalImg.src = img[0].src;
  captionText.innerHTML = img[0].alt;
  $('body').addClass('noscroll');
})


span.onclick = function(){
  modal.style.display = 'none';
  $('body').removeClass('noscroll');
}
