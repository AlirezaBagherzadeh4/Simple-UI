function toggle() {
  const flags = document.getElementById("flags");
  const flag1 = document.getElementById("flag1");
  const flag2 = document.getElementById("flag2");
  const flag3 = document.getElementById("flag3");
  const flag4 = document.getElementById("flag4");

  if (flags.style.width === "0px") {
    flags.style.width = "200px";
    flag1.style.width = "35px";
    flag2.style.width = "35px";
    flag3.style.width = "35px";
    flag4.style.width = "35px";
  } else {
    flags.style.width = "0px";
    flag1.style.width = "0";
    flag2.style.width = "0";
    flag3.style.width = "0";
    flag4.style.width = "0";
  }
}
