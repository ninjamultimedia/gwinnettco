$(window).ready(function(){
  var address = "Gwinnett Justice & Administration Center, Lawrenceville, GA";
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var myOptions = {
        zoom: 15,
        center: results[0].geometry.location,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    }
  });
});
