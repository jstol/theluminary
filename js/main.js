$(function() {

	$('.burger').on('click', function(){
		$('ul.menu').toggleClass('open');
		$('html').toggleClass('overflow');
	});


	$('ul.menu li a').on('click', function(){
		$('ul.menu').removeClass('open');
		$('html').toggleClass('overflow');
	});

  // Set the date we're counting down to
	var countDownDate = new Date("May 29, 2020 00:00:00").getTime();

	// Update the count down every 1 second
	setInterval(function() {

	  // Get today's date and time
	  var now = new Date().getTime();

	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
	  + minutes + "m " + seconds + "s ";

	  // If the count down is finished, write some text
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("countdown").innerHTML = "out now";
	  }
	}, 1000);

});
