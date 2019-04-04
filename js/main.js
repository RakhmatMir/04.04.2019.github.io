// jquery
$(document).ready(function(){
	// owlCarousel
	$(".room-slayd").owlCarousel({
		loop:true,
		dots: false,
		nav:true,
		margin: 1,
		autoplay: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			575:{
				items:1,
			},
			767:{
				items:1,
			},
			992:{
				items:1,
			},
			1280:{
				items:1,
				nav: true
			}
		}
	});
	$(".zabota__inner--info").owlCarousel({
		loop:true,
		autoplay: false,
		dots: true,
		nav: false,
		responsiveClass:true,
		margin: 0,
		responsive:{
			0:{
				items:1,
			},
			320:{
				items:1,
			},
			576:{
				items:2,
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			},
			1281:{
				items:6,
			}
		}
	});
	$(".gast__inner--body").owlCarousel({
		loop:true,
		dots: false,
		autoplay: false,
		nav: true,
		responsiveClass:true,
		margin: 0,
		responsive:{
			0:{
				items:1,
			},
			575:{
				items:1,
			},
			767:{
				items:1,
				nav: true,
			},
			991:{
				items:1,
				nav: true,
			},
			1281:{
				items:2,
				nav: true,
			}
		}
	});
	$(".slasyds-first").owlCarousel({
		loop:true,
		dots: true,
		nav:false,
		responsiveClass:true,
		autoplay: false,
		margin: 35,
		responsive:{
			0:{
				items:1,
			},
			575:{
				items:1,
				nav:true
			},
			767:{
				items:2,
				nav:true
			},
			991:{
				items:2,
				nav:true
			},
			1281:{
				items:3,
			}
		}
	});
	$(".slasyds-secondary").owlCarousel({
		loop:true,
		dots: false,
		nav: true,
		autoplay: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				dots: true
			},
			575:{
				items:1,
				nav:true,
				dots: true
			},
			767:{
				items:1,
				nav:true,
				dots: true
			},
			991:{
				items:2,
				nav:true,
				dots: true,
			},
			1281:{
				items:3,
				nav:true
			}
		}
	});
	$(".lookcRoom-lift-block").owlCarousel({
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots: true
			},
			575:{
				items:1,
				dots: true
			},
			767:{
				items:1,
				dots: true
			},
			991:{
				items:1,
				dots: true,
			},
			1281:{
				items:1,
			}
		}
	});
	$(".fergana-lift-block").owlCarousel({
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots: true
			},
			575:{
				items:1,
				dots: true
			},
			767:{
				items:1,
				dots: true
			},
			991:{
				items:1,
				dots: true,
			},
			1281:{
				items:1,
			}
		}
	});
	$(".luookcRoom-right-block").owlCarousel({
		loop:true,
		dots: false,
		nav: true,
		autoplay: true,
		responsiveClass:true,
		margin: 25,
		responsive:{
			0:{
				items:1,
				nav: true
			},
			575:{
				items:2,
				margin: 0
			},
			767:{
				items:3,
			},
			991:{
				items:3,
			},
			1281:{
				items:4,
			}
		}
	});
	// end owlCarousel
	// =========================================
	$(".r-c-form input").styler();
	// media menu
	var sm = window.matchMedia("all and (max-width: 576px");
	if(sm.matches){
		$(".room .room-head").on("click", function() {
			$(this).closest(".room").find(".room-body").stop().slideToggle();
			$(this).closest(".room").siblings().find(".room-body").slideUp();
		});
	};
	var mql = window.matchMedia('all and (max-width: 1281px)');
	if(mql.matches){
		$(".btn").on("click", function(e){
			e.preventDefault();
			$("#receiver").css("margin-left", "0")
			$(".btn-bg").show();
			$(this).hide();
			$(".out img").css('transform', 'rotate(585deg)')
			$(".out img").css('width', '30px')
			$(".out").css('left', '195px')
		})
		$(".out").on("click", function(e){
			e.preventDefault();
			$("#receiver").css("margin-left", "-220px")
			$(".btn-bg").hide()
			$(".btn").delay(200).show("slow")
			$(".out img").css('transform', 'rotate(45deg)')
			$(".out img").css('width', '0')
			$(".out").css('left', '-50px')
		})
		$(".btn-bg").on("click", function(e){
			e.preventDefault();
			$("#receiver").css("margin-left", "-220px")
			$(".out img").css('transform', 'rotate(0deg)')
			$(".out img").css('width', '0')
			$(this).hide()
			$(".btn").delay(200).show("slow")
			$(".out").css('left', '-50px')
		});
		$(".navbar ul li a").on("click", function() {
			$(this).next().slideToggle();
			$(this).toggleClass("img-rotate")
		});
		$(".lookcRoom__inner #receiver, .fergana__inner #receiver").detach().appendTo(".insideHeader__inner--head .navbar");
	};
	$(".navbar > ul > li").find('ul').siblings('a').append('<img src="img/next.svg" alt="Italian Trulli">');
	$(".navbar > ul > li ul > li").find('ul').siblings('a').find('span').html('<img src="img/next.svg" alt="Italian Trulli">');
	
	// end media menu
	// ===============================================
		var tele = document.getElementById('teleporter'),
			rec = document.getElementById('receiver');
			window.onresize = resize;
			resize();
			function resize() {
				const rChildren = rec.children;
				let numW = 0;

				[...rChildren].forEach(item => {
					item.outHTML = '';
					tele.appendChild(item);
				})

				const teleW = tele.offsetWidth,
					tChildren = tele.children;

					[...tChildren].forEach(item => {
						numW += item.offsetWidth;

					if (numW > teleW) {
							item.outHTML = '';
							rec.appendChild(item);
						}
					});
				}
			// $("#more").mouseover(function() {
			// 	$(this).parent().toggleClass("more-after");
			// 	$("#receiver").stop().slideDown();
			// });
			
			
			// $(document).click('on', function (e){
			// 	if (!$('#receiver').is(e.target) // если клик был не по нашему блоку
			// 		&& $('#more').has(e.target).length === 0) { // и не по его дочерним элементам
			// 		$('#receiver').hide(); // скрываем его
			// 	}
			// 	if (!$('#more').is(e.target).length === 0) { // и не по его дочерним элементам
			// 		$('#receiver').hide(); // скрываем его
			// 	}
			// 	// console.log(e);
			// });
			var mqlmin = window.matchMedia('all and (min-width: 1281px)');
				if(mqlmin.matches){
					var div = $("#more");
					var div2 = $(".header__inner--head #receiver");
				$("#more").click('on', function() {
					$(this).closest('li').toggleClass("more-after");
					div2.stop().slideToggle();
				});
				$(document).mouseup(function (e){ // событие клика по веб-документу
				
					// тут указываем ID элемента
					if (!div.is(e.target) // если клик был не по нашему блоку
						&& div.has(e.target) && !div2.is(e.target) // если клик был не по нашему блоку
						&& div2.has(e.target).length === 0) { // и не по его дочерним элементам
					// div.removeClass('opened');
					div2.slideUp(); // скрываем его
					}
				});
				// var link1 = $(".navbar > ul > li");
				// var link2 = $(".navbar > ul > li").find('ul');
				// link1.mouseover(function(e) {
				// 	if(link2){
				// 		$(this).toggleClass('more-after');
				// 	}
				// });
				$('#more').parent().siblings().hover(function(){
					$('#teleporter').next('#receiver').slideUp();
				});
			}
			// $(document).(function (e){ // событие клика по веб-документу	
			// 	var div = $("#more"); // тут указываем ID элемента
			// 	if (!div.is(e.target) // если клик был не по нашему блоку
			// 		&& div.has(e.target).length === 0) { // и не по его дочерним элементам
			// 		$('#receiver').hide(); // скрываем его
			// 	}
			// });
	$(".breadcrubs ul li:last").on("click", function(e) {
		e.preventDefault();
	})
	// gest-modal
	$(".prise").on("click", function(e) {
		e.preventDefault();
		$(".gest-modal").show();
	})
	$(".clouse").on("click", function() {
		$(".gest-modal").hide();
		$(".room-bron").hide();
	});
	$('.gest-bg').on("click", function() {
		$(".gest-modal").hide();
		$(".room-bron").hide();
	})
	$('.datepicker').datepicker();
	$(".nomer").on("click", function() {
		$(".nomer >.info").slideToggle();
	});
	// room-bron
	$(".bronirovat").on("click", function(e) {
		e.preventDefault();
		$(".room-bron").show();
	});
	$('.bot .bot__inner a img').hover(function () {
		var $e = $(this);
		var imgURL = $e.prop('src');
		$.get(imgURL, function (data) {
		  var $svg = $(data).find('svg');
		 $svg.find('.cls-1').css('fill', '#89592f');
		  $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		});
	});
	$('.bot .bot__inner a img').mouseleave(function () {
		var $e = $(this);
		var imgURL = $e.prop('src');
		$.get(imgURL, function (data) {
			var $svg = $(data).find('svg');
			$svg.find('.cls-1').css('fill', '#fff');
			$e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
		});
	});
	$('.up').click(function(){
		$('html, body').animate({scrollTop:0}, 100);
		return true;
	});
	$('a[href="#"]').click(function(e){
		e.preventDefault();
	});
});
// end jquery


// window.onresize = resize;
// resize();

// menu header

// for (i = 0; i < acc.length; i++) {
// 	acc[i].addEventListener("click", function() {
// 	  this.classList.toggle("active");
// 	  var panel = this.nextElementSibling;
// 	  if (panel.style.display === "block") {
// 		panel.style.display = "none";
// 	  } else {
// 		panel.style.display = "block";
// 	  }
// 	});
//   }
