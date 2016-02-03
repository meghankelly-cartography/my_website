//initialize functions called when the script loads
function initialize(){
	cities();
	addColumns(cityPop);
	addEvents();
};

//Style <h1> and <p> tags using jquery and css
//Use the following method format:
//$(selector).css("property", "value);
$("#myTitle").css('font-style',"italic");
$("#myP").css('color',"gray");

//define two arrays for cities and population
var cityPop = [
		{
			city: 'Portland',
			population: 609453,
		},
		{
			city:'Eugene',
			population: 159190,
		},
		{	city: 'Seattle',
			population: 652405,
		},
		{
			city: 'Vancouver',
			population: 603500,
		}
	
	];

//function to create a table with cities and their populations
function cities(){
	
	//append the table element to the div tag in HTML document
	$("#mydiv").append("<table>");
	
	//append a header row to the table
	$("table").append("<tr>");
	
	//Add the "City" and "Population" and "Size" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
	for (var i = 0; i < cityPop.length; i++){
	
		//assign longer html strings to a varaiable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        
        //add the row's html spring to the table
        $("table").append(rowHtml);
	};
};

//Create function that supplies the contents to City Size
//Use cityPop from above as parameter
function addColumns(cityPop){
        
        //apply function to each row in table
        $('tr').each(function(i){

		//set counter
    	if (i == 0){
	
		//add or append City Size to the header of table
    	$(this).append('<th>City Size</th>');
    	} else {
 
			//Create variable to house city size information
    		var citySize;
    		
    		//Conditional if/else statement to test the value of each cityPop
    		//Assign values for city size based on conditions
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};
			//add citySize (small, medium, or large) to the table
    		$(this).append('<tr><td>' + citySize + '</td></tr>');
    	};
    });
};
    

//Function to add mouseover event
function addEvents(){

	//Add mouseover event to table element
	$('table').mouseover(function(){
		
		//Create variable color and assign with string
		var color = "rgb(";

		//Loop through three times to assign three random values to color
		for (var i=0; i<3; i++){

			//write variable random to calculate random numbers
			var random = Math.round(Math.random() * 255);
			
			//concatenate random number to color variable
			color += random;
			
			//concatenate commas on first two iterations
			if (i<2){
				color += ",";
			
			//concatenate a ) on the last iteration
			} else {
				color += ")";
		};
		
		// Test print the color to check to see if concatenation is working
		console.log(color);
		
		//Apply css to the table using "this"
		$(this).css('color', color);
	};

	//Add click event
	function clickme(){
		
		//Event will alert string
		alert('Hey, you clicked me!');
	};
	
	//Apply on click event/method to table using jquery
	$('table').on('click', clickme);
});
}

//call the initialize function when the document has loaded
$(document).ready(initialize);
