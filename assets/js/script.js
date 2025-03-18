// this function for user password show and hide 
function togglePassword() {
    let passwordField = document.getElementById("userPassword");
    let toggleIcon = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}


// this code for make chart 
var data = [
  {
    values: [30, 50, 20],
    labels: ["Saving", "Income", "Expense"],
    type: "pie",
    hole: 0.4,
    textfont: { color: "rgb(255, 255, 255)" },
    textinfo: "label"
  }
];

var layout = {
  height: 380,
  width: 480,
  paper_bgcolor: "#4e4ee9",
  plot_bgcolor: "#4e4ee9",
  showlegend: false,  // Hide legend
};

// Disable mode bar (top-right icons)
var config = {
  displayModeBar: false
};

var trace = data[0];

var total = trace.values.reduce(function (a, b) {
  return a + b;
});

trace.text = trace.values.map(function (v) {
  return ((v / total) * 100).toFixed(2) + "%";
});

trace.hoverinfo = "text";

// Apply the config to remove icons
Plotly.newPlot("pieChart", data, layout, config);

// this code for data table 
new DataTable('#example');