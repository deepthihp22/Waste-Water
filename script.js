// STATIC SENSOR VALUES

const phValue = 5.1;

const turbidity = 82;

const waterLevel = 28;

const flowRate = 2.3;


// UPDATE DASHBOARD CARDS

document.getElementById("phValue").innerText =
phValue;

document.getElementById("turbidity").innerText =
turbidity + " NTU";

document.getElementById("waterLevel").innerText =
waterLevel + "%";

document.getElementById("flowRate").innerText =
flowRate + " L/s";


// ALERT SYSTEM

let statusMessage = "";

if (phValue < 6.5) {

    statusMessage = "⚠ Water is acidic";

}

if (turbidity > 50) {

    statusMessage += " | Highly Turbid Water";
}

if (waterLevel < 30) {

    statusMessage += " | Low Water Level";
}


document.getElementById("systemStatus").innerText =
statusMessage;


// WATER QUALITY MESSAGE

let qualityMessage = "";

if (turbidity > 70 || phValue < 6) {

    qualityMessage = "Poor Water Quality";

} else {

    qualityMessage = "Safe Water";
}


document.getElementById("qualityText").innerText =
qualityMessage;


// GRAPH

const ctx = document.getElementById("waterChart");

new Chart(ctx, {

    type: "line",

    data: {

        labels: [

            "9 AM",

            "10 AM",

            "11 AM",

            "12 PM",

            "1 PM"
        ],

        datasets: [{

            label: "Water Quality Index",

            data: [55, 50, 45, 40, 35],

            borderColor: "red",

            backgroundColor: "rgba(255,0,0,0.2)",

            fill: true,

            tension: 0.4,

            borderWidth: 2
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        scales: {

            y: {

                beginAtZero: true,

                min: 0,

                max: 100
            }
        }
    }
});
