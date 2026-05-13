// FIREBASE CONFIG

const firebaseConfig = {

    apiKey: "AIzaSyD8l0Y_DyC8qOfR13DQvWLRDFjTaowqGPY",

    authDomain: "aquamonitor-387e6.firebaseapp.com",

    databaseURL: "https://aquamonitor-387e6-default-rtdb.firebaseio.com",

    projectId: "aquamonitor-387e6",

    storageBucket: "aquamonitor-387e6.appspot.com",

    messagingSenderId: "891933637500",

    appId: "1:891933637500:web:ecfa3facb77548317882f9"
};


// INITIALIZE FIREBASE

firebase.initializeApp(firebaseConfig);

const database = firebase.database();




// GET LIVE VALUES FROM FIREBASE

database.ref("/").on("value", (snapshot) => {

    const data = snapshot.val();


    if (data) {

        let waterLevel = data.waterLevel;

        let phValue = data.phValue;

        let turbidity = data.turbidity;

        let flowRate = data.flowRate;



        // UPDATE DASHBOARD CARDS

        document.getElementById("waterLevel").innerText =
            waterLevel + "%";

        document.getElementById("phValue").innerText =
            phValue;

        document.getElementById("turbidity").innerText =
            turbidity + " NTU";

        document.getElementById("flowRate").innerText =
            flowRate + " L/s";



        // ALERT SYSTEM

        let statusMessage = "";


        if (phValue < 6.5) {

            statusMessage = "⚠ Water is acidic";
        }

        else if (phValue > 8.5) {

            statusMessage = "⚠ Water is alkaline";
        }

        else if (turbidity > 30) {

            statusMessage = "⚠ High turbidity detected";
        }

        else if (waterLevel < 25) {

            statusMessage = "⚠ Low water level";
        }

        else if (flowRate < 2) {

            statusMessage = "⚠ Low flow rate";
        }

        else {

            statusMessage = "✅ All systems normal";
        }


        document.getElementById("systemStatus").innerText =
            statusMessage;
    }
});




// CHART

const ctx = document.getElementById('waterChart');


new Chart(ctx, {

    type: 'line',

    data: {

        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        datasets: [{

            label: 'Water Quality Index',

            data: [82, 78, 74, 69, 85, 90],

            borderColor: '#38bdf8',

            backgroundColor: 'rgba(56,189,248,0.2)',

            fill: true,

            tension: 0.4,

            borderWidth: 3
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false
    }
});




// SIDEBAR SWITCHING

function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {

        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}