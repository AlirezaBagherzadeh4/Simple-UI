function showModal() {
  const modal = document.getElementById("modal");
  const button = document.getElementById("theBtn");
  const close = document.getElementById("close");
  button.style.zIndex = "-1";
  modal.style.display = "flex";
  modal.style.animation = "popup 0.5s";
  modal.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
  close.style.visibility = "visible";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const button = document.getElementById("theBtn");
  const close = document.getElementById("close");
  button.style.zIndex = "1";
  modal.style.display = "none";
  modal.style.backgroundColor = "";
  close.style.visibility = "hidden";
}
