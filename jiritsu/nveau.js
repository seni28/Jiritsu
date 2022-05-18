const nv = document.getElementById("niveau").getContext("2d");
const niveau = new Chart(nv, {
    type: 'doughnut',
    data:{
        labels: [
        'Restant',
        'Consommé'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                'rgb(0, 224, 108, 0.7)',
                'rgb(0, 122, 59, 0.7)'
            ],
            // borderColor:[
            //     'rgb(0, 224, 108)',
            //     'rgb(0, 122, 59)'

            // ],
            hoverOffset: 4
        }]
    },
    
});