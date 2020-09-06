document.querySelector(".expandMenu").addEventListener("click", changeWidth);

function changeWidth() {
    document.querySelector(".menubar").style.width = "20%";
    document.querySelector(".dashboard").style.width = "80%";
    document.querySelector(".cls-btn").style.display = "block";

}

document.querySelector(".cls-btn").addEventListener("click", restore);

function restore() {
    document.querySelector(".menubar").style.width = "5%";
    document.querySelector(".dashboard").style.width = "95%";
    document.querySelector(".cls-btn").style.display = "none";

}




var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'

            ],
            borderWidth: 1
        }]
    },


});
var ctx = document.getElementById("chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "purple", "green"],
        datasets: [{
            label: '# of Votes',
            data: [13, 21, 9, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(200, 10, 235, 0.8)',
                'rgba(25, 206, 86, 0.9)',


            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(200, 10, 235, 1)',
                'rgba(25, 206, 86, 1)',


            ],
            borderWidth: 1
        }]
    },


});

//doughnut
var ctxD = document.getElementById("chart-4").getContext('2d');
var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {

        datasets: [{
            data: [300, 50, ],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
        }]
    },
    options: {
        responsive: true
    }
});

var ctx = document.getElementById("chart-2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["1", "2", "3"],
        datasets: [{
            label: '# of Votes',
            data: [29, 21, 25, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(200, 10, 235, 0.8)',
                'rgba(25, 206, 86, 0.9)',


            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(200, 10, 235, 1)',
                'rgba(25, 206, 86, 1)',


            ],
            borderWidth: 1
        }]
    },


});

var ctx = document.getElementById("chart-3").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {

        datasets: [{
            label: '# of Votes',
            data: [13, 21, 9, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(200, 10, 235, 0.8)',
                'rgba(25, 206, 86, 0.9)',


            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(200, 10, 235, 1)',
                'rgba(25, 206, 86, 1)',


            ],
            borderWidth: 1
        }]
    },


});
//line
var ctxL = document.getElementById("chart-1").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", ],
        datasets: [{
            label: "My First dataset",
            data: [1, 9, 3, 5],
            backgroundColor: [
                'rgba(105, 0, 132, .2)',
            ],
            borderColor: [
                'rgba(200, 99, 132, .7)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});