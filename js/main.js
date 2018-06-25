var numberOfSquares = 256;
var square = '<div class="gridSquare"></div>';

function makeGrid() {
  for(i = 0; i < numberOfSquares; i++) {
    $('#grid').append(square);
  };
}

function clearGrid() {
	$('.gridSquare').removeClass('gridChange');
}

$(document).ready(function() {

  makeGrid();

  $('.gridSquare').mouseover(function() {
    $(this).addClass('gridChange');
  });
}); // end ready
