let img = document.getElementsByClassName('enlargeimg');

function enlargeImage(img) {
    img.classList.add('enlarged');
    img.style.transform =  'scale(2) translate(-50%, -50%)';
    img.style.transition = 'transform 0.25s  ease';
    img.style.zIndex = '1';
    img.style.position = 'fixed';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transformOrigin = 'top left';
    img.style.width = '300px'; 
    img.style.height = 'auto';
}

function resetImage(img) {
    img.classList.remove('enlarged');
    img.style.transform = '';
    img.style.transition = 'transform 0.25s  ease';
    img.style.zIndex = '';
    img.style.position = '';
    img.style.left = '';
    img.style.top = '';
    img.style.transform = '';
    img.style.transformOrigin = '';
    img.style.width = ''; 
    img.style.height = '';
}

const images = document.querySelectorAll('.enlargeimg');

images.forEach(img => {
        img.addEventListener('click', function() {
            if (img.classList.contains('enlarged')) {
                resetImage(img);
            } else {
                enlargeImage(img);

            }
        })
    })
