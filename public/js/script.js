let currentImage = null;
const images = document.querySelectorAll('.enlargeimg');

function enlargeImage(img) {
    if (currentImage && currentImage !== img) {
        resetImage(currentImage);
    }
    img.classList.add('enlarged');
    img.style.zIndex = '1';
    currentImage = img;
}

function resetImage(img) {
    img.classList.remove('enlarged');
    img.style.zIndex = '';
    currentImage = null;
}

images.forEach(img => {
    img.addEventListener('click', function() {
        if (img.classList.contains('enlarged')) {
            resetImage(img);
        } else {
            enlargeImage(img);
        }
    });
});


