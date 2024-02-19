
document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxContent = document.querySelector(".lightbox-content");
    const closeBtn = document.querySelector(".close-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let swiped = false;

    function showImage(index) {
        lightboxContent.src = thumbnails[index].src;
        currentIndex = index;
        document.body.classList.add("lightbox-open"); 
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            showImage(index);
            lightbox.style.display = "flex";
        });
    });

    function closeLightbox() {
        lightbox.style.display = "none";
        document.body.classList.remove("lightbox-open"); 
        swiped = false; 
    }

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function navigate(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = thumbnails.length - 1;
        } else if (currentIndex >= thumbnails.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    prevBtn.addEventListener("click", () => {
        navigate(-1);
    });

    nextBtn.addEventListener("click", () => {
        navigate(1);
    });

    lightbox.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        swiped = false; 
    });

    lightbox.addEventListener("touchmove", (e) => {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;

        if (!swiped) {
            if (Math.abs(deltaX) > 70 && Math.abs(deltaX) > Math.abs(deltaY)) {
                
                if (deltaX > 0) {
                    
                    navigate(-1);
                } else {
                    
                    navigate(1);
                }
                swiped = true; 
            } else if (Math.abs(deltaY) > 70 && Math.abs(deltaY) > Math.abs(deltaX)) {
                
                closeLightbox();
                swiped = true; 
            }
        }
    });

    lightbox.addEventListener("touchend", () => {
        swiped = false; 
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        } else if (e.key === "ArrowLeft") {
            navigate(-1);
        } else if (e.key === "ArrowRight") {
            navigate(1);
        }
    });

    
    
});







