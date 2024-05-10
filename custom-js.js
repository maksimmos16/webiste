document.addEventListener("DOMContentLoaded", function() {
    var hamburgerImg = document.querySelector(".hamburger-img");
    var dropdownMenu = document.getElementById("dropdownMenu");

    hamburgerImg.addEventListener("click", function() {
        dropdownMenu.classList.toggle("show");
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target) && !hamburgerImg.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });