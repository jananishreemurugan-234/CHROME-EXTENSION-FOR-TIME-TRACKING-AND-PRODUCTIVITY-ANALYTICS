chrome.storage.local.get("webData", (data) => {
    const webData = data.webData || {};

    const productiveSites = ["github.com", "leetcode.com", "stackoverflow.com"];
    const unproductiveSites = ["facebook.com", "twitter.com", "instagram.com", "youtube.com"];

    let productiveTime = 0;
    let unproductiveTime = 0;

    for (const site in webData) {
        if (productiveSites.includes(site)) {
            productiveTime += webData[site];
        } else if (unproductiveSites.includes(site)) {
            unproductiveTime += webData[site];
        }
    }

    document.getElementById("summary").textContent =
        `Productive Time: ${(productiveTime / 60).toFixed(2)} min | ` +
        `Unproductive Time: ${(unproductiveTime / 60).toFixed(2)} min`;

    drawPieChart(webData);
});

function drawPieChart(webData) {
    const canvas = document.getElementById("chart");
    const ctx = canvas.getContext("2d");

    const labels = Object.keys(webData);
    const values = Object.values(webData);

    if (values.length === 0) {
        ctx.font = "20px Arial";
        ctx.fillText("No Data Available", 150, 200);
        return;
    }

    const total = values.reduce((a, b) => a + b, 0);
    const colors = ["#4caf50", "#f44336", "#2196f3", "#ff9800", "#9c27b0"];

    let startAngle = 0;
    values.forEach((val, i) => {
        const sliceAngle = (val / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, 150, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        startAngle += sliceAngle;
    });

    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    labels.forEach((label, i) => {
        ctx.fillText(`${label}: ${(values[i] / 60).toFixed(2)} min`, 10, 20 + i * 20);
    });
}