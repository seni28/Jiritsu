const chartSelect = document.getElementById("chartType");
let chartType = "bar";

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: ["Lun", "Mar", "Mer", "Je", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "Produit",
        data: [12, 19, 3, 5, 2, 3, 8],
        backgroundColor: ["rgba(122, 130, 171, 0.2)"],
        borderColor: ["rgba(122, 130, 171)"],
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Consommé",
        data: [2, 9, 13, 15, 22, 6, 18],
        backgroundColor: ["rgba(58, 48, 66, 0.2)"],
        borderColor: ["rgba(58, 48, 66)"],
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

chartSelect.addEventListener("change", (e) => {
  myChart.config.type = e.target.value;
  myChart.update();
  console.log(myChart);
});

let intervalsContainer = document.querySelector(".interval");
let intervals = intervalsContainer.querySelectorAll("span");

function randomint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

intervals.forEach((interval) => {
  interval.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);

    if (e.target.innerHTML === "Journée") {
      myChart.data.labels = ["00:00", "01:00", "02:00","03:00","04:00","05:00", "06:00","07:00","08:00", "09:00","10:00", "11:00", "12:00","13:00","14:00","15:00", "16:00","17:00","18:00", "19:00","20:00","21:00", "22:00","23:00"];
      myChart.data.datasets[0].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];
      myChart.data.datasets[1].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];

      myChart.update();
    } else if (e.target.innerHTML === "Semaine") {
      myChart.data.labels = ["Lun", "Mar", "Mer", "Je", "Ven", "Sam", "Dim"];
      myChart.data.datasets[0].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];
      myChart.data.datasets[1].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];
      myChart.update();
    } else if (e.target.innerHTML === "Mois") {
      myChart.data.labels = [
        "Semaine 1",
        "Semaine 2",
        "Semaine 3",
        "Semaine 4",
      ];
      myChart.data.datasets[0].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];
      myChart.data.datasets[1].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];

      myChart.update();
    } else if (e.target.innerHTML === "Année") {
      myChart.data.labels = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      myChart.data.datasets[0].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];
      myChart.data.datasets[1].data = [
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
        randomint(0, 30),
      ];
      myChart.update();
    }
  });
});

const Chart2 = document.getElementById("Chart2").getContext("2d");
const myChart1 = new Chart(Chart2, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Ap",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Eau",
        data: [2, 10, 5, 2, 20, 30, 45, 34, 28, 44, 21, 10, 2],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Elect",
        backgroundColor: ["rgb(144, 08, 132)"],
        borderColor: "rgb(144, 08, 132)",
        data: [12, 20, 4, 3, 10, 30, 40, 4, 18, 49, 21, 10, 2],
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// const ElectChar = document.getElementById('ElectChar').getContext('2d');
// const myChart2 = new Chart(ElectChar, {
//   type: 'line',
//   data: {
//       labels: ['Jan',
//           'Feb',
//           'Mar',
//           'Ap',
//           'May',
//           'June',
//           'July',
//           'Aug',
//           'Sept',
//           'Oct',
//           'Nov',
//           'Dec',
//       ],
//       datasets: [{
//           label: 'Eau',
//           data: [2, 10, 5, 2, 20, 30, 45, 34, 28, 44, 21, 10, 2],
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',

//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',

//           ],
//           borderWidth: 1
//       },
//       {
//         label: 'Elect',
//             backgroundColor: ['rgb(144, 08, 132)'],
//             borderColor: 'rgb(144, 08, 132)',
//             data: [12, 20, 4, 3, 10, 30, 40, 4, 18, 49, 21, 10, 2 ],
//       }]
//   },

//   options: {
//       scales: {
//           y: {
//               beginAtZero: true
//           }
//       }
//   }
// });

// // const labels = [
// //     'Jan',
// //     'Feb',
// //     'Mar',
// //     'Ap',
// //     'May',
// //     'June',
// //     'July',
// //     'Aug',
// //     'Sept',
// //     'Oct',
// //     'Nov',
// //     'Dec',

// //   ];

// //   const data = {
// //     labels: labels,
// //     datasets: [{
// //       label: 'Eau',
// //       backgroundColor: ['rgb(255, 99, 132)'],
// //       borderColor: 'rgb(255, 99, 132)',
// //       data: [2, 10, 5, 2, 20, 30, 45, 34, 28, 44, 21, 10, 2 ],

// //     },
// //     {
// //         label: 'Elect',
// //         backgroundColor: ['rgb(144, 08, 132)'],
// //         borderColor: 'rgb(144, 08, 132)',
// //         data: [12, 20, 4, 3, 10, 30, 40, 4, 18, 49, 21, 10, 2 ],

// //       }
// // ]
// // };

// // const config = {
// // type: 'line',
// // data: data,
// // options: {}
// // };

// // const myChart = new Chart(
// //     document.getElementById('myChart'),
// //     config
// //   );
