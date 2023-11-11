document.addEventListener("DOMContentLoaded", () => {
  const setaCima = document.getElementById('seta-cima');
  const setaBaixo = document.getElementById('seta-baixo');

  setaCima.style.display = 'none';

  setaBaixo.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });

  setaCima.addEventListener('click', () => {
    const bannerSection = document.querySelector('header');
    bannerSection.scrollIntoView({
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    const img4Section = document.getElementById('img4');
    const distanciaTopo = img4Section.offsetTop - window.innerHeight;

    if (window.scrollY > distanciaTopo) {
      setaBaixo.style.display = 'none';
      setaCima.style.display = 'block';
    } else {
      setaBaixo.style.display = 'block';
      setaCima.style.display = 'none';
    }
  });
});

let currentImageIndex = 1;
    const totalImages = 5; // Update to the total number of images

    function showImage(index) {
        for (let i = 1; i <= totalImages; i++) {
            document.getElementById('carouselImage' + i).style.display = 'none';
        }
        document.getElementById('carouselImage' + index).style.display = 'block';
    }

    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 1) {
            currentImageIndex = totalImages;
        }
        showImage(currentImageIndex);
    }

    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex > totalImages) {
            currentImageIndex = 1;
        }
        showImage(currentImageIndex);
    }

    document.getElementById('prevButton').addEventListener('click', function(event) {
        event.preventDefault();
        prevImage();
    });

    document.getElementById('nextButton').addEventListener('click', function(event) {
        event.preventDefault();
        nextImage();
    });

    // Change automatically every 5 seconds
    const intervalId = setInterval(function() {
        nextImage();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Stop automatic change on button click
    document.getElementById('prevButton').addEventListener('click', function() {
        clearInterval(intervalId);
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        clearInterval(intervalId);
    });
