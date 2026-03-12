// Toaster

function createToaster(config) {
  return function (msg) {
    let div = document.getElementById("toast");
    div.className = `fixed text-white px-4 py-2 rounded shadow-lg 
      ${config.positionX} ${config.positionY} ${
      config.type === "success" ? "bg-green-500" : "bg-red-500"
    }`;

    div.textContent = msg;
    div.style.display = "block";

    // Auto-hide after duration
    if (config.duration) {
      setTimeout(() => {
        document.getElementById("toast").remove();
      }, config.duration);
    }
  };
}

let toaster = createToaster({
  positionX: "top-5",
  positionY: "right-5",
  duration: 3000,
  type: "success",
});

toaster("This is a success toast message!");
toaster("This is a failure toast message!");
