const startDate = new Date("2025-12-22T00:00:00");

function updateLoveTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs 💞`;

  //milestones
  let milestoneText = "";

  if (days < 30) {
    milestoneText = "Our love story just began...";
  } else if (days < 90) {
    milestoneText = "3 months of love <3 ";
  } else if (days < 180) {
    milestoneText = "Half a year together";
  } else if (days < 365) {
    milestoneText = "Almost one year strong";
  } else if (days < 730) {
    milestoneText = "One year of choosing each other";
  } else if (days < 1095) {
    milestoneText = "Two years of memories";
  } else {
    milestoneText = "Forever looks good on us ";
  }

  document.getElementById("milestone").innerHTML = milestoneText;
}

setInterval(updateLoveTimer, 1000);
updateLoveTimer();