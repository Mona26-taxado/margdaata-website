
function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}

let images = document.querySelectorAll(".slider img");
        let currentIndex = 0;

        function changeImage() {
            images[currentIndex].classList.remove("active");

            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.add("active");
        }

        setInterval(changeImage, 4000); // Image changes every 4 seconds

        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        window.onload = function() {
            setTimeout(function() {
                document.getElementById("preloader").style.display = "none";
            }, 2000); // Adjust time as needed
        };

        // Navbar scroll behavior for desktop
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            const header = document.querySelector('.desktop-header');
            
            if (window.innerWidth > 768) { // Only for desktop
                if (header) {
                    const headerHeight = header.offsetHeight;
                    
                    if (window.scrollY > headerHeight) {
                        // When scrolled past header, move navbar to top
                        navbar.style.top = '0px';
                    } else {
                        // When at top, position navbar below header
                        navbar.style.top = headerHeight + 'px';
                    }
                }
            }
        });

