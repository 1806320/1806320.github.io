var LineLabels = ['Jnanuary', 'February', 'March', 'April', 'May', 'June'];

var LineData = {
    labels: LineLabels,
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(130, 100, 130)',
        backgroundColor: 'rgb(255, 60, 70)',
        LineData: [0, 10, 15, 3, 20, 60, 10]

    }]
};


var LineConfig = {
    type: 'line',
    data: LineData,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    LineConfig,
);

// 円グラフ

const PieData = {
    PieLabels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const PieConfig = {
    type: 'pie',
    data: PieData,
};

var PieChart = new Chart(
    document.getElementById('PieChart'),
    PieConfig,
);