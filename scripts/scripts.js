document.addEventListener("DOMContentLoaded", () => {
    Chart.defaults.font.family = '-apple-FileSystem, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  //Horizontal Bar Chart
  const Funnel = document.getElementById("funnelChart").getContext("2d");
  new Chart(Funnel, {
    type: "bar",
    data: {
        labels: ["Pending", "Under Review", "Approved", "Rejected"],
        datasets: [{
            label: "Applications",
            data: [42, 48,35,12],
            backgroundColor: "#0d6efd",
            borderRadius: 4
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {display: false }
        },
        scales: {
            x: {
                grid: { display: false },
                beginAtZero: true
            },
            y: {
                grid: { display: false }
            }
        }
    }
  });
  //Radar Chart
  const Radar = document.getElementById('radarChart').getContext('2d');
  new Chart(Radar, {
    type: 'radar',
    data: {
      labels: ['Quizzes', 'Midterm', 'Projects', 'Participation', 'Finals'],
      datasets: [{
        label: 'Class Average',
        data: [88, 74, 92, 95, 70],
        fill: true,
        backgroundColor: 'rgba(25, 135, 84, 0.2)', // Light success color
        borderColor: '#198754',
        pointBackgroundColor: '#198754',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#198754'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(0, 0, 0, 0.08)' },
          grid: { color: 'rgba(0, 0, 0, 0.08)' },
          suggestedMin: 50,
          suggestedMax: 100,
          ticks: { stepSize: 10 }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });

  //Polar Area Chart
  const Polar = document.getElementById('polarChart').getContext('2d');
  new Chart(Polar, {
    type: 'polarArea',
    data: {
      labels: ['8 AM - 10 AM', '10 AM - 12 PM', '12 PM - 2 PM', '2 PM - 4 PM'],
      datasets: [{
        data: [420, 950, 310, 680],
        backgroundColor: [
          'rgba(13, 110, 253, 0.75)',  // Primary
          'rgba(220, 53, 69, 0.75)',   // Danger / Peak Highlight
          'rgba(255, 193, 7, 0.75)',   // Warning
          'rgba(13, 202, 240, 0.75)'   // Info
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 12, padding: 12 }
        }
      },
      scales: {
        r: {
          ticks: { display: false },
          grid: { color: 'rgba(0, 0, 0, 0.05)' }
        }
      }
    }
  });
});