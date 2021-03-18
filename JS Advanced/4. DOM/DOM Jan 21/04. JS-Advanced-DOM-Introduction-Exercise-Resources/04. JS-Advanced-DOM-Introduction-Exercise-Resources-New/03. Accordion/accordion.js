function toggle() {
  const button = document.getElementsByClassName("button")[0];
  //   console.log(button.textContent);

  const element = document.getElementById("extra");
  //   console.log(element);

  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }

  if (button.textContent === "More") {
    button.textContent = "Less";
  } else {
    button.textContent = "More";
  }
}
