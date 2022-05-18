
const homec = document.getElementById("homechart").getContext("2d");
const homechart = new Chart(homec, {
  type: "bar",

  data: {
        labels: ["Lun", "Mar", "Mer", "Je", "Ven", "Sam", "Dim"],
        datasets: [
        {
            label: "Eau (L)",
            data: [12, 19, 3, 5, 2, 3, 8],
            backgroundColor: ["rgba(122, 130, 171, 0.2)"],
            borderColor: ["rgba(122, 130, 171)"],
            borderWidth: 2,
            tension: 0.4,
        },
        {
            label: "Electricité (kWh)",
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