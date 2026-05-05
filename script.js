let chartData = [20, 30, 25, 35, 40, 45];

const ctx = document.getElementById('chart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [{
            label: 'Turbidity',
            data: chartData,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56,189,248,0.2)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }
});


function updateData() {
    let level = (Math.random() * 100).toFixed(1);
    let ph = (6 + Math.random() * 2).toFixed(2);
    let turbidity = (Math.random() * 50).toFixed(1);
    let flow = (Math.random() * 10).toFixed(2);

    document.getElementById("level").innerText = level + " %";
    document.getElementById("ph").innerText = ph;
    document.getElementById("turbidity").innerText = turbidity + " NTU";
    document.getElementById("flow").innerText = flow + " L/s";

    // Chart update
    chartData.push(turbidity);
    chartData.shift();
    myChart.update();

    // Alert system
    let alertText = "All systems normal ✅";

    if (ph > 8) {
        alertText = "⚠️ High pH detected!";
    }

    if (turbidity > 40) {
        alertText = "⚠️ Water is too turbid!";
    }

    document.getElementById("alert").innerText = alertText;
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

setInterval(updateData, 2000);
updateData();
function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active-section"));

    document.getElementById(sectionId).classList.add("active-section");
}