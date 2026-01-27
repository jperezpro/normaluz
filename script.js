document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
             if (mobileMenu.classList.contains('hidden') === false) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.onscroll = function() {
        if (window.pageYOffset > 50) {
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.add('py-4');
            header.classList.remove('py-2');
        }
    };

    // Gallery logic
    const galleryItems = [
        { src: 'images/claraboya.png', title: 'Reparación y remasillado total en claraboya' },
        { src: 'images/puertaventana.png', title: 'Puerta ventana' },
        { src: 'images/vidriocondibujo.png', title: 'Vidrio con dibujo para boutique' },
        { src: 'images/puertaventanaexteriorgrande.png', title: 'Puerta ventana exterior grande' },
        { src: 'images/vidriograbadocondibujo.png', title: 'Vidrio grabado con dibujo' },
        { src: 'images/ventana completa con visagra.png', title: 'Ventana completa con visagra' }
    ];

    const galleryGrid = document.getElementById('gallery-grid');

    function displayGalleryItems() {
        galleryGrid.innerHTML = '';
        galleryItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'gallery-item rounded-lg overflow-hidden shadow-lg';
            itemDiv.innerHTML = `
                <img src="${item.src}" alt="${item.title}" class="w-full aspect-3-4">
                <div class="p-4 bg-white">
                    <h4 class="font-bold text-lg">${item.title}</h4>
                </div>
            `;
            galleryGrid.appendChild(itemDiv);
        });
    }

    // Initial display
    displayGalleryItems();
});
