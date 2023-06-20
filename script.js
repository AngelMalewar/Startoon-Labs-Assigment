function plotGraphs() {
    var inputValue = parseInt(document.getElementById('input-value').value);
    var maxValue = parseInt(document.getElementById('max-value').value);

    if (isNaN(inputValue) || isNaN(maxValue)) {
        alert('Please enter valid numeric values.');
        return;
    }

    if (inputValue > maxValue) {
        alert('Input Value cannot be greater than Max Value.');
        return;
    }

    var percentage = (inputValue / maxValue) * 100;
    var barGraphData = [inputValue, maxValue - inputValue];
    var pieChartData = [inputValue, maxValue - inputValue];
    var fadingBarGraphData = [inputValue, maxValue - inputValue];

    // Bar Graph
    var barGraphCtx = document.getElementById('bar-graph').getContext('2d');
    new Chart(barGraphCtx, {
        type: 'bar',
        data: {
            labels: ['Input Value', 'Remaining'],
            datasets: [{
                label: 'Bar Graph',
                data: barGraphData,
                backgroundColor: ['#007bff', '#f8f9fa']
            }]
        }
    });

    // Pie Chart
    var pieChartCtx = document.getElementById('pie-chart').getContext('2d');
    new Chart(pieChartCtx, {
        type: 'pie',
        data: {
            labels: ['Input Value', 'Remaining'],
            datasets: [{
                label: 'Pie Chart',
                data: pieChartData,
                backgroundColor: ['#007bff', '#f8f9fa']
            }]
        }
    });

    // Fading Bar Graph
    var fadingBarGraphCtx = document.getElementById('fading-bar-graph').getContext('2d');
    new Chart(fadingBarGraphCtx, {
        type: 'bar',
        data: {
            labels: ['Input Value', 'Remaining'],
            datasets: [{
                label: 'Fading Bar Graph',
                data: fadingBarGraphData,
                backgroundColor: [
                    'rgba(0, 123, 255, 1)',
                    'rgba(248, 249, 250, 0.5)'
                ],
                borderColor: [
                    'rgba(0, 123, 255, 1)',
                    'rgba(248, 249, 250, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: maxValue
                }
            }
        }
    });
}
