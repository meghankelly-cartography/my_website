//initialize function called when the script loads
function initialize(){
	jQueryAjax();
	//debugCallback();
	//debugAjax();
}

    //define a variable to hold the data
    //define data variable globally to be used in all functions
    var mydata;

//define AJAX function
function jQueryAjax(){

    //basic jQuery ajax method
    $.ajax("data/Cities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data
            //executed within the callback, after data is loaded and assigned
            console.log(mydata);
        }
    });

    //check the data
    //executed first, before the data is loaded and returns undefined
    console.log(mydata);
    


//debug portion of assignment
function debugCallback(response){
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){
	
	$.ajax("data/Cities.geojson", {
		dataType: "json",
		success: function(response){
				console.log("This runs");

			debugCallback(mydata);
		}
	});

	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));



};



//call the initialize function when the document has loaded
$(document).ready(initialize);