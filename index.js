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
    function myFunction() {
      document.getElementById("1").classList.toggle("show");
    }
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("1");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
}
