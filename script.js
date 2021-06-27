$(document).ready(function () {
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}
		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass('show');
		} else {
			$('.scroll-up-btn').removeClass('show');
		}
	});

	// slide-up script
	$('.scroll-up-btn').click(function () {
		$('html').animate({ scrollTop: 0 });
		// removing smooth scroll on slide-up button click
		$('html').css('scrollBehavior', 'auto');
	});

	// toogle menu/navbar script
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
	});

	// typing text animation script
	var typed = new Typed('.typing', {
		strings: ['Web-Developer', 'Designer', 'Coder', 'Freelancer', 'Learner'],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	// // typing text animation script
	// var typed = new Typed(".typing-2", {
	//     strings: ["Web-Developer", "Blogger", "Designer", "Learner"],
	//     typeSpeed: 100,
	//     backSpeed: 60,
	//     loop: true
	// });
});

// stop redirection of contact form

window.addEventListener('DOMContentLoaded', function () {
	// get the form elements defined in your form HTML above

	var form = document.getElementById('my-form');
	var status = document.getElementById('status');

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		status.classList.add('success');
		status.innerHTML = 'Message Sent Succesfully!';
	}

	function error() {
		status.classList.add('error');
		status.innerHTML = 'Oops! There was a problem.';
	}

	// handle the form submission event

	form.addEventListener('submit', function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}
