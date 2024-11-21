$(document).ready(function(){

	if ( document.cookie.indexOf('visited=true') == -1 ) {
	  var oneday = 1000 * 60 * 60 * 24 * 1;
	  var expires = new Date( (new Date()).valueOf() +  oneday );
	  document.cookie = "visited=true;expires=" +  expires.toUTCString();

	  $('#hero').css({
			'visibility': 'visible',
			'opacity': '1'
		})
	}

	$('#hero').on('click', function(){
		$( this ).css({
			'visibility': 'hidden',
			'opacity': '0'
		})
	})
});

setTimeout(function(){
	$('#hero').css({
		'visibility': 'hidden',
		'opacity': '0'
	})
}, 3000);