
//console.log("Temperature is: " + theObject.main.temp);
//console.log("Humidity is: " + theObject.main.humidity);

// this is the user inputted variable for zip code 
//var zipCode = "11211";

$(document).ready(function(){
	// document.getElementById('enterzip').addEventListener('submit', function(e){

	// });

	$('#enterzip').submit(function(e){
		e.preventDefault();
		var zipcode = $('#zip').val();
		getData(zipcode);
	});

	     
});

function getData(zipcode){
	$.ajax({
		url: "https://api.enigma.io/v2/data/12ea3e7408ca2b492726cc6b7f219d62/us.states.ny.sla.active-licenses/search/" + zipcode + "/select/zip,actual_address_of_premises_address1,premises_name,city,license_type_name/",
		dataType: 'json',
		success: function(data) {
			// console.log(data.result[0]);
			//console.log(data.result);

			var output = '';

			for (var i = 0; i < data.result.length; i++ ) {

				if (data.result[i].zip == zipcode && data.result[i].license_type_name == "ON-PREMISES LIQUOR") {
					//var result = $('<p>').text(data.result[i].premises_name);
					//$('#results').append(result);
					// var link = $('<a>');
					// link.attr('href', 'https://www.google.com/#q=' + encodeURIComponent(data.result[i].premises_name + ' ' + data.result[i].zip));
					// link.text(data.result[i].premises_name);

					// $('#results').append(link);

					output += '<a target="_blank" href="https://www.google.com/#q=' + encodeURIComponent(data.result[i].premises_name + ' ' + data.result[i].zip) + '">' + data.result[i].premises_name + '</a><br>';
					output += data.result[i].actual_address_of_premises_address1 + '<br><br>';



					// $('#results').
					console.log(data.result[i].license_type_name.trim());
					console.log(data.result[i].zip);

					console.log(data.result[i].premises_name);
					console.log(data.result[i].actual_address_of_premises_address1);
					console.log(data.result[i].city);
					console.log('data.result[i].city:', data.result[i].city);
		  			console.log('data.result[i].license_type_name:', data.result[i].license_type_name);

		  		}

		  	}

		  	$('#results').html(output);

			//alert("Temperature is: " + data.main.temp );

		},
		error: function() {
			alert("error");
		}
	});   
}