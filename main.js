function years_f(){
			var sysdate = new Date();
			var year = sysdate.getFullYear();
			var years = year - 2011; 
			return years;
}

function goto(pthis){
			event.preventDefault();
			var jv_val = $(pthis).attr("value"); //alert(jv_val);
				$('html, body').animate({
					scrollTop: $("#"+jv_val).offset().top - 80
				}, 'slow');
}

function dropdwn_jf() {
    document.getElementById("menu-drop-c").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	  matches = event.target.matches ? event.target.matches('.menubtn') : event.target.msMatchesSelector('.menubtn');

		if (!matches) {

			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	
}

	$(document).ready(function(){		
		if(window.location.hash) {
        // smooth scroll to the anchor id			
			$('html, body').animate({
					scrollTop: $(window.location.hash).offset().top - 80
				}, 'slow');
    }

		/*$(".work div").hover(function(){
			$(this).find('h3').show();
			}, function(){
		   $(this).find('h3').hide();
		});*/

		$(".links-circle a, .footer-links a").click(function(){
			if ($(this).attr("title") == "Email")
			{
				 window.location.href = "mailto:rodonnell244@outlook.com";
			} else {
				window.open($(this).attr("link"));
				return false;
			}
		});
		$(".footer-top").click(function(){ 
			$('html, body').animate({ scrollTop: 0 },'slow');
		});
		$("#years").html(years_f());
	});

	function send_email_jf(){
			with (document.email_frm){
					if (name.value == "") {$("#error").html("please enter your name"); return;}
					else if (email.value == "") {$("#error").html("please enter your email address");return;}	
					else if (message.value == "") {$("#error").html("please enter a message");return;}
					else {
						$("#error").html("");
						submit();
					}
			}
	}

/*function popup_box_jf(pthis, plink){ 
var d = $("#modal");
	if (d.is(":hidden")) { 
		d.show(); 
	  $("body").addClass("modal-open");
	//	$(".rpt-popupbox").css({top: $(pthis).offset().top, left: $(pthis).offset().left, position:'absolute'});
		$(".rpt-popupbox-item-containter").load(plink);
	//	$(".rpt-popupbox").draggable();
	}	else {
		d.hide(); 
		$("body").removeClass("modal-open");
	}
}*/











	