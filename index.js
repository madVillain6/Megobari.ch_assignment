console.log("bee");

const scrollSlider = (radio) => {
  const slider = document.getElementsByClassName("slider")[0];

  slider.scrollTo({
    top: 0,
    left: parseInt(radio.value) * 315,
    behavior: "smooth",
  });
};
function dropDown() {
  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("1");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
}

const headers = document.getElementsByClassName("accordion-header");
const contents = document.getElementsByClassName("accordion-content");
const icons = document.getElementsByClassName("icon");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
    for (let j = 0; j < contents.length; j++) {
      if (i == j) {
        icons[j].innerHTML =
          contents[j].getBoundingClientRect().height === 0 ? "&and;" : "&or;";
        contents[j].classList.toggle("content-transition");
      } else {
        icons[j].innerHTML = "&or;";
        contents[j].classList.remove("content-transition");
      }
    }
  });
}
