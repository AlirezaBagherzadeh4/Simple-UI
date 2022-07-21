document.addEventListener("DOMContentLoaded", () => {
  let modal = document.getElementById("modal");
  let button = document.getElementById("theBtn");
  let close = document.getElementById("close");

  function showModal() {
    button.style.zIndex = "-1";
    modal.style.display = "flex";
    modal.style.animation = "popup 0.5s";
    modal.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    close.style.visibility = "visible";
  }

  function closeModal() {
    button.style.zIndex = "1";
    modal.style.display = "none";
    modal.style.backgroundColor = "";
    close.style.visibility = "hidden";
  }

  button.addEventListener("click", showModal);
  close.addEventListener("click", closeModal);
});
