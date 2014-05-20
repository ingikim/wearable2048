// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

$(document).ready(function(){
	$('.slider').slick({
	  dots: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	slide: '> div',
  	cssEase: 'linear'
	});
});

