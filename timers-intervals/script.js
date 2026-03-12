// Progress bar that completes in 5 seconds
let progress = 0;
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const status = document.getElementById("status");

// Update every 50ms for smooth animation (5000ms / 50ms = 100 steps)
const intervalId = setInterval(() => {
  progress += 1;

  progressBar.style.width = progress + "%";
  progressText.textContent = progress + "%";

  // Update status message
  if (progress < 25) {
    status.textContent = "Starting download...";
  } else if (progress < 50) {
    status.textContent = "Downloading files...";
  } else if (progress < 75) {
    status.textContent = "Almost there...";
  } else if (progress < 100) {
    status.textContent = "Finalizing...";
  }

  // Complete at 100%
  if (progress >= 100) {
    clearInterval(intervalId);
    status.textContent = "Download complete!";
    status.style.color = "#4CAF50";
    status.style.fontWeight = "bold";
  }
}, 50); // 50ms * 100 steps = 5000ms (5 seconds)
