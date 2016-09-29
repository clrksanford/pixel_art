$(document).ready(function(){
  makeSwatch(2);
  makeSquare(200);
  $('.brush').css('display', 'inline-block');
  $('#set-color').on('click', changeColor);
  $(document).on('click', 'div.square', changeSquare);
  $(document).on('click', '.brush', toggleActive);
  $('#reset').on('click',resetBoard);
});

function makeSwatch (num) {
  for (var i = 0; i < num; i++) {
    var newDiv = '<div class="brush"></div>';
    $('.controls').append(newDiv);
    $('.brush').css('margin','15px')
    $('.controls').css('margin','0 auto')
  }
}

function makeSquare(num) {
  for (var i = 0; i < num; i++) {
    var newDiv = '<div class="square"></div>';
    $('body').append(newDiv);
    $('.square').on('mouseover', changeSquare);
    $('.square').css({'height':'10px', 'width':'10px', 'margin':0});
  }
}

function changeColor(e) {

  e.preventDefault();

  var box1 = $('.brush').eq(0);
  var box2 = $('.brush').eq(1);
  var box3 = $('.brush').eq(2);

  // var box1isDefault = $(box1).css('background-color') === "rgb(27, 67, 112)";
  // var box2isDefault = $(box2).css('background-color') === "rgb(27, 67, 112)";
  // var box3isDefault = $(box3).css('background-color') === "rgb(27, 67, 112)";

  var color = $('input').val();

  // if (box1isDefault) {
  //   $(box1).css('background-color', color);
  // } else if (box2isDefault) {
  //   $(box2).css('background-color', color);
  // } else if (box3isDefault) {
  //   $(box3).css('background-color', color);
  // } else if (!box1isDefault && !box2isDefault && !box3isDefault) {
  //   var box2bg = $(box2).css('background-color');
  //   var box1bg = $(box1).css('background-color');
  //
  //   $(box3).css('background-color', box2bg);
  //   $(box2).css('background-color', box1bg);
  //   $(box1).css('background-color', color);
  // }

  if (!box1.hasClass("modified")) {

    $(box1).css('background-color', color);
    box1.addClass('modified');

  } else if (box2.hasClass("modified")) {

    $(box2).css('background-color', color);
    box2.addClass('modified');

  } else if (box3.hasClass("modified")) {

    $(box3).css('background-color', color);
    box3.addClass('modified');

  } else {
    var box2bg = $(box2).css('background-color');
    var box1bg = $(box1).css('background-color');

    $(box3).css('background-color', box2bg);
    $(box2).css('background-color', box1bg);
    $(box1).css('background-color', color);
  }
    resetForm();
}

function toggleActive(e) {
  e.preventDefault();

  var clicked = $(e.currentTarget);
  var otherSwatches = clicked.siblings('.brush');

  console.log(otherSwatches);

  clicked.addClass('active');
  otherSwatches.removeClass('active');

  ;
}

function changeSquare (e) {

  var box1 = $('.brush').eq(0);
  var box2 = $('.brush').eq(1);
  var box3 = $('.brush').eq(2);

  if(box1.hasClass('active') || box2.hasClass('active') || box3.hasClass('active')) {
      var color = $('.brush.active').css('background-color');
  } else {
    var color = $('.brush').eq(0).css('background-color');
  }

  $(this).css('background-color', color);
}

function resetBoard(e) {
  e.preventDefault();
  $('.square').css('background-color', '#E7E5DB');
}

function resetForm() {
  $('input').val('');
}
