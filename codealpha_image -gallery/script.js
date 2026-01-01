const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

/* Lightbox */
function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = images[currentIndex].src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImg() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightboxImg").src = images[currentIndex].src;
}

function prevImg() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightboxImg").src = images[currentIndex].src;
}
