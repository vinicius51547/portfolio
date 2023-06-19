// Animação Background
function animateBackground(bgImage) {
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    bgImage.style.transform = `translateY(-${scrollPosition / 10}px)`;
  });
}

function animateAllBackgrounds() {
  const backgroundBlobs = document.querySelectorAll(".blob");
  backgroundBlobs.forEach((bgImage) => {
    animateBackground(bgImage);
  });

  const backgroundBlobBg = document.querySelectorAll(".blob_bg");
  backgroundBlobBg.forEach((bgImage) => {
    animateBackground(bgImage);
  });
}

window.addEventListener("load", animateAllBackgrounds);
