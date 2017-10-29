/************************************
TESTIMONY TICKER
*****************************************/


var interval; 
function startTicker(){
	$('#testi li:first').slideUp(function(){
		$(this).appendTo($('#testi')).slideDown();
	});
}

function stopTicker(){
	clearInterval(interval);
}

$(document).ready(function(){
	interval = setInterval(startTicker, 3000);
	$('#testi').hover(function(){
		stopTicker();
	}, function(){
		interval = setInterval(startTicker, 3000);
	});
});

	
/************************************
GOOGLE MAP
*****************************************/


      function initMap() {
        var uluru = {lat: 51.507698, lng: -0.124884};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
 










