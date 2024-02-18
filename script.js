document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container");
    const images = [
        { src: "images/city1.png", category: "city" },
        { src: "images/city2.png", category: "city" },
        { src: "images/animal1.png", category: "animals" },
        { src: "images/animal2.png", category: "animals" },
        { src: "images/nature1.png", category: "nature" },
        { src: "images/nature2.png", category: "nature" },
    ];

    loadImages(images);

    function loadImages(images) {
        galleryContainer.innerHTML = "";

        images.forEach((image) => {
            const imgElement = document.createElement("img");
            imgElement.src = image.src;
            imgElement.alt = image.category;
            imgElement.classList.add("filter", image.category);

            galleryContainer.appendChild(imgElement);
        });
    }

    function filterSelection(category) {
        const images = document.querySelectorAll('.gallery img');

        images.forEach((image) => {
            const imageCategories = image.classList;

            if (category === 'all' || imageCategories.contains(category)) {
                image.style.display = '';
            } else {
                image.style.display = 'none';
            }
        });
    }

    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const category = this.textContent.toLowerCase();
            filterSelection(category);
        });
    });
});

