document.addEventListener("DOMContentLoaded", () => {
  let langSelector = document.getElementById("toggle-lang-icon");
  let flags = document.getElementById("flags");
  for (let i = 1; i < 5; i++) {
    let flag = document.createElement("img");
    flag.setAttribute("class", "flag");
    flag.setAttribute("id", `flag${i}`);
    flag.setAttribute(
      "src",
      "https://www.svgrepo.com/show/407213/pirate-flag.svg"
    );
    document.getElementById("flags").appendChild(flag);
  }

  function toggle() {
    if (flags.style.width === "0px") {
      flags.style.width = "200px";
      for (let i = 1; i < 5; i++) {
        document.getElementById(`flag${i}`).style.width = "35px";
      }
    } else {
      flags.style.width = "0px";
      for (let i = 1; i < 5; i++) {
        document.getElementById(`flag${i}`).style.width = "0px";
      }
    }
  }

  langSelector.addEventListener("click", toggle);
});
