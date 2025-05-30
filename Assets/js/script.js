document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});


// product Page 

// about1
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay-circle");

    // Simple animation effect on hover
    document.querySelector(".image-container").addEventListener("mouseover", () => {
        overlay.style.transform = "scale(1.2)";
    });

    document.querySelector(".image-container").addEventListener("mouseleave", () => {
        overlay.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    let index = 0;

    function moveSlider() {
        index++;
        if (index > 2) {
            index = 0;
        }
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlider, 3000); // Change slide every 3 seconds
});

// loader code 

window.addEventListener("load", function () {
  const loader = document.getElementById("page-loader");
  if(loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  } else {
    console.error("Loader element not found!");
  }
});



