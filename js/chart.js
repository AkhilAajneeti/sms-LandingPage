
  const table = document.getElementById("salaryTable");
  const rows = table.querySelectorAll("tbody tr");

  const years = [];
  const avgSalary = [];
  const highSalary = [];

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");

    years.push(cells[0].innerText);

    avgSalary.push(
      parseFloat(cells[1].innerText.replace("lakhs", "").trim())
    );

    highSalary.push(
      parseFloat(cells[2].innerText.replace("lakhs", "").trim())
    );
  });

  const ctx = document.getElementById("barChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: "Average Salary (Lakhs)",
          data: avgSalary,
          backgroundColor: "rgba(255, 99, 132, 0.45)",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          borderRadius: 20,
          borderSkipped: false
        },
        {
          label: "Highest Salary (Lakhs)",
          data: highSalary,
          backgroundColor: "rgba(54, 162, 235, 0.45)",
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Placement Salary Trend (2011–2025)"
        },
        legend: {
          position: "top"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Salary (Lakhs)"
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
