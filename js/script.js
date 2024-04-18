let img = document.getElementsByClassName('enlargeimg');

function enlargeImage(img) {
    img.style.transform =  'scale(2)';
    img.style.transition = 'transform 0.25s  ease';
    img.style.zIndex = '1';
}

function resetImage(img) {
    img.style.transform = 'scale(1)';
    img.style.transform = 'transform 0.25s ease';
    img.style.zIndex = '0';
}

const images = document.querySelectorAll('.enlargeimg');

images.forEach(img => {
        img.addEventListener('click', function() {
            if (img.style.transform === 'scale(2)') {
                resetImage(img);
            } else {
                enlargeImage(img);

            }
        })
    })
