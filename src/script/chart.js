let labels = ['10/2021','11/2021','12/2021','1/2022','2/2022','3/2022','4/2022',]

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Sell by month',
            data: [10, 90, 120, 300, 450, 350, 400],
            fill: false,
            borderColor: 'rgb(242, 240, 19)',
            tension: 0.1
          }]
    },
    options: {
        responsive:true,
    }
});
