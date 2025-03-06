
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
            }, 3000); // Adjust time as needed
        };

