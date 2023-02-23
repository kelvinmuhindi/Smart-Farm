//JS Code for the Soil Moisture Chart
// Set up chart
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Data',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        distribution: 'series'
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

// Set up web socket connection
var ws = new WebSocket('wss://example.com/socket');
ws.onmessage = function(event) {
  // Parse incoming data
  var data = JSON.parse(event.data);
  
  // Add data to chart
  chart.data.labels.push(new Date());
  chart.data.datasets[0].data.push(data.value);
  
  // Remove old data points
  if (chart.data.labels.length > 10) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }
  
  // Update chart
  chart.update();
};
