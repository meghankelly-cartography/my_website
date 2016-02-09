//initialize function called when the script loads
function initialize(){
	debugAjax();
}

    //define a variable to hold the data
    //define data variable globally to be used
    var mydata;

//define function to house jQuery ajax method
function debugAjax(){
	
	//basic jQuery ajax method
	$.ajax("data/Cities.geojson", {
	
		//key value pairs and their associated values
		//what type of data do we want back
		dataType: "json",
		
		//function to be called if the data request works
		//response is argument that will return data from server
		success: function(response){
			
			//setting mydata to the response called from server
			mydata = response;
			
			//check the data
            //console.log executed within the callback, after data is loaded and assigned
            console.log(mydata);
            
            $("#mydiv").append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));

            }
	});
	
	//check the data
    //executed first, before the data is loaded and returns undefined
    console.log(mydata);

};

//call the initialize function when the document has loaded
$(document).ready(initialize);