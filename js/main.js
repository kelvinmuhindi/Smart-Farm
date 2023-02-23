 // JavaScript to update sensor data and toggle water pump -->
// Function to update sensor data
function updateSensorData() {
	// Get sensor data from API
	fetch("https://api.smartfarm.com/sensors")
	.then(response => response.json())
	.then(data => {
		// Update temperature and humidity values
		document.getElementById("temperature").innerHTML = data.temperature;
		document.getElementById("humidity").innerHTML = data.humidity;

		// Update soil moisture value
		document.getElementById("soilmoisture").innerHTML = data.soil_moisture;
	});
}

// Update sensor data every 5 seconds
setInterval(updateSensorData, 5000);


// Retrieve the water level element
const waterLevel = document.getElementById('water-level');

// Function to update the water level element
function updateWaterLevel(level) {
  // Set the height of the water level element based on the sensor reading
  waterLevel.style.height = level + '%';
}

// Example usage
const sensorReading = 75; // Replace this with the actual sensor reading
updateWaterLevel(sensorReading);



//JS code for the clock
function updateTime() {
// Create a new Date object to get the current time
	var currentTime = new Date();
	// Get the hours, minutes, and seconds from the current time
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	// Add a leading zero to minutes and seconds if they are less than 10
	minutes = (minutes < 10 ? "0" : "") + minutes;
	seconds = (seconds < 10 ? "0" : "") + seconds;
	// Determine whether it is AM or PM
	var ampm = (hours < 12 ? "AM" : "PM");
	// Convert the hours to 12-hour format
	hours = (hours > 12 ? hours - 12 : hours);
	// Add a leading zero to hours if it is less than 10
	hours = (hours < 10 ? "0" : "") + hours;
	// Format the time as a string
	var currentTimeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
	// Update the time in the HTML document
	document.getElementById("clock").innerHTML = currentTimeString;
}

// Call the updateTime() function every second to update the clock
setInterval(updateTime, 1000);