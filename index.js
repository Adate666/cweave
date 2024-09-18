// Slider automatique pour la galerie
let galleryItems = document.querySelectorAll(".gallery-item");
let currentGalleryIndex = 0;
const interval = 5000; // Durée entre chaque image (en ms)

function showGalleryImage(index) {
  galleryItems.forEach((item, i) => {
    item.classList.add("hidden");
  });
  galleryItems[index].classList.remove("hidden");
}

document.getElementById("gallery-next").addEventListener("click", () => {
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
  showGalleryImage(currentGalleryIndex);
});

document.getElementById("gallery-prev").addEventListener("click", () => {
  currentGalleryIndex =
    (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
  showGalleryImage(currentGalleryIndex);
});

// Slider automatique
setInterval(() => {
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
  showGalleryImage(currentGalleryIndex);
}, interval);

// Initialiser la première image
showGalleryImage(currentGalleryIndex);
