document.addEventListener("DOMContentLoaded", function () {
   const carousels = document.querySelectorAll(".carousel");

   carousels.forEach(carousel => {
      let images = carousel.querySelectorAll("img");
      let index = 0;

      images[index].classList.add("active");

      setInterval(() => {
         images[index].classList.remove("active");
         index = (index + 1) % images.length;
         images[index].classList.add("active");
      }, 3000); // Change every 3 seconds
   });
});
