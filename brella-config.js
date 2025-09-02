document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("brella-widget");
  if (!container) return;

  const props = {
    joinCode: "bids25",
    widgetType: "schedule-tracks",
    layout: "linear"
  };

  const script = document.createElement("script");
  script.type = "text/props";
  script.textContent = JSON.stringify(props);
  container.appendChild(script);
});
