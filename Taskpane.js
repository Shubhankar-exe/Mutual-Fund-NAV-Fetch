document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fetchData").addEventListener("click", fetchData);
});

async function fetchData() {
    try {
        let response = await fetch("https://www.amfiindia.com/spages/NAVAll.txt");
        let text = await response.text();

        document.getElementById("output").innerText = text.substring(0, 500); // Display first 500 chars
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("output").innerText = "Failed to fetch data.";
    }
}
