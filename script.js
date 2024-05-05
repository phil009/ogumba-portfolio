let isRotated = false;

// Function to handle window resize
function handleResize() {
  const windowWidth = window.innerWidth;
  const helloButton = document.querySelector(".hello");
  const burgerIcon = document.querySelector(".burger img");

  // If the window width is greater than 767px, ensure the menu is closed
  if (windowWidth > 767) {
    burgerIcon.style.transform = "rotate(0deg)";
    helloButton.style.transform = "translateX(0%)";
    isRotated = false; // Ensure the menu is closed
  } else {
    burgerIcon.style.transform = "rotate(0deg)";
    helloButton.style.transform = "translateX(-150%)";
    isRotated = false; // Ensure the menu is closed
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

// Add event listener for hamburger menu click
document.querySelector(".burger").addEventListener("click", function () {
  const burgerIcon = this.querySelector("img");
  const helloButton = document.querySelector(".hello");

  // Toggle rotation and visibility
  if (isRotated) {
    burgerIcon.style.transform = "rotate(0deg)";
    helloButton.style.transform = "translateX(-150%)";
    burgerIcon.style.transition = "transform 0.5s ease-in-out";
    helloButton.style.transition = "transform 0.5s ease-in-out";
  } else {
    burgerIcon.style.transform = "rotate(90deg)";
    helloButton.style.transform = "translateX(0%)";
    helloButton.style.transition = "transform 0.5s ease-in-out";
    burgerIcon.style.transition = "transform 0.5s ease-in-out";
  }

  isRotated = !isRotated;
});
