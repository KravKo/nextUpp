const images = document.querySelectorAll('.image-fade');

function rotateImages() {
    const activeImage = document.querySelector('.image-fade.active');
    activeImage.classList.remove('active');

    const nextImage = activeImage.nextElementSibling || images[0];
    nextImage.classList.add('active');
}

setInterval(rotateImages, 5000);



const rotateButton = document.getElementById('navbtnid');
let dropdown = document.getElementById('dropdown');
let isRotated = false;

rotateButton.addEventListener('click', function() {
  if (isRotated) {
    rotateButton.classList.remove('rotated');
    dropdown.classList.remove('active');
    isRotated = false;
  } else {
    rotateButton.classList.add('rotated');
    dropdown.classList.add('active');
    isRotated = true;
  }
});