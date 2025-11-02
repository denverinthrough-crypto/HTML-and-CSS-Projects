 // LIGHTBOX JAVASCRIPT
    function openLightbox(img) {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightboxImg");
      const lightboxCaption = document.getElementById("lightboxCaption");

      lightbox.style.display = "block";
      lightboxImg.src = img.src;
      lightboxCaption.innerText = img.alt;
    }

    function closeLightbox() {
      document.getElementById("lightbox").style.display = "none";
    }

    // Optional: Close lightbox with ESC key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });